//trending page editor's pick
var editorpicknews = {
 "news": [
     {
         "title": "#SPORTS",
         "description": "Confident England ready for Iceland",
         "image": "england_iceland",
         "link": "sports.html#Sports1"
     },
     {
         "title": "#SPORTS",
         "description": "Football: Everton sign Brazil midfielder Allan from Napoli for estimated £25m",
         "image": "everton_sign_brazil",
         "link": "sports.html#Sports1"
     },
     {
         "title": "#SPORTS",
         "description": "Motor racing: Haas want eventual 2021 driver pairing to stay through 2022",
         "image": "motor_haas",
         "link": "sports.html#Sports1"
     },
     {
         "title": "#SPORTS",
         "description": "NBA: Milwaukee Bucks facing shock playoff exit, Houston Rockets race past LA Lakers",
         "image": "houston_la",
         "link": "sports.html#Sports1"
     }
 ]}

var src = document.getElementById('editorpick-template').innerHTML;
var compile = Handlebars.compile(src);
var compiledHTML = compile(editorpicknews);
document.getElementById('editorpickaction').innerHTML += compiledHTML;



(function(window, document, $, undefined) {
  'use strict';
    //trending page editor's pick
    var sportsnews = {
     "news": [
         {
             "id": 0,
             "title": "#SPORTS",
             "description": "Confident England ready for Iceland",
             "image": "england_iceland",
             "mins": "10mins read",
             "article1": "REYKJAVIK • Iceland will forever bear a scar for English football, after an embarrassing exit at Euro 2016 to a country with a population of less than 1 per cent the pool on offer to the Three Lions. Four years on, the nations meet today in the Nations League for the first time since that fateful night in Nice, with the visitors in Reykjavik a much-changed side. Only six of the England squad who lost in the round of 16 in that tournament remain.",
             "article2": "Among them, captain Harry Kane, 27, and Raheem Sterling, 25, are now the senior figures in a squad filled with youth, flair and far less fear than the side who were racked by self-doubt after falling 2-1 behind just 18 minutes into that famous defeat by Iceland. Phil Foden, 20, and Mason Greenwood, 18, have been handed their first senior call-ups after impressing for Manchester City and Manchester United respectively since football returned from the coronavirus shutdown in June. They could be two of the beneficiaries of the one-year delay to the European Championship, with England one of the favourites for a tournament they will largely play on home soil next summer.",
             "article3": "Meanwhile, Spain captain Sergio Ramos has praised his side for not giving up the fight, as Jose Luis Gaya snatched a late point in their 1-1 Nations League draw with Germany in Stuttgart on Thursday. The Germans were seconds away from victory in the League A, Group 4 clash after Chelsea's new signing Timo Werner gave the hosts a second-half lead, only for Gaya to tap home a Rodrigo Moreno header in the sixth minute of added time."
         },
         {
             "id": 1,
             "title": "#SPORTS",
             "description": "Everton sign Brazil midfielder Allan for estimated £25m",
             "image": "everton_sign_brazil",
             "mins": "5mins read",
             "article1": "REUTERS) - Everton have signed Brazil midfielder Allan from Italian side Napoli on a three-year deal, the English Premier League club said on Saturday (Sept 5). Financial details of the deal were not disclosed, but British media reported that the Toffees had paid a fee of around £25 million (S$45.3 million) to Napoli for the 29-year-old. Allan scored 11 goals and grabbed 16 assists in more than 200 appearances for Napoli across all competitions, helping them claim the Coppa Italia last season.",
             "article2": "Capped nine times by Brazil, Allan was part of the squad who won the Copa America in 2019. At Everton, he will be reunited with manager Carlo Ancelotti, having previously played under the 61-year-old for two seasons while the Italian was in charge of Napoli.",
             "article3": "Everton have also been linked with Real Madrid's Colombia midfielder James Rodriguez as Ancelotti aims to strengthen the Merseyside club's midfield ahead of the new season. Everton finished 12th last term and begin their new Premier League campaign with a trip to Tottenham Hotspur on Sept 13."
         },
         {
             "id": 2,
             "title": "#SPORTS",
             "description": "Haas want eventual 2021 driver pairing through 2022",
             "image": "motor_haas",
             "mins": "8mins read",
             "article1": "MONZA, ITALY (REUTERS) - The Haas Formula One team could change drivers for next season but would want whoever they end up with in 2021 to stay for 2022, principal Guenther Steiner said on Friday (Sept 4). The current lineup is Danish driver Kevin Magnussen and French veteran Romain Grosjean, who have been together there since 2017 with Grosjean joining the previous year in the team's debut season.",
             "article2": "We've got two good drivers at the moment and we can always fall back on them, I guess. Everything is on the table for next year, Steiner told Sky Sports F1 television at the Italian Grand Prix. I will discuss it with Gene (Haas) in the next weeks and months how we do it best and see what fits for us. But one thing, in my opinion, we need to do, whoever is in the car in '21 should be in the car for '22. With the new car coming, if you know the driver at least you've sorted something out, he added.",
             "article3": "Even if it's the guys who are now in, if they stay, they should stay for at least the next two years. I'm against swapping for '22 with the new car, new driver, that could be difficult.Formula One is due to introduce sweeping changes in 2022 after postponing them for next year due to the Covid-19 pandemic. Next year's cars will be the same as this season."
         },
         {
             "id": 3,
             "title": "#SPORTS",
             "description": "NBA: Milwaukee Bucks facing shock playoff exit",
             "image": "houston_la",
             "mins": "8mins read",
             "article1": "MIAMI (AFP) - Jimmy Butler powered the Miami Heat to a 115-100 victory over Milwaukee on Friday (Sept 4) that pushed the top-seeded Bucks to the brink of elimination in the NBA playoffs. Butler scored 17 of his 30 points in the Heat's scorching fourth quarter, Miami out-scoring the Bucks 40-13 in the final period to seize a 3-0 lead in the best-of-seven Eastern Conference semi-final series. It was the most lopsided final period in a playoff game since the NBA introduced the shot clock in 1954.",
             "article2": "Western Conference top seeds the Los Angeles Lakers were also beaten Friday in the NBA's coronavirus quarantine bubble in Orlando, Florida, falling 112-97 to the Houston Rockets in Game One of their conference semi-final series. A near triple-double of 21 points, 16 rebounds and nine assists from the Bucks' reigning NBA Most Valuable Player Giannis Antetokounmpo was simply not enough as the Heat remained unbeaten in the playoffs.",
             "article3": "The Bucks, who took the best record in the league into the post-season, must now try to do what no NBA team has done before in 139 prior attempts: Rally from an 0-3 deficit to win a best-of-seven playoff series. Antetokounmpo said the Bucks could be the first if they take it not game-by-game but play-by-play, possession, by possession."
         },
         {
             "id": 4,
             "title": "#SPORTS",
             "description": "Milan sign Real Madrid midfielder Brahim Diaz",
             "image": "milan_madrid",
             "mins": "5mins read",
             "article1": "MILAN (REUTERS) - AC Milan have signed attacking midfielder Brahim Diaz from La Liga champions Real Madrid on a season-long loan, the Serie A club said on Friday (Sept 4). The 21-year-old Spaniard scored twice in 21 games in all competitions for Real after his arrival from Manchester City in January 2019.",
             "article2": "AC Milan is delighted to announce the signing of the Spanish footballer Brahim Abdelkader Diaz from Real Madrid CF on loan until June 30, 2021, Milan said in a statement, adding that Diaz will wear the number 21 shirt.",
             "article3": "Milan finished in sixth place last season to book a Europa League spot and face Shamrock Rovers in the second qulaifying round on Sept 17. They begin their Serie A campaign at home to Bologna four days later."
         },
         {
             "id": 5,
             "title": "#SPORTS",
             "description": "Bottas tops Monza final practice ahead of Sainz",
             "image": "f1_hamilton",
             "mins": "10mins read",
             "article1": "MONZA, ITALY (AFP) - Valtteri Bottas topped the times for Mercedes ahead of McLaren's Carlos Sainz after championship leader Lewis Hamilton was forced to swerve off track and avoid a collision in Saturday's (Sept 5) stoppage-hit final free practice for Sunday's Italian Grand Prix. The Finn, determined to claim a front-row start and boost his title challenge, clocked a best lap in 1min 20.089sec before a late interruption, when the action was paused by red flags after Daniel Ricciardo parked his spluttering Renault with suspected electrical problems. Bottas' best lap left him two-tenths clear of Sainz, who squeezed in a dazzling lap with seconds remaining after the late re-start, with Lando Norris third in the second McLaren, three-tenths adrift.",
             "article2": "Ricciardo was fourth ahead of Hamilton, in the second Mercedes, the six-time champion having been forced to take dramatic avoiding action at around 300kmh when he approached two slow cars running side by side at the approach to the Parabolica. It appeared that one of the Haas cars had moved into the centre of the track ahead of Hamilton, forcing him to flick his car to the right and run partly across the grass as his flying lap was ruined in the most dangerous way. Behind Hamilton, Max Verstappen was sixth ahead of his Red Bull teammate Alex Albon, Esteban Ocon in the second Renault, Lance Stroll and his Racing Point team-mate Sergio Perez.",
             "article3": "Hamilton improved to within 0.35 of his teammate on worn softs, a lap that suggested it would be an intra-team duel for pole later in qualifying until, in a final flurry with seven minutes remaining, Norris and Ricciardo improved to take second and third temporarily. For the luckless Australian, it was his last run of the session as he pulled up and parked on approach to the first Lesmo. I have an issue he radioed in to Renault as red flags stopped the session to allow for the car's recovery. As soon as that was done, with three minutes remaining, the field left a crowded pit lane, all on softs, for a last flying and spectacular run."
         },
         {
             "id": 6,
             "title": "#SPORTS",
             "description": "OG Anunoby's buzzer-beater snatches win for champions",
             "image": "anunoby_boston",
             "mins": "3mins read",
             "article1": "MIAMI (AFP) - OG Anunoby drained a buzzer-beating three-pointer as the Toronto Raptors resuscitated their NBA title defence on Thursday (Sept 3) with a 104-103 victory over the Boston Celtics. Kyle Lowry, tasked with inbounding the ball with half a second on the clock and the Raptors down 103-101, lofted a perfect arcing pass over Boston's towering Tacko Fall to Anunoby on the opposite sideline.",
             "article2": "Anunoby set his feet and fired and the Raptors narrowed the deficit in the best-of-seven Eastern Conference semi-final series to 2-1 - avoiding an 0-3 hole from which no NBA team has come back to win a post-season series. Fred VanVleet scored 17 of his 25 points in the second half and Pascal Siakam scored 14 of his 16 after the interval and Anunoby contributed 12 points for the Raptors, who battled back from a 57-47 halftime deficit.",
             "article3": "In a fourth quarter that saw seven lead changes - neither team leading by more than four points - Boston looked set to take a stranglehold on the series when centre Daniel Theis, fed by Kemba Walker's savvy pass through traffic, slammed home a dunk for a 103-101 lead with 0.5 seconds on the clock. During the ensuing timeout, Boston brought in Fall, who tops out at 2.26m, to defend the inbounds play, but he could not hold back the 2019 champions. Walker led the Celtics with 29 points. Jaylen Brown added 19 with 12 rebounds and Jayson Tatum chipped in 15, but Boston have a series on their hands now."
         },
         {
             "id": 7,
             "title": "#SPORTS",
             "description": "Italy's record winning run ends with Bosnia draw",
             "image": "italy_bosnia",
             "mins": "8mins read",
             "article1": "FLORENCE, ITALY (AFP) - Italy's all-time record run of consecutive wins came to an end on Friday (Sept 4) with a 1-1 draw in their opening Uefa Nations League match against Bosnia and Herzegovina. Roberto Mancini's side had won their last 11 matches coming into the clash at the all-but empty Stadio Artemio Franchi in Florence, with their last fixture a 9-1 hammering of Armenia in their final qualifying match for the postponed Euro 2020. Stefano Sensi levelled for the hosts midway through the second half after Bosnia forward Edin Dzeko had opened the scoring but the 'Azzurri' couldn't find the finishing touch in the League A, Group 1 match to stretch their streak of wins beyond the coronavirus-enforced break in international football.",
             "article2": "Italy came into the game missing Marco Verratti, Sandro Tonali and Federico Bernadeschi, while Mancini preferred Andrea Belotti to head the attack rather than European Golden Shoe winner Ciro Immobile. Belotti had very little to work with as the hosts struggled to break down a stubborn if unadventurous Bosnia shorn of their star midfielder Miralem Pjanic, who tested positive for Covid-19 after signing for Barcelona from Juventus last month. Under new coach Dusan Bajevic, the away side did little more than launch long passes for Dzeko, who plays in Italy with Roma. They didn't register a single shot on target in the first half.",
             "article3": "The equaliser seemed to wake Italy up and Sehic had to be at his best to deny Alessandro Florenzi in the 71st minute when the Roma full-back burst through but couldn't force his shot past the Konyaspor stopper. Florenzi's Roma teammate Nicolo Zaniolo came on for Federico Chiesa soon after and in the 75th minute came within inches of giving Italy the lead when he steered his header from a mishit Insigne shot just wide. Italy next take on the Netherlands in Amsterdam on Monday after the Dutch beat Poland 1-0 in their match to top the group."
         },
         {
             "id": 8,
             "title": "#SPORTS",
             "description": "Jon Rahm hoping to 'steal' another tournament from Dustin Johnson",
             "image": "golf_jon",
             "mins": "10mins read",
             "article1": "ATLANTA (REUTERS) - Jon Rahm says he is hoping to steal another title from Dustin Johnson after they finished tied at the top of the leaderboard on 13-under-par in the first round of the season-ending Tour Championship in Atlanta on Friday (Sept 4). Rahm, ranked No. 2 in the world behind Johnson, beat the American in a playoff at last week's BMW Championship after sinking a massive 66-foot putt. Johnson started on 10-under with a two-shot lead at East Lake under the FedExCup staggered scoring system on Friday and shot a round of 67, while Rahm carded a 65 to join him at the top.",
             "article2": "Both players typically rely on their driver but struggled with accuracy on Friday as they bid to be crowned FedExCup champion and take home US$15 million (S$20.5 million).So many times we usually play good when we play together... it's weird to see us both struggle off the tee, Rahm told reporters. That's usually our forte, our strong suit, and usually we're both bombing down the fairway and hitting good shots.",
             "article3": "I kind of stole that tournament last week from him and he started with a two-shot lead, so hopefully I can steal this one as well. Johnson said he will have to be in top form to stay ahead of the Spaniard. Jon's a good player, so if I want to win this week I'm going to have to bring my best, Johnson said. It's all me, that's for sure... this golf course, the fairways are narrow. If you miss it a bit, it's not going to go in the fairway."
         },
         {
             "id": 9,
             "title": "#SPORTS",
             "description": "Real Madrid's Ceballos returns to Arsenal for second loan spell",
             "image": "football_cellabos",
             "mins": "5mins read",
             "article1": "LONDON (REUTERS) - Arsenal have re-signed Real Madrid midfielder Dani Ceballos for a second season-long loan after a successful first spell last term, the Premier League club announced on Friday (Sept 4). Ceballos played 37 times for the north London club last season, sealing his place as a key midfielder in the starting lineup in the second half of the campaign following the appointment of Mikel Arteta as coach. The 24-year-old Spain international also played a key role in the club's FA Cup title run, scoring a late winner in their quarter-final victory at Sheffield United.",
             "article2": "Dani was an integral part of our team last season and finished the season in excellent form, Arteta said in a statement. I love Dani's passion and commitment and he's a highly skilful player. We're all delighted to welcome him back and we look forward to seeing him pick up where he left off.",
             "article3": "The news follows Arsenal's capture of Chelsea winger Willian on a free transfer and Lille centre back Gabriel Magalhaes earlier this week. Arsenal, who finished eighth last season, started their campaign with a penalty shootout victory over Liverpool in the Community Shield and begin their league campaign at newly-promoted Fulham on Sept 12."
         },
         {
             "id": 10,
             "title": "#SPORTS",
             "description": "Coric stages comeback to oust Tsitsipas in US Open",
             "image": "tennis_coric",
             "mins": "5mins read",
             "article1": "NEW YORK (REUTERS) - Croat Borna Coric saved six match points as he rallied from 5-1 down in the fourth set to stun Stefanos Tsitsipas 6-7 (2-7), 6-4, 4-6, 7-5, 7-6 (7-4) and send the fourth seed tumbling out of tennis' US Open in the third round on Friday (Sept 4). In the sort of late drama that would on any other year have had the Flushing Meadows crowd baying for more, Coric staged a remarkable comeback at an empty Louis Armstrong Stadium to reach the fourth round after the fifth set tiebreak.",
             "article2": "The gritty 27th seed had looked down for the count when Tsitsipas twice served for the match in the fourth set but the 22-year-old Greek faltered with victory in his grasp. Coric again had to come from a break down in the fifth but looked indefatigable even after 41/2 hours on court and secured a famous victory on his second match point.",
             "article3": "Earlier, Alexander Zverev feared his tie with Adrian Mannarino might not go ahead due to coronavirus protocols but the German secured a 6-7 (4-7), 6-4, 6-2, 6-2 win in a match delayed almost three hours due to talks between the organisers and New York health officials. The third-round clash was originally scheduled to start at 2.30pm local time (2.30am on Saturday in Singapore) at Louis Armstrong Stadium but was pushed back while the United States Tennis Association engaged in collaborative dialogue with health officials."
         },
         {
             "id": 11,
             "title": "#SPORTS",
             "description": "Ko won't defend title at LPGA's first 2020 US major",
             "image": "golf_ko",
             "mins": "3mins read",
             "article1": "LOS ANGELES (AFP) - Top-ranked reigning champion Ko Jin-young of South Korea will not defend her title at next week's LPGA ANA Inspiration, which will feature eight of the world's top 10 women's golfers. A field of 106 players was named on Friday (Sept 4) for the 49th edition of the women's major championship, which starts Thursday at Mission Hills Country Club in Rancho Mirage, California, after being postponed from April. The strongest field at any women's event since the Covid-19 pandemic shut down the LPGA season in February will feature second-ranked Danielle Kang and third-ranked US compatriot Nelly Korda.",
             "article2": "Ko has not played since last year's LPGA Tour Championship, remaining in South Korea due to the deadly virus outbreak. Also missing from the field is Germany's Sophia Popov, who won last month's Women's British Open in Scotland. Her exemption for winning the title does not begin until next year and the LPGA did not issue her a special invitation. Fourth-ranked Park Sung-hyun of South Korea and fifth-ranked compatriot Kim Sei-young will play their first major of the year after skipping last month's Women's British Open in Scotland.",
             "article3": "Seven past champions are in the lineup, including 10th-ranked Park In-bee of South Korea. The 2013 ANA champion is amoing 20 major winners in the lineup. There will be no spectators allowed as part of Covid-19 safety precautions."
         },
         {
             "id": 12,
             "title": "#SPORTS",
             "description": "Hamilton predicts 'qualifying nightmare' at Monza",
             "image": "f1_monza",
             "mins": "5mins read",
             "article1": "MONZA, ITALY (AFP) - Lewis Hamilton topped the times in Friday's second practice for the Italian Grand Prix and then warned that qualifying on Saturday (Sept 5) would be a nightmare as drivers slow down and jostle to find a slipstream. The championship-leading Mercedes driver, who outpaced team-mate Valtteri Bottas by nearly three-tenths of a second, said he anticipated a similar scenario to last year when most drivers backed off so much they failed to clock a final fastest lap.",
             "article2": "In 2019, the qualifying session ended in a fiasco that provided no real racing entertainment for the fans, but this year, without spectators, that risk is at least removed although 15 cars were bunched up running slowly on Friday. That was in spite of announcements by the stewards and race director Michael Masi not to drive slowly. Ruling body, the International Motoring Federation (FIA), told drivers they are going to be required to observe a maximum time between two points on the circuit, in a bid to eliminate the problem.",
             "article3": "Four-time champion Sebastian Vettel was 12th in the second Ferrari as the Italian team improved on their ignominious display in Belgium. It was a disappointing day too for Williams as they began an emotional weekend with rookie Nicholas Latifi 19th and George Russell 20th and last, having struggled with handling issues. The team parts company with the founding Williams family after Sunday's race."
         },
         {
             "id": 13,
             "title": "#SPORTS",
             "description": "Bergwijn scores winner as Netherlands edge Poland",
             "image": "football_bergwijn",
             "mins": "10mins read",
             "article1": "AMSTERDAM (REUTERS) - Netherlands forward Steven Bergwijn scored just past the hour mark to secure a hard-fought 1-0 win over Poland in their Nations League clash on Friday (Sept 4) as heavy home pressure finally paid dividends at the Johan Cruyff Arena.",
             "article2": "The Dutch, runners-up in last year's inaugural edition of the competition, were playing their first game since the departure of coach Ronald Koeman to Barcelona last month but kept up their crisp performances of the last two years. Bergwijn tapped the ball home in the 61st minute after a characteristic sweeping move from the Netherlands, playing under interim coach Dwight Lodeweges in their League A Group 1 match.",
             "article3": "Frenkie de Jong's sweeping ball and Hans Hateboer's assist gave Bergwijn the simple task of finishing from close range to score his first international goal."
         },
         {
             "id": 14,
             "title": "#SPORTS",
             "description": "West Brom sign winger Diangana on permanent deal",
             "image": "football_diangana",
             "mins": "3mins read",
             "article1": "LONDON (REUTERS) - West Bromwich Albion have signed winger Grady Diangana from West Ham United after a successful loan spell, the newly-promoted Premier League club said on Friday (Sept 4).Diangana has agreed a five-year deal at The Hawthorns, with British media reporting that Albion paid £18 million (S$32 million) for the former England Under-21 international.",
             "article2": "The 22-year-old contributed eight goals and six assists in 30 Championship (second-tier) appearances during his season-long loan spell at West Brom last term, helping them clinch promotion to the Premier League by finishing runners-up.",
             "article3": "West Ham said the decision to sell Diangana was made reluctantly but that the money will be reinvested to strengthen the squad in different areas. We believe that this will give us the best possible chance of ensuring we have a balanced squad to compete in the Premier League and capable of reaching our objectives and ambitions this season, the London club said in a statement."
         },
         {
             "id": 15,
             "title": "#SPORTS",
             "description": "Britain's Mo Farah breaks one-hour world record",
             "image": "mo_farah",
             "mins": "5mins read",
             "article1": "BRUSSELS (AFP) - Four-time Olympic champion Mo Farah marked his return to the track at Friday's (Sept 4) Diamond League meeting in Brussels with a stunning world record in the one-hour event. Three years after having opted for road running, Farah showed no sign of cobwebs as he ran 21.330 kilometres over the 60 minutes behind closed doors at the King Baudouin Stadium.",
             "article2": "Farah, who won 5,000-10,000m doubles for Britain at both the London and Rio Olympics, bettered Ethiopian Haile Gebrselassie's previous best of 21.285km, set back in 2007, by 45 metres. It was a formidable record: the equivalent of 52-and-a-half laps at an average of 67 seconds per lap, or 2:47min per kilometre. And at one stage, the 37-year-old Briton, also a six-time world gold medallist, looked to have dropped that vital programmed pace, with Belgian training partner Bashir Abdi still in the running.",
             "article3": "Farah and Abdi duly took of the flashing lights and upped the pace to get back on record-setting time. With five minutes to run, Abdi took the lead for the first time, sweeping Farah around on his coattails. As the gun fired for the final minute, Farah opened up his rangy stride to shoot past the Belgian and maintain his form through to a second gunshot that ended the race. Farah, who aims to compete in the 10,000m at next year's postponed Tokyo Olympics, will return to road racing next month when he acts as a pace setter in the London marathon for Kenya's world record holder Eliud Kipchoge and Ethiopian Kenenisa Bekele."
         },
         {
             "id": 16,
             "title": "#SPORTS",
             "description": "Goffin passes Krajinovic test to reach last-16 in US Open",
             "image": "tennis_goffin",
             "mins": "8mins read",
             "article1": "NEW YORK (REUTERS) - Seventh seed David Goffin was made to work hard by Serbian Filip Krajinovic before clinching a 6-1 7-6(5) 6-4 win at the US Open on Friday (Sept 4), moving into the fourth round for the fourth consecutive year at Flushing Meadows.",
             "article2": "The Belgian stormed out of the blocks to convert three break point opportunities in the opening set as Krajinovic struggled for control on his second serve. Both players converted two break points each in a seesaw second set before Goffin edged the tiebreak to claim a two-set advantage.",
             "article3": "After taking an early lead in the third set, Goffin was again pegged back by 26th seed Krajinovic but the world number 10 prevailed with a decisive break in the 10th game to seal victory in just over two hours. Goffin will face either 12th seeded Canadian power-hitter Denis Shapovalov or home favourite and number 19 seed Taylor Fritz for a place in the quarter-finals."
         },
         {
             "id": 17,
             "title": "#SPORTS",
             "description": "Chelsea sign Germany midfielder Havertz",
             "image": "football_havertz",
             "mins": "10mins read",
             "article1": "LONDON (REUTERS) - Chelsea have signed Germany's highly-rated attacking midfielder Kai Havertz from Bundesliga side Bayer Leverkusen on a five-year contract, the Premier League club announced on Friday (Sept 4). Financial details of the deal were not disclosed but British media reported the fee for the 21-year-old was in the region of £71 million (S$128 million).",
             "article2": "Havertz left the German national team camp on Friday to complete his medical before signing for the London club. Havertz, who had two years left on his Leverkusen contract, scored 46 goals with 31 assists in 150 games for the club. Having been barred from signing players last year due to a Fifa transfer ban, Chelsea have gone on a spending spree this year as manager Frank Lampard rebuilds his squad ahead of the new season.",
             "article3": "Havertz's signing follows the arrivals of full back Ben Chilwell, striker Timo Werner and winger Hakim Ziyech, with the overall outlay totalling more than £200 million. The club have also signed defenders Thiago Silva and Malang Sarr as free agents. Chelsea, who finished fourth last term to qualify for the Champions League in Lampard's first campaign in charge, begin the new season at Brighton Hove & Albion on Sept 14."
         }
     ]}

    var src = document.getElementById('sportsnews-template').innerHTML;
    var compile = Handlebars.compile(src);
    var compiledHTML = compile(sportsnews);
    document.getElementById('sportsnewsaction').innerHTML += compiledHTML;


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