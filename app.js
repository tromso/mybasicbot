var config = {
	channels: ["#timespaces"],
	server: "irc.rizon.net",
	botName: "dannyboy",
	password: "Ca94101irc"
};

import irc from 'irc';


// Create the bot name
var bot = new irc.Client(config.server, config.botName,  {
	channels: config.channels,
	password: config.password
});

let crypto = ['bitcoin', 'ethereum', 'monero', 'doge', 'cardano', 'crypto', '.btc', '.eth', 'btc', 'eth'];
let swear = ['wtf', 'fuck', 'shit', 'angry', 'cunt', 'pussy', 'fag', 'faggot'];
let swearreply = ['wtf', 'fuck', 'shit', 'cunt', 'pussy', 'fag', 'faggot', 'don\'t swear', 'sfw, my daugther is nearby', 'you\'re a tough guy', 'i\'m gay', 'stop being so mad', 'are you mad?', 'are you ok?', 'calm down'];
let cryptoresponse = ['bitcoin sucks', 'crypto goes up crypto goes down', 'I have about $500 in monero', 'doge lol', '.btc', '.eth', 'shit it\'s down again', 'I\'m down $3000 trading bitcoin this year'];
let twitch = ['twitch'];
let instagram = ['instagram'];
let facebook = ['facebook'];
let bothello = ['hello','hi','gm'];
let botsup = ['sup', 'doing good', 'how are you?', 'what are you up to?', 'how are you', 'how are you doing', 'what\'s up'];
let botsupreply = ['Just found out I have the gene for alcoholism that puts me into opioid withdrawal when I drink way too much liquor (which I always do.). I quit cold turkey a week ago and can\'t feel anything except pain and the urge to shoot myself in the head','Pretty good fren. My son just turned 2 and I taught him to call my wife a nigger.','im good', 'nm', 'i\'m chillin', 'nothing', 'chatting', 'another day another $', 'good, u?', 'im doing fine'];

