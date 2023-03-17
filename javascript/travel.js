//travel page editor's pick
var editorpicknews = {
 "news": [
     {
         "title": "#TRAVEL",
         "description": "Suite staycation: Recharge at luxe heritage hotel Amara Sanctuary Resort Sentosa",
         "image": "amara_resort",
         "link": "travel.html#Travel1"
     },
     {
         "title": "#TRAVEL",
         "description": "Pop by virtual summits: signs of good cheer in the tattered travel trade",
         "image": "virtual_summits",
         "link": "travel.html#Travel1"
     },
     {
         "title": "#TRAVEL",
         "description": "Holidays on the horizon: 5 things to do in Brunei from spotting wildlife to exploring waterways",
         "image": "brunei_holiday",
         "link": "travel.html#Travel1"
     },
     {
         "title": "#TRAVEL",
         "description": "Top tips and tricks to combat jet lag",
         "image": "jet_lag",
         "link": "travel.html#Travel1"
     }
 ]}

var src = document.getElementById('editorpick-template').innerHTML;
var compile = Handlebars.compile(src);
var compiledHTML = compile(editorpicknews);
document.getElementById('editorpickaction').innerHTML += compiledHTML;



(function(window, document, $, undefined) {
  'use strict';
    //trending page editor's pick
    var travelnews = {
     "news": [
         {
             "id": 0,
             "title": "#TRAVEL",
             "description": "Recharge at hotel Amara Sanctuary Resort Sentosa",
             "image": "amara_resort",
             "mins": "10mins read",
             "article1":"Amara Sanctuary Resort Sentosa bagged the Architectural Heritage Awards in 2007 for conserving colonial soldiers' quarters and turning them into luxury suites set amid 3.8ha of rainforest and gardens. Seekers of self-care will appreciate the resort's wellness options, including a well-equipped gym run by Aileron Wellness and four pools. Loads of #fitspo (fitness inspiration) photo opportunities abound.Staggered check-ins mean I can register only at 3pm. With four other groups milling around in the lobby, staff are kept busy. It takes a while to get the paperwork done - I feel reassured when I see that the reception staff wear gloves - and arrive at my one-bedroom pool villa via buggy. Unlike the heritage buildings on-site, my villa sports a contemporary design. The 2.32m by 2.27m private pool is flanked by two spacious pavilions - one houses a king-size bed and the other, a living room.",
             "article2":"Settling into the room takes longer than expected because I have to book my breakfast (to be served in the villa) as well as time slots for the facilities. I abandon plans to swim and drive for five minutes to Sentosa Cove for a 6pm dinner to avoid the crowds. Strolling along the boardwalk afterwards transports me to my last holiday in Auckland, when my family dined harbourside and gawked at multi-million-dollar yachts. Palawan Beach is a couple of minutes away by foot - perfect for a morning run or saltwater swim before the picnickers arrive. I am thrilled when an unexpected entourage of four peacocks follows me back from my 7am walk. The rustic DreamPool and the SkyPool, which boasts gorgeous sea views from the rooftop of the hotel's four-storey block, is undisturbed at noon and the gym has only one person in it.",
             "article3":"While the resort is starting to show its age, I treasure its serenity - besides the check-in crowd, I hardly bump into big groups during my stay. Service is efficient, but could be warmer, especially at the reception. A care pack with hand sanitiser and masks would have been a nice touch too. If you can get a good deal, go for the villas or Larkhill Terrace suites - the suites have exclusive access to a lovely 44m-long pool. To truly relax and make use of all the wellness facilities, I recommend booking at least two nights. This hotel is ideal for a romantic escape and families with kids of pre-school age and older too."
         },
         {
             "id": 1,
             "title": "#TRAVEL",
             "description": "Signs of good cheer in the tattered travel trade",
             "image": "virtual_summits",
             "mins": "5mins read",
             "article1":"SINGAPORE - During a virtual travel summit last Wednesday, those logging in from Singapore like me sipped hand-delivered cocktails at home while journeying around the world in six hours. The Web In Travel (Wit) event was a pandemic-forged experiment that united a thousand travel professionals near and far, including Hong Kong, Riyadh and Seattle. The live event, a semblance of its physical versions before Covid-19, involved interviews with travel players such as Accor, Expedia and Klook.",
             "article2":"From different cities, letters or spoken reflections by leading minds about the altered state of travel alluded to the air of sadness and also the joy of discovery that will not be erased from psyches. Guests included Singapore Tourism Board chief executive Keith Tan. Staged by Wit, a platform for online travel based here, the sparkling summit ended with a fun debate and then a dance party with DJ Aldrin. Travel is now rebooting incrementally, and these online festivals are one indication. At the same time, planes are flying domestic routes, hotels are seeing occupancy of 40 per cent in some markets and Trip.com is reporting sales of US$70 million (S$97.3 million) from its live-streamed promotions that were piloted mainly in China.",
             "article3":"Last Monday, Trip.com launched its Travel On drive to reignite tourism in a glitzy virtual event. This involves anything from flexibooking guarantees to hygiene protocols to new live-streamed sales - following a rough season when the Chinese online powerhouse's outbound market was decimated. In the absence of a vaccine and clear quarantine regulations at destinations, vacation-mad people may voice their pent-up wanderlust but hesitate to step out. And if financial anxiety deepens, recovery in the world of travel will not in sight for a long while. And yet, when I popped by the virtual summits and spent time on research last week, it was possible to scan the far horizon for changes and to believe the spirit of travel is irrepressible."
         },
         {
             "id": 2,
             "title": "#TRAVEL",
             "description": "5 things to do and where to explore while in Brunei",
             "image": "brunei_holiday",
             "mins": "8mins read",
             "article1":"Brunei, known for its small size and sleepy reputation, may not be on your travel bucket list. But it is one of two countries, besides New Zealand, that people in Singapore will be allowed to visit for general travel from Tuesday, though its borders remain closed to tourists for now. From eco-tourism to modern and traditional eats, there are hidden gems aplenty in the oil-rich sultanate just two hours from Singapore.",
             "article2":"The capital of Bandar Seri Begawan (BSB) is home to the world's largest floating village, known as Kampong Ayer, where more than 10,000 people live in homes built over the water. Recently refurbished ones have concrete jetties leading to brick-and-mortar homes, while others sport timber-patched walls and missing planks in the boardwalk. And some homes you can spot from afar - bedecked with plants, flowers, pottery and a riot of colours - looking like they have emerged from a children's storybook.For a more immersive experience, spend the night in Kampong Ayer at the Kunyit 7 lodge, a colourful home- turned-guesthouse. It is run by a resident who inherited the property from her grandparents. Kampong Ayer residents get around by water taxis, which are small speed boats that zip through the narrow waterways.",
             "article3":"Head out of the city to Ulu Temburong National Park, a three-hour journey that includes a speedboat, car and longboat ride down the Temburong river. The last leg, a 30- to 45-minute slow cruise, is quite the adventure. When the tide is low, the longboat must navigate cautiously to avoid hitting the rocky riverbed. Make it a day trip if you are pressed for time or spend the night to catch the sunrise in the rainforest. If you opt for the latter, an hour-long pre-dawn trek takes you to the 50m-high canopy walk, a metal scaffolding comprising five towers. Up high, the humidity of the rainforest lifts The breaking of dawn resembles a watercolour painting. Shrouds of mist part to reveal the treetops, while the rising sun turns the sky pink and lilac, and then a blazing orange. It is a wonderful snapshot of a country where time slows and nature is still pristine and untouched."
         },
         {
             "id": 3,
             "title": "#TRAVEL",
             "description": "Top tips and tricks to combat jet lag while travelling",
             "image": "jet_lag",
             "mins": "8mins read",
             "article1":"SINGAPORE - Using earplugs or noise-cancelling headphones and taking naps during flights are the two most common methods used by travellers to help themselves beat jet lag. According to a survey by Qantas airline, 60 per cent of respondents chose to take naps, while 54 per cent opted for earplugs or headphones. The research is part of ongoing studies Qantas airlines is conducting with the University of Sydney's Charles Perkins Centre to identify scientifically backed methods of reducing fatigue.",
             "article2":"Their preliminary findings, released on Friday (Oct 18), involved 463 participants on flights into and out of Australia which had durations of between nine and 17 hours. Another 39 per cent consumed healthy food after alighting, while 38 per cent chose to drink alcohol while on board. Only 47 per cent of travellers made a conscious effort to venture into the sunlight upon their arrival at their destination, suggesting a lack of awareness surrounding strategies to combat jet lag.",
             "article3":"Some strategies that have already been implemented for passengers on Qantas' longest flight- Perth to London, which takes 17 hours and 20 minutes - include light therapy to help passengers adjust to the shift in time zone, outdoor areas in both the Perth Transit Lounge and airport terminal to provide exposure to natural light, and a Wellbeing Studio, also in the lounge, that encourages passengers to stretch."
         },
         {
             "id": 4,
             "title": "#TRAVEL",
             "description": "Raffles Hotel, the Grand Old Dame of Singapore",
             "image": "raffles_hotel",
             "mins": "5mins read",
             "article1":"So many staycays, so little time. What makes this hotel special? This is the grande dame of Singapore that dates back to 1887, where royalty and celebrities have rested their weary heads. But despite its advanced age, there are no issues with creaky floorboards or noisy pipes. In fact, it is arguably one of the newest hotels here, having reopened only last year after an extensive three-year refurbishment. Everything in the all-suites accommodation is spanking new, from the furniture to the high-tech room controls. But an old-world charm remains, both in the colonial architecture and historic artefacts that include a grandfather clock believed to predate the hotel. It still chimes every hour from the lobby.",
             "article2":"Guests are greeted at the entrance by the hotel's iconic Sikh doormen, who are so much a part of the hotel their image is printed on gift shop souvenirs. The suites are designed in a mix of old and new. The switches, for example, come with old-fashioned knobs. Flicking one up sends the curtains rolling up. I love the faux leather trunk in the sitting room, which I imagine was used by rich travellers on ocean liners in the past. It opens into an awesome drinks cabinet you wish you could take home - if not for the fact that a hefty sum will no doubt be slapped onto your room bill.",
             "article3":"Book the guided history tour of the hotel and be regaled with tales of the escaped circus tiger that wandered into the basement of The Bar and Billiard Room (now BBR) and the tradition of Noel Coward's I'll See You Again (1929) being played in the lobby at 8pm daily without fail. You'll also walk down a gallery lined with photos of famous personalities who have visited the hotel, including Queen Elizabeth II and actress Elizabeth Taylor as well as famous authors like Rudyard Kipling, Somerset Maugham, Joseph Conrad and Coward. Among the latest photos is one of the Singapore cast of Crazy Rich Asians (2018). Some scenes were filmed there. The tour is usually over-subscribed but fret not. You can come back for it days or weeks after you check out. Book your stay from Wednesdays to Sundays, because Raffles Spa, Butcher's Block and La Dame de Pic are closed on Mondays and Tuesdays."
         },
         {
             "id": 5,
             "title": "#TRAVEL",
             "description": "Virtual tour: Flower hunting in Kyoto with Mori the forest dog",
             "image": "virtual_tour_mori",
             "mins": "10mins read",
             "article1":"KYOTO - A globetrotter buddy pings me on WhatsApp one Sunday afternoon at 2.50pm. Hey, my friend has a virtual Kyoto flower tour at 3pm, she says. Somebody pulled out last minute. You interested? And so, 10 minutes later, a Zoom link on my iPad teleports me to the gardens of the Kyoto Imperial Palace on a sparkling late-spring day in May - no boarding pass required, or much planning either. On-screen, I notice one companion is sipping matcha, while another dons a floppy hat to get into the spirit of travel. Just in time, I pop a slice of Japanese cheesecake next to me. Our one-hour online escapade is Flower Hunting In Kyoto With Mori The Doggo. With a name like that, I know it will be a niche experience of Kyoto - whimsically unlike the other times I wandered alone in the more touristy, whispery Arashiyama bamboo forest, Gion geisha district and Philosopher's Path, that made me think about my place in the passage of time.",
             "article2":"Our guide is Singaporean Lee Xian Jie, 30, who has lived in Japan for nine years since his Waseda University days in Tokyo. He introduces his pet Mori, a wild dog born in a forest. Mori soon chomps the dandelions dotting the palace's Kyoto Gyoen National Garden. She had worms when she was adopted from a shelter last year at age three, and instinctively knows dandelions quell stomachaches, he reckons. Mori also loves eating the wild orchids sprouting at the palace. She even has her own GoPro camera, so virtual tourists can experience the garden from her (hyper) perspective. Now that the Kyoto city government is trying to get businesses to adapt to the pandemic, Mr Lee applied for its funds to pay for the GoPro camera, a smartphone stabiliser and botanical reference books.",
             "article3":"It is a fun hour with an expressive Kyoto insider and a cool canine. It is so immersive that, for fleeting moments, I wonder if I will get motion sickness from Zooming around. But it is appealing and my Singaporean globetrotter buddy even got her husband to sign up for the same tour later and invite his overseas family, so everyone enjoyed a virtual holiday across continents. Mr Lee has hosted 80-plus flower-hunting participants from April to last month. It will restart in the colourful autumn and the cost will be 1,000 yen (S$13) per person. This is an intimate journey redolent of the trips I miss, so I am now curious about his new online tour: Forest Bathe In Kyoto's Sacred Mountain."
         },
         {
             "id": 6,
             "title": "#TRAVEL",
             "description": "Shangri-La Hotel is a garden retreat in the heart of town",
             "image": "shangri-la_hotel",
             "mins": "3mins read",
             "article1":"SINGAPORE - I step into the cavernous lobby in Shangri-La Hotel with a heavy heart. The once-bustling hotel seems like an enervated, hollowed-out shell. If not for the chirpy welcoming committee of three hotel staff from the front desk, the silence is almost deafening. The delicate scent of fresh roses, the afternoon soak and the quietude of the luxury suite is strangely bracing.",
             "article2":"Shangri-La, which boasts more than 60,000 sq m of landscaped gardens, is home to more than 130,000 plants, flowers and trees from 110 botanical varieties.Guests who book the Garden Wing Staycation and Fun Family Playcation packages get a picnic basket delivered to their rooms on arrival to soak in the sun and sights while dining amid greenery.",
             "article3":"It dawns on me that this is not so much a staycation as a retreat from routine. Surrounded by people from every part of the globe, albeit not in the usual numbers pre-Covid-19, it feels like I have gone on wing'd flight and left Singapore for some far-flung tourist haunt."
         },
         {
             "id": 7,
             "title": "#TRAVEL",
             "description": "Savouring Russia in a countryside summer house",
             "image": "virtual_tour_russia",
             "mins": "8mins read",
             "article1":"MOSCOW - Outside Moscow, in a dacha or countryside summer house, Ms Anna Belousova, 30, shows virtual tourists how to make cottage-cheese pancakes from a family recipe. In dark times, the world craves the simplicity of comfort food, so I sign up for her Cooking Russian Food: Live Virtual Cooking Class. It costs US$50 (S$69.70) for up to four people. Also, I have experienced Russia as an epic yet intimate land thrice, most vividly on a trans-Siberian rail journey, and am hoping to explore the country differently with an Internet connection.",
             "article2":"I invite two foodies: my sister, who has a vegetable patch in her home in Britain, and a Russophile in Singapore. Our host styles her sunlit kitchen corner for maximum Instagram appeal. My eyes linger on a little samovar or decorative tea urn, matryoshka nesting dolls and a blue-and-white porcelain teapot in the Gzhel folk style. She holds up the ingredients - cottage cheese, eggs, flour, sugar and butter. Helpfully, she suggests substitutes to suit our taste, such as rice flour or semolina. Play with a choice of toppings for these breakfast pancakes or syrniki, she says. The Russian style is to use fresh fruit, jam, sour cream and condensed milk, but it can be any topping we fancy.",
             "article3":"Her summer plan to visit Baikal in Siberia has been scuppered, but the intimate session, with like-minded people and our guide's personal insights, is pleasurable. This is her first time peeking into a dacha as it's the sort of experience you can have only if you know a native Russian friend who owns one and the occasion is right for a visit. The joy of virtual travel makes up for the occasionally laggy visuals on our laptops. It is a fleeting hour, but in a follow-up e-mail the same day, Anna sends the recipe and a link to the video recording, our electronic keepsake."
         },
         {
             "id": 8,
             "title": "#TRAVEL",
             "description": "Private infinity jacuzzi, spirit of travel at Fullerton Bay Hotel",
             "image": "fullerton_bay_hotel",
             "mins": "10mins read",
             "article1":"SINGAPORE - I admire the illuminated skyline from my waterfront jacuzzi, where I am taking a near-midnight dip after stepping out of a monogrammed bathrobe at The Fullerton Bay Hotel Singapore. The en-suite jacuzzi on my deck is a little infinity pool under the sky, with the warm bubbly water seeming to overlap Marina Bay. Alone with that illusion, I see Singapore in a new light and am travelling again. In my vacation-deprived mind, the hot tub evokes an outdoor onsen somewhere in Japan, while the skyline carries the mystique of other great global cities like Paris, Shanghai or Rio de Janeiro.",
             "article2":"The location of the 99-room city-resort, a luxurious bubble amid Central Business District skyscrapers and nature, makes it easy to escape elsewhere. In July, TripAdvisor ranked it Singapore's best hotel two years in a row. I want to discover why it is tops during a one-night staycation that begins the languorous Friday before the National Day weekend.Before my early check-in at noon, a 60-minute aromatherapy massage is arranged across the road at sister property The Fullerton Hotel Singapore, which also shares TripAdvisor's best-hotel accolade. Scented and soothed, I slide into a Rolls-Royce Silver Cloud, circa 1961, for the transfer between hotels. The cocooning continues at the hotel. I imagine my Premier Bay View Room is a jewel box that juts into Marina Bay. With two all-glass walls, the sun-lit room seems afloat. The bathroom is stocked with Balmain toiletries and an LCD television is poised at the bathtub, which I have no time to soak in.",
             "article3":"For the best wraparound views, I head to the rooftop pool - after having booked my socially-distanced sunset slot from 6pm to 8 pm in my pre-arrival form - and, at night, the promenade of The Landing Point lounge, where cocktails and bites are served. From the rooftop, the Singapore River and Marina Bay enclaves encircling the hotel come into dreamy view. It is a visual narrative of the Singapore Story that combines the colonial past with futuristic architecture and ambitions. The stylish interiors of the hotel were designed by Hong Kong-born Andre Fu, while rooms were fashioned by his studio, AFSO. His design brief was to pay tribute to a bygone era while tailoring a new, refined, sensuous heritage. Like the places around it, The Fullerton Bay Hotel seems like a rare portal in time where old and new Singapore converge."
         },
         {
             "id": 9,
             "title": "#TRAVEL",
             "description": "Travel lovers climb 'mountains', 'camping' indoors",
             "image": "travel_indoors",
             "mins": "5mins read",
             "article1":"SINGAPORE - Mrs Arundhati Saha had exciting travel plans - a small-group expedition to Kazakhstan and a trekking trip in the Philippines with her elder daughter - both meant to take place in the first quarter of the year. But due to the coronavirus, these have been put on hold indefinitely. Mrs Arundhati decided that if she could not go out to seek adventure, she would recreate it at home. With travel plans scuppered by the coronavirus, active folk everywhere have come up with various ways to satisfy their wanderlust and quell their thirst for adventure. A search for the hashtag #adventureathome on Instagram throws up about 2,400 posts from people camping in their living rooms or building bonfires in their backyard.",
             "article2":"Swedish furniture giant Ikea has also jumped on the bandwagon, last month releasing instructions on how to build six different blanket forts with common furniture items. Dr Shawn Ee, director of The Psychology Practice, says such pretend play is a healthy coping mechanism for both adults and children.",
             "article3":"Meanwhile, Ms Ashley Chu is offering a different sort of escape for those who want to live vicariously through her travels. In April, she published One Million Miles - a follow-up to her first travel book, The 550,000 Miles in 2017. Both self-published titles are compilations of her journal entries as she travelled to 138 countries over the past decade. Her goal is to visit all 197 countries in the world. Ms Chu, who is in her 30s, works as an investor and adviser to start-ups and investment funds in Singapore and Silicon Valley and splits her time between both locations. While sheltering in place in San Francisco for the past three months due to the coronavirus, she decided to bring forward her book launch by two months so more people could read it."
         },
         {
             "id": 10,
             "title": "#TRAVEL",
             "description": "True luxury at the five-star Capitol Kempinski",
             "image": "capitol_kempinski",
             "mins": "5mins read",
             "article1":"SINGAPORE - Lately, life for me has been in extremes. I went from being holed up at home for months - deathly kiasi - straight to a luxury staycation at The Capitol Kempinski Hotel Singapore on a media stay. The five-star property comprises two former landmarks - Capitol Building and Stamford House, melded seamlessly in a colonial-meets-Art Deco design. The late Indonesian designer Jaya Ibrahim led its interior design. It was to open as a six-star hotel called The Patina, Capitol Singapore in 2015. Disputes between the owners scuppered the deal and the refurbished building was taken over by Perennial Real Estate Holdings, with European hotelier Kempinski appointed to run the hotel.",
             "article2":"The six-star prestige went out the window with the drama, but the impression stuck. Over-the-top luxury is probably not what most are looking for in a time of pandemic, but I am curious to see if that translates into safety. Checking in takes place over tables with newly erected glass windows, like at a bank teller or old-school pawnshop. The custom-made, contactless sanitiser bottles are a nice touch. I am hoping to see the same steel canisters in the rooms, but find regular hand sanitiser nestled among the mini toiletries. As part of the new staycation package, I wind up in the cavernous Stamford Suite. Segregated into a bathroom, living area and bedroom, the suite can be closed off at each section, thanks to weighted sliding doors reminiscent of a Balinese resort.",
             "article3":"Design touches are minimal but intentional, felt in lacquered wooden dressers and Peranakan-style vases accenting the shelves. The suite breathes understated elegance, and in the late afternoon, glows golden with the sun's warmth. The highlight of my stay ends up being a luxurious soak in the mammoth bathtub, with supermarket wine and a bath bomb conveniently purchased from Raffles City Shopping Centre across the road. True luxury, I come to find, is less about grandiosity and more in the small, thoughtful ways you are made to feel valued and cared for."
         },
         {
             "id": 11,
             "title": "#TRAVEL",
             "description": "Room for intrigue at The Warehouse Hotel",
             "image": "the_warehouse_hotel",
             "mins": "3mins read",
             "article1":"SINGAPORE - For urbanites looking for a sanctuary in the heart of the city, The Warehouse Hotel offers rooms on the river with a racy slice of history. The three-year-old boutique hotel sits in one of the oldest independently standing warehouses in Singapore, nestled between Havelock Road and the Singapore River. Built in 1895 to store goods of the Melaka spice trade, the warehouse has had many lives - some more sordid than others. Over the years, it has been a hotbed of secret society intrigue, an illegal liquor distillery and an opium den. From 1986 to 1996, it was home to one of the hottest discos in town, but sank into disrepair after the nightspot closed. The sleek industrial chic of its current incarnation is worlds away from a den of vice, though the hotel tips a sly wink to its seedy past.",
             "article2":"The building is gazetted as a conservation area and much of the hotel's architecture preserves its historic elements - from the exposed brick wall in the lobby, salvaged by cutting out and replacing rotting bricks, to the bars over the windows, once installed to keep thieves out. One of the joys of the hotel's location is getting to watch life go by along the river. The best view for that is the rooftop infinity pool, a cantilevered glass box that looks like a perpetually melting block of ice and will thrill Instagrammers. In line with Covid-19 restrictions, only one room's guests can use the pool at a time, by appointment. So for an hour, I get the pool to myself, floating idly from wall to wall to watch people walking tiny dogs across the river or traffic rumble over Pulau Saigon Bridge.",
             "article3":"A more energetic guest might enjoy the 4.4km jog to Marina Bay, or cycling down the river on a Tokyobike on loan from the hotel. Art lovers should pop over the water to STPI Gallery, which has just opened its new exhibition, Turning The Axis Of The World, assembling the works of past residency artists, such as Rirkrit Tiravanija, Shirazeh Houshiary and Ashley Bickerton. One is spoilt for choice when it comes to dining on the quay, from brunch stalwart Toby's Estate to Japanese restaurant Dashi Master Marusaya, which does delightful things with dashi broth."
         },
         {
             "id": 12,
             "title": "#TRAVEL",
             "description": "Experience the world with cosy, virtual tours",
             "image": "virtual_tour_yoga",
             "mins": "5mins read",
             "article1":"SINGAPORE - It is not the end of the world for travel lovers deprived of an escape to elsewhere during the pandemic. Perhaps you are an urban explorer, nature lover or foodie? A profusion of new virtual experiences in every genre now lies at the end of an Internet connection. These streamlined private tours of an hour or so are devised to keep globetrotters on the go while tour guides keep their jobs.",
             "article2":"Though there are limits to immersiveness on a virtual jaunt, online wandering is a fresh stream of revenue and will possibly remain a post-pandemic trend. Global travel companies Airbnb, Viator, ToursByLocals, Withlocals and even Japan's indie Craft Tabby are among players who pivoted to these online offerings around April or May. Since Airbnb launched its Online Experiences in April, bookings in Singapore have grown almost sevenfold, with food and drink the most popular category here and globally. About 600 experiences have debuted on the platform. The trend is fed by the unabated desire to travel - safely.",
             "article3":"Virtual reality - the tech-enabled sibling of virtual tours - can significantly transform how people travel. The National Geographic magazine reported: Virtual reality may even expand travel opportunities in years to come, as researchers focus their work on experiences that are expensive, dangerous, rare or even impossible in the real world. Already, some guides like Russian Anna Belousova, 30, are expanding their online portfolio. From March, she began to craft experiences focused on the Red Square, Moscow space exploration and cooking."
         },
         {
             "id": 13,
             "title": "#TRAVEL",
             "description": "Go on virtual road trip of Switzerland and more",
             "image": "switzerland_road_trip",
             "mins": "10mins read",
             "article1":"Go on a virtual road trip of Switzerland, which highlights its beautiful countryside, 22 lakes and 11 Unesco World Heritage sites. The scenic route features sparkling glaciers, mountains and mediaeval villages. Grand Tour of Switzerland feeds your wanderlust at a time when many borders around the world are still closed.",
             "article2":"Make a fashion statement with your fabric face masks - the new statement accessory for the Covid-19 pandemic. The Straits Times style reporter Amanda Chai, along with Mr Winthrop Wong, director of Wellchem Pharmaceuticals, whose surgical masks are used by hospitals here; and Dr Teo Wan Lin, dermatologist and medical director at TWL Specialist Skin & Laser Centre, tested five home-grown face-mask brands. Each mask could get up to 20 points - five points each for comfort, breathability, durability and style. Just half a point separated the top two masks, which featured similar shapes and designs. Womenswear label Ans.Ein took the top spot, while retail store Independent Market came in second.",
             "article3":"Get through working from home with 10 wellness apps - from working out to planning a vegan diet. These include 21-Day Vegan Kickstart, for those who want to try a plant-based diet; while MyPlate offers calorie counts for each meal and reduces the calorie limit on a weekly basis, to achieve or maintain a desired weight. For the Down Dog app, you can do yoga, Hiit (high-intensity interval training) and barre workouts."
         },
         {
             "id": 14,
             "title": "#TRAVEL",
             "description": "These summery films will entertain globetrotters",
             "image": "summery_films",
             "mins": "3mins read",
             "article1":"With the European Union countries reopening their borders selectively in time for summer on July 1, here are three continental destinations that have been glowingly depicted on the big screen. These summery films will entertain and transport globetrotters elsewhere, at a time when leisure travel for Singaporeans seems unlikely till next year.",
             "article2":"Movie: This 2008 romantic comedy-drama, written and directed by Woody Allen, will take you to Barcelona, Spain. Two American friends, Vicky (Rebecca Hall) and Cristina (Scarlett Johansson), meet Spanish artist Juan Antonio (Javier Bardem). He flirts with and seduces both women, while still being in love with his emotionally unstable ex-wife. In true Allen fashion, it is both quirky and entertaining. But the clearest love story in this film is Allen's love affair with Barcelona. He is enchanted by the city's visual beauty and sensibility. Surrealist architect Antoni Gaudi's art and architecture are featured in the film. The Basilica La Sagrada Familia, Park Guell and the rooftop of the La Pedrera are all spectacular seen through Allen's eyes. The city's flair for the arts is also highlighted in scenes shot in the Joan Miro Foundation, the Catalonia National Art Museum and the Barcelona Airport.",
             "article3":"Food and drink: The best way to watch this movie is to have a party of tapas and paella. Create a Spanish feast with your favourite tapas like patatas bravas (fried potatoes with aioli and spicy tomato sauce), chipirones (deep-fried baby squid) and anchoas (anchovies served with vinegar, parsley and garlic). But try to include Barcelona tapas classics such as bombas (tennis ball-sized croquettes served with garlic sauce and a spicy tomato sauce), pa amb tomaquet (bread rubbed with garlic, crushed fresh tomatoes, olive oil, salt and pepper) and, of course, the classic cured hams, Jamon Serrano and Jamon Iberico. End on a sweet note with crema catalana, a creamy vanilla custard with a torched sugar coating on top. Catalans usually pair their tapas with a glass or two of vermouth or cava."
         },
         {
             "id": 15,
             "title": "#TRAVEL",
             "description": "Dance of recovery in global travel industry",
             "image": "travel_industry",
             "mins": "5mins read",
             "article1":"The Covid-19 pandemic has not curbed the desire to travel. Rather, travel is taking on new forms as the world begins to adapt. In the latest instalment of the askST@NLB series, The Straits Times Travel Editor Lee Siew Hua and Paul Whiteway, Asia-Pacific senior director at global online travel company Skyscanner, discussed the future of travel and the delicate dance of recovery for the industry. They noted that, encouragingly, there has been an uptick in destination searches, as well as increasing occupancy rates as hotels begin to reopen.",
             "article2":"Of late, travel bubbles have also emerged - these are government-proposed arrangements to ease disruption to travellers and commuters. One such travel bubble has been the Trans-Tasman bubble between Australia and New Zealand. Beyond these encouraging signs of recovery for the travel industry, Ms Lee and Mr Whiteway touched on the changing habits of travellers as the world begins to emerge from lockdown. For one thing, hotels and airlines committed to high hygiene standards and practices are preferred. Travellers are also choosing hotels with flexible cancellation and room-changing policies. These considerations come ahead of historical considerations such as price and location.",
             "article3":"Ms Lee and Mr Whiteway also talked about the precautions and innovations that have arisen to cater to post-pandemic travelling. For example, the airport experience, including Changi Airport's Terminal 3, will be almost entirely contactless, from check-in to boarding. In addition, Ms Lee shared her experience with the growing sector of virtual tours, including hunting for flowers in the gardens of the Kyoto Imperial Palace and learning to make Russian-style pancakes. Previous podcasts delved into life in China post-virus, the job market for young graduates post-Covid-19 and working life in pandemic and post-pandemic Singapore. A podcast earlier this month examined the new normal for eateries as Singapore emerged from phase two."
         },
         {
             "id": 16,
             "title": "#TRAVEL",
             "description": "Leisure travel not happening any time soon",
             "image": "leisure_travel",
             "mins": "8mins read",
             "article1":"SINGAPORE - No recreational travel is likely this year or early next year as countries that are still knee-deep in the Covid-19 pandemic continue to play it safe and keep tourists away. Speaking at the The Straits Times Covid-19 Webinar, Professor Teo Yik Ying, dean of the National University of Singapore Saw Swee Hock School of Public Health, said: When we (travel), we end up being exposed to many different factors that are beyond our control. He noted that Covid-19 transmission could happen on the plane, at the hotel or at local tourist attractions.",
             "article2":"Citing the example of Australia, he said the country had almost eliminated its Covid-19 cases last month but has now reported fresh outbreaks in Melbourne and New South Wales. But negotiations with countries on reciprocal green lane arrangements will continue, to allow for essential business travel as long as mutual control measures are in place.",
             "article3":"Weighing in on the discussion during the webinar, Professor Dale Fisher, a senior infectious diseases consultant at the National University Hospital, noted that theoretically, leisure travel is possible between like-minded countries. The key is trust in each other's health systems and processes, as well as the management and containment of Covid-19 cases."
         },
         {
             "id": 17,
             "title": "#TRAVEL",
             "description": "2020: Cruising out of world pandemic Covid-19",
             "image": "covid19",
             "mins": "10mins read",
             "article1":"Around 30 million people worldwide were expected to cruise last year, and the industry was experiencing extraordinary growth, year on year. Then Covid-19 slammed the brakes on the lucrative market. But, despite the negative images of the cruise industry's pandemic woes in the media - such as those of passengers leaving ships on stretchers - some loyal travellers insist they wish to holiday on boats. Much to the delight of its customers, Norwegian cruise company Hurtigruten made history on June 16. The MS Finnmarken, carrying 200 Norwegian and Danish passengers, departed from Bergen, becoming the first ocean cruise to set sail since the pandemic shut down the industry. The 127-year-old company runs expedition cruises and a ferry service along the Norwegian coast, and its vital cargo transport to remote Norwegian towns continued during the shutdown.",
             "article2":"The company has adopted many new protocols to keep passengers and crew safe. For instance, it is running its ships at around 50 per cent passenger capacity to allow for proper social distancing. Boarding is subject to enhanced health checks, with high-tech temperature screening of passengers and crew before and during the cruise. Buffets are gone and passengers use their phones and QR codes to consult menus. A full-time health and safety officer on board ensures compliance with the new regimen. In accordance with Norwegian health authority guidelines, face masks are not mandatory, although on-board sanitisation has been increased in frequency and intensity both before and during each journey. All crew members are trained to World Health Organisation standards for Covid-19. Hurtigruten is now operating four ships on its Norwegian coastal route. To comply with international travel restrictions, passengers from different countries and regions will not mix.",
             "article3":"With the pandemic highlighting the difference that a human lockdown can make - such as the clearer waters in Venice and cleaner air from London to Delhi - travellers are likely to value a green ethos even more. Hurtigruten is adamant that additional hygiene requirements will not compromise the company's strong environmental credentials and that it will not revert to single-use plastics.Time will tell if the new cruise industry will resemble the old one, but demand for next year appears strong. It will apparently take more than a global pandemic to kill this multi-billion-dollar industry."
         }
     ]}

    var src = document.getElementById('travelnews-template').innerHTML;
    var compile = Handlebars.compile(src);
    var compiledHTML = compile(travelnews);
    document.getElementById('travelnewsaction').innerHTML += compiledHTML;


    //binding events for elements
      var $openEls = document.getElementsByClassName('readmorebtn');
      for(var i =0 ; i< $openEls.length; i++){
        var $open = $openEls[i];
        $open.onclick = function(){
          var index = this.id.split('-')[1];
          var modal = document.getElementById("myModal-"+index);
          modal.style.display = 'block';
        }
      } 

      var $closeEls = document.getElementsByClassName('closearticle');
      for(var j =0 ; j< $closeEls.length; j++){
        var $close = $closeEls[j];
        $close.onclick = function(){
          var closeIndex = this.id.split('-')[1];
          var modal = document.getElementById("myModal-"+closeIndex);
          modal.style.display = 'none'; 
        }
      }

})(window, document, jQuery);



