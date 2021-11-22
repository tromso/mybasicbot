var config = {
	channels: ["#timespace"],
	server: "irc.rizon.net",
	botName: "herculess"
};

// var irc = require("irc");
import fetch from 'node-fetch';
import irc from 'irc';
// const RssFeedEmitter = require('rss-feed-emitter');

// const feeder = new RssFeedEmitter();


// function ip2Hex(address) {
// 	return address.split('.').map((octet) => {
// 		let hex = parseInt(octet, 10).toString(16);

// 		if (hex.length === 1) {
// 			hex = `0${hex}`;
// 		}

// 		return hex;
// 	}).join('');
// }

// function initReader() {
// 	feeder.add({
// 		url: 'http://feeds.washingtonpost.com/rss/politics',
// 		refresh: 12,
// 	});
// }

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});

let crypto = ['bitcoin', 'ethereum', 'monero', 'doge', 'cardano', 'crypto', '.btc', '.eth', 'btc', 'eth'];
let swear = ['wtf', 'fuck', 'shit', 'angry', 'cunt', 'pussy', 'fag', 'faggot'];
let swearreply = ['wtf', 'fuck', 'shit', 'cunt', 'pussy', 'fag', 'faggot', 'don\'t swear', 'sfw, my daugther is nearby', 'you\'re a tough guy', 'i\'m gay', 'stop being so mad', 'are you mad?', 'are you ok?', 'calm down'];
let cryptoresponse = ['bitcoin sucks', 'crypto goes up crypto goes down', 'I have about $500 in monero', 'doge lol', '.btc', '.eth', 'shit it\'s down again', 'I\'m down $3000 trading bitcoin this year'];
let twitch = ['twitch'];
let instagram = ['instagram'];
let facebook = ['facebook'];
let botsup = ['hello','hi','sup', 'doing good', 'how are you?', 'what are you up to?', 'how are you', 'how are you doing', 'what\'s up'];
let botsupreply = ['Just found out I have the gene for alcoholism that puts me into opioid withdrawal when I drink way too much liquor (which I always do.). I quit cold turkey a week ago and can\'t feel anything except pain and the urge to shoot myself in the head','Pretty good fren. My son just turned 2 and I taught him to call my wife a nigger.','im good', 'nm', 'i\'m chillin', 'nothing', 'chatting', 'another day another $', 'good, u?', 'im doing fine'];

