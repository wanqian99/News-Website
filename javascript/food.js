//food page editor's pick
var editorpicknews = {
 "news": [
     {
         "title": "#FOOD",
         "description": "Shake Shack to open fourth outlet",
         "image": "shakeshack",
         "link": "food.html#Food1"
     },
     {
         "title": "#FOOD",
         "description": "German Gastronomy At Gordon Grill",
         "image": "pork_belly",
         "link": "food.html#Food1"
     },
     {
         "title": "#FOOD",
         "description": "7 podcasts to serve - shaken or stirred",
         "image": "booze_fizz_spritz",
         "link": "food.html#Food1"
     },
     {
         "title": "#FOOD",
         "description": "Singapore eateries struggle with keeping rogue diners in check",
         "image": "wine_rvlt",
         "link": "food.html#Food1"
     }
 ]}

var src = document.getElementById('editorpick-template').innerHTML;
var compile = Handlebars.compile(src);
var compiledHTML = compile(editorpicknews);
document.getElementById('editorpickaction').innerHTML += compiledHTML;



function openModal1() {
  document.getElementById("myModal1").style.display = "block";
}

function closeModal1() {
  document.getElementById("myModal1").style.display = "none";
}

var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo1");
  var captionText = document.getElementById("caption1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
  captionText.innerHTML = dots[slideIndex1-1].alt;
}



function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
  captionText.innerHTML = dots[slideIndex2-1].alt;
}