function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



'use strict';

var numberOfItems = $('#page .list-group').length; // Get total number of the items that should be paginated
var limitPerPage = 6; // Limit of items per each page
$('#page .list-group:gt(' + (limitPerPage - 1) + ')').hide(); // Hide all items over page limits (e.g., 5th item, 6th item, etc.)
var totalPages = Math.round(numberOfItems / limitPerPage); // Get number of pages
$(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>"); // Add first page marker

// Loop to insert page number for each sets of items equal to page limit (e.g., limit of 4 with 20 total items = insert 5 pages)
for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
}

// Add next button after all the page numbers  
$(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");

// Function that displays new items based on page number that was clicked
$(".pagination li.current-page").on("click", function() {
  // Check if page number that was clicked on is the current page that is being displayed
  if ($(this).hasClass('active')) {
    return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
  } else {
    var currentPage = $(this).index(); // Get the current page number
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
    $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
    $("#page .list-group").hide(); // Hide all items in loop, this case, all the list groups
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
    }
  }

});

// Function to navigate to the next page when users click on the next-page id (next page button)
$("#next-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // Identify the current active page
  // Check to make sure that navigating to the next page will not exceed the total number of pages
  if (currentPage === totalPages) {
    return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
  } else {
    currentPage++; // Increment the page by one
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
    $("#page .list-group").hide(); // Hide all items in the pagination loop
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
  }
});

// Function to navigate to the previous page when users click on the previous-page id (previous page button)
$("#previous-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // Identify the current active page
  // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
  if (currentPage === 1) {
    return false; // Return false (i.e., cannot navigate to a previous page because the current page is page 1)
  } else {
    currentPage--; // Decrement page by one
    $(".pagination li").removeClass('active'); // Remove the 'activate' status class from the previous active page number
    $("#page .list-group").hide(); // Hide all items in the pagination loop
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
  }
});