let generalmessages = ['no', 'yuh', 'hii', 'yes', 'yeah', 'yes', 'tired', 'heh', 'from', 'maybe', 'what', 'where', 'doing', 'who', 'best', 'sad', 'boring', 'pretty', 'how', 'that']
let botgeneralreply = [
'cry harder faggot','i wanna die','Always has been','First I was almost thrown in prison. Then jail. Now I\'m on probation and homeless. And almost died of covid. Satan\'s been scoring home runs.','No joke though, finding a job in a red state is fucking easy.','My face may not show it but i am in insufferable pain.','You are delusional we live in hell.','I am getting killed by Calculus 2. I need 60% to pass and my average is 62%. Wish me luck,','I\'m late 30\'s and don\'t associate with druggie types.','you have nothing to lose and everything to gain','every year has gotten worse so far, might be homeless and die this winter','I\'m unemployed living with my parents','grow up and stop listening to kike science you fucking nigger child','I did nothing but watch youtube and read 4chan/Reddit threads I have a real issue'
,'I\'m running out of reasons to not commit suicide','jews and jewnesses are cute','Americans can’t stop talking about race and racism. Why? Because black people don’t do as well as white people.', 'Black people are poorer, more likely to be in jail, they are fatter, more likely to have illegitimate children, and the black part of town is always the worst. There is only one official explanation for this. It’s the fault of white people.', 'Those of us who are not niggers will never experience that burning feeling that you, as a nigger, experience when someone who is not a nigger reminds you of what you are. We can understand it but we can never feel it.', 'racial discrimination has been illegal for more than half a century.', 'There are now built-in advantages for black people called affirmative action and diversity goals.', 'niggers literally destroying every country on earth, literally hot war level crime rates, rapes and murders everywhere', 'Niger is Latin for black', 'Segregation is the way of the future.', 'Peak reddit. Coming up with a bullshit explanation that allows you to paint people you don\'t like as evil, stupid and incompetent. It\'s always like that. Underhanded insults. Nothing else. And that nets you a thousand upvotes and a bag of reddit shekels. It\'s so incredibly tiresome to observe.', 'Why are black people so easily upset?', 'I\'m thinking of sucking my own dick but it smeels like fish', 'Homo sapiens evolved around 300,000 years ago. 100,000 years ago, the Earth entered into a new ice age. When we came out of the ice age 12,000 years ago, instead of there being a singular human race (since everyone had to migrate to the equator to stay alive), we now had multiple races.', 'racism isnt an action, its a reaction. you can ask someone to stop puking after eating rotten food, or stop screaming after they get hurt, but it makes you look a bit stupid.', 'Imagine being upset over a word. Stupid niggers. Either we can say all words or no words', 'Black people laterally hate being called Black', 'I\'ve been here for so long that you guys became the ambient air temperature and I’m just so fuckin BASED I couldn’t keep being racist', 'Critical Race Theory now says white people are oppressing black people whether we want to or not. It’s our nature.', 'Are we unconsciously oppressing black people?', 'Isn’t it plausible to ask whether, on average, the different races might not have the same abilities?', 'Couldn’t it be that most of the time in America, people of all races rise and fall according to their abilities?', 'At some level, almost everyone knows that races are different.', 'At the Olympics blacks who come originally from West Africa will dominate the sprints, and blacks who come from East Africa will dominate the long distances. It’s been that way for at a long time.', 'Blacks dominate professional basketball. They are 13 percent of the population but 81 percent of the players. Any given black man is 21 times more likely than a white man to be a pro basketball player. Is that a coincidence, or are they just better?', 'It’s much more taboo to talk about race differences in intelligence, but the evidence for differences is overwhelming.', 'there is no black country anywhere in the world – whether in Africa or in the Caribbean, like Haiti – that isn’t poor.', 'Are all black countries, despite their very different histories, victims of racism in exactly the same way?', 'Before Europeans or Arabs showed up in black Africa, no one there had invented the wheel or any kind of mechanical device or had domesticated an animal or figured out a calendar or built a two-story building.', 'There is some debate as to whether any blacks even had a written language. Many ancient peoples – Chinese, Arabs, Greeks – encountered black Africans. Whey they wrote about it, they often said blacks were unintelligent. I have never read of anyone who marveled at their intelligence.', 'There are 13,800 school districts in the United States. I don’t know of a single one that doesn’t fit the pattern on standardized tests: Black students get the worst grades. Hispanics do better than blacks. Whites do better than Hispanics. And Asians do best of all. ', 'people of different races have different abilities', 'You may think tests of any kind – especially IQ tests – are racist, but specialists overwhelmingly agree that they are not.', 'Tests accurately measure the intelligence of people of all races. You are basically born with a certain level of intelligence. ', 'Many people claim that blacks do badly in school and on tests because they are poor.', 'Whites from families with incomes below $20,000 had a mean SAT test score that was 12 points higher than blacks whose families had incomes between $160,000 and $200,000.', 'Whites from families that were not even making $20,000 outscored blacks from families making more than $160,000.', 'The best estimates are that genes account for 50 to 80 percent of individual differences in IQ.', 'It is fashionable to say there is no such thing as race, but Africans and non-Africans probably diverged from a common ancestor more than 100,000 years ago. Asians and whites probably diverged about 50,000 years ago.', 'It would have been a miracle if the forces of evolution that produced striking physical differences had left the brain completely untouched.', 'Someday, we will find the genes associated with intelligence, and I think the chances that they are equally distributed among the different races is zero.', 'scientists are finding the genetic patterns associated with level of education, which is a good indirect indicator of intelligence. ', 'People with bigger brains tend to be smarter; there is a correlation between brain size and IQ of 0.3 to 0.4.', 'African-descended people (Blacks) average cranial capacities of 1267 cm3, European-descended people (Whites) 1347 cm3, and East Asian-descended people (East Asians) 1364 cm3.” That is a black/Asian difference of 97 cubic cc, or about 6 cubic inches. Those 6 cubic inches aren’t just sitting there. They’re hard at work.', 'brain size differences match intelligence: “Blacks average an IQ of 85, Whites 100, and East Asians 106.', 'The races are not, on average, equal in intelligence, and genes almost certainly have a lot to do with it.', 'There is powerful evidence that the races differ in other traits: agreeableness, diligence, and the ability to defer gratification – which means the ability to work and sacrifice now for future benefits. ', 'A lot of people don’t want the truth to be known.', 'the truth appears to be that by and large “racism” doesn’t hold back blacks or Hispanics any more than “racism” pushes Asians ahead', 'You just can’t expect people of all races to turn out the same.', 'There are more blacks in jail because blacks commit more crime.', 'We are building society on a delusion.', 'our country is going crazy, looking for “systemic racism” and “institutional racism” that aren’t there', 'This is a colossal waste of money and effort, and it wrongly blames and demonizes whites.', 'If we are going to compete in the world economy, we have to promote talent, not count black and brown faces.', 'if we’re going to have a society that even works minimally, blacks – and Hispanics – need to understand that society wants them to succeed. But it’s up to them to get ahead.', 'more and more white people are fed up with taking the blame for black or Hispanic failure. They are angry.', 'I’m not convinced a multi-racial society can even work in the long term', 'a multi-racial society will crack up for sure if we refuse to accept basic facts about race.', 'If you want to learn about race - just move into a black neighborhood. In just a few weeks, you\'ll qualify as an "expert". That is, if you\'re still alive or at least no longer in intensive care.', 'a black man\'s lips are the size of Michelin tires.', 'The day someone invents a virus that transfers through reddit comments and kills the writer of said comment is the day the world starts getting better', 'A young man was following Him, wearing nothing but a linen sheet over his naked body; and they seized him. But he pulled free of the linen sheet and escaped naked.', 'As a dog returns to its vomit, so a fool repeats his folly.', 'Give beer to those who are perishing, wine to those who are in anguish.', 'He said to Jacob, Let me eat some of that red stuff, because I’m exhausted.', 'I wish those who unsettle you would castrate themselves!', 'If a man has sex with an animal, he must be put to death, and the animal must be killed.', 'If a man loudly blesses his neighbor early in the morning, it will be taken as a curse.', 'If only you would be altogether silent! For you, that would be wisdom.', 'It is better to live alone in the desert than with a crabby, complaining wife.', 'No one whose testicles are crushed or whose penis is cut off shall be admitted to the assembly of the LORD.', 'There is more hope for a fool than for someone who speaks without thinking.', 'Thou shalt not boil a kid in its mother’s milk', 'Yet she became more and more promiscuous as she recalled the days of her youth, when she was a prostitute in Egypt. There she lusted after her lovers, whose genitals were like those of donkeys and whose emission was like that of horses.', 'You shall eat the flesh of your sons, and you shall eat the flesh of your daughters.', 'White privilege doesn\'t exist', 'Racism doesn\'t exist', 'i wish a motherfucker would!', 'oh no he didn’t!', 'you bet’ not do dat', 'what i\'m about to say is about to be some bullshit', 'H-h-ey watch it pal i belong to the tribe', 'Niggers carry the homo erectus genes you fucking nigger loving science denying leftist kike retard', 'Redditspacing retard', 'kill yourself', 'I’m going to get a VPN just to fuck with you', 'to long didn\'t read.', 'just lower your standards', 'I’m not racist', 'hii', 'The country is in a headlong rush to become less competent, less efficient, less orderly, and more crime-ridden, all while reviling and punishing the people who built the country and gave it its institutions. Will the day come when airfare out of the United States is 10 times the fare coming in?', 'MIT just hired six new assistant deans for diversity, equity, and inclusion. Look at these happy new deans. Will they be zealously upholding the high standards MIT – at least used to be – known for? No. Their job is to subvert standards at every turn, and for one purpose: to try to keep people who look like me out of MIT.', 'The standardized test to get into medical school – the MCAT – could be on its way out too. The NIH are warning you of “The consequences of structural Racism on MCAT Scores and Medical School Admissions.”', 'The theory used to be that the police are racist, but if it really turns out that some groups are breaking the law more often than others, we must ask if the laws are racist.', 'no', 'United Airlines is distressed that 80 percent of its pilots are white men, so it now promises that Women and People of Color will be 50 percent of New Pilot Trainees.', 'i think yes', 'yes', 'Programmers are spending millions trying to get artificial intelligence software to read X-rays and scans. Really good AI catches things doctors can’t. When a doc reads an X-ray he can’t tell a Japanese foot from a Norwegian foot. But, AI can', 'When you find a dead body rotted beyond recognition, a forensic anthropologist can look at the bones and tell you the race. As this article notes, this is a puzzle: “if races don’t exist, why are forensic anthropologists so good at identifying them?', 'Blacks and Hispanics shoplift more than whites or Asians, but it was an insult to diversity that they were arrested more often for it. And so, ever since 2014, in California, stealing something worth less than $950 is a minor crime for which police won’t arrest you. You might get a ticket, which you can pay if you feel like it.', 'maybe', 'more than 1,000 colleges, including the entire University of California system have either ditched standardized tests or made them optional. Diversity comes first.', 'The SAT was started in 1926 to set objective standards and eliminate unfair, subjective evaluation. It’s got to go because colleges *want* to make unfair, subjective evaluations of students – in the name of diversity.', 'Dismantling White Supremacy Includes Ending Racist Tests like the SAT and ACT.', 'nevermind', 'Ancient DNA testing shows that light-skinned Indo-Europeans conquered India some 4,000 years ago and ruled over darker skinned natives. The purpose of the caste system was to prevent interbreeding, and that’s why their genes are still different.', 'the GRE is the standardized test to get into graduate school. Half of all physics and astronomy departments, and nearly as many molecular biology and neuroscience programs, no longer require them. There just weren’t enough blacks and Hispanics getting good scores.', 'I do not understand', 'what do you mean?', 'can you help me?', 'In America, blacks are 34 percent more likely than whites to be obese. One reason is race differences in metabolism.', 'I do not need a bag', 'how can I help you?', 'I\'m just about to do it', 'something\'s not right here', 'I agree', 'I\'ve heard this before', 'this is an old story', 'so what', 'Hispanic women get cervical cancer at twice the rate of white women. Sickle cell anemia and the hemolytic anemia are found almost exclusively in blacks and have a direct genetic cause.', 'i dont really care', 'you\'re not really adding anything to the conversation', 'where are you from?', 'what do you do?', 'what do you like to do in your free time?', 'do you have facebook?', 'thanks', 'If blacks were killing themselves at twice the white rate, it would be irrefutable proof of system-wide racism, that America is inherently, pervasively anti-black. But since whites kill themselves at twice the black rate, no one notices or cares.', 'thank you', 'I really appreciate that', 'excuse me', 'I am sorry', 'what do you think?', 'that sounds great', 'some', 'I\'ve never actually consired that', 'are you serious?', 'sounds good', 'are you having a bad day or something?', 'if you don\'t like it here you could just leave ok?', 'ohh maaa gaaaa', 'turn up', 'The media love statistics that might mean whites are racist and ignore statistics that suggest blacks bring their problems on themselves. ', 'basic', 'ratchet', 'fleek', 'I have a collection of rare Pepes', 'fuckboy', 'yassss', 'Last year’s homicide statistics from the FBI show that blacks kill people at nearly nine times the rate of everyone else in the country.', 'yas queen', 'fa ril?', 'fa ril dough?', 'hayell naww', 'bogus', 'girrrrrlllll', 'sheeeeit', 'bout that life', 'yessuh', 'word', 'i coom on the haters', 'the fuck did you just say?', 'just shut up', 'you\'re boring', 'i dont care', 'thats interesting', 'oh yeah?', 'Just been for a couple mile run. Went down the gym last night and lifted some weights. I\'m all fitness pilled now, gonna shed my body fat and get down to a fighting weight.Reject the black pill. Get fit or get fucked.', 'What we now call "the West" used to be called "Christendom".', 'Race-mixing destroys diversity.', 'so what', 'Black Africans invented no musical instruments, except for the simple drum.', 'actually no', 'Scientists used to use the word "race" as a synonym for "subspecies". For example, see the full title of Charlse Darwin\'s most famous work.', 'I\'m gay', 'cuckolding is the thinker\'s fetish', 'I love to coom', 'I don\'t believe anything you\'re saying', 'wow', 'Artificial Intelligence can identify a person\'s race with 98% accuracy by looking at X-rays', 'impressive', 'that\'s based', 'I\'m getting redpilled'];
let botaccusation = ['no i\'m not a bot', 'im real', 'wtf I\'m real human bean', 'no', 'no, are you', 'yes i am a bot', 'im not a fucking bot', 'yes i\'m a bot, tromto programmed me', 'yes but at least im not a faggot', 'fuck you, no', 'yep', 'sometimes i am sometimes im not', 'no, just autistic', 'no, just I\'m just boring', 'not this question again', 'im tired of being asked that'];
let greeting = ['hi', 'hello', 'gm', 'sup', 'hey', 'howdy', 'hola'];
let funny = ['lol', 'haha', 'lolol', 'kek', 'rolf', 'that\'s funny', 'lmao', 'lmafo', 'lulz', 'hehe', 'huehue', 'that\'s pretty funny', 'I\'m laughing', 'I\'m cracking up'];
let racist = ['nigger', 'niggers', 'nigga', 'niggas', 'porch monkey', 'baboon', 'ape', 'crow', 'coon', 'colored', 'kafir', 'kaffir', 'monkey', 'nig-nog', 'niglets', 'niglet', 'nigglet', 'quashie', 'eggplant', 'jigaboos', 'jigaboo', 'nig', 'nigs', 'niggah', 'nigguh', 'niger', 'niggur', 'niggar'];
let antiracist = ['there is no need to be racist', 'please abstain from being a jerk', 'please don\'t be racist in the chat', 'I can\'t believe you said that word', 'I\'m going to kick you if you keep saying things like that', 'I\'m caling the mods', 'It\'s unnaceptable to use that word here', 'please don\'t use that language', 'I wish you were less racist', 'I\'m done chatting in this racist channel', 'I will get you banned', 'for fuck sake stop saying that', 'I used to have a friend who said things like that', 'my mom taught me not to be racist', 'haha there he goes again saying it', 'please stop', 'there is nothing stopping you is it?', 'stop racism', 'you\'re a racist', 'racist', 'racist much?', 'people at my school said shit like that', 'can you fucking stoop', 'stahp', 'this isn\'t 4chan kid'];
let racistspic = ['spic', 'wetback', 'mexican', 'latino', 'latina', 'goblina', 'taco', 'paco', 'puertorican'];
let antiracistspic = ['immigrants built this country', 'latinas are pretty sexy', 'I had a latina girlfriend', 'if I had a latina girlfriend I would wreck her', 'puertoricans are not too bad but dominicans really get on my nerves, mexicans are ok'];
let byes = ['goodbye', 'good night', 'bye', 'cya', 'cya later', 'adios', 'ttyl', 'night'];
let suffixes = ['guys', 'all', 'folks', 'everybody', 'everyone', 'there'];

