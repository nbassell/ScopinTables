# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zipcode      :integer          not null
#  phone_number :string           not null
#  price        :integer          not null
#  capacity     :integer          not null
#  opening_time :string           not null
#  closing_time :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  description  :text
#  cuisine      :string
#

class Restaurant < ApplicationRecord
  validates :name, :address, :city, :state, :zipcode, :phone_number, :price,
            :capacity, :opening_time, :closing_time, presence: true
  validates :phone_number, format: { with: /\d{10}/, message: "must be 10 digits" }
  validates :zipcode, format: { with: /\d{5}/, message: "must be 5 digits" }
  validates :price, inclusion: { in: 1..5 }

  has_many :reservations, dependent: :destroy
  has_many :reservees, through: :reservations, source: :user
  
  has_many :reviews, dependent: :destroy
  has_many :reviewers, through: :reviews, source: :user

  has_many :favorites, dependent: :destroy
  has_many :favoritees, through: :favorites, source: :user

  has_one_attached :photo

  def self.pre_search
    Restaurant.select('id, name, cuisine')
  end

  def self.search(search_term)
    Restaurant.where(
      "name ILIKE :term OR city ILIKE :term OR state ILIKE :term OR cuisine ILIKE :term",
      term: "%#{search_term}%"
    )
  end
  
  def opening_time_before_closing_time
    unless opening_time && closing_time && opening_time < closing_time
      errors[:opening] << "time must be before closing time."
    end
  end

  def parsed_phone_number
    num = phone_number
    "(#{num[0..2]}) #{num[3..5]}-#{num[6..9]}"
  end

  # def parsed_time(arg_time)
  #   time = arg_time.to_s[11..18]
  #   first_two = time[0..1]
  #   if first_two.to_i > 12
  #     time = (first_two.to_i - 12).to_s + time[2...-3] + " PM"
  #   elsif first_two.to_i == 12
  #     time = time[0...-3] + " PM"
  #   elsif first_two.to_i < 10
  #     time = time[1...-3] + " AM"
  #   else
  #     time = time[0...-3] + " AM"
  #   end
  #   time
  # end

  def overall_rating
    self.reviews.any? ? self.reviews.average(:overall_rating).round(1) : 0
  end

  def food_rating
    self.reviews.any? ? self.reviews.average(:food_rating).round(1) : 0
  end

  def ambience_rating
    self.reviews.any? ? self.reviews.average(:ambience_rating).round(1) : 0
  end

  def service_rating
    self.reviews.any? ? self.reviews.average(:service_rating).round(1) : 0
  end

  def value_rating
    self.reviews.any? ? self.reviews.average(:value_rating).round(1) : 0
  end



end