(function(window, document, $, undefined) {
  'use strict';
    //trending page editor's pick
    var foodnews = {
     "news": [
         {
             "id": 0,
             "title": "#FOOD",
             "description": "Shake Shack to open fourth outlet",
             "image": "shakeshack",
             "mins": "10mins read",
             "article1": "New York burger chain Shake Shack is continuing its expansion here with a fourth outlet, this time in Suntec City Mall. It will be located on the ground floor in the West Wing near the convention centre.",
             "article2": "The hoardings were unveiled yesterday and featured murals by Ripple Root, the artist moniker of Singaporeans Liquan Liew and Estella Ng. Their colourful paintings showcase bougainvilleas, triangular motifs representing the Suntec architecture and splashes of water inspired by its Fountain of Wealth.",
             "article3": "There is no official date for the opening yet, but the chain said in a statement that it is aiming for later this year. Shake Shack has three other outlets, which are in Jewel Changi Airport, Neil Road and Liat Towers in Orchard Road."
         },
         {
             "id": 1,
             "title": "#FOOD",
             "description": "German Gastronomy At Gordon Grill",
             "image": "pork_belly",
             "mins": "5mins read",
             "article1": "Celebrate German cuisine at Goodwood Park Hotel's Gordon Grill, which pays homage to the establishment's 120-year legacy. In the 1900s, the hotel was known as the Teutonia Club, an exclusive enclave for German expatriates. The five-course degustation menu ($98++ a person) starts with chilled white asparagus paired with dill-cured salmon and shallot apple vinaigrette, followed by seared Atlantic sea scallops with smoked black forest ham and brown mushroom ragout.",
             "article2": "I enjoy the sauerkraut soup, a household Bavarian dish not commonly found here, in which the sliced cabbage is blended with potatoes and vegetable stock. It is topped with speck and creme fraiche - for added sour flavour. For mains, choose the crispy pork belly served with dark beer and caraway gravy, or pan-seared halibut fillet with mustard dill veloute and yellowfin tuna. Going for the pork belly, with perfectly crisp crackling, is a no-brainer for me. However, the halibut - a popular ingredient in Northern Germany - is also a delicious and lighter option for lunch.",
             "article3": "Round off the meal with a duo of desserts. Dig into the tangy red grits, a redcurrant jelly - commonly enjoyed in Northern Germany - topped with bourbon vanilla sauce, alongside a decadent dark cherry crumble cheesecake with hazelnut ice cream. A three-course lunch ($68++ a person) and four-course meal ($88++) are also available."
         },
         {
             "id": 2,
             "title": "#FOOD",
             "description": "7 podcasts to serve - shaken or stirred",
             "image": "booze_fizz_spritz",
             "mins": "8mins read",
             "article1": "More than five months into the coronavirus pandemic, the early lockdown novelty of homemade cocktails and virtual happy hours may be starting to wear thin. If you are seeking inspiration for your next quarantini, trying to figure out which wines to stock up on for autumn or just feeling wistful for the atmosphere at your neighbourhood watering hole, there just might be a podcast out there to quench your thirst.",
             "article2": "Hosted with warmth and panache by San Diego-based career bartender Erick Castro, this show has changed shape slightly this year, much like the industry it spotlights. Since lockdowns began in March, Bartender at Large has dealt with the practical implications of the pandemic - how to make a really great to-go cocktail, for instance - as well as the mental health repercussions on bartenders. And if you would rather think about anything other than the pandemic, there are plenty more evergreen subjects to pick from, like the mysterious formula for a great neighbourhood bar or the behind-the-scenes process of picking the World's 50 Best Bars list.",
             "article3": "If the quarantini era has inspired you to stock your liquor cabinet and perfect a few classic cocktail recipes for the first time, here is a crash course you can get delivered right to your ears. Scroll all the way back to the show's early episodes in 2017 to hear Eric Kozlik's guides on glassware, essential liquors and flavour profiles. Over the years, the show has featured more interviews with bartenders, distillers and other alcohol aficionados, along with segments in which Kozlik answers questions from listeners. Asked to define the difference between a fizz and spritz, he takes a delightful foray into the wisdom of a 19th-century bartender's manual, exemplifying the show's affable blend of passion and curiosity."
         },
         {
             "id": 3,
             "title": "#FOOD",
             "description": "Singapore eateries struggle with keeping rogue diners in check",
             "image": "wine_rvlt",
             "mins": "8mins read",
             "article1": "Want to book a table at a restaurant on a Friday or Saturday night? These days, it is not as simple as clicking on an app or making a phone call. Restaurants which never used to do so are now asking diners for deposits to secure bookings. It is usually a hold on the diner's credit card or an upfront deposit, which typically ranges from $30 to $50 a person. Chefs and restaurateurs say they have to do this because of no-shows.",
             "article2": "Diners not showing up, even when they have confirmed their bookings, is a perennial problem with which many restaurants have long grappled. But it has become more critical because of the new rules for dining in restaurants during the coronavirus pandemic. Safe distancing measures have meant that seating capacity in most restaurants has been reduced by between 20 and 35 per cent. The owners and operators of 61 restaurants and nightspots interviewed by The Sunday Times have coped by introducing additional seating, opening for dinner earlier, introducing time limits of 90 or 120 minutes for meals or staying open between lunch and dinner.",
             "article3": "They have to tread the fine line between being hospitable, which is what their business is about, and following the rules. Aside from reduced capacity, restaurants also have to ensure that groups of diners cannot be larger than five, guests from different tables cannot mingle, guests must wear masks when they leave the table and no alcohol is to be consumed after 10.30pm. Flout these restrictions and they face fines and mandatory closures."
         },
         {
             "id": 4,
             "title": "#FOOD",
             "description": "Taipei street food vendor, 80, gets place in Michelin guide for stewed pork belly and buns",
             "image": "taipei_street_food",
             "mins": "5mins read",
             "article1": "TAIPEI - A cloud escapes into the air as 80-year-old Taiwanese street food vendor Wu Huang-yi lifts the lid on a giant steaming basket to unveil a piping hot batch of two dozen buns. It is lunchtime at Taipei's Huaxi Night Market - the capital's oldest - and a queue has already formed at Wu's stall, with diners eager to taste the pork belly whose aroma wafts from a steel pot bubbling in the cramped kitchen. Wu, a self-taught chef, perfected his meat marinade more than 20 years ago. He still goes to the market at 5am every day to handpick the pork belly, which he stews for hours in a special blend of ingredients.",
             "article2": "My gua bao (buns) are different from others. They're all handmade. They're tasty because they are so soft and yet chewy, he says. Everything is done according to tradition and that's why the buns taste good. Also known in Taiwanese as hor ga ter (tiger bites pig), the gua bao is a circular flat steamed bun, which is folded in half and stuffed with braised meat, coriander, salted vegetable and ground peanuts. Its shape resembles the ancient Chinese boat-shaped ingot, so gua bao signifies prosperity and is often served at wedding banquets and corporate functions.",
             "article3": "Wu sells his gua bao for less than US$2 (S$2.72) each at his stall, where his whole family, including his wife, three adult children and a grandson help out. His hard work and dedication have finally paid off - this month he was recognised by Michelin and awarded a place on the food guide's Bib Gourmand list, which is given to eateries that serve a top-class three-course meal for less than NT$1,000 (S$46.29). Taiwan - which has a rich local culinary tradition as well as a huge array of cuisines brought to the island by mainland Chinese immigrant communities - now has well over 200 entries on Michelin's list."
         },
         {
             "id": 5,
             "title": "#FOOD",
             "description": "HK to reopen gyms, extend dine-in hours as virus cases ease",
             "image": "hongkong_dine-in",
             "mins": "10mins read",
             "article1": "HONG KONG • The Hong Kong government said it will allow gyms, massage parlours and some sports venues to reopen, beginning tomorrow, as coronavirus cases drop off from record highs. In a further relaxation of rules, dine-in services at restaurants will be extended by one hour, to 10pm, said Secretary for Food and Health Sophia Chan in a briefing yesterday. We listened to the citizens telling us that sometimes it's a bit rushed... having dinner, because Hong Kong people tend to work late, and so therefore slightly extending by one hour would serve the purpose, Radio Television Hong Kong (RTHK) quoted Ms Chan as saying.",
             "article2": "A cap of two people at each table will remain in effect at restaurants, while public gatherings will be limited to two people for another seven days. However, bars, karaoke lounges, mahjong parlours and swimming pools remain closed. Hong Kong has been gradually easing social distancing measures as it brings its biggest Covid-19 outbreak under control. Despite the easing of virus measures, however, for the second year in a row, the city will cancel the annual firework display to mark China's national day on Oct 1.",
             "article3": "Pro-democracy protests made last year's celebrations difficult, and they have become fewer and smaller this year, owing mainly to limits on group gatherings and the imposition of a national security law that punishes actions China views as subversive, secessionist, terrorist or colluding with foreign forces. While Hong Kong is reopening gyms in an effort to improve residents' physical and mental health, masks will still be required when exercising. Questions have been raised over the possible risks to wearing masks while exercising, but one health expert dismissed concerns over the policy."
         },
         {
             "id": 6,
             "title": "#FOOD",
             "description": "Chinese shoppers splash on luxury goods, but still won't eat out",
             "image": "china_sales",
             "mins": "3mins read",
             "article1": "HONG KONG (BLOOMBERG) - Chinese consumers are back to binging on luxury handbags, cosmetics and cars. But this shopping enthusiasm is not extending to mass consumption in sporting goods, beer and restaurants. An uneven recovery is under way in China as the world's biggest consumer market also becomes one of the first nations to rebound from the coronavirus pandemic that continues to ravage the global economy. Bored after months of strict social distancing measures and unable to vacation overseas, wealthy Chinese consumers are seeking comfort in retail therapy. This bodes well for dozens of luxury goods makers whose growth was fuelled by China's increasing affluence in the past decade.",
             "article2": "Bloomberg analysed June-quarter revenue for over two dozen companies that are market leaders in China across key consumer goods categories. Three pandemic-triggered trends emerged, driven mostly by pent-up desire to spend, focus on healthy lifestyles or wariness of public spaces. Luxury goods makers saw double-digit revenue growth in the latest quarter compared to the same period last year, underscoring the strongest recovery trend. Inability to travel overseas has boosted businesses in the domestic tourism hotspots and duty-free shops.",
             "article3": "But these spoils are not shared by mass-category consumer products. Other firms such as Anta Sports Products Ltd. and electrical-appliance maker Midea Group have seen little or no sales growth between April and June. Total retail sales were still decelerating in July, highlighting the continuing economic pain from the coronavirus outbreak. The government data as well as market research show that the pandemic deals a bigger blow to the low-income consumers who have to further tighten their belt, said Luo Yixin, a consumer analyst at Huatai Financial Holdings."
         },
         {
             "id": 7,
             "title": "#FOOD",
             "description": "Japan's tuna market, the world's largest, hit hard by coronavirus pandemic",
             "image": "japan_tuna_market",
             "mins": "8mins read",
             "article1": "TOKYO (REUTERS) - Japan's tuna market, the world's largest, is taking an outsized hit from the coronavirus pandemic, pressuring restaurants and wholesalers at Tokyo's sprawling Toyosu fish market to adapt to survive. Businesses had hoped for more activity after Japan lifted its state of emergency in late May, but big events such as shareholder meetings and wedding banquets have remained on hold while many Japanese are still wary of going to restaurants. Demand for fresh fish, especially the so-called king of sushi bluefin tuna, has slumped as the pandemic wiped out orders for events. Tuna prices dropped 8.4 per cent in July from a year earlier, far steeper than the 1.5 per cent annual fall in overall fresh fish prices, government data showed.",
             "article2": "Mr Shimahara, who opened his restaurant a year ago, started selling boxes of frozen tuna online in July to offset the hit to his businesses from the drop in customers. He has so far received about 200 orders for the 5,500 yen (S$70) box, which contains two pieces of akami red meat tuna, and plans to start selling 8,500 yen boxes of more expensive chutoro medium fatty tuna later in September. While some customers buy the boxes as gifts for elderly family members, others are put off by the lengthy process of defrosting tuna, which involves leaving the fish in the fridge for several hours.",
             "article3": "Tokyo's sushi restaurants, which tend to be popular among people from other regions, are getting fewer visitors from outside the capital, said Dr Toshio Katsukawa, associate professor at the Tokyo University of Marine Science and Technology. Ms Kana Kikuchi, who works at a life insurer, said the Japanese tend to go out for sushi to celebrate special occasions. But, in late August, she took her daughter to Shimahara's tuna restaurant on an ordinary week night just to show support. Ms Kikuchi said she does not usually eat tuna at home because of the challenging defrosting process. To help customers like her, Mr Shimahara has added instruction booklets in the boxes sold online on how best to defrost and serve the tuna."
         },
         {
             "id": 8,
             "title": "#FOOD",
             "description": "Actor Joseph Gordon-Levitt turns spotlight on Singapore food",
             "image": "joseph_gordon",
             "mins": "10mins read",
             "article1": "American actor Joseph Gordon-Levitt is showing love for Singapore on social media once more. The 500 Days Of Summer actor, who turns 39 this year, posted on Facebook yet another call for photos on Thursday (Aug 27). Online collaborative platform hitRECord was founded in 2004 and aims to connect creatives from all corners of the globe.",
             "article2": " It is a personal project by Gordon-Levitt and his late older brother, Dan. Gordon-Levitt ended the call with an image of a dish familiar to many Singaporeans. So far, the actor's post has received more than 700 reactions, and hungry Singaporean netizens have submitted images ranging from nasi campur to char kway teow.",
             "article3": "On Aug 21, Gordon-Levitt had sought cool photos taken anywhere in Singapore and earlier in the month, he had posted a photograph of a woman in Singapore and asked for caption contributions."
         },
         {
             "id": 9,
             "title": "#FOOD",
             "description": "Changi Airport Group offers mix-and-match delivery service from up to 5 food outlets",
             "image": "changi_delivery",
             "mins": "5mins read",
             "article1": "SINGAPORE - From Friday (Aug 28), diners can order food from nearly 30 eateries in Changi Airport and Jewel Changi Airport using Changi Airport Group's own food delivery service. Brands on board this initiative include the London-based Burger & Lobster chain and popular Chinese restaurant Paradise Dynasty. A minimum spend of $50 is required and diners can mix and match food items from up to five eateries. Prices on the website are not marked up from what customers would pay in-store.",
             "article2": "Mains are on the menu, but there is room for dessert as well and those with a sweet tooth can whet their appetites with sweet treats such as crepe cake from Lady M and macarons from Paris Baguette. Diners can order on the Changi Eats website, which has been in beta mode since June. Payment is by either MasterCard or Visa. Orders must be placed one day in advance and up to two hours before the scheduled delivery slots from 12.30pm to 8pm daily. MasterCard holders enjoy free delivery when they use a promotion code. Those who spend at least $80 will enjoy an additional 15 per cent off their bill.",
             "article3": "Islandwide delivery starts from $5 and goes up to $12, depending on location. There is also a pick-up option. From Friday to next Monday, diners can enjoy $1 deals for items such as truffle fries from Burger & Lobster and green tea lattes from Dal.Komm Coffee, said Changi Airport Group on Thursday. Those who order from the website during this promotional period will also receive a Changi Airport commemorative gift set. Wine and champagne from retailer Bottles and Bottles will also be available at a discount."
         },
         {
             "id": 10,
             "title": "#FOOD",
             "description": "McDonald's takes action against Australia's Burger King over Big Jack's similarities to Big Mac",
             "image": "macdonald_hungryjacks",
             "mins": "5mins read",
             "article1": "MELBOURNE (REUTERS) - Global fast food giant McDonald's has filed a trademark infringement notice in Australia after the local unit of Burger King created a similar product called the Big Jack, according to a local newspaper report on Thursday (Sept 3). Burger King's Australian franchise Hungry Jack's released a double layer hamburger in July, similar in construction and appearance to the Big Mac, McDonald's alleged in documents filed with the Federal Court on Aug 28, the Sydney Morning Herald newspaper reported.Hungry Jack's deliberately adopted or imitated the distinctive appearance or build of the Big Mac, along with its ingredients and tagline, two all-beef patties, special sauce, lettuce, cheese, pickles, onions - on a sesame seed bun, McDonald's alleged, according to the report.",
             "article2": "Hungry Jack's markets the burger online as comprising two flame-grilled 100% Aussie beef patties, topped with melted cheese, special sauce, fresh lettuce, pickles and onions on a toasted sesame seed bun. The apparent similarities were picked up by plenty of social media users, including one Twitter user named Gino, who tweeted Big Jack = Big Mac! Naughty naughty!. A McDonald's Australia spokesman said it would not be appropriate to comment given that the matter is before the court.",
             "article3": "McDonald's is also seeking damages, interest and costs, as well as an order that Hungry Jack's destroy all promotional materials which include physical and electronic advertising, the paper reported. When Burger King sought to expand into Australia in the early 1970s, it found its name was already trademarked and so its first franchise owner, Mr Jack Cowin, chose the name Hungry Jack's."
         },
         {
             "id": 11,
             "title": "#FOOD",
             "description": "Wine sales soar in circuit breaker period",
             "image": "wine_supermarket",
             "mins": "3mins read",
             "article1": "More people are turning to wine to while away the time at home as distributors, online retailers and supermarkets report spikes in wine sales. At Cold Storage, there was an initial increase from when the work-from-home measures were announced, as customers started moving away from drinking and dining at restaurants and bars, says Ms Fiona Stephens, 39, Dairy Farm South-east Asia's regional merchandise manager for beer, wine and spirits. We are now seeing more consistent growth as people settle into the circuit breaker.",
             "article2": "During the circuit breaker period, bars and restaurants can offer only takeaways and deliveries. Cold Storage has also seen an increase in customers picking up more premium wines from countries such as France, Australia and New Zealand. Both supermarket chains are preparing for growing demand as there are still almost six weeks of the circuit breaker to go. FairPrice says it will continue to monitor the market and source from various suppliers and from several countries to ensure we offer products at competitive prices.",
             "article3": "More customers are also trying new styles and wine-producing regions like Lebanon. Among those who have stocked up their wine cellar is software company founder Ng Ban Loo, 49, who saw his spending on wines go up by half when the circuit breaker kicked in. Now that only online deliveries are allowed, the regular customer of The Straits Wine Company says he is forking out $300 to $400 each time. He used to pick up the wines from the outlet nearest his home. And since he is spending so much time at home, he now goes through 11/2 bottles daily."
         },
         {
             "id": 12,
             "title": "#FOOD",
             "description": "Home delivery during circuit breaker: Cocktails at your doorstep",
             "image": "cocktails_delivery",
             "mins": "5mins read",
             "article1": "When she turned 37 last Tuesday - the same day circuit breaker measures kicked in - communications executive Denise Li celebrated at home with her family. While she could not clink glasses with friends, they had cocktails from one of the bars she frequents, The Secret Mermaid, delivered to her home, so she could still have a drink on her special day. In these times, when bars are closed and people are told to stay home, cocktails bars are taking their concoctions to homes.",
             "article2": "Most offer same-day, islandwide deliveries of cocktails in bottles or vacuum-sealed bags. In some cases, the drinks come with garnishes. One of the early movers was The Secret Mermaid, a six-year-old bar in Ocean Financial Centre, which had its delivery services up and running by March 30. Bar manager Kelly D'Cruz, 28, says the team had been keeping tabs on the developments in other countries that imposed lockdown measures earlier than Singapore.",
             "article3": "The all-day bar has rolled out 750ml bottled cocktails and is adapting its coffee and food menu for delivery. While drinking at home is not the same as going to a bar - which is an experience in itself, with the music, ambience and the social aspect of it - it is the new normal for now. Drinking martinis out of a non-martini glass feels strange, but I'm still happy to make do with cocktails out of a bag during this circuit breaker period, she says."
         },
         {
             "id": 13,
             "title": "#FOOD",
             "description": "Despite Covid-19,  Novel eats coming your way soon",
             "image": "wantonmee_strait",
             "mins": "10mins read",
             "article1": "Despite the spate of Covid-19 casualties in the food and beverage industry, several F&B players here are forging ahead and opening new eateries. In particular, a few are bringing in foreign food brands with an eye on consumers pining for a taste of the foreign, now that overseas travel for leisure is off the table. Joy Luck Teahouse at Ion Orchard, which opens on Friday, will boast three Hong Kong brands - Tak Hing Fishball Company, Hoover Cake Shop and Kam Kee Cafe - under one roof. The brands are brought together by Singapore-born television producer Robert Chua, who is also behind the entrance of Tim Ho Wan and Kam's Roast here.",
             "article2": "In October, the group will open the second outlets of tendon restaurant Tenjin and patisserie Tarte by Cheryl Koh, both at Raffles City Shopping Centre. Also opening in October is Strait Place 1819 - by d'Good Cafe - at VivoCity. D'Good Cafe has outlets in Holland Village and Jewel Changi Airport. Its outlet in Takashimaya Shopping Centre closes next month when its lease ends.",
             "article3": "The 88-seat Strait Place 1819 offers a fusion menu, with a spin on local favourites. Highlights include Strait Place Carrot Cake, with both black and white versions of fried radish cake topped with carrot and cucumber; BCM Capellini, a luxe version of bak chor mee, which includes scallops, caviar and prawns; and Cheng Tng Genmaicha, with red dates, dried longans, winter melon and peach gum. Whether these new eateries take off depends a lot on whether customers like your food and are willing to pay for the type of food that restaurants or cafes are offering, says Ms Regina Yeo, adjunct senior lecturer of marketing at the National University of Singapore Business School."
         },
         {
             "id": 14,
             "title": "#FOOD",
             "description": "Beijing's new fight against food waste comes up against tradition",
             "image": "restaurant_wastage",
             "mins": "3mins read",
             "article1": "BEIJING - When Mr Ren Yushi eats out with his family, he makes it a point to order less, and to minimise waste, he takes home the leftovers. But when it comes to entertaining guests and friends from out of town, the economics lecturer often orders more than they need. He does not want them to think him stingy.",
             "article2": "This is what Beijing is up against with its latest Clean Plate campaign, launched last week by President Xi Jinping, who called on Chinese diners to stop wasting food. Mr Xi's call to action reflects rising concerns over food security as Beijing grapples with a trade war, severe flooding and the Covid-19 pandemic that has strained global food production and supply chains, said observers. Food waste is a big issue in China.",
             "article3": "The average Chinese diner throws away 93g of food per meal when eating out, about 11.7 per cent of their meal, according to a 2018 study by a Chinese research institute. The Chinese leader's comments have sparked a flurry of action over the past week from local governments, companies and restaurant associations. Hong Kong-based political analyst Willy Lam noted that many Chinese might be looking to indulge in restaurants after months of living under the shadow of Covid-19."
         },
         {
             "id": 15,
             "title": "#FOOD",
             "description": "Miel Gibson: Chilean honey vendor in sticky situation with Braveheart star",
             "image": "miel_gibson_honey",
             "mins": "5mins read",
             "article1": "SANTIAGO, CHILE (REUTERS) - A pun on the Spanish word for honey and the name of one of the world's most famous actors has landed a small scale Chilean vendor in a sticky situation. Ms Yohanna Agurto used an image of Mel Gibson from the 1995 movie Braveheart to promote her honey, Miel Gibson, along with the slogan only for the brave. This week she received a letter from the actor's lawyers saying her use of his name and likeness violated Gibson's rights, and threatening legal action if she did not withdraw the product immediately.",
             "article2": "The letter was signed by an assistant to California-based lawyer Leigh Brecheen. Ms Breechen told Reuters the letter was aimed at preventing the use of Gibson's image, not banning the honey's name. Ms Breechen told Reuters the letter was aimed at preventing the use of Gibson's image, not banning the honey's name.",
             "article3": "She had only started repacking and selling the southern Chilean product in June after the spread of the coronavirus caused widespread unemployment, she said, adding she only earned enough to support her family. On Thursday, she addressed an appeal directly to the actor on Twitter: Dear #MelGibson, would you let us use your image on our honey please? Mis kids and me we would be infinitely grateful. Our honey is only for brave hearts."
         },
         {
             "id": 16,
             "title": "#FOOD",
             "description": "Very low risk of coronavirus infection from chilled, frozen food",
             "image": "beijing_frozen_food",
             "mins": "8mins read",
             "article1": "It is possible to get Covid-19 from contaminated imported chilled or frozen food, but the risk is very low, said experts. The coronavirus that causes Covid-19 remains viable for at least three weeks at 4 deg C, said Professor Dale Fisher, a senior consultant in the division of infectious diseases at the National University Hospital. He recently concluded a study that involved putting the Sars-CoV-2 virus on prawn, salmon and pork, and testing its viability after three weeks - an ample timeframe for such food to be exported and sold, Prof Fisher said.",
             "article2": "Transmission through imported food has become a hot topic following the re-emergence of Covid-19 in New Zealand after 102 days with no cases, leading to a lockdown in Auckland. Six of those infected work at a cold storage facility, raising the possibility that they may have contracted the disease from the imported food before spreading it to others. China recently reported finding the virus on frozen chicken wings from Brazil, where the pandemic is raging, and on the outer packaging of frozen prawns from Ecuador. In June, it said the virus was found in a Beijing market on a chopping board used to cut imported salmon. There was a cluster of more than 200 cases linked to the market.",
             "article3": "Professor Teo Yik Ying, dean of the Saw Swee Hock School of Public Health, said the risk to the average consumer is extremely low, but may be higher for people working in the chilled food plants handling imported products every day. Reminding people to wash their hands and cook their food well, he said that the first person to take the frozen or refrigerated meat out of the box and then touch his mouth could become a new index case."
         },
         {
             "id": 17,
             "title": "#FOOD",
             "description": "Get HK-style bolo buns, egg tarts and fishballs at new Joy Luck Teahouse in Ion Orchard",
             "image": "hongkong_bolo_buns",
             "mins": "10mins read",
             "article1": "SINGAPORE - More famous Hong Kong treats are coming to our shores and you can dig into them all at once. Joy Luck Teahouse, slated to open as a takeaway kiosk by end-August in Ion Orchard's food hall at basement level four, will sell Hong Kong-style fish balls, pineapple buns (bolo bun) and egg tarts by three popular brands.",
             "article2": "Expect curry fishballs from Tak Hing Fishball Company, and Hoover Cake Shop's egg tarts - one with a butter cookie base and the other with puff pastry - that are said to be a favourite of Hong Kong actor Chow Yun Fat. Kam Kee Cafe will offer its signature bolo bun, which gets its name from the sweet, crumbly golden crust that resembles a pineapple. Pair the bun with Hong Kong-style milk tea, which is also used to make the cafe's new Pearl of the Orient bubble tea with brown sugar pearls.",
             "article3": "The three brands are brought together by Singapore-born TV producer Robert Chua, who is also responsible for Hong Kong's Tim Ho Wan and Kam's Roast coming here. A second Joy Luck Teahouse, which includes seating, will open in September at Bugis Junction. Last month (July), 100-year-old Hong Kong bakery Hang Heung - best known for its wife cake (lao po bing) - said it is also opening its first overseas shop at Ion Orchard's basement level four. It is expected to open by early September."
         }
     ]}

    var src = document.getElementById('foodnews-template').innerHTML;
    var compile = Handlebars.compile(src);
    var compiledHTML = compile(foodnews);
    document.getElementById('foodnewsaction').innerHTML += compiledHTML;


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