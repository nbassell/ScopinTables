# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all
# Cuisine.destroy_all
# Reservation.destroy_all
# Review.destroy_all

User.create!(email: "demo_user@demo.com", f_name: "Demo", l_name: "User",
             password: "starwars", primary_dining_location: "NYC")

Restaurant.create!(name: "Blue Fin", address: "1567 Broadway", city: "New York",
                   state: "NY", zipcode: "10036", phone_number: "2129181400",
                   price: "3", capacity: "150", opening_time: "7:00", closing_time: "00:00",
                   description: "Blue Fin, a modern seafood restaurant located at W New York – Times Square, has reopened after an extensive redesign by Robert McKinley. Known for its oasis-like respite from the buzz of Times Square and top quality seafood and sushi, the new Blue Fin boasts an upscale new look that evokes the feeling of an elegant, nautical getaway. The restaurant will continue to offer fresh, modern seafood and sushi to its devoted clientele of theater-goers, tourists and New York City seafood lovers alike.")

Restaurant.create!(name: "Bobo Restaurant", address: "181 West 10th Street", city: "New York",
                   state: "NY", zipcode: "10014", phone_number: "2129293041",
                   price: "2", capacity: "60", opening_time: "17:00", closing_time: "23:00",
                   description: "Bobo is the elder sibling of Carlos Suarez's Casa Nela group, which includes Village hits, Rosemary's , Rosemary's Pizza and Claudette. The place is easy to miss, as the entrance is downstairs; but walking in off the busy corner at W 10th and 7th Ave, guests are transported to a chic French country home with sizable bar area, parlor level dining room, and gorgeous year-round garden.")

Restaurant.create!(name: "Atlantic Grill Near Lincoln Center", address: "49 West 64th St.", city: "New York",
                   state: "NY", zipcode: "10023", phone_number: "2127874663",
                   price: "3", capacity: "200", opening_time: "11:30", closing_time: "23:00",
                   description: "A local favorite for 20 years, Atlantic Grill has been serving the finest seafood since 1998. Located near Lincoln Center, our fresh sushi, delectable raw bar and inventive dishes make for a standout culinary experience.")
