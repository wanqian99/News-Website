//trending page editor's pick
var editorpicknews = {
 "news": [
     {
         "title": "#POLITICS",
         "description": "Ignoring warnings, Trump again suggests supporters should try to vote twice",
         "image": "trump_vote",
         "link": "politics.html#Politics1"
     },
     {
         "title": "#POLITICS",
         "description": "Barr says streets are 'safer' after killing of an alleged Antifa member",
         "image": "barr_antifa",
         "link": "politics.html#Politics1"
     },
     {
         "title": "#POLITICS",
         "description": "Fight over Cruz's school choice plan threatens Senate GOP unity on new stimulus",
         "image": "cruz_senate",
         "link": "politics.html#Politics1"
     },
     {
         "title": "#POLITICS",
         "description": "Fauci unsure what Trump means by saying the country is 'rounding the corner on the virus'",
         "image": "fauci_virus",
         "link": "politics.html#Politics1"
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
             "title": "#POLITICS",
             "description": "Trump suggests supporters should try to vote twice",
             "image": "trump_vote",
             "mins": "10mins read",
             "article1": "Washington (CNN)President Donald Trump suggested to his supporters on Friday night that if they vote by mail they should also attempt to vote in person as a way to check that their vote is counted, which risks causing chaos at the polls and undermining confidence in the election. In a North Carolina telerally Friday night, which was later posted on Facebook, Trump spent the first few minutes of the call explaining in detail how he wanted his voters to vote. If they vote by mail, they should go to their polling place anyway to see whether or not your mail-in vote has been tabulated or counted, Trump said, noting that if it's been counted, they won't be able to vote.",
             "article2": "It's a federal crime to vote twice in the same election, and it's also a felony in almost every state, including North Carolina. Trump also addressed the possibility that a voter's mail-in ballot would be tabulated after they had voted in person. The call ratchets up Trump's previous insinuations that voters should cast ballots twice, which would be illegal. Such attempts would almost certainly be unsuccessful but could serve to further sow confusion about the election, which has already been upended by the coronavirus pandemic and unprecedented demand for mail-in voting.",
             "article3": "Trump has frequently and baselessly assailed mail-in voting as prone to fraud. Several states have expanded their mail-in voting options this year because of the coronavirus pandemic, but the Trump campaign and the Republican Party are fighting several of them in court. Following Trump's and Barr's comments on Wednesday, Colorado Secretary of State Jena Griswold warned voters against attempting to vote twice."
         },
         {
             "id": 1,
             "title": "#POLITICS",
             "description": "Barr: streets are 'safer' after killing of Antifa member",
             "image": "barr_antifa",
             "mins": "5mins read",
             "article1": "(CNN)Attorney General William Barr applauded on Friday the killing of a suspected murderer, who was a self-proclaimed member of Antifa. Barr's statement, in part, said that the streets of our cities are safer with this violent agitator removed. Barr was referring to Michael Forest Reinoehl who allegedly killed Aaron Jay Danielson during an August 29 protest in Portland, Oregon. For weeks, Barr has said that federal authorities have been gathering intelligence related to isolated members of Antifa traveling to protests across the country.",
             "article2": "Reinoehl fled the scene and a warrant was issued for his arrest. Members of the US Marshals, FBI, state and local law enforcement tracked down Reinoehl Thursday night in Olympia, Washington. When law enforcement officers attempted to arrest Reinoehl he tried to escape, produced a firearm and was shot and killed, said Barr.",
             "article3": "The streets of our cities are safer with this violent agitator removed, and the actions that led to his location are an unmistakable demonstration that the United States will be governed by law, not violent mobs, said Barr."
         },
         {
             "id": 2,
             "title": "#POLITICS",
             "description": "Cruz's school choice plan threatens Senate GOP unity",
             "image": "cruz_senate",
             "mins": "8mins read",
             "article1": "(CNN)Senate GOP leaders are working to limit defections from their party's latest economic stimulus package, which they were hoping to vote on as soon as next week to provide a clear election-year contrast with Democrats. But behind the scenes, they are running into a new hurdle: Sen. Ted Cruz and his push for a controversial school choice plan that has divided the Senate Republican Conference.",
             "article2": "GOP leaders have been working for weeks with their 53-member Senate conference in an effort to ensure that 51 senators will vote to advance their plan. Republicans now privately acknowledge that they will likely need next week to iron out their differences -- with their first full conference meeting on Wednesday -- potentially putting off the showdown vote over their economic stimulus plan until the third week of September. On private conference calls, Cruz, a Texas Republican who ran for president in 2016 and might again in 2024, has been lobbying Republicans to include billions in tax credits to expand school choice, an idea with strong support among GOP voters but one that critics say would hurt public school systems.",
             "article3": "Sources on the calls told CNN that Cruz has argued the coronavirus pandemic has showcased the weakness of public school systems and that Republicans should get behind an idea that the party is advocating this election year, including at last month's Republican National Convention. Cruz has argued that there's little in the bill as it's being developed that he could get behind, suggesting he could vote against the plan if school choice is not included, according to sources on the call."
         },
         {
             "id": 3,
             "title": "#POLITICS",
             "description": "Fauci unsure by 'rounding the corner on the virus'",
             "image": "fauci_virus",
             "mins": "8mins read",
             "article1": "(CNN)Dr. Anthony Fauci said Friday that he's not sure what President Donald Trump meant when he said earlier that evening that the country is rounding the corner on the coronavirus pandemic. The exchange marked another example of a top scientist and a member of the White House coronavirus task force publicly disputing the President's claims about the virus, a dynamic that has played out nearly since the start of the pandemic.",
             "article2": "Earlier Friday, a new model often cited by top health officials projected that more than 410,000 people in the US could die from the coronavirus by January 1 -- more than doubling the current death toll. But Fauci cast the projection as a good heads up of what could happen if Americans don't take precautions. Although the number's a little scary ... it may be a sort of a nudge for us to realize that we can do something to stop that, Fauci said. The model from the University of Washington's Institute for Health Metrics and Evaluation said that near-universal mask use could cut the number of projected additional fatalities by more than half.",
             "article3": "Heading into Labor Day weekend, Fauci advised people to wear masks, maintain social distancing and avoid large crowds. We want to make sure that all over the country, but particularly in the vulnerable states that are starting to show an uptick, that we abide by the public health mandates and rules that we talk about all the time over the weekend and not, in essence, have the same type of surges that we have seen following other holiday weekends like the Fourth of July and Memorial Day, he said."
         },
         {
             "id": 4,
             "title": "#POLITICS",
             "description": "September 11 Congressional Report Fast Facts",
             "image": "congressional_report",
             "mins": "5mins read",
             "article1": "The full name of the report is the Report of the Joint Inquiry into the Terrorist Attacks of September 11, 2001 by the House Permanent Select Committee on Intelligence and the Senate Select Committee on Intelligence. The report is a result of a 10-month joint investigation by House and Senate intelligence committees. The report was completed in December 2002, but not published until July 2003 because of declassification.",
             "article2": "Beginning in 1998 and continuing into the summer of 2001, the Intelligence Community received a modest, but relatively steady, stream of intelligence reporting that indicated the possibility of terrorist attacks within the United States. Nonetheless, testimony and interviews confirm that it was the general view of the Intelligence Community, in the spring and summer of 2001, that the threatened bin Laden attacks would most likely occur against US interests overseas, despite indications of plans and intentions to attack in the domestic United States. From at least 1994, and continuing into the summer of 2001, the Intelligence Community received information indicating that terrorists were contemplating, among other means of attack, the use of aircraft as weapons. This information did not stimulate any specific Intelligence Community assessment of, or collective US Government reaction to, this form of threat.",
             "article3": "Although relevant information that is significant in retrospect regarding the attacks was available to the Intelligence Community prior to September 11, 2001, the Community too often failed to focus on that information and consider and appreciate its collective significance in terms of a probable terrorist attack. Neither did the Intelligence Community demonstrate sufficient initiative in coming to grips with the new transnational threats. Some significant piece of information in the vast stream of data being collected were overlooked, some were not recognized as potentially significant at the time and therefore not disseminated, and some required additional action on the part of foreign governments before a direct connection to the hijackers could have been established. For all those reasons, the Intelligence Community failed to fully capitalize on available and potentially important information."
         },
         {
             "id": 5,
             "title": "#POLITICS",
             "description": "Intelligence bulletin warns against amplifying false claims",
             "image": "voting_russia",
             "mins": "10mins read",
             "article1": "Washington (CNN)An intelligence bulletin issued by the Department of Homeland Security warns that Russia is attempting to sow doubt about the integrity of the 2020 elections by amplifying false claims related to mail-in voting resulting in widespread fraud, assertions that have been repeatedly pushed by President Donald Trump, according documents obtained by CNN.",
             "article2": "The news comes one day after Attorney General Bill Barr condemned states for encouraging mail-in voting in an interview with CNN's Wolf Blitzer. Barr also downplayed Russia's well-documented attempts to help Trump in presidential elections, including in this election cycle, instead pointing the finger at China despite the fact intelligence agencies have not said Beijing is actively meddling in the election.",
             "article3": "A senior FBI official also said at the time that they have not seen evidence of coordinated national voter fraud related to mail-in ballots and the bureau has assessed that even if there is fraud, it won't tip the scales of the election results. Trump has repeatedly promoted the baseless lie that there is massive voter fraud in US elections. However, at the time, senior officials declined to discuss Russia's efforts to seize upon the President's attempts to sow mistrust and doubt about the mail in voting process."
         },
         {
             "id": 6,
             "title": "#POLITICS",
             "description": "Trump's claims that he 'called home' to Melania",
             "image": "trump_melania",
             "mins": "3mins read",
             "article1": "Washington, DC (CNN)President Donald Trump has vehemently denied reports that he skipped a 2018 visit to a World War I memorial in France because he was concerned about his hair and considered the cemetery filled with losers, as the Atlantic first reported. Trump told reporters yesterday that he called home to Melania Trump at the time and told her how upset he was for not being able to visit the cemetery. At the time, the White House said he was unable to attend and had to cancel the visit because of bad weather.",
             "article2": "A readout from the first lady's office at the time said that Due to inclement weather, the First Lady and President were unable to visit the Aisne-Marne American Cemetery and Memorial in Belleau, France. That evening, Trump and Melania went to a dinner together hosted by French President Emmanuel Macron. When the decision was made to cancel the visit to the Aisne-Marne cemetery, no aides cautioned Trump that it would play poorly, which he later blamed on Gen. John Kelly and one of Kelly's top aides Zach Fuentes. One person familiar with the postmortem discussions said Trump accused them of f*cking him by not predicting the inevitable fallout.",
             "article3": "Still, aides said at the time that Trump did not push to attend the ceremony after being told he could not fly there in the helicopter and that traveling by motorcade would prove difficult logistically. Kelly later replaced Trump on the visit to the cemetery. Instead of the visit, Trump spent hours on that Saturday afternoon holed up watching television inside the US ambassador's residence, people familiar with the situation said."
         },
         {
             "id": 7,
             "title": "#POLITICS",
             "description": "Biden says that Trump has no sense of service",
             "image": "biden_trump",
             "mins": "8mins read",
             "article1": "(CNN)Joe Biden lit into President Donald Trump in angry and personal terms Friday, calling Trump deplorable and damnable as he responded to reports that the President had made disparaging remarks about those wounded and killed at war. The Democratic presidential nominee's comments during and after a speech in Delaware came a day after The Atlantic reported reported that Trump had called wounded veterans and those killed in battle suckers and losers. Trump has forcefully denied the report. Biden said that based on Trump's previous attacks on the late Sen. John McCain of Arizona for being captured in Vietnam, he believes the report is true.",
             "article2": "After a week of escalating attacks on Trump's presidency -- including questioning on Monday whether Americans could feel safe with Trump in the Oval Office -- Biden at times barely concealed his anger on Friday. He told reporters he'd decided Friday morning to leave at home a Gold Star given to him by the Delaware National Guard to honor his deceased son Beau Biden's military service in Iraq, because I was worried that if I focused too much on it that I would engage in some of the kind of language the President's used.",
             "article3": "During a question-and-answer session with reporters, Biden also said for the first time that he'd been tested once for coronavirus and plans to be tested regularly moving forward. He lambasted Trump for raising unfounded alarm about the potential for voter fraud in November's election and for encouraging believers in the QAnon conspiracy theory."
         },
         {
             "id": 8,
             "title": "#POLITICS",
             "description": "Russian aggression, Trump says he and Putin 'get along'",
             "image": "trump_putin",
             "mins": "10mins read",
             "article1": "Washington (CNN)As Russian President Vladimir Putin continues his efforts to exert his personal influence around the globe and meddle in American democracy and is accused of using a nerve agent to poison one of his main political opponents, President Donald Trump broke his recent silence on Russia and the attack on Alexey Navalny, calling it tragic but emphasizing that he has a good relationship with the Russian leader.",
             "article2": "There was no reference to Russian efforts to interfere in US politics following Thursday's news that an intelligence bulletin issued by the Department of Homeland Security warned that Moscow is attempting to sow doubt about the integrity of the 2020 elections by amplifying false claims that mail-in voting resulting in widespread fraud. And the President made no mention of other provocations in recent weeks, including a collision between a Russian military convoy and a US armored vehicle that injured seven American troops.",
             "article3": "Trump appears starkly out of step with the leaders of Britain and Germany, who have expressed outrage at the attack on Navalny. Friday's comments were his first on Navalny since Germany said he had been poisoned with a chemical nerve agent from the Novichok group -- the same substance the Kremlin used to poison ex-Russian spy Sergei Skripal and his daughter in the United Kingdom in March 2018."
         },
         {
             "id": 9,
             "title": "#POLITICS",
             "description": "Trump declines to condemn Russia over Navalny poisoning",
             "image": "trump_poison",
             "mins": "5mins read",
             "article1": "Washington (CNN)President Donald Trump on Friday declined to condemn Russia over the poisoning of opposition leader Alexey Navalny, even though leaders from around the world, as well as other Trump administration officials, have pinned the blame on the country. At a press briefing on Friday, Trump was asked what his message to Russia was about Navalny's poisoning, after the German government said a chemical agent known to be utilized by the Kremlin was used against Navalny.",
             "article2": "It's the latest example of Trump declining to condemn Russia and its president, Vladimir Putin, for authoritarian actions. In the case of the Navalny poisoning, leaders around the world, including German Chancellor Angela Merkel and British Prime Minister Boris Johnson, offered strong condemnation and called for answers from the Russian government. In addition to German officials, a NATO in-house lab test proved beyond doubt that the opposition leader was poisoned with the military-grade nerve agent Novichok in what the NATO chief described Friday as an assassination attempt.",
             "article3": "It wasn't until August 2019 that the administration imposed the legally required second round of sanctions on Russia for the poisoning -- more than six months after they had been due. The Trump administration was also slow to enact sanctions punishing Russia for election interference."
         },
         {
             "id": 10,
             "title": "#POLITICS",
             "description": "Anita Hill vows to vote for Joe Biden to work on gender issues",
             "image": "anita_biden",
             "mins": "5mins read",
             "article1": "(CNN)Anita Hill never pictured herself voting for Joe Biden. But given the political reality the nation is facing, she's not only going to vote for Biden -- she's also willing to work with him, should he become president. Hill and Biden have a troubled history dating back nearly three decades: In 1991, Biden was chairman of the Senate Judiciary Committee and oversaw the confirmation hearing of then-US Supreme Court nominee Clarence Thomas. Hill was the star witness, testifying that Thomas sexually harassed her when they worked together at the Equal Employment Opportunity Commission. Thomas denied the allegations.",
             "article2": "As the chairman, Biden has long defended himself against complaints that he didn't take Hill's allegations seriously enough, and that he didn't step in to intervene when the hearings devolved into a circus-like atmosphere in which Hill was humiliated. The panel of all-male senators grilled her on her accusations in painful detail, and they called into question her own personal character.",
             "article3": "There was a statement about 'I take accountability; I hold myself responsible for the way the hearing was run,' Hill said. And so that, I think, is as close as we've gotten, you know, and that's good. That's an opening. And that is something Hill says she's willing to work with. I want the next president to be somebody that I can go to and talk about the real issues that women, men, and non-binary people are experiencing with violence in this country, that's directed to them because of their gender, Hill said. I believe that Joe Biden would be that person. I do not believe that Donald Trump would be the person who would hear me."
         },
         {
             "id": 11,
             "title": "#POLITICS",
             "description": "Jacob Blake's sister: 'Black America, I hold you accountable'",
             "image": "jacob_blake",
             "mins": "3mins read",
             "article1": "(CNN)Fifty-seven years to the day Martin Luther King Jr. gave his I Have a Dream speech, relatives of African Americans killed or injured in recent police encounters took to the same spot on the National Mall to emotionally call for social and political change. Numerous speakers, including King's son Martin Luther King III, made emphatic calls for police reform, justice reform and voter action in an event meant to recall the 1963 March on Washington that demanded civil rights and economic opportunity.",
             "article2": "Jacob Blake Sr., father of Jacob Blake, described two systems of justice in the US: There's a White system and there's a Black system. The Black system ain't doing so well, but we're going to stand up. Every Black person in the United States is going to stand up. The event brings an end a tumultuous week, one that saw the younger Jacob Blake shot by police in Wisconsin. It follows a summer that has seen a global outcry over the killings of Black Americans at the hands of law enforcement. And it takes place in the midst of a pandemic that has disproportionately affected people of color.",
             "article3": "The bill -- titled the George Floyd Justice in Policing Act of 2020 -- would overhaul qualified immunity for law enforcement, prohibit no-knock warrants in federal drug cases, ban chokeholds at the federal level and establish a national registry of police misconduct, among other provisions. Activists also raised concerns about disenfranchisement, citing policy changes at the US Postal Service, along with President Trump's efforts to discredit mail-in voting."
         },
         {
             "id": 12,
             "title": "#POLITICS",
             "description": "Government shutdown, White House seeks funding bill",
             "image": "white_house",
             "mins": "5mins read",
             "article1": "Washington (CNN)The White House is seeking a short-term bill to avert a government shutdown and punt the fight until soon after the November elections, according to a proposal sent to Capitol Hill, setting up a potential clash with Democrats ahead of high-stakes negotiations this month. Both sides need to reach a deal to avoid a shutdown by the end of September. But the matter is complicated because the two sides are stuck in a bitter impasse over stimulus legislation to prop up the flagging economy amid the coronavirus pandemic. The two issues -- keeping the government open past Sept. 30 and providing relief to struggling Americans -- are bound to collide just weeks before a hugely consequential election.",
             "article2": "On a 36-minute call on Tuesday, Treasury Secretary Steven Mnuchin and House Speaker Nancy Pelosi agreed that they want to avoid a government shutdown and would seek a clean stopgap funding plan free of extraneous measures, according to a source briefed on the call. It's unclear if any provisions from the stalled stimulus package -- such as aid to help schools reopen -- will be added to the stopgap funding plan since the topic didn't come up during their talk, the source said. And both sides have their own definition of what a clean funding measure should entail -- so the topic will be a subject of ample negotiation.",
             "article3": "Both sides insist they don't want the government to shut down and are hopeful a deal to keep agencies funded can be reached before they run out of money on Oct. 1. But both sides also plainly acknowledge it's unclear what a deal will look like and that the talks are bound to get acrimonious."
         },
         {
             "id": 13,
             "title": "#POLITICS",
             "description": "The '60-day rule' for elections may change for Trump",
             "image": "bill_barr",
             "mins": "10mins read",
             "article1": "(CNN)If there was any question before about whether William Barr could be willing to use his power as attorney general to tilt the scales in the upcoming presidential election, there shouldn't be anymore. Barr appeared to confirm as much in his interview with Wolf Blitzer on CNN Wednesday: that he would be willing to breach longstanding Justice Department norms -- that is, the unwritten 60-day rule -- to advantage the re-election campaign of President Donald Trump.",
             "article2": "Barr also continued to claim that mail-in ballots provide potential for widespread fraud. Elections that have been held with mail have found substantial fraud and coercion, he said. When asked by Blitzer whether he could cite any prosecutions relating to this purportedly widespread criminal phenomenon, Barr responded by citing one case -- yes, one.",
             "article3": "The only legal way to change the two-term limit is by amending the constitution itself. That is an arduous process that, under Article V of the Constitution, requires proposal by two-thirds votes of both the Senate and House, followed by ratification by three-fourths of the states. Despite Trump's statements about seeking a third term (or beyond), there is almost no chance we see a constitutional amendment enabling that to happen."
         },
         {
             "id": 14,
             "title": "#POLITICS",
             "description": "Congress stalled on pandemic relief, Here's what's available for Americans",
             "image": "unemployment_benefits",
             "mins": "3mins read",
             "article1": "Washington (CNN)President Donald Trump took a dramatic step last month to bypass Congress and deliver relief to millions of Americans -- but the executive actions are delivering only limited relief, while lawmakers remain at an impasse. The main piece of the package was a $300 weekly unemployment supplement, paid from federal disaster relief funds. While some states have been approved for the unemployment aid, many jobless Americans are still waiting for the cash, more than a month after the last federal bump of $600 went out.",
             "article2": "Trump's other big move, a payroll tax deferment set to start Tuesday, isn't automatic. Many businesses have suggested they'll opt out and even those workers who do see bigger paychecks now will owe more in taxes next year. Trump's actions were limited in scope to begin with. They didn't send out a second round of stimulus checks or disburse more funding for small businesses. The President can't authorize such big spending because the power of the purse lies with Congress.",
             "article3": "It's becoming clear that the stopgap provided by the President won't be enough to keep the economy afloat. More than 1 million people filed for new unemployment claims in each of the last two weeks and the unemployment rate remains above 10%, higher than it was at any point during the Great Recession. Nearly half of small business owners think it will take at least six months before business returns to normal, according to a Census survey."
         },
         {
             "id": 15,
             "title": "#POLITICS",
             "description": "Democrat urges to pull German ambassador nominee",
             "image": "democrat_ambassador",
             "mins": "5mins read",
             "article1": "The top Democrat on the Senate Foreign Relations Committee is calling on the White House to immediately pull retired Col. Douglas Macgregor's nomination for ambassador to Germany after his past racist, xenophobic and inflammatory remarks were uncovered by CNN's KFile. In a letter to White House chief of staff Mark Meadows sent Monday and obtained by CNN, Sen. Robert Menendez said that Macgregor's catalogue of disturbing statements show that he is not suited to serve in any position in the United States government, particularly a diplomatic post.",
             "article2": " Macgregor claimed that Muslim migrants were coming to Europe with the goal of eventually turning Europe into an Islamic state. He criticized Germany for giving millions of unwanted Muslim invaders welfare benefits rather than providing more funding for its armed services. He downplayed Germany's Nazi history and disparaged the nation's attempts to reconcile and confront its past atrocities.In a 2014 interview with Russian state-controlled TV network RT, Macgregor said that Eastern Ukrainians are Russians -- a Kremlin talking point that runs counter to the US government's stance on the matter. The US and its allies oppose Russia's annexation of Crimea and its hostilities in Eastern Ukraine. Menendez referenced these remarks in his letter, which was first reported by Foreign Policy.",
             "article3": "Asked for comment on the letter, White House spokesperson Judd Deere said Macgregor is enormously qualified to serve as the United States Ambassador to Germany.He is an expert in German history and language, lived in Germany when he was a student and a cadet, and served in West Germany during the Cold War, Deere said in his response, identical to the one provided in response to the KFile article. While the Swamp may feel threatened by President Trump's nominee, who believes strongly in putting America first, the White House wants to see this critical diplomatic post filled without delay."
         },
         {
             "id": 16,
             "title": "#POLITICS",
             "description": "Trump administration to undermine election integrity",
             "image": "trump_election",
             "mins": "8mins read",
             "article1": "There are already concerns about the integrity of the 2020 election with an intelligence official warning earlier this month that Russia, China and Iran are all seeking to interfere in the presidential contest this fall. The Trump administration created more fears about that possibility this weekend when, as first reported by CNN, it informed members of Congress that the intelligence chief will no longer brief them in person on election security issues. It was yet another attack by the Trump administration on democratic institutions and the separation of powers enshrined in the Constitution, but also -- as one of the Senate's only two independent senators argued Saturday -- an insult to the American people.",
             "article2": "On its own, the notification from the Office of the Director of National Intelligence that the office would no longer brief Congress in person might seem like an esoteric issue to Americans who are struggling to return to normal life as the coronavirus pandemic continues its deadly rampage and millions of US workers have lost their jobs. But it was the latest in a long list of efforts by Trump and his administration to erode the checks on their power two months from Election Day -- efforts that have appeared to have one goal in common: ensuring that the President will be reelected in November.",
             "article3": "Congressional oversight of intelligence activities now faces a historic crisis, Rubio said in his own statement. The Florida Republican went on to blame Democrats and slam the leaks. Yet, this grotesque criminal misconduct does not release the intelligence community from fulfilling its legal requirements of keeping Congress informed, he said, adding that he'd spoken to Ratcliffe, who said the committee will continue to receive briefings. There's no indication that means in-person briefings will resume. The Trump administration's policy change on intelligence briefings could clearly limit the amount of information that American voters have about election interference -- the question now is whether they will demand greater transparency from the administration about efforts to subvert their democracy."
         },
         {
             "id": 17,
             "title": "#POLITICS",
             "description": "Schiff: intelligence officials to testify on election interference",
             "image": "schiff_election",
             "mins": "10mins read",
             "article1": "House Intelligence Chairman Adam Schiff said Sunday it is possible the House could subpoena intelligence officials to testify on election interference, a day after Director of National Intelligence John Ratcliffe informed members of Congress that the nation's top intelligence office will no longer deliver in-person briefings on election security issues. Asked by CNN's Dana Bash on State of the Union if he would subpoena intelligence officials to appear in a public hearing ahead of the November election, Schiff said it is certainly one of the tools that we may use.",
             "article2": "CNN reported Saturday that the Office of the Director of National Intelligence has informed the House and Senate Select Committees on Intelligence that it'll no longer be briefing in-person on election security issues, according to letters obtained by CNN. Instead, ODNI will primarily provide written updates to the congressional panels, a senior administration official said. The official added that other agencies supporting election security, including the Department of Justice, Department of Defense and Department of Homeland Security, intend to continue briefing Congress.",
             "article3": "Senate Homeland Security and Governmental Affairs Committee Chairman Ron Johnson told Bash in a separate interview Sunday that the issue over written briefings is being blown so way out of proportion. I can probably count on one or two fingers the things that are actually classified in those briefings, said Johnson, a Republican from Wisconsin. There is no surprise here. We know that foreign actors are trying to influence, trying to destabilize our political system."
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