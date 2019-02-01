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
                   price: "3", capacity: "150", opening_time: "07:00", closing_time: "24:00",
                   description: "Blue Fin, a modern seafood restaurant located at W New York – Times Square, has reopened after an extensive redesign by Robert McKinley. Known for its oasis-like respite from the buzz of Times Square and top quality seafood and sushi, the new Blue Fin boasts an upscale new look that evokes the feeling of an elegant, nautical getaway. The restaurant will continue to offer fresh, modern seafood and sushi to its devoted clientele of theater-goers, tourists and New York City seafood lovers alike.")

Restaurant.create!(name: "Bobo Restaurant", address: "181 West 10th Street", city: "New York",
                   state: "NY", zipcode: "10014", phone_number: "2129293041",
                   price: "2", capacity: "60", opening_time: "17:00", closing_time: "23:00",
                   description: "Bobo is the elder sibling of Carlos Suarez's Casa Nela group, which includes Village hits, Rosemary's , Rosemary's Pizza and Claudette. The place is easy to miss, as the entrance is downstairs; but walking in off the busy corner at W 10th and 7th Ave, guests are transported to a chic French country home with sizable bar area, parlor level dining room, and gorgeous year-round garden.")

Restaurant.create!(name: "Atlantic Grill Near Lincoln Center", address: "49 West 64th St.", city: "New York",
                   state: "NY", zipcode: "10023", phone_number: "2127874663",
                   price: "3", capacity: "200", opening_time: "11:30", closing_time: "23:00",
                   description: "A local favorite for 20 years, Atlantic Grill has been serving the finest seafood since 1998. Located near Lincoln Center, our fresh sushi, delectable raw bar and inventive dishes make for a standout culinary experience.")

Restaurant.create!(name: "Morton's The Steakhouse - Midtown Manhattan", address: "551 5th Ave", city: "New York",
                   state: "NY", zipcode: "10017", phone_number: "2127195944",
                   price: "4", capacity: "180", opening_time: "11:30", closing_time: "23:00",
                   description: "Thank you for choosing Morton's The Steakhouse - New York (Midtown Manhattan). We look forward to serving you. USDA prime-aged beef, succulent seafood, fine wines, chilled cocktails, decadent desserts, crisp white linens and exceptional service...Morton's serves The Best Steak Anywhere. For more than 30 years, Morton's is the steakhouse by which all others are measured. For special events, private dining Boardroom information, worldwide location listing, gift cards and online reservations, visit www.mortons.com. To ensure we can accommodate any special requests, please call the restaurant directly to confirm.")

Restaurant.create!(name: "Reunion", address: "544 Union Ave", city: "Brooklyn",
                   state: "NY", zipcode: "11211", phone_number: "7185993670",
                   price: "2", capacity: "40", opening_time: "07:00", closing_time: "21:30",
                   description: "Reunion is a a modern Israeli Cafe in Williamsburg BK")

Restaurant.create!(name: "The Smith - Nomad", address: "1150 Broadway", city: "New York",
                   state: "NY", zipcode: "10001", phone_number: "2126854500",
                   price: "2", capacity: "120", opening_time: "11:30", closing_time: "24:00",
                   description: "The Smith is a casual American Brasserie with four upbeat locations in New York City: The Smith East Village, The Smith Midtown, The Smith Lincoln Square and The Smith NoMad. Utilizing local products and purveyors, the breakfast, lunch, brunch and dinner menus feature a selection of familiar bistro dishes. Diners at The Smith Midtown can also choose from our hand-picked wine list and full raw seafood bar. The Smith attracts colleagues for a drink after work, business dinners, a quick bite before a movie, late night revelers, families for Sunday brunch and more. Offering private rooms at all locations, guests can stop by for all occasions.")

Restaurant.create!(name: "Cafe Un Deux Trois", address: "123 W. 44th St.", city: "New York",
                   state: "NY", zipcode: "10036", phone_number: "2123544397",
                   price: "2", capacity: "70", opening_time: "07:00", closing_time: "24:00",
                   description: "Cafe Un Deux Trois has been located in the heart of Times Square since 1977. We opened when the neighborhood was still very rough , and quickly became THE brasserie to stop for dinner and drinks before heading off to Studio 54 and Xenon to dance the night away. We were and still are frequented by American and European theater and film actors, as well as politicians, directors, local New Yorkers and tourists from around the world. You will find many a Broadway cast and crew member hanging out after the show on any given night.")