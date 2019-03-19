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
Reservation.destroy_all
Review.destroy_all

# Demo User
User.create!(email: "demo_user@demo.com", f_name: "Demo", l_name: "User",
             password: "starwars", primary_dining_location: "NYC")

User.create!(email: "david@gmail", f_name: "David", l_name: "Ro",
             password: "starwars", primary_dining_location: "NYC")
User.create!(email: "agron@gmail", f_name: "Agron", l_name: "Velovic",
             password: "starwars", primary_dining_location: "NYC")


# Restaurants
r1 = Restaurant.create(name: "Blue Fin", address: "1567 Broadway", city: "New York",
                   state: "NY", zipcode: "10036", phone_number: "2129181400",
                   price: "3", capacity: "150", opening_time: "07:00", closing_time: "23:30", cuisine: "Seafood",
                   description: "Blue Fin, a modern seafood restaurant located at W New York – TimeTs Square, has reopened after an extensive redesign by 
                   Robert McKinley. Known for its oasis-like respite from the buzz of Times Square and top quality seafood and sushi, the new Blue Fin boasts 
                   an upscale new look that evokes the feeling of an elegant, nautical getaway. The restaurant will continue to offer fresh, modern seafood
                    and sushi to its devoted clientele of theater-goers, tourists and New York City seafood lovers alike.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/BlueFin.jpg')
r1.photo.attach(io: file, filename: 'BlueFin.jpg')
r1.save!


r2 = Restaurant.new(name: "Bobo Restaurant", address: "181 West 10th Street", city: "New York",
                   state: "NY", zipcode: "10014", phone_number: "2129293041",
                   price: "2", capacity: "60", opening_time: "17:00", closing_time: "23:00", cuisine: "French",
                   description: "Bobo is the elder sibling of Carlos Suarez's Casa Nela group, which includes Village hits, Rosemary's , Rosemary's Pizza and Claudette. The place is easy to miss, as the entrance is downstairs; but walking in off the busy corner at W 10th and 7th Ave, guests are transported to a chic French country home with sizable bar area, parlor level dining room, and gorgeous year-round garden.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Bobo.jpg')
r2.photo.attach(io: file, filename: 'Bobo.jpg')
r2.save!

r3 = Restaurant.new(name: "Atlantic Grill Near Lincoln Center", address: "49 West 64th St.", city: "New York",
                   state: "NY", zipcode: "10023", phone_number: "2127874663",
                   price: "3", capacity: "200", opening_time: "11:30", closing_time: "23:00", cuisine: "Seafood",
                   description: "A local favorite for 20 years, Atlantic Grill has been serving the finest seafood since 1998. Located near Lincoln Center, our fresh sushi, delectable raw bar and inventive dishes make for a standout culinary experience.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/AGLC.jpg')
r3.photo.attach(io: file, filename: 'AGLC.jpg')
r3.save!

r4 = Restaurant.new(name: "Morton's The Steakhouse - Midtown Manhattan", address: "551 5th Ave", city: "New York",
                   state: "NY", zipcode: "10017", phone_number: "2127195944",
                   price: "4", capacity: "180", opening_time: "11:30", closing_time: "23:00", cuisine: "Steakhouse",
                   description: "Thank you for choosing Morton's The Steakhouse - New York (Midtown Manhattan). We look forward to serving you. USDA prime-aged beef, succulent seafood, fine wines, chilled cocktails, decadent desserts, crisp white linens and exceptional service...Morton's serves The Best Steak Anywhere. For more than 30 years, Morton's is the steakhouse by which all others are measured. For special events, private dining Boardroom information, worldwide location listing, gift cards and online reservations, visit www.mortons.com. To ensure we can accommodate any special requests, please call the restaurant directly to confirm.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Mortons.jpg')
r4.photo.attach(io: file, filename: 'Mortons.jpg')
r4.save!

r5 = Restaurant.new(name: "Charlie Palmer Steak", address: "47 West 38th Street", city: "New York",
                   state: "NY", zipcode: "10018", phone_number: "2123023838",
                   price: "3", capacity: "150", opening_time: "6:30", closing_time: "23:00", cuisine: "Steakhouse",
                   description: "Charlie Palmer Steak New York at Archer Hotel New York taps into midtown’s vibrant and dynamic energy, serving up bold flavors in big city style. Reflecting celebrated chef Charlie Palmer’s progressive American cooking, the seasonal menus showcase the region’s exceptional resources, primarily from the surrounding Northeast and Mid-Atlantic waterways and farmlands, to represent Manhattan's cultural crossroads and highlight the craft of local distillers, brewers and artisanal winemakers.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Charlie.jpg')
r5.photo.attach(io: file, filename: 'Charlie.jpg')
r5.save!

r6 = Restaurant.new(name: "Reunion", address: "544 Union Ave", city: "Brooklyn",
                   state: "NY", zipcode: "11211", phone_number: "7185993670",
                   price: "2", capacity: "40", opening_time: "07:00", closing_time: "21:30", cuisine: "Israeli",
                   description: "Reunion is a a modern Israeli Cafe in Williamsburg BK")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Reunion.jpg')
r6.photo.attach(io: file, filename: 'Reunion.jpg')
r6.save!

r7 = Restaurant.new(name: "The Smith - Nomad", address: "1150 Broadway", city: "New York",
                   state: "NY", zipcode: "10001", phone_number: "2126854500",
                   price: "2", capacity: "120", opening_time: "11:30", closing_time: "23:30", cuisine: "American",
                   description: "The Smith is a casual American Brasserie with four upbeat locations in New York City: The Smith East Village, The Smith Midtown, The Smith Lincoln Square and The Smith NoMad. Utilizing local products and purveyors, the breakfast, lunch, brunch and dinner menus feature a selection of familiar bistro dishes. Diners at The Smith Midtown can also choose from our hand-picked wine list and full raw seafood bar. The Smith attracts colleagues for a drink after work, business dinners, a quick bite before a movie, late night revelers, families for Sunday brunch and more. Offering private rooms at all locations, guests can stop by for all occasions.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Smith.jpg')
r7.photo.attach(io: file, filename: 'Smith.jpg')
r7.save!

r8 = Restaurant.new(name: "Cafe Un Deux Trois", address: "123 W. 44th St.", city: "New York",
                   state: "NY", zipcode: "10036", phone_number: "2123544397",
                   price: "2", capacity: "70", opening_time: "07:00", closing_time: "23:30", cuisine: "French",
                   description: "Cafe Un Deux Trois has been located in the heart of Times Square since 1977. We opened when the neighborhood was still very rough , and quickly became THE brasserie to stop for dinner and drinks before heading off to Studio 54 and Xenon to dance the night away. We were and still are frequented by American and European theater and film actors, as well as politicians, directors, local New Yorkers and tourists from around the world. You will find many a Broadway cast and crew member hanging out after the show on any given night.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/CafeUn.jpg')
r8.photo.attach(io: file, filename: 'CafeUn.jpg')
r8.save!

r9 = Restaurant.new(name: "Zuma Japanese Restaurant - NY", address: "261 Madison Avenue", city: "New York",
                   state: "NY", zipcode: "10016", phone_number: "2125449862",
                   price: "4", capacity: "80", opening_time: "17:00", closing_time: "23:00", cuisine: "Japanese",
                   description: "Zuma, the brainchild of award winning co-founder and creator, Rainer Becker, brings its internationally acclaimed style of contemporary Japanese cuisine to midtown, New York. Serving dishes designed to share and inspired by the informal dining style of izakaya; the three kitchens present authentic yet alluring options, with bold flavors and simple presentation, highlighting quality ingredients.")

file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Zuma.jpg')
r9.photo.attach(io: file, filename: 'Zuma.jpg')
r9.save!
                   

r10 = Restaurant.new(name: "Becco", address: "355 West 46th Street New York, NY ", city: "New York",
                   state: "NY", zipcode: "10010", phone_number: "2123977597",
                   price: "2", capacity: "40", opening_time: "12:00", closing_time: "22:00", cuisine: "Italian",
                   description: "Lidia Bastianich & her son Joe's Theater District mainstay. Best known for the $24.95 pasta tasting menu & the great selections on the $33 Italian wine list. Loved by locals & out of towners alike, Becco has been serving consistently delicious regional Italian cuisine since 1993. Located on the famed Restaurant Row in NYC's Theatre District, Becco is open for lunch & dinner seven days a week. Enjoy signature dishes, like the Osso Bucco, as well as the bounty of fresh seasonal preparations. The Reserve Wine list has many of Italy's best known producers, as well as some more eclectic wine makers. A knowledgeable staffer will be on hand to help you make a great choice. With 18 years on restaurant row, great food & great service help make Becco the right choice time & time again.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Becco.jpg')
r10.photo.attach(io: file, filename: 'Becco.jpg')
r10.save!

r11 = Restaurant.new(name: "ABC Kitchen", address: "35 East 18th Street", city: "New York",
                   state: "NY", zipcode: "10003", phone_number: "2124755829",
                   price: "3", capacity: "30", opening_time: "17:30", closing_time: "23:00", cuisine: "Contemporary american",
                   description: "ABC Kitchen with Jean-Georges: passionately committed to offering the freshest organic and local ingredients possible.
                   ABC Kitchen presents a changing menu that is locally sourced and globally artistic in a fresh and articulate space.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/ABC.jpg')
r11.photo.attach(io: file, filename: 'ABC.jpg')
r11.save!

r12 = Restaurant.new(name: "Carmine's - 44th Street - NYC", address: "200 West 44th Street", city: "New York",
                   state: "NY", zipcode: "10036", phone_number: "2122213800",
                   price: "2", capacity: "90", opening_time: "11:00", closing_time: "23:30", cuisine: "Italian",
                   description: "Thank you for choosing Carmine's Midtown. We are located in the heart of Times Square on 44th Street between 7th & 8th Avenue. Carmine's is a family style restaurant offering exceptional value to its guests through the many dishes of Southern Italian cuisine. With 'wow-factor' sized portions and making any meal feel like an Italian American wedding feast. Platters of home-style antipasto, pasta, decadent seafood or meat entrees, and of course homemade desserts are all staples at Carmine's, meant for sharing amongst friends and family. When great food and wine are supported by friendly and knowledgeable service, the results are magic - we want every day to feel like a Sunday afternoon at Grandma's!")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Carmines.jpg')
r12.photo.attach(io: file, filename: 'Carmines.jpg')
r12.save!

r13 = Restaurant.new(name: "Tao Downtown", address: "92 Ninth Ave", city: "New York",
                   state: "NY", zipcode: "10011", phone_number: "2128882724",
                   price: "4", capacity: "220", opening_time: "17:00", closing_time: "23:30", cuisine: "Pan-Asian",
                   description: "TAO Downtown was created to offer its guests a sensual trip through the cuisines of Asia. From the moment one enters, they are transported to another world, designed to relax and indulge all of the senses. TAO locations in New York, Las Vegas & Los Angeles are frequented on a regular basis by celebrities, athletes & influencers alike. The Pan-Asian cuisine of TAO Downtown, which is prepared by Executive Chef Yoshi Kojima, is coveted the world over. The décor has been meticulously designed and is accented throughout by imported artifacts from China, Japan and Thailand; all of this under the watchful eye of TAO’s signature 16 foot tall Quan Yin, the Goddess of Compassion.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Tao.jpg')
r13.photo.attach(io: file, filename: 'Tao.jpg')
r13.save!

r14 = Restaurant.new(name: "ilili", address: "236 Fifth Avenue", city: "New York",
                   state: "NY", zipcode: "10001", phone_number: "2126832929",
                   price: "3", capacity: "65", opening_time: "12:00", closing_time: "23:30", cuisine: "Lebanese",
                   description: "Tradition meets sophistication at ilili, New York City's premier contemporary Lebanese restaurant offering inspired Mediterranean cuisine. ilili's menu mixes authentic dishes with modern Mediterranean influences to create a culinary journey for the palate and senses. Complimenting the international cuisine, ilili offers an impressive wine list that includes wines from all over the world and features favorites from Lebanon and the Mediterranean.
                   The restaurant's decor echoes the diverse menu, combining the architectural richness of Old Lebanon with an attitude and style that is unmistakeably New York. A DJ sets the mood with music from around the globe and soft, amber lighting punctuated by candles create a sexy, sophisticated atmosphere in which to enjoy a relaxed meal. The cuisine, decor and ambiance come together to create a new world for your senses to explore, whispering gently in your ear, ilili.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Ilili.jpg')
r14.photo.attach(io: file, filename: 'Ilili.jpg')
r14.save!

r15 = Restaurant.new(name: "Gabriel Kreuther", address: "41 W. 42nd St.", city: "New York",
                   state: "NY", zipcode: "10036", phone_number: "2122575826",
                   price: "4", capacity: "100", opening_time: "12:00", closing_time: "22:30", cuisine: "Contemporary american",
                   description: "Gabriel Kreuther is a Relais & Chateaux and Two Star Michelin restaurant looking out onto beautiful Bryant Park in Midtown Manhattan. We offer a luxurious, upscale Contemporary-French-American & Alsatian-inspired dining experience with a distinct New York Spirit. 
                   Also known for its stunning decor, Gabriel Kreuther looks out onto NYC's vibrant Bryant Park on 42nd street & offers fine-dining in the upscale dining room (reserve here) or casual dining at the bar and lounge (walk-in or call) offering 'some of the absolute best bar food in NYC' (Grub Street).
                   
                   Gabriel Kreuther accepts reservations for the main dining room 42-days in advance & you can also book our In-Kitchen Table offering a fully immersive, special dining experience for up to 8 guests by contacting us at office@gknyc.com. 
                   
                   Gabriel Kreuther has been named one of the top restaurants in the USA by The Daily Meal, Wine Enthusiast, Gayot, Open Table & Business Insider.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Gabriel.jpg')
r15.photo.attach(io: file, filename: 'Gabriel.jpg')
r15.save!


r16 = Restaurant.new(name: "The View Restaurant", address: "1535 Broadway New York, NY ", city: "New York",
                   state: "NY", zipcode: "10036", phone_number: "2127048900",
                   price: "3", capacity: "115", opening_time: "5:30", closing_time: "23:00", cuisine: "Contemporary american",
                   description: "Perched atop the hotel, the View Restaurant & Lounge is New York City's only revolving rooftop restaurant. Enjoy a breathtaking 360 view from the heart of the Times Square Theatre District amid an all-encompassing dining experience. The seasonally changing 'New American Cuisine' features the best products from artisanal producers including top quality steaks, chops and seafood. 3-Course Prix-Fixe Dinner, $89.
                   Please join us for Sunday Mimosa Brunch from 10:00am - 1:00pm, $65 per person, including two mimosas for each adult guest. 
                   
                   Please note: Reservations can only be made for dining in our restaurant; the lounge is first come; first seated. Thank you!
                   
                   Also contact us directly for details on our all-new Broadway Lounge with panoramic Times Square views, Crossroads American Kitchen & Bar, our elegant Concierge Lounge and our 100,000+ square feet of meeting space.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/TheView.jpg')
r16.photo.attach(io: file, filename: 'TheView.jpg')
r16.save!

r17 = Restaurant.new(name: "Avra Madison Estiatorio on 60th", address: "14 East 60th Street", city: "New York",
                   state: "NY", zipcode: "10022", phone_number: "2129370100",
                   price: "4", capacity: "55", opening_time: "11:30", closing_time: "23:00", cuisine: "Mediterranean",
                   description: "In Greek mythology Avra is the Goddess of the breezes and thus Avra Madison aptly named. Our cuisine, gracious service and Greek Estiatorio inspired decor will invoke warm Mediterranean nights cooled by Avra's gentle sea breezes. Sit back, relax and allow us to transport you to the tranquility of the Mediterranean while you feast on charcoal grilled freshly caught whole fish, sip a glass of white wine from Mykonos and enjoy the company of friends and family.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Avra.jpg')
r17.photo.attach(io: file, filename: 'Avra.jpg')
r17.save!

r18 = Restaurant.new(name: "FIG & OLIVE Fifth Avenue", address: "10 East 52nd Street", city: "New York",
                   state: "NY", zipcode: "10021", phone_number: "2123192002",
                   price: "3", capacity: "40", opening_time: "12:00", closing_time: "23:30", cuisine: "Mediterranean",
                   description: "FIG & OLIVE is about passion for the best olive oils, flavors and cuisine from the Riviera & Coastal regions of the South of France, Italy and Spain. It is a full service restaurant featuring lunch, brunch and dinner menus. The exceptional wine list includes over 30 wines offered by the glass or bottle from Italy, France and Spain. 
                   FIG & OLIVE FIFTH AVENUE truly stands out with its elegant and authentic design from the French and Italian Riviera. This space offers numerous possibilities to host a variety of events from 12 to 250 guests. 
                   
                   FIG & OLIVE’s menu philosophy is based on the notion of clean, healthy and sophisticated ingredients and dishes, each prepared or finished with unique olive oil. ")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Fig.jpg')
r18.photo.attach(io: file, filename: 'Fig.jpg')
r18.save!


r19 = Restaurant.new(name: "Pergola", address: "36 West 28th St", city: "New York",
                   state: "NY", zipcode: "10001", phone_number: "2126794842",
                   price: "3", capacity: "75", opening_time: "11:00", closing_time: "23:45", cuisine: "Mediterranean",
                   description: "Pergola is a Mediterranean restaurant and lounge in the heart of New York City's Flower District. Previously a greenhouse occupied since the 1950's, our intention is to stay true to the history of the space using live plant walls and fruit trees. Our lunch and dinner menu feature healthy Mediterranean dishes made from organic grilled and locally sourced ingredients.")
file = EzDownload.open('https://s3.amazonaws.com/scopin-tables-dev-aa/Pergola.jpg')
r19.photo.attach(io: file, filename: 'Pergola.jpg')
r19.save!


# Reviews
Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Blue Fin"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "It was expensive for two people but it was well worth it")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Blue Fin"), overall_rating: "5", food_rating: "4",
                service_rating: "5", ambience_rating: "5", value_rating: "4", recommended: true,
                body: "mixed review, the staff was truly amazing especially our server Amine, he truly is an asset to your restaurant. Every interaction w/ every server & front desk was excellent! They also were excellent on time, as we were between shows, Only complaint, was my chicken was dry as hell, I ate it regardless. The food overall is good, but not great! 

                However I do recommend this place, as my dinner date enjoyed everything!")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Blue Fin"), overall_rating: "3", food_rating: "3",
                service_rating: "4", ambience_rating: "4", value_rating: "3", recommended: true,
                body: "Overpriced and pretty bad value. Basically a tourist oriented dining facility offered in the center of Times Square. There are numerous better values for fine dining that are more resonably priced within two blocks.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Bobo Restaurant"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Excellent food and ambience. The oysters were out of this world! Will definitely come back the next time I’m in NYC.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Bobo Restaurant"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Bobo is uniquely amazing. The food is stunning, especially for the price, and the cocktail menu is one of a kind. I cannot compliment the staff highly enough for their stellar service. You need to dine here.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Bobo Restaurant"), overall_rating: "4", food_rating: "4",
                service_rating: "5", ambience_rating: "4", value_rating: "4", recommended: true,
                body: "We had happy hour downstairs first before going upstairs for dinner. It was WAY too loud downstairs during happy hour. We could barely hear each other. It was fine until they turned the music up and then it got so loud. Upstairs though was so lovely and so cozy. The food was good — nothing extraordinary but it was good. We had the trout almondine and the chicken with a side of fries. We were happy with the restaurant! Just a lovely little place.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Atlantic Grill Near Lincoln Center"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "The perfect location near Lincoln Center. Delicious food - great variety. And a cookie treat for the performance to go!!")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Atlantic Grill Near Lincoln Center"), overall_rating: "4", food_rating: "5",
                service_rating: "3", ambience_rating: "3", value_rating: "4", recommended: true,
                body: "Excellent Food. Very good professional waiter. Rest of staff a little disorganized")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Atlantic Grill Near Lincoln Center"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "We had the most amazing waiter which made the experience so very enjoyable! He took care of our every need with great care! In addition he was friendly added humor. Food was delicious, as usual, and ambiance was very pleasant.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Morton's The Steakhouse - Midtown Manhattan"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Morton’s is always amazing. They go above and beyond. They made the birthday extra special with the birthday cake. 10/10 would recommend Morton’s. It is our go to for special occasions.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Morton's The Steakhouse - Midtown Manhattan"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Flawless, food quality and service were incomparable to anything else in the area.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Morton's The Steakhouse - Midtown Manhattan"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Absolutely love Morton’a and this location in particular - everyone that works here is top notch and the food is always delicious")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Reunion"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Food is fresh, incredibly flavorful, and carefully prepared. It's obvious that the staff cares about the quality and beautiful presentation. The space is casual -- not fancy - but it works for the space. The staff was attentive but didn't rush our table of 4. I've had both brunch and dinner here, and they are both highly recommended.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Reunion"), overall_rating: "4", food_rating: "4",
                service_rating: "4", ambience_rating: "5", value_rating: "4", recommended: true,
                body: "Great food and atmosphere! Already planning for the next time we will go back.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Reunion"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Amazing food and even better service")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "The Smith - Nomad"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Amazing meal, mac n cheese was amazing, steak was amazing! Service was great as well. Will definitely come back next time we visit NYC")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "The Smith - Nomad"), overall_rating: "4", food_rating: "4",
                service_rating: "4", ambience_rating: "4", value_rating: "4", recommended: true,
                body: "Our first time at this location. We enjoyed it very much.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "The Smith - Nomad"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "We went on a Monday holiday for brunch, and the service was great. Not too crowded, so the noise level was fairly low. We got the avocado toast with poached eggs & the French toast - both delicious! Also nice perk: the waiter brings out house sparkling along with still (tap) water.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Cafe Un Deux Trois"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Breakfast was fantastic. Great food. Great ambiance. Would definitely go back again.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Cafe Un Deux Trois"), overall_rating: "4", food_rating: "4",
                service_rating: "5", ambience_rating: "4", value_rating: "4", recommended: true,
                body: "Lovely pre-theater brunch. Terrific service that was quick (waiter knew we had tickets to a matinee) but did not feel rushed. Food was delicious, particularly the onion soup and the profiteroles. A very good option in the Times Square neighborhood.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Cafe Un Deux Trois"), overall_rating: "2", food_rating: "2",
                service_rating: "2", ambience_rating: "4", value_rating: "3", recommended: true,
                body: "Wait staff needs some work with. You know it's not a Meyers restaurant by the lack of positivity and gruffness. Then the food is mediocre at best! But of course none of this matters because the location keeps it open for tourists and locals like me, needing to get to a theater.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Zuma Japanese Restaurant - NY"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Birthday celebration for husband and Daughter. Food and service consistently excellent")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Zuma Japanese Restaurant - NY"), overall_rating: "4", food_rating: "4",
                service_rating: "5", ambience_rating: "4", value_rating: "4", recommended: true,
                body: "Not bad. Not worth the price but was very enjoyable and wonderful time for a date. Food was rather good but was lacking some “umph”. Waiters were nice and friendly.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Zuma Japanese Restaurant - NY"), overall_rating: "3", food_rating: "4",
                service_rating: "1", ambience_rating: "5", value_rating: "3", recommended: true,
                body: "Worst service ever! 

                Drinks always late we set and first round of drinks were served after 2 courses. Same for the 2nd and 3rd round. Then we had a omakase we decided to order an extra spicy tuna roll while waiting for the roll they came with our dessert we had the roll served after the dessert actually were on the table at the same time for a 450 dollars meal you expect a better service. Zuma in Miami London Mayfair and Rome as well Roka in London and Etauru in Hallandale are way way better this is. Poor service actually horrible
                
                ")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Becco"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "We were in NYC for a show and Becco was convenient to the theater. We had been there years ago and it was just as good this time around. Food was excellent. Our waiter was personable and effecient. We enjoyed the whole experience. We also had a drink at the bar following our meal. As with many NYC restaurants the building is small and you tend to sit very close to other people.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Becco"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "In town on vacation with my teenager who loves Italian food. Thought he would enjoy Becco, and of course I was right. Pasta is amazing. Service is great. Highly recommend if in NY, treat yourself to a great dinner and experience.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Becco"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "The Pasta Selection was wonderful! Best Mussels we’ve ever had! Love this place! Service was top notch. Only negative is tight quarters and poor table location right by hallway, kitchen and bathroom.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "ABC Kitchen"), overall_rating: "1", food_rating: "1",
                service_rating: "5", ambience_rating: "3", value_rating: "2", recommended: true,
                body: "The food is mediocre at best. There are simply way more restaurants to choose from in New York City to waste your time at this crappy expensive restaurant. If you’re from the Midwest you will like this place. If you are in New York or LA you’ll hate it. Do not go here.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "ABC Kitchen"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Absolutely lovely place! One of my faves... will definitely return ")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "ABC Kitchen"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Great ambience, great food. Perfect luncheon spot with NY vibe")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Carmine's - 44th Street - NYC"), overall_rating: "4", food_rating: "4",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "The portions were huge and the food was great. Even my picky kids enjoyed the food")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Carmine's - 44th Street - NYC"), overall_rating: "5", food_rating: "4",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Fantastic Italian food and great atmosphere 
                Excellent staff service 
                Would highly recommend")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Carmine's - 44th Street - NYC"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Every time we visit NYC, we come to Carmine’s. It never disappoints. It’s a great gathering place with friends and especially fun when some of the folks have never had a Carmine’s experience!")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Tao Downtown"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "4", value_rating: "5", recommended: true,
                body: "Perfect birthday diner. Everything was great, when we come back to NY we will definitely eat here again!")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Tao Downtown"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Unreal food, service was amazing, great atmosphere!")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Tao Downtown"), overall_rating: "3", food_rating: "2",
                service_rating: "3", ambience_rating: "4", value_rating: "3", recommended: true,
                body: "Honestly for the price you could do better. Food was okay, I've had better. The environment is pretty much what calls the attention. The decor is very nice.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "ilili"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "We had both the whole chicken and the mixed roast. Super well balanced dishes with grilled vegetables and whipped garlic butter sauce. Beautiful wood and mirrored interior enhanced the festive atmosphere. Must try.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "ilili"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Come for sunday brunch. FOr $31 you got a cocktail, coffee, breakfast entree and a side. The shaksouka was amazing, veal bacon and lamb sausage were delicious. Waiter was attentive and friendly and let us hang for 2 hours. Can't wait to try dinner there.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "ilili"), overall_rating: "3", food_rating: "2",
                service_rating: "3", ambience_rating: "2", value_rating: "3", recommended: true,
                body: "Food wasn’t great- expected a lot more!")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Gabriel Kreuther"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Highly recommended! A fabulous fine dining experience.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Gabriel Kreuther"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "A lovely experience. Apart from the fine cuisine, the wine list is both deep and broad and there are bottles to meet all tastes and budgets. Lunch is really a peaceful oasis in the seething mass of Midtown Manhattan.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Gabriel Kreuther"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "This restaurant is highly recommended for a different dining experience that combines delicious servings in an artistic presentation. The staff is professional and attentive. The decor that includes old beams, beautiful framed art and flower arrangements is worth a visit on its own. It's an excellent dining experience.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Charlie Palmer Steak"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Great service")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Charlie Palmer Steak"), overall_rating: "2", food_rating: "2",
                service_rating: "1", ambience_rating: "4", value_rating: "2", recommended: true,
                body: "Wouldn't recommend this restaurant for brunch. At 11:30 am the place was nearly empty, yet the wait staff was too busy talking to each other to take care of customers. I had to get up to ask someone to take my order. Only the hostess was paying attention. If she hadn't noticed I was ready to pay the check, I would still be there. Food was grossly overpriced relative to the portions. Two eggs, a few small pieces of steak and potatoes for $27. $8 latte in a small cup. Maybe I'm the last person to figure out that this is not a good place to have brunch. When I left, there were very few people there. Perhaps dinner is better. But I won't go back.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Charlie Palmer Steak"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Food was outstanding. The staff was very knowledgeable about everything on their menu, especially wine and wine pairings, and even went above and beyond for us while we were celebrating a birthday. 

                One of, if not, the best steakhouses we’ve visited in the United States.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "The View Restaurant"), overall_rating: "4", food_rating: "4",
                service_rating: "5", ambience_rating: "5", value_rating: "4", recommended: true,
                body: "The restaurant, overlooking the city, had impeccable service along with excellent food and was, for the most part, a very nice dining experience. It was expected to be a quiet dinner in an upscale setting. The only drawback was a table of four sitting at the table next to us that was extremely loud and having inappropriate conversations. 
                People at other tables turned their heads to see where the extremely loud and boisterous behavior was coming from. It was just a shame that the night was tainted by the lack of consideration of these adults.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "The View Restaurant"), overall_rating: "5", food_rating: "4",
                service_rating: "5", ambience_rating: "4", value_rating: "5", recommended: true,
                body: "Went here while visiting my son. We had great views even not sitting by the window and our wait staff was pleasant and provided us with good recommendations for entree and dessert. Food was great . Desserts were excellent.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "The View Restaurant"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Love everything about the View.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Avra Madison Estiatorio on 60th"), overall_rating: "3", food_rating: "4",
                service_rating: "3", ambience_rating: "4", value_rating: "4", recommended: true,
                body: "Very nice but I have requested on the reservation, and when I got there, to add a bday candle to the dessert - I was reassured not to worry but they still managed to forget it. After I complained, the waiter was kind enough to send us another dessert and two dessert wine but I was already upset. This is a very expensive restaurant and should pay better attention to customer’s request.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Avra Madison Estiatorio on 60th"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Love it, the food was amazing.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Avra Madison Estiatorio on 60th"), overall_rating: "5", food_rating: "5",
                service_rating: "4", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Excellent dinner. Beautiful atmosphere, great food, good prices except for a lack of reasonably priced bottles of wine.")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "FIG & OLIVE Fifth Avenue"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Birthday celebration")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "FIG & OLIVE Fifth Avenue"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "The mushroom croquettes were outstanding. Piping hot, creamy and full of truffles. The French omelette was perfectly cooked and served with a delicious cheese with truffles and herbs. My husband had the Provençal breakfast. He loved it. Pancetta and chicken sausage with perfectly cooked eggs over easy. The pot de creme was a perfect ending. Delicious with excellent service.")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "FIG & OLIVE Fifth Avenue"), overall_rating: "4", food_rating: "4",
                service_rating: "4", ambience_rating: "4", value_rating: "4", recommended: true,
                body: "Great food, service and ambience!")

Review.create!(user: User.first, restaurant: Restaurant.find_by(name: "Pergola"), overall_rating: "1", food_rating: "1",
                service_rating: "1", ambience_rating: "1", value_rating: "1", recommended: true,
                body: "Rude staff and a very rude host, I came with a reservation with my boyfriend and host sat us somewhere with only one seat. Really? She also just had a nasty attitude.")

Review.create!(user: User.find_by(f_name: "David"), restaurant: Restaurant.find_by(name: "Pergola"), overall_rating: "5", food_rating: "5",
                service_rating: "5", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "Excellent food! Great atmosphere & service. Reservations prevent you from having a long wait to gain entry. Very popular place & I now see why! Everything is just great at Pergola")

Review.create!(user: User.find_by(f_name: "Agron"), restaurant: Restaurant.find_by(name: "Pergola"), overall_rating: "5", food_rating: "5",
                service_rating: "4", ambience_rating: "5", value_rating: "5", recommended: true,
                body: "This place is a great place to hang out w friends and simply have fun people watching if you are dining solo!! The music is energetic & people are lively! Service is as good as it gets w lots of people. Recommend making reservations!")


#Thumbnails