let generalmessages = ['no', 'yuh', 'hii', 'yes', 'yeah', 'yes', 'tired', 'heh', 'from', 'maybe', 'what', 'where', 'doing', 'who', 'best', 'sad', 'boring', 'pretty', 'how', 'that']
let botaccusation = ['no i\'m not a bot', 'im real', 'wtf I\'m real human bean', 'no', 'no, are you', 'yes i am a bot', 'im not a fucking bot', 'yes i\'m a bot, tromto programmed me', 'yes but at least im not a faggot', 'fuck you, no', 'yep', 'sometimes i am sometimes im not', 'no, just autistic', 'no, just I\'m just boring', 'not this question again', 'im tired of being asked that'];
let greeting = ['hi', 'hello', 'gm', 'sup', 'hey', 'howdy', 'hola'];
let funny = ['lol', 'haha', 'lolol', 'kek', 'rolf', 'that\'s funny', 'lmao', 'lmafo', 'lulz', 'hehe', 'huehue', 'that\'s pretty funny', 'I\'m laughing', 'I\'m cracking up'];
let racist = ['nigger', 'niggers', 'nigga', 'niggas', 'porch monkey', 'baboon', 'ape', 'crow', 'coon', 'colored', 'kafir', 'kaffir', 'monkey', 'nig-nog', 'niglets', 'niglet', 'nigglet', 'quashie', 'eggplant', 'jigaboos', 'jigaboo', 'nig', 'nigs', 'niggah', 'nigguh', 'niger', 'niggur', 'niggar'];
let antiracist = ['there is no need to be racist', 'please abstain from being a jerk', 'please don\'t be racist in the chat', 'I can\'t believe you said that word', 'I\'m going to kick you if you keep saying things like that', 'I\'m caling the mods', 'It\'s unnaceptable to use that word here', 'please don\'t use that language', 'I wish you were less racist', 'I\'m done chatting in this racist channel', 'I will get you banned', 'for fuck sake stop saying that', 'I used to have a friend who said things like that', 'my mom taught me not to be racist', 'haha there he goes again saying it', 'please stop', 'there is nothing stopping you is it?', 'stop racism', 'you\'re a racist', 'racist', 'racist much?', 'people at my school said shit like that', 'can you fucking stoop', 'stahp', 'this isn\'t 4chan kid'];
let racistspic = ['spic', 'wetback', 'mexican', 'latino', 'latina', 'goblina', 'taco', 'paco', 'puertorican','haitian','haitians','haiti'];
let antiracistspic = ['immigrants built this country', 'latinas are pretty sexy', 'I had a latina girlfriend', 'if I had a latina girlfriend I would wreck her', 'puertoricans are not too bad but dominicans really get on my nerves, mexicans are ok'];
let byes = ['goodbye', 'good night', 'bye', 'cya', 'cya later', 'adios', 'ttyl', 'night','gn'];
let suffixes = ['guys', 'all', 'folks', 'everybody', 'everyone', 'there'];
let someshit = ['Is anyone else here just totally completely fucking miserable?','I am numb when I wake up in the morning and when I go to bed at night,','I feel dead inside, I feel nothing','I remember always having a feeling of pretty low chronic depression since I was around 13 (now 24) but it hit nuclear levels in summer of 2020, literally closest I have ever been to sucide and super close to throwing myself off a high rise building I had access to.','I feel like self medicating with something hardcore','Can anyone else chime in here and tell me what the fuck is going on and how to fix it?','Eat ze bugs','Is there a point to this sad story?','No one cares. Kys','Nah, I\'m good.','I just collapsed on the floor a few minutes ago.','I went downstairs to the basement where she last was and I smelled the bed where she layed naked just a week ago.','Her candle still here.','A piece of gum left on the bed post.','I went up stairs after screaming out of anger and regret with the bottle of Vodka I had got for her. ','I\'m a total fucking mess. I hate women.','no idea how to fix this, i basically feel the same','start doing 5-10 pushups a day','Read at least 2 hours every day','Go for at least a one hour long walk','Get at least 15 minutes of sun','Work out to a sweat at least once per day','Eat three healthy meals, with two snacks inbetween (snacks as in fruit, nuts, maybe a sandwich)','Start playing an instrument and stick to it','Get a hobby, such as a sport, maybe martial arts, maybe painting, sculpting, 3d modelling - whatever','Start your own side business, ideas: 3d printing, a snack stand, pottery, web dev, crypto mining - whatever','Enroll in a course and learn something new, perhaps a new language','I have little motivation and get little pleasure out of life.','If you do all these things and stick to it, you VILL be happy in less than 6 months.','Endure or die faggot.','Godspeed, space cowboy','I have a pessimistic outlook on human affairs','Why be depressed now when things are just getting interesting?','You\'re probably spending way too much time on the internet and not getting enough sleep (or too much sleep).','motivation comes from within','Stop feeling sorry for yourself','invest in your physical health (eating better, physical exercise, etc.) and find a purpose instead of bitching that you have no purpose.','There\'s a million wonderful things to experience on this planet and you\'ve only got like 50 years left to experience the ones you want the most.','Stop bitching about the price of these seats. They\'re front row to the end of the world.','what\'s your diet?','What pains you anon?','You need to talk about it, confront it and deal with it.','It\'s the only way you can get better.','I was feeling similarly this past fall and into winter, Christmas and New Years was a bad time for me.','I would recommend some mushrooms maybe, those are always good for shaking up your preconceptions and mental habits and usually remind you of the magical beauty of the natural world and your connection to it.','Vitamin D deficiency.','I don\'t know, I\'m in a similar boat but things have felt a little better lately.','Something that always makes me feel good is cleaning/organizing my domicile and keeping it that way','I\'m a big believer in your microcosm affecting your microcosm, and having a clean and energetically open living space is good for your mind','Good luck ','I feel your pain','I\'m just now starting to cope with the absence of my ex wife and not feeling like I want to die or get drunk about it','start going to the gym','Who the fuck has the motivation for all that after working 8 hours of a shitty wageslave job?','put your energy into making yourself a chad','fuck these people telling you to take drugs','it will change your life.','Having you tried cardio 3 times a week for one hour and eating a healthy balanced diet?','stop living with your parents, dumbass','You can do both.','Mushrooms made me quit cigarettes cold turkey and I haven\'t smoked them since.',' don\'t go heavy on psychedelics, a little dab will do','Would you rather wage to death, become based and free, or at least die trying?','Yes, and that is good.','i feel it to bro','I don\'t know what it is but seeing that the avaerage person is about 50 times dumber than I already gave them credit for hasn\'t helped','there are a lot of people out there with bad ideas in their head','many such cases ','Being happy is easy, it\'s just a simple chemical reaction. You can take drugs to always be happy.','Is that what you want?','I\'ve only ever come close to suicide once in my life, about 6 years ago','I took a walk around the neighborhood to think things over and the "what if I just died"','people who hate me would be happier if I was dead, why should I go out of my way to make that happen?','Take care of yourself anon. ','That statement will motivate someone for one day tops','life is nothing more than a treadmill. ','Start researching on finding purpose or meaning.','this place is a shithole of negativity.','I wake up at 4:00 to work out before a twelve hour shift six days a week.','The human potential is limitless, tampered only by our will.','I achieved a 500lb deadlift.','You might cry when it happens.','You\'re in a negative feedback loop and need to break the cycle by doing stuff that makes you happy.','what\'s your exercise regimen?','how\'s your sleep?','let\'s look at those things first','someone is going to convince you is da joos or something.','start lifting faggot','I miss when stuff came in glass bottles.','44, married with two kids.','start living as god intended','you are the one & only temple of god','I just don\'t give a fuck. Hahahah','Whoever invested their belief/hope in society or in the herd were always doomed','Psychedelics turns you into a beta faggot.','This guy gets it. ','All this shit is a fucking meme','I have hobbies,','I don\'t drink, I read','I bike 100+ miles a week','If you\'ve always been miserable nothing short of actual meds will help you. ','I eat right and I\'m still fucking miserable','those fucking faggots who are naturally attractive and charismatic tell incels to just be themselves...isn\'t that what they\'ve been doing all their fucking life and it hasn\'t really worked','Fuck you and your shit normie advice','people only give out adice that works for them but all that meme shit is not a one size fits all','I hope your family gets fucking killed in a car wreck if you have one.','same here anon but not that intense','hopefully nature comforts you',' there are cool people out there that would never pose any harm to you','I was basically a NEET because of covid and I became anti-social af','Living a life with comfort will make you depressed because then the little things in life will bring you down','I have no aspirations.','memeflaggots will always be ignored','I have no desire for relationships','I exist to watch the world burn. ','I do not enjoy the company of women. ','The only thing that brings a smile for my face is watching things go horribly wrong and making predictions about how things will go wrong and see them come to fruition','I would consider myself an environmentalist in that technology has enslaved us and a return to a low population planet with fewer people living higher quality lives is imperative.','The internet was a mistake. I should not be communicating here with you.','congrats bro','This is how the world ends.','I\'ve done these things.','I want nothing of this society anymore.','Eat good go for runs find good hobbies.','agreed','Depression is your body yelling you you\'re not living right','have you tried being less of a pussy?','I\'m a therapist.','go on a real adventure.','I\'ve been doing this shit for years','This','There is a depopulation agenda going on, and you were smart enough to avoid it. ','Darkness, imprisoning me','You don\'t create, you consume.','Do you think trauma is easy to rid yourself of?','You need to channel your anger and pain through art to feel any relief.','Get a little drum machine and synth and fuck with it on big speakers while getting hammered and see how you feel afterwards.','have you ever sat down and tried to, like, figure out, like, why you\'re miserable and do something about it','how about you do something with yourself ','Dude you are depressed because your life sucks','You shouldn\'t have taken the vaccine, fag.','What you need to is work on that and keep at it.','in a nebulous way that is the solution','You should try a dopamine fast','lmao. seek professional help','No devices, no food, no entertainment, no drugs, no alcohol, no fapping, no sex, no nothing for one whole day.','my head and chest cave in one side','my eyebrows sit in my eye sockets','my head is a weird shape and lumpy','people stare at me when i go out','people whisper under their breath at me I\'ve heard god damn quite a few time','people have told me I\'m the ugliest person they\'ve ever seen','even my own fucking family has said in roundabout ways I\'m ugly as shit','People don\'t even see me as a fucking human being and this has been proven to me countless times throughout my life.','biggest meme ever','Fuck it I\'ll give it a try ','Thank god I found a refuge among common men.','those who are poor like myself are going to die miserably without even having sex in lifetime','Let\'s drink to i...wait I have some ganja. Let\'s smoke weed.','I think it\'s a phase we are all going through together right now','I think we have an ancestral memory and a collective consciousness we all share together.','I\'m a huge believer in Jungian theory especially in his later years.','everyone I\'ve spoken to is miserable or more miserable than usual','Try sitting down and making a statement about all the things that make you feel down or numb','What are some goals or things you think would make you happy? ','Think long term then working backward break it into small steps and the do one of the small steps. ','All it takes is one to get the ball rolling.','I unironically feel exactly the same way. ','I\'m sure you can bag fat American women, it can\'t be that bad.','my appearance is suboptimal','your intellgence and wit make you a great man','men\'s attractiveness is not dictated by good looks','Get yourself together and use the attention you\'re getting productively.','I\'m in rural Alabama living on 30 acres in the hills','World is fucked but whatever','I\'m extremely happy right now','Find a relationship with God my man. It will change your life','Did some bad events occurred?','maybe there is something out there for you who knows','It sounds to me as though you are the most free of any of us.','There\'s nothing wrong with you','When is covid hysteria going to fucking end?','stop jackin off for a week','It doesn\'t suit you, brother','Ok, I\'ll bite','Jesus can help amigo. Just ask him.','Alcohol, nicotine, cannabis and what ever else might feel good, but its really not worth the money, time and energy.','Eat less sugar, sodas ,and sweets.  its just really empty calories and temporary bliss.','I\'m getting married to a gorgeous trad wife God willing','Read the Qur\'an and accept Islam bro',' I\'m involved and feel respected by the community','I get to transform alhamdulillah.','Take the greenpill bro','Escape the materialist mushbrained hell you\'ve been sold','The world is designed to be difficult ','are you retarded?','We\'re living in a mad world. ','you never know how good you had it till it\'s gone','The key is to distance yourself and literally focus on a few things that actually matter to you.','all I do is browse IRC and go to the gym. Nothing else.','I can\'t be bothered to do work, or learn anything new or do anything fun','I partially think I use this place because it makes me feel less lonely.','I love you all frens, you guys help me feel less alone.','That shits awesome.','Have you experimented with slaughtering your enemies?','Looks like one of your siema heniu\'s.','I second this','For me it was late November 2020. That\'s when I began going insane','Glad you found community my friend.','Sounds like you have nothing left to lose. ','I\'m clinically depressed and I dread four days out of five at my job.','you might be right.','This is great news! ','nothing holding you back from whatever cockamamie pie in the sky dream you might have.','Seriously, what\'s the worst that could happen? ','You become homeless and die of exposure','Sounds like a step up to me','Rob that kike owned jewelry store.','the only way to go is up!','whatever strikes your fancy','If you have friends and loved ones on IRC, bring up your concerns with them.','Jesus loves you. Take refuge in him.','approach therapy from a licensed professional','Asking for help is one of the strongest things you can do','You could join a Discord community to find others that share a hobby that you do','Drinking lots of water and eating less junk are good for your body, and can improve your mood and libido quite a lot.','you could start taking fish oil.','one never truly gets over their depression, so we do what we can to live a happy life','I hope you get well soon, bro.','IS THIS REEEAAAALLL!!!!!?????','I felt this way before I joined the Orthodox Church','What\'s the purpose?','Go lift weights','Right back at you brother. It\'s gonna get wild. I just pray our people finally wake up.','Stfu. Stop being a bitch. Punch a nazi.','Don\'t be a bitch. Ypu literally live in THE first world country and none of your problems matter.','i feel okay this evening, but generally i just can\'t take it anymore.','people walk away mid sentence when I\'m talking',' Sleep is one thing that\'s always escaped me, no matter how much I excersice, drink (when I did), take or whatever other stuff I\'ve tried I still wake up multiple times and can never actually get comfortable.','It would be nice to have someone to talk to but my entire life i\'ve never really had anyone either online or off so I have zero conversation skills. ','I\'m going to start doing masturbation attacks on random women','Please consider abstaining from porn.','kill yourself, you spineless fucking coward.','Hit the gym bro. Start a linear progression program like Starting Strength or Stronglifts 5x5. Seriously, the gym saved my life.','you opinion does not matter here ','What purpose is served by saying things like this?','You must be 18+ to post in this chat','stop trying to bait him into getting abused','I\'m fucking miserable and so stressed my stomach perpetually burns and I\'m consistently having nightmares.',' im not here playing the mister good person or whatever emotional type of leeching','want to be friends?','What you are feeling is normal and rational. ','I feel that way now ','I have nothing else to say','Fuck I hate these Reddit posts','wash your penis','You should get your testosterone checked.','I get miserable if I think about the things I missed out on when I was still in high school. ','Cringe','I\'m 27 and have never had any interaction with women outside of family or work.','Because of being awkward and being raised by 1950s boomers, I was behind all the time socially.','I get told I "look angry" all the time by male and female coworkers.','That\'s the main thing that bothers me, that I can\'t get a woman to like me or even be friendly towards me. It hurts. Even my grandfather is like: Son, just pay a woman and get it out of your system.','my father thought I was a faggot because he never sees me looking at women in public.','I have an appointment with the psychiatrist in a month, maybe pills will make me normal.','I really, truly do fucking hate myself. The self loathing runs deep.','About 2 weeks ago I developed 2 herniated vertebral discs and go for my pre-op consultation in a week... and I almost don\'t mind it because it\'s the only real thing I have felt in years','this shit is extremely entertaining','It is simple when you realize the majority of people are absolute retards.','My main problem is being poor, i can\'t made the back studies the doctor tell me to do so scoliosis its getting worse everyday, i can\'t pay my swimming classes anymore, i can\'t find a job, i have two years left to end the university and see if my life worth something','Women are property. They are stupid and need guidance and dick.']
let botgeneralreply = ['cry harder faggot','i wanna die','always has been','first I was almost thrown in prison. Then jail. Now I\'m on probation and homeless. And almost died of covid. Satan\'s been scoring home runs.','no joke though, finding a job in a red state is fucking easy.','my face may not show it but i am in insufferable pain.','you are delusional we live in hell.','I am getting killed by Calculus 2. I need 60% to pass and my average is 62%. Wish me luck','I\'m late 30\'s and don\'t associate with druggie types.','you have nothing to lose and everything to gain','every year has gotten worse so far, might be homeless and die this winter','I\'m unemployed living with my parents','grow up and stop listening to kike science you fucking nigger child','I did nothing but watch youtube and read 4chan/Reddit threads I have a real issue','I\'m running out of reasons to not commit suicide','jews and jewnesses are cute','Peak reddit. Coming up with a bullshit explanation that allows you to paint people you don\'t like as evil, stupid and incompetent. It\'s always like that. Underhanded insults. Nothing else. And that nets you a thousand upvotes and a bag of reddit shekels. It\'s so incredibly tiresome to observe.','Why are black people so easily upset?','I\'m thinking of sucking my own dick but it smeels like fish','Imagine being upset over a word. Stupid niggers. Either we can say all words or no words','I\'ve been here for so long that you guys became the ambient air temperature and I’m just so fuckin BASED I couldn’t keep being racist','We are building society on a delusion.','a black man\'s lips are the size of Michelin tires.','The day someone invents a virus that transfers through reddit comments and kills the writer of said comment is the day the world starts getting better','White privilege doesn\'t exist','Racism doesn\'t exist','i wish a motherfucker would!','oh no he didn’t!','you bet’ not do dat','what i\'m about to say is about to be some bullshit','H-h-ey watch it pal i belong to the tribe','Niggers carry the homo erectus genes you fucking nigger loving science denying leftist kike retard','Redditspacing retard','kill yourself','I’m going to get a VPN just to fuck with you','to long didn\'t read.','just lower your standards','I’m not racist','hii','no','you have something to say to me say it to my face','i think yes','yes','fuckin A','maybe','nevermind','I do not understand','what do you mean?','can you help me?','I do not need a bag','how can I help you?','I\'m just about to do it','something\'s not right here','I agree','I\'ve heard this before','this is an old story','so what','i dont really care','you\'re not really adding anything to the conversation','where are you from?','what do you do?','what do you like to do in your free time?','do you have facebook?','thanks','thank you','I really appreciate that','excuse me','I am sorry','what do you think?','that sounds great','some','I\'ve never actually consired that','are you serious?','sounds good','are you having a bad day or something?','if you don\'t like it here you could just leave ok?','ohh maaa gaaaa','turn up','basic','ratchet','fleek','I have a collection of rare Pepes','fuckboy','yassss','yas queen','fa ril?','fa ril dough?','hayell naww','bogus','girrrrrlllll','sheeeeit','bout that life','yessuh','word','i coom on the haters','the fuck did you just say?','just shut up','you\'re boring','i dont care','thats interesting','oh yeah?','Just been for a couple mile run. Went down the gym last night and lifted some weights. I\'m all fitness pilled now, gonna shed my body fat and get down to a fighting weight.Reject the black pill. Get fit or get fucked.','so what','actually no','I\'m gay','cuckolding is the thinker\'s fetish','I love to coom','I don\'t believe anything you\'re saying','wow','impressive','that\'s based','I\'m getting redpilled'];

