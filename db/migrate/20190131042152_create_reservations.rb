class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer "user_id", null: false
      t.integer "restaurant_id", null: false
      t.integer "table_size", null: false
      t.datetime "start_datetime", null: false
      t.datetime "end_datetime", null: false   
      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :restaurant_id
    add_index :reservations, :table_size
    add_index :reservations, :start_datetime
    add_index :reservations, :end_datetime
    add_index :reservations, [:user_id, :start_datetime]
    add_index :reservations, [:restaurant_id, :start_datetime, :table_size],
              name: "index_reservations_on_restaurant_and_start_and_table"
    add_index :reservations, [:restaurant_id, :end_datetime, :table_size],
              name: "index_reservations_on_restaurant_and_end_and_table"
  end
end