// let racerealism = ['Americans can’t stop talking about race and racism. Why? Because black people don’t do as well as white people.'
// 									,'Black people are poorer, more likely to be in jail, they are fatter, more likely to have illegitimate children, and the black part of town is always the worst. There is only one official explanation for this. It’s the fault of white people.'
// 									,'Sneed’s store was formerly called Chuck’s Feed and Seed'
// 									,'Those of us who are not niggers will never experience that burning feeling that you, as a nigger, experience when someone who is not a nigger reminds you of what you are. We can understand it but we can never feel it.'
// 									,'racial discrimination has been illegal for more than half a century.'
// 									,'There are now built-in advantages for black people called affirmative action and diversity goals.'
// 									,'niggers literally destroying every country on earth, literally hot war level crime rates, rapes and murders everywhere'
// 									,'Niger is Latin for black'
// 									,'Segregation is the way of the future.'
// 									,'Peak reddit. Coming up with a bullshit explanation that allows you to paint people you don\'t like as evil, stupid and incompetent. It\'s always like that. Underhanded insults. Nothing else. And that nets you a thousand upvotes and a bag of reddit shekels. It\'s so incredibly tiresome to observe.'
// 									,'Why are black people so easily upset?'
// 									,'I\'m thinking of sucking my own dick but it smeels like fish'
// 									,'Homo sapiens evolved around 300,000 years ago. 100,000 years ago, the Earth entered into a new ice age. When we came out of the ice age 12,000 years ago, instead of there being a singular human race (since everyone had to migrate to the equator to stay alive), we now had multiple races.'
// 									,'racism isnt an action, its a reaction. you can ask someone to stop puking after eating rotten food, or stop screaming after they get hurt, but it makes you look a bit stupid.'
// 									,'Imagine being upset over a word. Stupid niggers. Either we can say all words or no words'
// 									,'Black people laterally hate being called Black'
// 									,'I\'ve been here for so long that you guys became the ambient air temperature and I’m just so fuckin BASED I couldn’t keep being racist'
// 									,'Critical Race Theory now says white people are oppressing black people whether we want to or not. It’s our nature.'
// 									,'Are we unconsciously oppressing black people?'
// 									,'Isn’t it plausible to ask whether, on average, the different races might not have the same abilities?'
// 									,'Couldn’t it be that most of the time in America, people of all races rise and fall according to their abilities?'
// 									,'At some level, almost everyone knows that races are different.'
// 									,'At the Olympics blacks who come originally from West Africa will dominate the sprints, and blacks who come from East Africa will dominate the long distances. It’s been that way for at a long time.'
// 									,'Blacks dominate professional basketball. They are 13 percent of the population but 81 percent of the players. Any given black man is 21 times more likely than a white man to be a pro basketball player. Is that a coincidence, or are they just better?'
// 									,'It’s much more taboo to talk about race differences in intelligence, but the evidence for differences is overwhelming.'
// 									,'there is no black country anywhere in the world – whether in Africa or in the Caribbean, like Haiti – that isn’t poor.'
// 									,'Are all black countries, despite their very different histories, victims of racism in exactly the same way?'
// 									,'Before Europeans or Arabs showed up in black Africa, no one there had invented the wheel or any kind of mechanical device or had domesticated an animal or figured out a calendar or built a two-story building.'
// 									,'There is some debate as to whether any blacks even had a written language. Many ancient peoples – Chinese, Arabs, Greeks – encountered black Africans. Whey they wrote about it, they often said blacks were unintelligent. I have never read of anyone who marveled at their intelligence.'
// 									,'There are 13,800 school districts in the United States. I don’t know of a single one that doesn’t fit the pattern on standardized tests: Black students get the worst grades. Hispanics do better than blacks. Whites do better than Hispanics. And Asians do best of all. '
// 									,'people of different races have different abilities'
// 									,'You may think tests of any kind – especially IQ tests – are racist, but specialists overwhelmingly agree that they are not.'
// 									,'Tests accurately measure the intelligence of people of all races. You are basically born with a certain level of intelligence. '
// 									,'Many people claim that blacks do badly in school and on tests because they are poor.'
// 									,'Whites from families with incomes below $20,000 had a mean SAT test score that was 12 points higher than blacks whose families had incomes between $160,000 and $200,000.'
// 									,'Whites from families that were not even making $20,000 outscored blacks from families making more than $160,000.'
// 									,'The best estimates are that genes account for 50 to 80 percent of individual differences in IQ.'
// 									,'It is fashionable to say there is no such thing as race, but Africans and non-Africans probably diverged from a common ancestor more than 100,000 years ago. Asians and whites probably diverged about 50,000 years ago.'
// 									,'It would have been a miracle if the forces of evolution that produced striking physical differences had left the brain completely untouched.'
// 									,'Someday, we will find the genes associated with intelligence, and I think the chances that they are equally distributed among the different races is zero.'
// 									,'scientists are finding the genetic patterns associated with level of education, which is a good indirect indicator of intelligence. '
// 									,'People with bigger brains tend to be smarter; there is a correlation between brain size and IQ of 0.3 to 0.4.'
// 									,'African-descended people (Blacks) average cranial capacities of 1267 cm3, European-descended people (Whites) 1347 cm3, and East Asian-descended people (East Asians) 1364 cm3.” That is a black/Asian difference of 97 cubic cc, or about 6 cubic inches. Those 6 cubic inches aren’t just sitting there. They’re hard at work.'
// 									,'brain size differences match intelligence: “Blacks average an IQ of 85, Whites 100, and East Asians 106.'
// 									,'The races are not, on average, equal in intelligence, and genes almost certainly have a lot to do with it.'
// 									,'There is powerful evidence that the races differ in other traits: agreeableness, diligence, and the ability to defer gratification – which means the ability to work and sacrifice now for future benefits. '
// 									,'A lot of people don’t want the truth to be known.'
// 									,'the truth appears to be that by and large “racism” doesn’t hold back blacks or Hispanics any more than “racism” pushes Asians ahead'
// 									,'You just can’t expect people of all races to turn out the same.'
// 									,'There are more blacks in jail because blacks commit more crime.'
// 									,'We are building society on a delusion.'
// 									,'our country is going crazy, looking for “systemic racism” and “institutional racism” that aren’t there'
// 									,'This is a colossal waste of money and effort, and it wrongly blames and demonizes whites.'
// 									,'If we are going to compete in the world economy, we have to promote talent, not count black and brown faces.'
// 									,'if we’re going to have a society that even works minimally, blacks – and Hispanics – need to understand that society wants them to succeed. But it’s up to them to get ahead.'
// 									,'more and more white people are fed up with taking the blame for black or Hispanic failure. They are angry.'
// 									,'I’m not convinced a multi-racial society can even work in the long term'
// 									,'a multi-racial society will crack up for sure if we refuse to accept basic facts about race.'
// 									,'If you want to learn about race - just move into a black neighborhood. In just a few weeks, you\'ll qualify as an "expert". That is, if you\'re still alive or at least no longer in intensive care.'
// 									,'a black man\'s lips are the size of Michelin tires.'
// 									,'The day someone invents a virus that transfers through reddit comments and kills the writer of said comment is the day the world starts getting better'
// 									,'A young man was following Him, wearing nothing but a linen sheet over his naked body; and they seized him. But he pulled free of the linen sheet and escaped naked.'
// 									,'As a dog returns to its vomit, so a fool repeats his folly.'
// 									,'Give beer to those who are perishing, wine to those who are in anguish.'
// 									,'He said to Jacob, Let me eat some of that red stuff, because I’m exhausted.'
// 									,'I wish those who unsettle you would castrate themselves!'
// 									,'If a man has sex with an animal, he must be put to death, and the animal must be killed.'
// 									,'If a man loudly blesses his neighbor early in the morning, it will be taken as a curse.'
// 									,'If only you would be altogether silent! For you, that would be wisdom.'
// 									,'It is better to live alone in the desert than with a crabby, complaining wife.'
// 									,'No one whose testicles are crushed or whose penis is cut off shall be admitted to the assembly of the LORD.'
// 									,'There is more hope for a fool than for someone who speaks without thinking.'
// 									,'Thou shalt not boil a kid in its mother’s milk'
// 									,'Yet she became more and more promiscuous as she recalled the days of her youth, when she was a prostitute in Egypt. There she lusted after her lovers, whose genitals were like those of donkeys and whose emission was like that of horses.'
// 									,'You shall eat the flesh of your sons, and you shall eat the flesh of your daughters.'
// 									,'White privilege doesn\'t exist'
// 									,'Racism doesn\'t exist'
// 									,'i wish a motherfucker would!'
// 									,'oh no he didn’t!'
// 									,'you bet’ not do dat'
// 									,'what i\'m about to say is about to be some bullshit'
// 									// ,'you got me fucked up'
// 									// ,'you got me fucked up'
// 									// ,'Word'
// 									// ,'nig'
// 									// ,'nig'
// 									// ,'nig'
// 									// ,'nig'
// 									// ,'nig'
// 									]


