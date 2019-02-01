# == Schema Information
#
# Table name: reservations
#
#  id             :bigint(8)        not null, primary key
#  user_id        :integer          not null
#  restaurant_id  :integer          not null
#  table_size     :integer          not null
#  start_datetime :datetime         not null
#  end_datetime   :datetime         not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, :table_size, :start_datetime, :end_datetime,
            presence: true
  validates :table_size, inclusion: { in: 1..20 }
  validate :upcoming_reservation
  # validate :while_restaurant_open
  validate :no_user_overlap

  belongs_to :user
  belongs_to :restaurant

  # before_validation :strip_timezone
  before_validation :include_end_datetime

  def parsed_start_datetime
    start_datetime.strftime("%A, %b %-d at %-l:%M %P")
  end

  def strip_timezone
    start_datetime.change(offset: "+0000")
  end
  
  def upcoming_reservation
    if start_datetime < DateTime.now.change(offset: "+0000")
      errors[:reservation] << "You are not a time traveler"
    end
  end

  def while_restaurant_open
    unless (start_datetime <= (restaurant.closing_time - 1.hour).change(
        day: start_datetime.day, month: start_datetime.month, year: start_datetime.year
      )) && (
        start_datetime >= restaurant.opening_time.change(
          day: start_datetime.day, month: start_datetime.month, year: start_datetime.year
      ))
        errors[:reservation] << "Must be while restaurant is open"
    end
  end

  def include_end_datetime
    self.end_datetime = self.start_datetime + 1.hour
  end

  def no_user_overlap
    start_param = self.start_datetime - 1.hour
    end_param = self.end_datetime + 1.hour

    if Reservation.where("start_datetime > ? AND end_datetime < ?",
      start_param, end_param).where("user_id = ?", user_id).exists?
      errors[:user] << "You have a conflicting reservation"
    end
  end

end