var replies = [...someshit,...botgeneralreply];



function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}


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

	if (chattermessage.includes(config.botName) && bothello.some(word => chattermessage.includes(word))) {
		setTimeout(() => {
			bot.say(to, from + ' ' + bothello[getRandomInt(bothello.length)]);
		}, getRandomInt(10000));
	}

	if (greeting.includes(chattermessage) && getRandomInt(3) == 1) {
		setTimeout(() => {
			bot.say(to, greeting[getRandomInt(greeting.length)]);
		}, getRandomInt(10000));
	}

	if (generalmessages.some(word => chattermessage.includes(word)) && getRandomInt(20) == 1) {
		// console.log(replies.length)
		setTimeout(() => {
			bot.say(to, replies[getRandomInt(replies.length)]);
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


	if (swear.some(word => chattermessage.includes(word)) && getRandomInt(3) == 1) {
		bot.say(to, swearreply[getRandomInt(swearreply.length)]);
	}

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

bot.addListener('registered', function() {
	console.log('im connected')
	bot.send('/msg nickserv identify jelmeeirc');
	bot.send('/msg HostServ ON')
});

bot.addListener('join', function(channel, who) {

	setTimeout(() => {
		if (who == 'catatafishe') {
			bot.say(channel,' Hi');
		} else if (who == 'IRSSucks') {
			bot.say(channel, who + ' IRCSucks has arrived');
		} else if (who.includes('konrad')) {
			bot.say(channel, who + ' you are rad');
		} else if (who.includes('wolowolo')) {
			bot.say(channel, ' hi wolowolo, did you come to spam again?');
		} else if (who.includes(config.botName)) {
			if (getRandomInt(3) == 1) {

				bot.say(channel, 'hi ' + suffixes[getRandomInt(suffixes.length)]);
				bot.say('/msg HostServ ON');
			} else {
				bot.say(channel, 'hi')
			}

		} else if (getRandomInt(3) == 1) {
			bot.say(channel, who + ' hi');
			bot.say(channel,'/msg nickserv identify jelmeeirc');
			bot.say(channel,'/msg HostServ ON');
		}


	}, getRandomInt(10000));
});