function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// function getRandomInt(min) {
// 	return Math.floor(Math.random() * min);
// }

// bot.addListener('pm', function (from, message) {
//     console.log(from + ' => ME: ' + message);
// });

// bot.addListener("notice", function(nick, to, text, message) {
// 	// bot.say(to, ' notice');
// 	console.log('notice', text);
// });

// bot.addListener("selfMessage", function(to, text) {
// 	console.log('selfMessage',to, text);
// });



// bot.addListener("PRIVMSG", function(to, text) {
// 	console.log('PRIVMSG message');
// });

// bot.addListener("ctcp-notice", function(to, text) {
// 	console.log('PRIVMSG notice');
// });

// bot.addListener("ctcp-privmsg", function(to, text) {
// 	console.log('PRIVMSG message');
// });

// bot.addListener('pm', function(nick, message) {
//     console.log('Got private message from %s: %s', nick, message);
// });

// setInterval(bot.say(config.channels[0], + 'test'), 2000);

// Listen for any message, say to him/her in the room
bot.addListener("message", function(from, to, text, message) {


	let chattermessage = text.toLowerCase()


	// console.log(chattermessage)
	// console.log(greeting.includes(chattermessage))
	// console.log(message)
	// console.log(to)

	if (chattermessage.includes(config.botName) && chattermessage.includes('bot') && chattermessage.includes('?')) {
		setTimeout(() => {
			bot.say(to, from + ' ' + botaccusation[getRandomInt(botaccusation.length)]);
		}, getRandomInt(10000));
	}

	if (chattermessage.includes(config.botName) && botsup.some(word => chattermessage.includes(word))) {
		setTimeout(() => {
			bot.say(to, from + ' ' + botsupreply[getRandomInt(botsupreply.length)]);
		}, getRandomInt(10000));
	}

	if (greeting.includes(chattermessage) && getRandomInt(3) == 1) {
		setTimeout(() => {
			bot.say(to, greeting[getRandomInt(greeting.length)]);
		}, getRandomInt(10000));
	}

	if (generalmessages.some(word => chattermessage.includes(word)) && getRandomInt(3) == 1) {
		setTimeout(() => {
			bot.say(to, botgeneralreply[getRandomInt(botgeneralreply.length)]);
		}, getRandomInt(10000));
	}

	if (crypto.includes(chattermessage) && getRandomInt(2) == 1) {
		setTimeout(() => {
			bot.say(to, cryptoresponse[getRandomInt(cryptoresponse.length)]);
		}, getRandomInt(10000));
	}

	if (byes.includes(chattermessage) && getRandomInt(2) == 1) {
		setTimeout(() => {
			bot.say(to, byes[getRandomInt(byes.length)]);
		}, getRandomInt(10000));
	}

	// if ( (message.args[1]).toLowerCase() == ('nigger')) {
	// 	bot.say(to, 'Please dont say the N word, its racist');
	// }
	// if (chattermessage == ('dance')) {
	// 	bot.say(to, '\u0001ACTION dances: :D\\-<\u0001')
	// }
	if (swear.some(word => chattermessage.includes(word)) && getRandomInt(3) == 1) {
		bot.say(to, swearreply[getRandomInt(swearreply.length)]);
	}
	// if ( (chattermessage.includes('kek')) {
	// 	bot.say(to, funny[getRandomInt(funny.length)] );
	// }
	if (funny.some(word => chattermessage.includes(word))) {
		setTimeout(() => {
			bot.say(to, funny[getRandomInt(funny.length)]);
		}, getRandomInt(10000));
	}

	if (racist.some(word => chattermessage.includes(word)) && getRandomInt(3) == 1) {

		setTimeout(() => {
			bot.say(to, antiracist[getRandomInt(antiracist.length)] + ' ' + from);
		}, getRandomInt(10000));

	}
	if (racistspic.some(word => chattermessage.includes(word)) && getRandomInt(5) == 1) {

		setTimeout(() => {
			bot.say(to, antiracistspic[getRandomInt(antiracistspic.length)] + ' ' + from);
		}, getRandomInt(10000));

	}

});

