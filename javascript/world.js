//world page editor's pick
var editorpicknews = {
 "news": [
     {
         "title": "#WORLD",
         "description": "Scientists see downsides to Covid-19 vaccines from Russia, China",
         "image": "covid19_vaccine",
         "link": "world.html#World1"
     },
     {
         "title": "#WORLD",
         "description": "TikTok deal faces complications as US and China ratchet up tit-for-tat",
         "image": "tiktok",
         "link": "world.html#World1"
     },
     {
         "title": "#WORLD",
         "description": "US announces Taiwan initiative, citing China pressure",
         "image": "us_taiwan",
         "link": "world.html#World1"
     },
     {
         "title": "#WORLD",
         "description": "Four more storms threaten to form in Atlantic as hurricane season heats up",
         "image": "atlantic_hurricane",
         "link": "world.html#World1"
     }
 ]}

var src = document.getElementById('editorpick-template').innerHTML;
var compile = Handlebars.compile(src);
var compiledHTML = compile(editorpicknews);
document.getElementById('editorpickaction').innerHTML += compiledHTML;



(function(window, document, $, undefined) {
  'use strict';
    //trending page editor's pick
    var worldnews = {
     "news": [
         {
             "id": 0,
             "title": "#WORLD",
             "description": "Scientists see downsides to Covid-19 vaccines",
             "image": "covid19_vaccine",
             "mins": "10mins read",
             "article1": "CHICAGO (REUTERS) - High-profile Covid-19 vaccines developed in Russia and China share a potential shortcoming: They are based on a common cold virus that many people have been exposed to, potentially limiting their effectiveness, some experts say. CanSino Biologics' vaccine, approved for military use in China, is a modified form of adenovirus type 5, or Ad5. The company is in talks to get emergency approval in several countries before completing large-scale trials, the Wall Street Journal reported last week. A vaccine developed by Moscow's Gamaleya Institute, approved in Russia earlier this month despite limited testing, is based on Ad5 and a second less common adenovirus. Vaccines are seen as essential to ending the coronavirus pandemic that has claimed over 846,000 lives worldwide. Gamaleya has said its two-virus approach will address Ad5 immunity issues. Both developers have years of experience and approved Ebola vaccines based on Ad5. Researchers have experimented with Ad5-based vaccines against a variety of infections for decades, but none are widely used. They employ harmless viruses as vectors to ferry genes from the target virus - in this case the coronavirus - into human cells, prompting an immune response to fight the actual virus.",
             "article2": "But many people already have antibodies against Ad5, which could cause the immune system to attack the vector instead of responding to the coronavirus, making these vaccines less effective. Several researchers have chosen alternative adenoviruses or delivery mechanisms. Oxford University and AstraZeneca based their Covid-19 vaccine on a chimpanzee adenovirus, avoiding the Ad5 issue. Johnson & Johnson's candidate uses Ad26, a comparatively rare strain. Dr Zhou Xing, from Canada's McMaster University, worked with CanSino on its first Ad5-based vaccine, for tuberculosis, in 2011. His team is developing an inhaled Ad5 Covid-19 vaccine, theorising it could circumvent pre-existing immunity issues. Dr Xing also worries that high doses of the Ad5 vector in the CanSino vaccine could induce fever, fueling vaccine scepticism. In China and the United States, about 40 per cent of people have high levels of antibodies from prior Ad5 exposure. In Africa, it could be has high as 80 per cent, experts said. Some scientists also worry an Ad5-based vaccine could increase chances of contracting HIV. In a 2004 trial of a Merck & Co Ad5-based HIV vaccine, people with pre-existing immunity became more, not less, susceptible to the virus that causes AIDS.",
             "article3": "Researchers, including top US infectious diseases expert Dr Anthony Fauci, in a 2015 paper, said the side effect was likely unique to HIV vaccines. But they cautioned that HIV incidence should be monitored during and after trials of all Ad5-based vaccines in at-risk populations. Gamaleya's vaccine will be administered in two doses: The first based on Ad26, similar to J&J's candidate, and the second on Ad5. Professor Alexander Gintsburg, Gamaleya's director, has said the two-vector approach addresses the immunity issue. Dr Ertl said it might work well enough in individuals who have been exposed to one of the two adenoviruses. Many experts expressed scepticism about the Russian vaccine after the government declared its intention to give it to high-risk groups in October without data from large pivotal trials."
         },
         {
             "id": 1,
             "title": "#WORLD",
             "description": "TikTok deal: US and China ratchet up tit-for-tat",
             "image": "tiktok",
             "mins": "5mins read",
             "article1": "SAN FRANCISCO (NYTIMES) - On most days, companies like ByteDance, Microsoft, Walmart and Oracle are considered kings within their fields. But over the weekend, it became increasingly clear that they can also be something else: a set of pawns. The industry titans have been caught in an escalating tit-for-tat between the United States and China over the sale of the US operations of TikTok, the viral social media app owned by Chinese Internet company ByteDance. The sale was ordered in early August by President Donald Trump, who said TikTok posed a national security threat because of its Chinese ties. For weeks, China was critical of Mr Trump's order but stayed quiet on what it would do about it. That allowed ByteDance and TikTok to pursue sale talks with potential bidders like Microsoft, Walmart, Oracle and others. Then over the weekend, Beijing threw the whole process for a loop when it updated its export control rules to include some of TikTok's key technologies - a sign that the Chinese government could exert its authority to delay or scuttle any deal at the last minute.",
             "article2": "Now a blockbuster deal that had been set to be completed soon has become far more complicated, according to three people close to the talks. The two groups vying to buy TikTok's US business - one is an alliance between Microsoft and Walmart, and the other is an offer led by Oracle - are discussing how to interpret China's new rules and how to move forward, said the people, who were not authorised to speak publicly. At the same time, the bidders are honing drafts of their offers and tweaking them as part of the negotiation process, the people said. In Washington, China's new export measures were widely seen as a potential poison pill for the TikTok deal. If China does move to block TikTok's sale, that could goad Mr Trump into taking harsher action, further escalating tensions between the US and China. Already, the Trump administration has placed sanctions on dozens of Chinese companies in recent weeks over alleged security threats and human rights violations, and it has threatened to take more measures to block Chinese tech companies like Alibaba and Baidu from doing business in the US.",
             "article3": " Mr Peter Navarro, the White House trade adviser known for his harsh criticism of China, said in an interview on Monday (Aug 31) that it was critical that Americans not use apps that are made in China because Beijing could use them to surveil, track and potentially even extort Americans. Mr Navarro said he was not part of the negotiations over TikTok's sale, a deal that was being reviewed by the Treasury Department. The White House referred a request for comment to the Treasury Department, which did not respond. Associate Professor Matt Perault from Duke University's Centre on Science and Technology Policy, said that the US and China had politicised other deals in the past, including Qualcomm's attempted acquisition of Dutch company NXP Semiconductors. In 2018, Qualcomm terminated that deal after Chinese authorities did not grant antitrust approvals for the acquisition of NXP's China operations. Even so, Assoc Prof Perault said the TikTok deal stood out because the US is on the eve of an election in which the president has made China a key component of his reelection strategy, and the company involved is one of the strongest competitors to US tech companies in a generation."
         },
         {
             "id": 2,
             "title": "#WORLD",
             "description": "US announces Taiwan initiative, citing China pressure",
             "image": "us_taiwan",
             "mins": "8mins read",
             "article1": "WASHINGTON (REUTERS) - The United States said on Monday (Aug 31) it was establishing a new bilateral economic dialogue with Taiwan, an initiative it said was aimed at strengthening ties with Taipei and supporting it in the face of increasing pressure from Beijing. Washington also said it had declassified six Reagan-era security assurances given to Taiwan, a move analysts said appeared intended to show further support for Taipei.The announcements come at a time of increasing Chinese threats towards Taiwan, and when relations between Washington and Beijing have sunk to their worse level in decades while US. US President Donald Trump campaigns for re-election in November with a tough approach to China his key foreign policy platform. The State Department's top diplomat for East Asia, David Stilwell, told a virtual forum hosted by the Conservative Heritage Foundation the latest US moves were not a policy shift, but part of a set of significant adjustments within Washington's longstanding one-China policy.",
             "article2": "Washington felt compelled to make these given the increasing threat posed by Beijing to peace and stability in a vitally important region and Beijing's attempts to isolate Taiwan diplomatically while subjecting it to military threats. Taiwan’s Foreign Ministry expressed thanks for the show of support at a time when it said China was using military intimidation to damage peace and stability near Taiwan, and said it would continue to strengthen its defence capabilities. The United States, like most countries, has official relations with Beijing, but not Taiwan, which is claimed by Beijing as Chinese territory. However, Washington is bound by law to help Taiwan defend itself and is its main arms supplier. Daniel Russel, a predecessor of Stilwell until early in the Trump administration, said the Six Assurances had been a loosely-kept secret at best.",
             "article3": "He said the decision to publish them looked like a compromise response to pressure from administration hawks to abandon strategic ambiguity - a long-standing policy of withholding a clear-cut US commitment to defend Taiwan while still showing sufficient support to deter any Chinese military adventurism. Among the assurances made in 1982, but never formally made public, are statements that the United States has not set a date for ending arms sales to Taiwan, nor agreed to prior consultation with Beijing on such sales, or to revise the Taiwan Relations Act that underpins US policy towards the island. The assurances, Stilwell said, endure today. Douglas Paal, a former US representative to Taiwan, said the move appeared largely for show. Monday's announcements come several months after Taiwan Semiconductor Manufacturing Co Ltd, the world's biggest contract chipmaker, announced plans to build a $12 billion factory in Arizona as the Trump administration stepped up efforts to cut back supply chains dependency on China. Taiwan has been keen to negotiate a free trade agreement with the United States, but a large US trade deficit, which Trump has been determined to reduce along with those of other trading partners, including China, has been an obstacle to this."
         },
         {
             "id": 3,
             "title": "#WORLD",
             "description": "Four more storms threaten to form in Atlantic",
             "image": "atlantic_hurricane",
             "mins": "8mins read",
             "article1": "NEW YORK (BLOOMBERG) - Four potential tropical systems are threatening to form in the Atlantic, including a patch of thunderstorms off the Carolinas with a 70 per cent chance of being the Atlantic's next named storm within five days. The system, about 240km south-east of Wilmington, North Carolina, appears to be heading harmlessly out to sea, said Mr Rob Miller, a meteorologist with AccuWeather Inc.",
             "article2": " A second potential storm in the Caribbean Sea could pose more of a threat, with an 80 per cent chance of reaching tropical strength. It's unlikely to hit the US but could slam into Central America, where storms can be especially deadly because heavy rain can trigger mudslides. The third and fourth systems are near Africa, but forecasters don't expect them to reach tropical strength within the next two days.",
             "article3": "The 2020 hurricane season has entered its most active phase and usually peaks about Sept 10. The US has been hit by seven of the 13 storms to form across the Atlantic in 2020, including Hurricane Laura. It killed more than a dozen people across the Caribbean and US last week and likely caused as much as US$8 billion (S$10.9 billion) in insured losses when it struck Louisiana, according to AIR Worldwide, a risk modelling firm."
         },
         {
             "id": 4,
             "title": "#WORLD",
             "description": "Cold viruses are being used in Covid-19 vaccines",
             "image": "covid19_vaccine_russia",
             "mins": "5mins read",
             "article1": "TORONTO (REUTERS) - The modified common cold viruses behind high-profile Covid-19 vaccine candidates from China's CanSino Biologics and Russia's Gamaleya Institute have been studied for decades, but are still not widely used. The modified adenovirus type 5 (Ad5) viruses used in these vaccines were first created by Canadian researcher Frank Graham at a Dutch lab in the 1970s. Dr Graham planned to use them to study mechanisms underlying cancer, and distributed the human kidney cell line that makes them, called HEK293, to researchers all over the world. The cells became tremendously widespread and popular among researchers, said Dr Graham, now retired in Italy. Vectors are materials used as mechanisms to carry genetic information into human cells. Modified viruses that cannot replicate on their own and so will not cause infection can be used as vectors to carry genes from the target virus into human cells to induce an immune response against that virus.",
             "article2": "Ad5 vectors were tested in early gene therapy, which aims to install a missing gene or replace a mutated or damaged one. They were largely abandoned after an 18-year-old died in 1999 from an immune system overreaction after receiving a large dose during a gene therapy trial. Some researchers believe the strong immune response that caused problems with gene therapy makes these vectors well suited to vaccines, where much lower doses are used and a protective immune response is the objective. At McMaster University in Canada, Dr Graham and collaborators developed a variety of Ad5 vectors, including for a rabies vaccine used on wild raccoons in the province of Ontario. He and other researchers began developing an Ad5-based vaccine against severe acute respiratory syndrome (Sars) in 2003 and published preclinical data. It was set aside when that pandemic ended. In 2011, CanSino licensed an experimental tuberculosis vaccine based on Ad5 from McMaster researchers.",
             "article3": "The Chinese company's focus later shifted to an Ad5-based Ebola vaccine at the request of the Chinese military, according to Dr Thomas Evans, current chief scientific officer at Vaccitech, who was involved with the tuberculosis project. The Ebola vaccine was approved for military use in 2017. Russia's Gamaleya Research Institute, which developed Russia's coronavirus vaccine, also used the Ad5 platform to develop an Ebola vaccine, which they said has been administered to about 2,100 people. In addition to the Ad5-based Covid-19 vaccines, an inhaled version of the experimental tuberculosis vaccine is still under development at McMaster, Dr Zhou Xing told Reuters. His team is also in the early stages of developing an inhaled Covid-19 vaccine, testing Ad5 and another vector based on a chimpanzee adenovirus."
         },
         {
             "id": 5,
             "title": "#WORLD",
             "description": "Amazon gets US approval to fly delivery drones",
             "image": "amazon_drones",
             "mins": "10mins read",
             "article1": "SAN FRANCISCO (AFP) - Amazon on Monday (Aug 31) said a freshly-issued Federal Aviation Administration certificate has cleared the launch pad for drone deliveries in the US. The Seattle-based e-commerce colossus has been developing drones as part of its massive investment in a logistics network to quickly deliver purchases to customers. This certification is an important step forward for Prime Air and indicates the FAA's confidence in Amazon's operating and safety procedures for an autonomous drone delivery service that will one day deliver packages to our customers around the world,- Amazon vice president David Carbon said in reply to an AFP inquiry.",
             "article2": "Amazon planned to use the certification to test using fully-electric drones to deliver items to customers. Evidence that drone operations are safe was required to get the certification. Package delivery giant UPS late last year obtained US regulatory approval to operate a drone airline and planned to expand its airborne operations in healthcare and other sectors. UPS said at the time that it received full certification from the FAA, allowing it to fly an unlimited number of drones with an unlimited number of remote operators. A variety of companies ranging from new startups to major tech firms such as Google-parent Alphabet are working on autonomous drone delivery.",
             "article3": "Last year, Alphabet's drone project Wing was certified as an air carrier by the FAA, clearing the regulatory path for it to make delivers to buyers. The Wing team completed its first real-world deliveries in 2014 in rural Australia where they successfully transported first-aid supplies, candy bars, dog treats, and water to farmers, according to the company's website. Two years after that, Wing drones were used to deliver burritos to students at a university in Virginia."
         },
         {
             "id": 6,
             "title": "#WORLD",
             "description": "Total US cases top 6m as Midwest states",
             "image": "us_outbreak",
             "mins": "3mins read",
             "article1": "NEW YORK • US cases of the coronavirus have surpassed six million as many states in the Midwest reported increasing infections, a Reuters tally on Sunday showed. Iowa, North Dakota, South Dakota and Minnesota have recently reported record one-day increases in new cases, while Montana and Idaho are seeing record numbers of hospitalised Covid-19 patients. Nationally, metrics on new cases, deaths, hospitalisations and the positivity rates of tests are all declining, but there are emerging hot spots in the Midwest. Many of the new cases in Iowa are in the counties that are home to the University of Iowa and Iowa State University, which are holding some in-person classes. Colleges and universities around the country have seen outbreaks after students returned to campus, forcing some to switch to online-only learning.",
             "article2": "New York Governor Andrew Cuomo said on Sunday that his state was sending a Swat team to a State University of New York (SUNY) campus in Oneonta, in upstate New York, to contain a Covid-19 outbreak. Autumn classes, which started last week at the college, were suspended for two weeks after more than 100 people tested positive for the virus, SUNY chancellor Jim Malatras said. Across the Midwest, infections have also risen after an annual motorcycle rally in Sturgis, South Dakota, drew more than 365,000 people from across the country from Aug 7 to 16. The South Dakota health department said 88 cases have been traced to the rally. More than eight months into the pandemic, the United States continues to struggle with testing. The number of people tested has fallen in recent weeks. Many health officials and at least 33 states have rejected the new Covid-19 testing guidance issued by the Trump administration last week that said those exposed to the virus but not showing any symptoms may not need testing.",
             "article3": "Public health officials believe the US needs to test more frequently to find asymptomatic carriers in order to slow the spread of the disease. While the US has the most number of recorded infections in the world, it ranks 10th based on cases per capita, with Brazil, Peru and Chile having higher rates of infection, according to the Reuters tally. The US also has the most deaths in the world at over 187,000 but ranks 11th for deaths per capita, exceeded by countries such as Sweden, Brazil, Italy, Chile, Spain and the United Kingdom."
         },
         {
             "id": 7,
             "title": "#WORLD",
             "description": "Portland shooting amplifies tensions in US",
             "image": "portland_shooting",
             "mins": "8mins read",
             "article1": "PORTLAND (NYTIMES) - A fatal shooting in Portland, Oregon, over the weekend led President Donald Trump to unleash a torrent of tweets and attacks on Sunday (Aug 30), capping a volatile week of street violence that is becoming a major theme in the final weeks of the 2020 campaign. On Saturday, a man affiliated with a right-wing group was shot and killed as a large caravan of supporters of Mr Trump drove through downtown Portland, where nightly protests have unfolded for three consecutive months. No suspect has been publicly identified and the victim's name has not been released. The shooting came in the same week that a 17-year-old armed with a military-style weapon was charged with homicide in connection with shootings during a protest in Kenosha, Wisconsin, that left two people dead and one injured. The pro-Trump rally in Portland drew hundreds of trucks filled with supporters and adorned with Trump flags into the city. At times, Trump supporters and counterprotesters clashed in the streets, with fistfights occurring and Trump supporters shooting paintball guns from the beds of pickup trucks as protesters threw objects at them. Mr Trump on Sunday morning posted or reposted a barrage of tweets about the clashes in Portland, with many of them assailing the city's Democratic mayor, Mr Ted Wheeler. The President retweeted a video showing his supporters shooting paintballs and using pepper spray on crowds in Portland before the fatal shooting. Mr Trump wrote that the big backlash going on in Portland cannot be unexpected, a remarkable instance of a President seeming to support confrontation rather than calming a volatile situation. The shooting immediately reverberated in a presidential campaign now entering its most intense period, and came on the heels of a Republican National Convention in which the President had sought to reframe the 2020 race as a law and order election.",
             "article2": "Over the weekend, officials with Mr Joe Biden's campaign were inundated with concern and unsolicited advice from supporters and allies suggesting the need for a forceful and frontal response. Mr Biden issued a statement on Sunday accusing Mr Trump of recklessly encouraging violence, while condemning violence unequivocally himself. Mr Biden will follow up with a speech in Pittsburgh on Monday, and discussions are underway for a possible trip to Kenosha soon. But the Biden campaign wants to avoid being drawn into a prolonged period of focus on unrest in the streets that campaign officials see as an effort by the Trump campaign to distract from the coronavirus pandemic and the resulting economic downturn, which has forced millions into unemployment. At the same time, Mr Chad F. Wolf, the acting secretary of homeland security, on Sunday left open the potential of sending federal law enforcement to quell the unrest in Portland. During an interview on ABC's This Week, Mr Wolf said all options continue to be on the table to deploy more federal agents to Portland despite the strong opposition of local leaders, who say such tactical teams have only heightened tensions. Mr Wheeler, at an afternoon news conference at City Hall, said the shooting had left his heart heavy, and he denounced violence. But he pointed to Trump's combative and unyielding message as a generator of the nation's escalating polarisation and violence, and he called on the President to work with him and others to help de-escalate tensions.",
             "article3": "The escalating tensions and violence over the past week came three months after the killing of Mr George Floyd in police custody in Minneapolis. Mr Floyd's death prompted a national outcry over policing and racial injustice, spurring protests in cities across the country, some of which have been accompanied by looting and violence. For now, the Biden campaign is trying to focus on what it says is the irony that Trump is the current president, yet is trying to blame his challenger for the scenes of violence during his tenure. While protests in Portland have persisted, their size has changed over time. The nightly events began with mass demonstrations after Mr Floyd's death, then shrank to smaller numbers of people who repeatedly clashed with the police. In July, when the federal government sent camouflaged agents into the city, the number of protesters grew drastically once again. In more recent days, the protest crowd has typically numbered just a few hundred people. On Friday, after a peaceful demonstration in front of Mr Wheeler's residence, a crowd went to a police association building, where some of the protesters set fire to the front of the building before the police dispersed the crowd. The police have made dozens of arrests in recent days as they have chased protesters through the streets, at times knocking them to the ground. The police said they had made 10 arrests on Saturday night, although it was not immediately clear how many were participants in the pro-Trump rally and how many were countering the event."
         },
         {
             "id": 8,
             "title": "#WORLD",
             "description": "Firefighters make headway against California wildfires",
             "image": "california_wildfires",
             "mins": "10mins read",
             "article1": "LOS ANGELES (REUTERS) - California fire officials on Sunday (Aug 30) reported significant headway battling the two largest of dozens of lighting-sparked blazes raging in and around the greater San Francisco Bay area since mid-August, though 60,000 people remained under evacuation. As of Sunday firefighters had managed to carve containment lines around 56 per cent of the perimeter of a colossal wildfire that has burned more than 375,000 acres (151,757ha) across five counties north of the bay, including a swath of the Napa and Sonoma valley wine country region. That marked a major gain from 41 per cent containment listed a day earlier for the blaze, dubbed the LNU Lightning Complex fire, according to the California Department of Forestry and Fire Protection (CalFire).",
             "article2": "Containment of a slightly larger fire called the SCU Lightning Complex, which has charred more than 377,000 acres in four counties east and south of the bay, grew to 50 per cent on Sunday, up from 40 per cent on Saturday, CalFire said. Those two blazes together - which rank as the second- and third-largest wildfires on record in California - account for half of total acreage set ablaze during the past two weeks in a series of catastrophic lightning storms. Firefighters, helped by cooler weather after a record-breaking heat wave abated, have gained ground elsewhere across the state, as well. Nearly 14,00 lightning strikes, mostly in central and northern California, have ignited hundreds of individual fires since Aug 15, many of which merged into bigger conflagrations. Those fires have collectively charred more than 1.42 million acres - a landscape larger than the state of Delaware, according to CalFire. Seven fatalities have been confirmed, and nearly 2,500 homes and other structures have been reduced to ruin. Smoke from the fires also badly degraded air quality throughout the region, adding to health hazards already posed by the coronavirus pandemic.",
             "article3": "While CalFire said more than 60,000 residents remained displaced throughout the fire zone as of Sunday morning, Ms McMorrow said quite a few evacuation orders and warnings were being lifted. Meteorologists said the recent spate of dry lightning, the heaviest seen in California in more than a decade, was linked to the same atmospheric high-pressure system that caused a lengthy heat wave, which in turn further desiccated dense, fire-prone vegetation across the state. Scientists point to lengthy droughts and longer-than-normal stretches of extreme heat as evidence of climate change that has steadily intensified and prolonged wildfire season in California and across the Western United States in recent years. Climatologist Zach Zobel said California is on track to overtake the nearly 2 million acres burned in 2018, when the state suffered its deadliest wildfire in history, as well as the most acreage burned on record gong back to 1987."
         },
         {
             "id": 9,
             "title": "#WORLD",
             "description": "Children back to school amidst coronavirus fears",
             "image": "european_school",
             "mins": "5mins read",
             "article1": "PARIS (AFP) - French pupils go back to school on Tuesday (Sept 1) as schools across Europe open their doors to greet returning pupils this month, nearly six months after the coronavirus outbreak forced them to close and despite rising infection rates across the continent. Many teachers and parents are worried the reopening of schools will accelerate the spread of Covid-19, but governments have insisted it should go ahead. French children return to school on Tuesday, after a two-month long summer break that followed two weeks of obligatory schooling just before the holidays. Teachers and pupils between 11 and 18 will be required to wear masks both indoors and outdoors. Pupils in Belgium will also return to school on Tuesday, while those in Germany went back last month. Masks will also be compulsory in Greece, where children are expected to return to school next Monday with a maximum of 25 children per class.",
             "article2": "In England and Wales - where children return to school this week after a six-month closure - the government initially said masks in schools would not be necessary, but reversed its policy last Wednesday. The new guidance advises secondary school students aged 11 to 18 and staff to wear face coverings in corridors and communal areas, in places with local virus restrictions. The Spanish government has insisted all children over the age of six must wear masks at all times and wash their hands at least five times a day. Children should maintain a distance of 1.5m from each other, and regional governments have hired additional teachers to reduce class sizes. But many Spanish teachers and parents feel the measures are not enough, or have been adopted too close to the start of classes to be properly implemented.",
             "article3": "Ms Mercedes Sardina, a teacher's representative in Fuenlabrada on Madrid's southern outskirts, said she doubted the regional government would be able to hire all the teachers it had promised. She likened it to trying to stage a wedding in three days, when you haven't done anything. You haven't even bought your dress. Anxious parents said above all they wanted to avoid another lockdown. Individual schools may have to close again, but the closures will be decided on a case-by-case basis, French Education Minister Jean-Michel Blanquer said on Monday."
         },
         {
             "id": 10,
             "title": "#WORLD",
             "description": "Germany wants end to coronavirus border chaos",
             "image": "germany_border_chaos",
             "mins": "5mins read",
             "article1": "BRUSSELS (AFP) - Germany wants to put an end to the chaotic approaches by EU member states to travel restrictions within Europe as a new wave of coronavirus cases gains momentum across the continent. Berlin currently holds the EU's rotating presidency, which has been dominated by Europe's response to the coronavirus pandemic. That response has often sown chaos as member states rashly went their own way to fight the virus, most damagingly by shutting borders without notice and thus wreaking havoc on the economy.",
             "article2": "The matter became more urgent on Friday when Hungary announced a blanket ban on non-residents entering its territory starting on Tuesday, replaying the sudden go-it-alone decisions seen earlier in the crisis. Ahead of a meeting of member state envoys on Wednesday, Germany presented a discussion paper, seen by AFP, which offered several proposals for greater cooperation. In it, Berlin emphasised that it is still the responsibility of each member state to take the measures it considers appropriate. However, a fragmented approach to travel restrictions must be avoided in order to not repeat the chaotic situation in March, when countries shut down borders without consultation.",
             "article3": "The paper in particular asked for an EU-agreed list of risk areas based on common criteria and data. Right now, different member states use different criteria to impose travel restrictions, and these can land without warning, as in Hungary's case. There are also myriad ways to categorise risk, with some countries using two colours for classification - for example green and red - while others use three, four or none at all, the paper said. The paper also recommended agreement on epidemiological thresholds that would trigger restrictions, which now exist in a variety of indicators across member states. The European Commission, the EU's executive arm, said it backed the effort and urged countries away from blanket bans, which were not effective, it said."
         },
         {
             "id": 11,
             "title": "#WORLD",
             "description": "EU microplastics ban needs to aim smaller, advisers say",
             "image": "microplastics_ban",
             "mins": "3mins read",
             "article1": "BRUSSELS (REUTERS) - A draft EU ban on microplastics would allow industry to use even smaller particles in cosmetics, detergents and paints, which could be more damaging than the tiny pieces of plastic already clogging up the natural world, campaigners and some EU advisers say. The Commission, the EU executive, will next year seek a ban following a proposal from EU agency the European Chemicals Agency (ECHA) to prevent the addition of microplastics to certain products sold in Europe. ECHA originally sought to prohibit microplastics with a minimum size of 1 nanometre (nm) for particles and 3 nm for fibres. But after input from expert groups and industry, it increased the minimum size for particles by 100 times to 100 nm.",
             "article2": " Analysis by the non-profit network European Environmental Bureau (EEB), published on Tuesday (Sept 1), said this would allow companies to use smaller nanoplastic particles.ECHA told Reuters it increased the size limit to ensure the restriction could be enforced, after industry groups said it is not possible to monitor the smallest particles. European chemicals industry group CEFIC is among those seeking the exclusion of smaller nanoplastics from the ban. Most intentionally added microplastics are bigger than 100 nm, although smaller particles are added to some cosmetics and laundry detergents.",
             "article3": "The Committee for Risk Assessment, an expert group advising the Commission, said there is a significant knowledge gap, but research suggests smaller particles are more toxic and can penetrate deeply into the cells of marine life. In Europe, around 42,000 tonnes of intentionally-added microplastics are released into the environment annually. Microplastics, which are also created when bigger pieces of plastic litter break up over time, have been found in almost all environments investigated, including polar sea ice and the deepest ocean trenches."
         },
         {
             "id": 12,
             "title": "#WORLD",
             "description": "Israel PM: 'Many more' secret talks with Arab leaders on ties",
             "image": "israel_arab",
             "mins": "5mins read",
             "article1": "ERUSALEM (AFP, REUTERS) - Israel is in secret talks with several Arab states on establishing ties, in addition to its US-backed deal struck with the UAE, Prime Minister Benjamin Netanyahu said Sunday (Aug 30). The historic flight follows the Aug 13 announcement of a US-brokered agreement to normalise relations between the two countries, making the UAE the first Gulf country and only the third Arab state to establish relations with Israel after Egypt and Jordan. The Monday morning flight will carry a US-Israeli delegation led on the American side by White House adviser Jared Kushner, who stood next to Netanyahu during the Israeli premier's remarks. President Donald Trump’s national security adviser said on Sunday more Arab and Muslim countries were likely to follow the United Arab Emirates in normalising relations with Israel. The White House official, Robert O’Brien, and Mr Kushner met Mr Netanyahu in Jerusalem on the eve of talks in Abu Dhabi on Monday on finalising formal Israel-UAE ties. The Israel-UAE deal reshapes the Middle East order, from the Palestinian issue to relations with Iran. ",
             "article2": "He did not name the states, but Israeli officials have publicly mentioned Oman, Bahrain and Sudan. Palestinians have condemned the UAE’s move as abandonment of a policy of linking official relations with Israel to achievement of Palestinian statehood in territory captured by Israel in a 1967 war. The Trump administration has been trying to coax other Sunni Arab countries that share Israel’s concerns about Iran to join in a regional peace push. Mr Kushner, speaking alongside Mr Netanyahu and Mr O’Brien, said the UAE deal was a “giant step forward” in the direction. Mr Kushner, Mr O’Brien and other US officials will join an Israeli delegation on Monday in the first flight by an Israeli commercial airline – El Al – to the UAE. Speaking on Israel’s Kan public radio on Sunday, Israeli Regional Cooperation Minister Ofir Akunis said Israel hopes to hold a signing ceremony in Washington for the UAE deal by mid-September. ",
             "article3": "In the Israeli-occupied West Bank, Hanan Ashrawi, a member of the Palestine Liberation Organization’s executive committee, said Mr Kushner and his team were “scrambling to convince as many Arab and Muslim leaders as possible” to attend a White House signing event and give Mr Trump a boost ahead of the Nov 3 US  presidential election. On Saturday, the UAE announced it was scrapping its economic boycott against Israel. Officials from the two countries have said they are looking at cooperation in defence, medicine, agriculture, tourism and technology. Mr Netanyahu told reporters that abolishing “the anachronistic boycott” opened the door for “unbridled” trade, tourism and investment. Statements issued by the UAE and Israel on Sunday said the UAE minister of state and Israel’s agriculture minister spoke by phone last Friday (Aug 28) and “pledged to collaborate on projects that address food and water security”. The UAE, a desert state, relies on imports for around 80 per cent to 90 per cent of its food, and has heavily encouraged investments in recent years in agricultural technology and farmland investments abroad."
         },
         {
             "id": 13,
             "title": "#WORLD",
             "description": "Canada to buy Novavax and J&J's Covid-19 vaccines",
             "image": "covid19_canada",
             "mins": "10mins read",
             "article1": "OTTAWA (REUTERS) - Canada reached an agreement in principle on Monday (Aug 31) with both Novavax and Johnson & Johnson for millions of doses of their experimental coronavirus vaccines, Prime Minister Justin Trudeau said. Canada's two agreements follow separate deals with Pfizer Inc and Moderna Inc announced weeks ago, and are the latest example of countries rushing to secure access to vaccines.",
             "article2": "Last week, Canada's National Research Council said it had ended its partnership on a coronavirus vaccine with China's CanSino Biologics because the company lacked the authority to ship the vaccine. Novavax said it expects to finalize an advance purchase agreement to supply doses of the vaccine, beginning as early as the second quarter of next year. Novavax has agreed to supply up to 76 million doses of its experimental vaccine, while Johnson & Johnson will supply up to 38 million doses of its vaccine candidate.",
             "article3": "Both agreements are subject to the vaccines obtaining licenses from Health Canada, the companies said. Financial terms of the agreement were not disclosed."
         },
         {
             "id": 14,
             "title": "#WORLD",
             "description": "Statue of Canada's first prime minister toppled by protesters",
             "image": "canada_statue",
             "mins": "3mins read",
             "article1": "TORONTO (REUTERS) - A statue of Canada's first Prime Minister Sir John Macdonald was toppled in downtown Montreal by protesters marching in support of defunding police, government officials said. The incident occurred at the end of a peaceful march on Saturday (Aug 29) when a group of people climbed the monument and pulled down the statue, causing the head to fly off, according to video posted on social media. Calls to defund the police have been growing across the United States and Canada, after a spate of violent incidents involving police.",
             "article2": "The death of George Floyd, a Black man, while in the custody of Minneapolis police in May sparked global protests about racial inequality and police brutality, and renewed pledges from some to fight racism. In June, a video showing a forceful arrest of a Canadian indigenous leader by the Royal Canadian Mounted Police raised questions about the use of force by the police. The statue of Mr Macdonald has been the site of repeated acts of graffiti in recent years, and it has often been covered in red paint.",
             "article3": "Saturday's incident drew quick condemnation from political leaders. Newly elected leader of Canada's main opposition Conservative Party, Erin O'Toole, said, We will not build a better future by defacing our past."
         },
         {
             "id": 15,
             "title": "#WORLD",
             "description": "Brazil surpasses 120,000 Covid-19 deaths on 29 Aug",
             "image": "covid19_brazil",
             "mins": "5mins read",
             "article1": "RIO DE JANEIRO (AFP) - Just over six months after registering its first case of the new coronavirus, Brazil crossed the grim threshold of 120,000 people killed by Covid-19 Saturday (Aug 29), with no end in sight to the crisis. The country of 212 million people has now registered 120,262 deaths from the virus and 3,846,153 infections, the health ministry said in its daily update. Brazil is just the second country to surpass a death toll of 120,000 in the pandemic, after the United States, where the number killed is now more than 182,000. Unlike in Europe and Asia, where the virus hit hard and then subsided, Brazil's outbreak is advancing at a slow but devastating pace, said Christovam Barcellos, a researcher at public health institute Fiocruz.",
             "article2": "Brazil confirmed its first case of the virus on Feb 26, a Sao Paulo businessman returning from a trip to Italy. It recorded its first death on March 16. The pandemic soon turned political in Latin America's largest country. President Jair Bolsonaro condemned the hysteria around the virus, and attacked governors and mayors who imposed lockdown measures, arguing the economic damage would be worse than the disease itself. The far-right leader has instead pushed the drug hydroxychloroquine as the solution to the health crisis, despite studies showing it is ineffective against Covid-19. He again said Saturday the controversial medication had saved thousands of victims' lives in Brazil. Bolsonaro even took what he called the right-wing drug himself when he was diagnosed with the virus in July.",
             "article3": "Brazil's economy, the biggest in Latin America, is meanwhile heading for a record recession this year because of the fallout. The economy ministry estimates GDP contracted by eight to 10 per cent in the second quarter of 2020, and economists are predicting a contraction of more than five per cent for the year. But Bolsonaro, paradoxically, is as popular as ever. The president, who took office in January 2019, received the best approval rating of his term earlier this month, 37 per cent, up five points from June, according to leading polling firm Datafolha. It found he was performing particularly well among poor Brazilians who have been receiving monthly stimulus payments of 600 reals (S$151) to offset the economic pain of the pandemic. The former army captain had an approval rating of 42 per cent among recipients of the temporary stimulus payments. The poll also found 47 per cent of Brazilians do not blame Bolsonaro for the country's Covid-19 death toll, while just 11 per cent saw him as the main culprit. Other recent polls have also found the man dubbed the Tropical Trump has rebounding popularity and a strong chance at re-election in 2022."
         },
         {
             "id": 16,
             "title": "#WORLD",
             "description": "Brazil, says will keep fighting Amazon deforestation",
             "image": "amazon_deforestation",
             "mins": "8mins read",
             "article1": "BRASILIA/POCONÉ (REUTERS) - In a dramatic u-turn, Brazil's Environment Ministry said on Friday (Aug 28) it would continue to fight deforestation, reversing its position after saying hours earlier that it could not afford to continue enforcement efforts in the Amazon. The ministry, through its enforcement arm Ibama and its parks service ICMBio, plays a vital role in combating deforestation with teams deployed on frequently dangerous missions to catch illegal loggers and miners in the world's largest rainforest. So the original announcement on Friday afternoon that it would cease all operations from Monday came as a shock, especially amid rising deforestation and growing criticism of Brazil's environmental policy from environmental groups as well as international investors. Last year an area about the size of Lebanon was cleared in the Amazon.",
             "article2": "The ministry cited a decision by Brazil's Federal Budget Secretariat (SOF), to block certain funds that had been allocated to Ibama and ICMBio. The ministry said the SOF's move ultimately was ordered by the office of the chief of staff for right-wing President Jair Bolsonaro. But Vice-President Hamilton Mourão, who Mr Bolsonaro has put in charge of Brazil's Amazon response, quickly denied the funds had been pulled. He accused Environment Minister Ricardo Salles of jumping the gun.",
             "article3": "Mr Mourão said the government was looking to take money out of almost every ministry to fund emergency aid payments Brazilians are receiving during the economic downturn brought about by the novel coronavirus pandemic. He said the Environment Ministry's announcement was based on an unfinalised planning document. Later in the evening, the Environment Ministry officially reversed course. The Environment Ministry discloses that Ibama and ICMBio resources were unblocked this afternoon and, as a result, operations to combat illegal deforestation will continue normally, it said."
         },
         {
             "id": 17,
             "title": "#WORLD",
             "description": "Peru passes Belgium as world's deadliest Covid-19 hot spot",
             "image": "covid19_peru",
             "mins": "10mins read",
             "article1": "LIMA (BLOOMBERG) - Peru has set another grim record by reporting the highest number of deaths per capita from the coronavirus. With 28,277 confirmed deaths from Covid-19, or 86.2 per 100,000 inhabitants, Peru on Thursday (Aug 27) overtook Belgium as the nation with the most victims, according to data compiled by Johns Hopkins University, the IMF and Bloomberg. It comes a week after the South American nation of 33 million posted the world's deepest economic contraction in the second quarter following a drastic lockdown.",
             "article2": "More than five months after reporting its first case, Peru has one of the world's worst outbreaks by other measures, too. Over the past seven days, no country has posted more cases. It's also among nations with most fatalities by population size over the past week. The outbreak has been so bad that as much as a quarter of Lima's 12 million population may have already had the virus, according to a government study published last month. Officials warn the country's real death toll may be close to double the official figure.",
             "article3": "Yet there are signs Peru may be past the worst of the pandemic. While the country reported 153 deaths on Thursday, the number of hospitalised patients had fallen 9.2 per cent from a peak reached 10 days earlier. Despite locking the entire country down early and aggressively, the government has struggled to get control of its outbreak. Cases surged after lockdown measures were eased in July, prompting a ban on social and family gatherings and also delaying plans for reopening the economy."
         }
     ]}

    var src = document.getElementById('worldnews-template').innerHTML;
    var compile = Handlebars.compile(src);
    var compiledHTML = compile(worldnews);
    document.getElementById('worldnewsaction').innerHTML += compiledHTML;


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



//video gallery
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
//  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
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