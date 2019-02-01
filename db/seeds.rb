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

Restaurant.create!(name: "Zuma Japanese Restaurant - NY", address: "261 Madison Avenue", city: "New York",
                   state: "NY", zipcode: "10016", phone_number: "2125449862",
                   price: "4", capacity: "80", opening_time: "17:00", closing_time: "23:00",
                   description: "Zuma, the brainchild of award winning co-founder and creator, Rainer Becker, brings its internationally acclaimed style of contemporary Japanese cuisine to midtown, New York. 
                   
                   Serving dishes designed to share and inspired by the informal dining style of izakaya; the three kitchens present authentic yet alluring options, with bold flavors and simple presentation, highlighting quality ingredients. ")

Restaurant.create!(name: "Becco", address: "355 West 46th Street New York, NY ", city: "New York",
                   state: "NY", zipcode: "10010", phone_number: "2123977597",
                   price: "2", capacity: "40", opening_time: "12:00", closing_time: "22:00",
                   description: "Lidia Bastianich & her son Joe's Theater District mainstay. Best known for the $24.95 pasta tasting menu & the great selections on the $33 Italian wine list. Loved by locals & out of towners alike, Becco has been serving consistently delicious regional Italian cuisine since 1993. Located on the famed Restaurant Row in NYC's Theatre District, Becco is open for lunch & dinner seven days a week. Enjoy signature dishes, like the Osso Bucco, as well as the bounty of fresh seasonal preparations. The Reserve Wine list has many of Italy's best known producers, as well as some more eclectic wine makers. A knowledgeable staffer will be on hand to help you make a great choice. With 18 years on restaurant row, great food & great service help make Becco the right choice time & time again.")

Restaurant.create!(name: "ABC Kitchen", address: "35 East 18th Street", city: "New York",
                   state: "NY", zipcode: "10003", phone_number: "2124755829",
                   price: "3", capacity: "30", opening_time: "17:30", closing_time: "23:00",
                   description: "ABC Kitchen with Jean-Georges: passionately committed to offering the freshest organic and local ingredients possible.
                   ABC Kitchen presents a changing menu that is locally sourced and globally artistic in a fresh and articulate space.")

Restaurant.create!(name: "Carmine's - 44th Street - NYC", address: "200 West 44th Street", city: "New York",
                   state: "NY", zipcode: "10036", phone_number: "2122213800",
                   price: "2", capacity: "90", opening_time: "11:00", closing_time: "24:00",
                   description: "Thank you for choosing Carmine's Midtown. We are located in the heart of Times Square on 44th Street between 7th & 8th Avenue. Carmine's is a family style restaurant offering exceptional value to its guests through the many dishes of Southern Italian cuisine. With 'wow-factor' sized portions and making any meal feel like an Italian American wedding feast. Platters of home-style antipasto, pasta, decadent seafood or meat entrees, and of course homemade desserts are all staples at Carmine's, meant for sharing amongst friends and family. When great food and wine are supported by friendly and knowledgeable service, the results are magic - we want every day to feel like a Sunday afternoon at Grandma's!")

Restaurant.create!(name: "Tao Downtown", address: "92 Ninth Ave", city: "New York",
                   state: "NY", zipcode: "10011", phone_number: "2128882724",
                   price: "4", capacity: "220", opening_time: "17:00", closing_time: "24:00",
                   description: "TAO Downtown was created to offer its guests a sensual trip through the cuisines of Asia. From the moment one enters, they are transported to another world, designed to relax and indulge all of the senses. TAO locations in New York, Las Vegas & Los Angeles are frequented on a regular basis by celebrities, athletes & influencers alike. The Pan-Asian cuisine of TAO Downtown, which is prepared by Executive Chef Yoshi Kojima, is coveted the world over. The décor has been meticulously designed and is accented throughout by imported artifacts from China, Japan and Thailand; all of this under the watchful eye of TAO’s signature 16 foot tall Quan Yin, the Goddess of Compassion.")

Restaurant.create!(name: "ilili", address: "236 Fifth Avenue", city: "New York",
                   state: "NY", zipcode: "10001", phone_number: "2126832929",
                   price: "3", capacity: "65", opening_time: "12:00", closing_time: "23:30",
                   description: "Tradition meets sophistication at ilili, New York City's premier contemporary Lebanese restaurant offering inspired Mediterranean cuisine. ilili's menu mixes authentic dishes with modern Mediterranean influences to create a culinary journey for the palate and senses. Complimenting the international cuisine, ilili offers an impressive wine list that includes wines from all over the world and features favorites from Lebanon and the Mediterranean.
                   
                   The restaurant's decor echoes the diverse menu, combining the architectural richness of Old Lebanon with an attitude and style that is unmistakeably New York. A DJ sets the mood with music from around the globe and soft, amber lighting punctuated by candles create a sexy, sophisticated atmosphere in which to enjoy a relaxed meal. The cuisine, decor and ambiance come together to create a new world for your senses to explore, whispering gently in your ear, ilili.")