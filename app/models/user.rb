# == Schema Information
#
# Table name: users
#
#  id                      :bigint(8)        not null, primary key
#  email                   :string           not null
#  f_name                  :string           not null
#  l_name                  :string           not null
#  password_digest         :string           not null
#  session_token           :string           not null
#  primary_dining_location :string           not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :f_name, :l_name, :email, :primary_dining_location, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token

  has_many :favorited_restaurants,
    through: :favorites,
    source: :restaurants

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
