# == Schema Information
#
# Table name: restaurants
#
#  id            :bigint(8)        not null, primary key
#  name          :string           not null
#  address       :string           not null
#  city          :string           not null
#  state         :string           not null
#  zipcode       :integer          not null
#  phone_number  :string           not null
#  price         :integer          not null
#  capacity      :integer          not null
#  opening_time  :time             not null
#  closing_time  :time             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  description   :text
#  #<ActiveRecord::ConnectionAdapters::PostgreSQL::TableDefinition :text
#

class Restaurant < ApplicationRecord
  validates :name, :address, :city, :state, :zipcode, :phone_number, :price,
            :capacity, :opening_time, :closing_time, presence: true
  validates :phone_number, format: { with: /\d{10}/, message: "must be 10 digits" }
  validates :zipcode, format: { with: /\d{5}/, message: "must be 5 digits" }
  validates :price, inclusion: { in: 1..5 }

  # has_many :cuisines, through: :restaurant_cuisines, source: cuisine


  def self.search(search_term)
    Restaurant.where(
      "name ILIKE :term OR city ILIKE :term OR state ILIKE :term",
      term: "%#{search_term}%"
    )
  end
  
  # def opening_time_before_closing_time
  #   unless opening_time && closing_time && opening_time < closing_time
  #     errors[:opening] << "time must be before closing time."
  # end





end