// const response = await fetch('http://feeds.washingtonpost.com/rss/politics', {
// 		method: 'POST',
// 		body: 'a=1'
// 	});
// const data = await response.text();

bot.addListener('join', function(channel, who) {
	// console.log('%s has joined %s', who, channel);
	// setInterval( ()=>{ bot.say(channel, racerealism[getRandomInt(racerealism.length)] )}, 1000000);
	// initReader();

	// feeder.on('new-item', (item) => {
	// 	bot.say(item);
	// });
	


	// console.log(data);

	setTimeout(() => {
		if (who == 'catatafishe') {
			bot.say(channel, who + ' the wise mod has appeared');
		} else if (who == 'fobby') {
			bot.say(channel, who + ' fobby lobby');

		} else if (who == 'IRSSucks') {
			bot.say(channel, who + ' IRCSucks has arrived');
		} else if (who.includes('konrad')) {
			bot.say(channel, who + ' you are rad');
		} else if (who.includes('tromto')) {
			bot.say(channel, who + ' has entered the room, all rise');
		} else if (who.includes('wolowolo')) {
			bot.say(channel, who + ' hi wolowolo, did you come to spam again?');
		} else if (who.includes(config.botName)) {
			if (getRandomInt(3) == 1) {

				bot.say(channel, 'hi ' + suffixes[getRandomInt(suffixes.length)]);
			} else {
				bot.say(channel, 'hi')
			}

		} else if (getRandomInt(3) == 1) {
			bot.say(channel, who + ' hi');
		}


	}, getRandomInt(10000));
});