let toolProficiencies = require("../skills/toolProficiencies");
let items = require("../items/itemsMain");

const acolyte = {
  name: "Acolyte",
  intro: "spent their life in the service of a temple to a specific god or pantheon of gods acting as an intermediary between the realm of the holy and the mortal world. They performed sacred rites, holy rituals, and offering sacrifices in order to conduct worshipers into the presence of the divine.", 
  details:
    "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power.",
  skillProficiencies: ["Insight", "Religion"],
  toolProficiencies: [],
  languages: ["any", "any"],
  startingItems: [
    items.adventuringGear.holySymbol(),
    items.adventuringGear.prayerBook(),
    items.adventuringGear.stickOfIncense(),
    items.adventuringGear.vestments(),
    items.adventuringGear.commonClothes(),
    items.currency.gold(15)
  ],
  feature: {
    name: "Shelter of the Faithful",
    desc:  "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple."
  },
  personalityTraits: [
    [
      "I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.",
      "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
      "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
      "Nothing can shake my optimistic attitude.",
      "I quote (or misquote) sacred texts and proverbs in almost every situation.",
      "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
      "I’ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.",
      "I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world."
    ],
    [
      [
        "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld.",
        "Lawful"
      ],
      [
        "Charity. I always try to help those in need, no matter what the personal cost. ",
        "Good"
      ],
      [
        "Change. We must help bring about the changes the gods are constantly working in the world.",
        "Chaotic"
      ],
      [
        "Power. I hope to one day rise to the top of my faith’s religious hierarchy.",
        "Lawful"
      ],
      [
        "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well.",
        "Lawful"
      ],
      [
        "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings.",
        "Any"
      ]
    ],
    [
      "I would die to recover an ancient relic of my faith that was lost long ago.",
      "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
      "I owe my life to the priest who took me in when my parents died.",
      "Everything I do is for the common people.",
      "I will do anything to protect the temple where I served.",
      "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
    ],
    [
      "I judge others harshly, and myself even more severely.",
      "I put too much trust in those who wield power within my temple’s hierarchy.",
      "My piety sometimes leads me to blindly trust those that profess faith in my god.",
      "I am inflexible in my thinking.",
      "I am suspicious of strangers and expect the worst of them.",
      "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
    ]
  ],
  variant: undefined
};
const charlatan = {
  name: "Charlatan",
  intro: "always had a way with people. With cunning lies, careful ploys, and intricate plans, they made a cosy living.",
  details:
    "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It's a useful talent, and one that you're perfectly willing to use for your advantage. You know what people want and you deliver, or rather, you promise to deliver. Common sense should steer people away from things that sound too good to be true, but common sense seems to be in short supply when you're around. The bottle of pink colored liquid will surely cure that unseemly rash, this ointment – nothing more than a bit of fat with a sprinkle of silver dust can restore youth and vigor, and there's a bridge in the city that just happens to be for sale. These marvels sound implausible, but you make them sound like the real deal.",
  skillProficiencies: ["deception", "Sleight of Hand"],
  toolProficiencies: [
    toolProficiencies.disguiseKit,
    toolProficiencies.forgeryKit
  ],
  languages: [],
  startingItems: [
    items.adventuringGear.fineClothes(),
    items.adventuringGear.disguiseKit(),
    [
      items.adventuringGear.coloredLiquidInABottle(10),
      items.adventuringGear.weightedDice(),
      items.adventuringGear.setOfMarkedCards(),
      items.adventuringGear.fakeSignetRing()
    ],
    items.currency.gold(15)
  ],
  feature: {
    name: "False Identity",
    desc:  "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy."
  },
  personalityTraits: [
    [
      "I fall in and out of love easily, and am always pursuing someone.",
      "I have a joke for every occasion, especially occasions where humor is inappropriate.",
      "Flattery is my preferred trick for getting what I want.",
      "I'm a born gambler who can't resist taking a risk for a potential payoff.",
      "I lie about almost everything, even when there's no good reason to.",
      "Sarcasm and insults are my weapons of choice.",
      "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
      "I pocket anything I see that might have some value"
    ],
    [
      [
        "Independence. I am a free spirit – no one tells me what to do.",
        "Chaotic"
      ],
      [
        "Fairness. I never target people who can't afford to lose a few coins.",
        "Lawful"
      ],
      [
        "Charity. I distribute the money I acquire to the people who really need it. ",
        "Good"
      ],
      ["Creativity. I never run the same con twice.", "Chaotic"],
      [
        "Friendship. Material goods come and go. bonds of friendship last forever.",
        "Good"
      ],
      ["Aspiration. I'm determined to make something of myself.", "Any"]
    ],
    [
      "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
      "I owe everything to my mentor – a horrible person who's probably rotting in jail somewhere.",
      "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
      "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
      "A powerful person killed someone I love. Some day soon, I'll have my revenge.",
      "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
    ],
    [
      "I can't resist a pretty face.",
      "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
      "I'm convinced that no one could ever fool me the way I fool others.",
      "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
      "I can't resist swindling people who are more powerful than me.",
      "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
    ],
    "Favorite Schemes: Every charlatan has an angle they use in preference to other schemes. Choose a favorite scam or roll on the table below.",
    [
      "I cheat at games of chance.",
      "I shave coins or forge documents.",
      "I insinuate myselfinto people's lives to prey on their weakness and secure their fortunes.",
      "I put on new identities like clothes.",
      "I run sleight of hand cons on street corners.",
      "I convince people that worthless junk is worth their hard earned money."
    ]
  ],
  variant: undefined
};
const criminal = {
  name: "Criminal",
  intro: "has a long history of breaking the law. Plenty of time was spent in and amongst the underbelly of cities in criminal society where they learned to hone their skills.",
  details:
    "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
  skillProficiencies: ["deception", "Stealth"],
  toolProficiencies: [
    toolProficiencies.gamingSets,
    toolProficiencies.thievesTools
  ],
  languages: [],
  startingItems: [
    items.adventuringGear.crowbar(),
    items.adventuringGear.darkCommonClothes(),
    items.currency.gold(15)
  ],
  feature: {
    name: "Criminal Contact",
    desc:  "You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."
  },
  personalityTraits: [
    [
      "I always have a plan for what to do when things go wrong.",
      "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
      "The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.",
      "I would rather make a new friend than a new enemy.",
      "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
      "I don’t pay attention to the risks in a situation. Never tell me the odds.",
      "The best way to get me to do something is to tell me I can’t do it.",
      "I blow up at the slightest insult."
    ],
    [
      ["Honor. I don’t steal from others in the trade.", "Lawful"],
      [
        "Freedom. Chains are meant to be broken, as are those who would forge them.",
        "Chaotic"
      ],
      [
        "Charity. I steal from the wealthy so that I can help people in need. ",
        "Good"
      ],
      ["Greed. I will do whatever it takes to become wealthy.", "Evil"],
      [
        "People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care.",
        "Neutral"
      ],
      ["Redemption. There’s a spark of good in everyone. ", "Good"]
    ],
    [
      "I’m trying to pay off an old debt I owe to a generous benefactor.",
      "My ill-gotten gains go to support my family",
      "Something important was taken from me, and I aim to steal it back.",
      "I will become the greatest thief that ever lived.",
      "I’m guilty of a terrible crime. I hope I can redeem myself for it.",
      "Someone I loved died because of a mistake I made. That will never happen again."
    ],
    [
      "When I see something valuable, I can’t think about anything but how to steal it.",
      "When faced with a choice between money and my friends, I usually choose the money.",
      "If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.",
      "I have a “tell” that reveals when I’m lying.",
      "I turn tail and run when things look bad.",
      "An innocent person is in prison for a crime that I committed. I’m okay with that."
    ],
    "Criminal Specialty: There are many kinds of criminals, and within a thieves’ guild or similar criminal organization, individual members have particular specialties. Even criminals who operate outside of such organizations have strong preferences for certain kinds of crimes over others. Choose the role you played in your criminal life, or roll on the table below.",
    [
      "Blackmailer",
      "Burglar",
      "Enforcer",
      "Fence",
      "Highway robber",
      "Hired Killer",
      "Pickpocket",
      "Smuggler"
    ]
  ],
  variant: {
    Spy:
      "Although your capabilities are not much different from those of a burglar or smuggler, you learned and practiced them in a very different context: as an espionage agent. You might have been an officially sanctioned agent of the crown, or perhaps you sold the secrets you uncovered to the highest bidder."
  }
};
const gladiator = {
  name: "Gladiator",
  intro: "performed in combat pits for the voracious audience of common-folk and nobility alike.",
  details:
    "A gladiator is as much an entertainer as any minstrel or circus performer trained to make the arts of combat into a spectacle the crowd can enjoy. This kind of flashy combat is your entertainer routine, though you might also have some skills as a tumbler or actor.",
  skillProficiencies: ["acrobatics", "performance"],
  toolProficiencies: [
    toolProficiencies.disguiseKit,
    toolProficiencies.instruments
  ],
  languages: [],
  startingItems: [
    items.weapons.martial.any(),
    [
      items.adventuringGear.letterFromAdmirer(),
      items.adventuringGear.lockOfHair(),
      items.adventuringGear.trinket()
    ],
    items.adventuringGear.costume(),
    items.currency.gold(15)
  ],
  feature: {
    name:"By Popular Demand",
    desc:  "You can find a place to perform in any place that features combat for entertainment - perhaps a gladiatorial arena or secret pit fighting club."
  },
  personalityTraits: [
    [
      "I know a story relevant to almost every situation.",
      "Whenever I come to a new place, I collect local rumors and spread gossip.",
      "I'm a hopeless romantic, always searching for that 'special someone.'",
      "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
      "I love a good insult, even one directed at me.",
      "I get bitter if I'm not the center of attention.",
      "I'll settle for nothing less than perfection.",
      "I change my mood or my mind as quickly as I change key in a song."
    ],
    [
      ["Beauty. When I perform, I make the world better than it was. ", "Good"],
      [
        "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are.",
        "Lawful"
      ],
      [
        "Creativity. The world is in need of new ideas and bold action.",
        "Chaotic"
      ],
      ["Greed. I'm only in it for the money and fame.", "Evil"],
      [
        "People. I like seeing the smiles on people's faces when I perform. That's all that matters.",
        "Neutral"
      ],
      [
        "Honesty. Art should reflect the soul; it should come from within and reveal who we really are.",
        "Any"
      ]
    ],
    [
      "My instrument is my most treasured possession, and it reminds me of someone I love.",
      "Someone stole my precious instrument, and someday I'll get it back.",
      "I want to be famous, whatever it takes.",
      "I idolize a hero of the old tales and measure my deeds against that person's.",
      "I will do anything to prove myself superior to my hated rival.",
      "I would do anything for the other members of my old troupe."
    ],
    [
      "I'll do anything to win fame and renown.",
      "I'm a sucker for a pretty face.",
      "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
      "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
      "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
      "Despite my best efforts, I am unreliable to my friends."
    ],
    "Entertainer Routines: A good entertainer is versatile, spicing up every performance with a variety of different routines. Choose one to three routines or roll on the table below to define your expertise as an entertainer.",
    [
      "Actor",
      "Dancer",
      "Fire-eater",
      "Jester",
      "Juggler",
      "Instrumentalist",
      "Poet",
      "Singer",
      "Storyteller",
      "Tumbler"
    ]
  ],
  variant: "entertainer"
};
const entertainer = {
  name: "Entertainer",
  intro: "made a name in performing their art for coin and fame; they thrived on moving the souls of their audience.",
  details:
    "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.",
  skillProficiencies: ["acrobatics", "performance"],
  toolProficiencies: [
    toolProficiencies.disguiseKit,
    toolProficiencies.instruments
  ],
  languages: [],
  startingItems: [
    items.adventuringGear.musicalInstrument.any(),
    [
      items.adventuringGear.letterFromAdmirer(),
      items.adventuringGear.lockOfHair(),
      items.adventuringGear.trinket()
    ],
    items.adventuringGear.costume(),
    items.currency.gold(15)
  ],
  feature: {
    "By Popular Demand":
      "You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you."
  },
  personalityTraits: [
    [
      "I know a story relevant to almost every situation.",
      "Whenever I come to a new place, I collect local rumors and spread gossip.",
      "I'm a hopeless romantic, always searching for that 'special someone.'",
      "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
      "I love a good insult, even one directed at me.",
      "I get bitter if I'm not the center of attention.",
      "I'll settle for nothing less than perfection.",
      "I change my mood or my mind as quickly as I change key in a song."
    ],
    [
      ["Beauty. When I perform, I make the world better than it was. ", "Good"],
      [
        "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are.",
        "Lawful"
      ],
      [
        "Creativity. The world is in need of new ideas and bold action.",
        "Chaotic"
      ],
      ["Greed. I'm only in it for the money and fame.", "Evil"],
      [
        "People. I like seeing the smiles on people's faces when I perform. That's all that matters.",
        "Neutral"
      ],
      [
        "Honesty. Art should reflect the soul; it should come from within and reveal who we really are.",
        "Any"
      ]
    ],
    [
      "My instrument is my most treasured possession, and it reminds me of someone I love.",
      "Someone stole my precious instrument, and someday I'll get it back.",
      "I want to be famous, whatever it takes.",
      "I idolize a hero of the old tales and measure my deeds against that person's.",
      "I will do anything to prove myself superior to my hated rival.",
      "I would do anything for the other members of my old troupe."
    ],
    [
      "I'll do anything to win fame and renown.",
      "I'm a sucker for a pretty face.",
      "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
      "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
      "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
      "Despite my best efforts, I am unreliable to my friends."
    ],
    "Entertainer Routines: A good entertainer is versatile, spicing up every performance with a variety of different routines. Choose one to three routines or roll on the table below to define your expertise as an entertainer.",
    [
      "Actor",
      "Dancer",
      "Fire-eater",
      "Jester",
      "Juggler",
      "Instrumentalist",
      "Poet",
      "Singer",
      "Storyteller",
      "Tumbler"
    ]
  ],
  variant: "gladiator"
};
const folkHero = {
  name: "Folk Hero",
  intro: "gained much fame having performed a heroic deed for the people they called their own.",
  details:
    "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
  skillProficiencies: ["animalHandling", "Survival"],
  toolProficiencies: [
    toolProficiencies.artisansTools,
    toolProficiencies.vehicles("land")
  ],
  languages: [],
  startingItems: [
    items.adventuringGear.artisansTools,
    items.adventuringGear.shovel(),
    items.adventuringGear.ironPot(),
    items.adventuringGear.commonClothes(),
    items.currency.gold(10)
  ],
  feature: {
    name:"Rustic Hospitality",
    desc:  "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you."
  },
  personalityTraits: [
    [
      "I judge people by their actions, not their words.",
      "If someone is in trouble, I’m always ready to lend help.",
      "When I set my mind to something, I follow through no matter what gets in my way.",
      "I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
      "I’m confident in my own abilities and do what I can to instill confidence in others.",
      "Thinking is for other people. I prefer action.",
      "I misuse long words in an attempt to sound smarter.",
      "I get bored easily. When am I going to get on with my destiny?"
    ],
    [
      [
        "Respect. People deserve to be treated with dignity and respect. ",
        "Good"
      ],
      [
        "Fairness. No one should get preferential treatment before the law, and no one is above the law.",
        "Lawful"
      ],
      [
        "Freedom. Tyrants must not be allowed to oppress the people.",
        "Chaotic"
      ],
      [
        "Might. If I become strong, I can take what I want—what I deserve.",
        "Evil"
      ],
      [
        "Sincerity. There’s no good in pretending to be something I’m not.",
        "Neutral"
      ],
      [
        "Destiny. Nothing and no one can steer me away from my higher calling.",
        "Any"
      ]
    ],
    [
      "I have a family, but I have no idea where they are. One day, I hope to see them again.",
      "I worked the land, I love the land, and I will protect the land.",
      "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
      "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
      "I protect those who cannot protect themselves.",
      "I wish my childhood sweetheart had come with me to pursue my destiny."
    ],
    [
      "The tyrant who rules my land will stop at nothing to see me killed.",
      "I’m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
      "The people who knew me when I was young know my shameful secret, so I can never go home again.",
      "I have a weakness for the vices of the city, especially hard drink.",
      "Secretly, I believe that things would be better if I were a tyrant lording over the land.",
      "I have trouble trusting in my allies."
    ],
    "Defining Event: You previously pursued a simple profession among the peasantry, perhaps as a farmer, miner, servant, shepherd, woodcutter, or gravedigger. But something happened that set you on a different path and marked you for greater things. Choose or randomly determine a defining event that marked you as a hero of the people.",
    [
      "I stood up to a tyrant’s agents.",
      "I saved people during a natural disaster.",
      "I stood alone against a terrible monster.",
      "I stole from a corrupt merchant to help the poor.",
      "I led a militia to fight off an invading army.",
      "I broke into a tyrant’s castle and stole weapons to arm the people.",
      "I trained the peasantry to use farm implements as weapons against a tyrant’s soldiers.",
      "A lord rescinded an unpopular decree after I led a symbolic act of protest against it.",
      "A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.",
      "Recruited into a lord’s army, I rose to leadership and was commended for my heroism."
    ]
  ],
  variant: undefined
};

const guildArtisan = {
  name: "Guild Artisan",
  intro: "gained skill in their craft as an apprentice. They remain in contact and noteriety with fellow guild members and the guild in general.",
  details:
    "You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.",
  skillProficiencies: ["Insight", "Persuasion"],
  toolProficiencies: [[toolProficiencies.artisansTools]],
  languages: ["any"],
  startingItems: [
    items.adventuringGear.artisansTools,
    items.adventuringGear.letterFromGuild(),
    items.adventuringGear.travelersClothes(),
    items.currency.gold(15)
  ],
  feature: {
   name:  "Guild Membership",
   desc: "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces."
  },
  personalityTraits: [
    [
      "I believe that anything worth doing is worth doing right. I can't help it – I'm a perfectionist.",
      "I'm a snob who looks down on those who can't appreciate fine art.",
      "I always want to know how things work and what makes people tick.",
      "I'm full of witty aphorisms and have a proverb for every occasion.",
      "I'm rude to people who lack my commitment to hard work and fair play.",
      "I like to talk at length about my profession.",
      "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
      "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
    ],
    [
      [
        "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization.",
        "Lawful"
      ],
      [
        "Generosity. My talents were given to me so that I could use them to benefit the world. ",
        "Good"
      ],
      [
        "Freedom. Everyone should be free to pursue his or her own livelihood.",
        "Chaotic"
      ],
      ["Greed. I'm only in it for the money.", "Evil"],
      [
        "People. I'm committed to the people I care about, not to ideals.",
        "Neutral"
      ],
      ["Aspiration. I work hard to be the best there is at my craft.", "Any"]
    ],
    [
      "The workshop where I learned my trade is the most important place in the world to me.",
      "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
      "I owe my guild a great debt for forging me into the person I am today.",
      "I pursue wealth to secure someone's love.",
      "One day I will return to my guild and prove that I am the greatest artisan of them all.",
      "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
    ],
    [
      "I'll do anything to get my hands on something rare or priceless.",
      "I'm quick to assume that someone is trying to cheat me.",
      "No one must ever learn that I once stole money from guild coffers.",
      "I'm never satisfied with what I have – I always want more.",
      "I would kill to acquire a noble title.",
      "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
    ],
    "Guild Business: Guilds are generally found in cities large enough to support several artisans practicing the same trade. However, your guild might instead be a loose network of artisans who each work in a different village within a larger realm. Work with your DM to determine the nature of your guild. You can select your guild business from the Guild Business table or roll randomly.",
    [
      "Alchemists and apothecaries",
      "Armorers, locksmiths, and finesmiths",
      "Brewers, distillers, and vintners",
      "Calligraphers, scribes, and scriveners",
      "Carpenters, roofers, and plasterers",
      "Cartographers, surveyors, and chart-makers",
      "Cobblers and shoemakers",
      "Cooks and bakers",
      "Glassblowers and glaziers",
      "Jewelers and gemcutters",
      "Leatherworkers, skinners, and tanners",
      "Masons and stonecutters",
      "Painters, limners, and sign-makers",
      "Potters and tile-makers",
      "Shipwrights and sailmakers",
      "Smiths and metal-forgers",
      "Tinkers, pewterers, and casters",
      "Wagon-makers and wheelwrights",
      "Weavers and dyers",
      "Woodcarvers, coopers, and bowyers"
    ]
  ],
  variant: "guildMerchant"
};
const guildMerchant = {
  name: "Guild Merchant",
  intro: "was a part of a great organism of trade. They spent their earlier years learning the logistical, enconomical, and political sphere of merchantilism.",
  details:
    "Instead of an artisans' guild, you might belong to a guild of traders, caravan masters, or shopkeepers. You don't craft items yourself but earn a living by buying and selling the works of others (or the raw materials artisans need to practice their craft). Your guild might be a large merchant consortium (or family) with interests across the region. Perhaps you transported goods from one place to another, by ship, wagon, or caravan, or bought them from traveling traders and sold them in your own little shop. In some ways, the traveling merchant's life lends itself to adventure far more than the life of an artisan.",
  skillProficiencies: ["Insight", "Persuasion"],
  toolProficiencies: [
    toolProficiencies.artisansTools,
    toolProficiencies.navigatorsTools
  ],
  languages: ["any"],
  startingItems: [
    items.adventuringGear.artisansTools,
    items.adventuringGear.letterFromGuild(),
    items.adventuringGear.travelersClothes(),
    items.currency.gold(15)
  ],
  feature: {
    name: "Guild Membership",
    desc: "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces."
  },
  personalityTraits: [
    [
      "I believe that anything worth doing is worth doing right. I can't help it – I'm a perfectionist.",
      "I'm a snob who looks down on those who can't appreciate fine art.",
      "I always want to know how things work and what makes people tick.",
      "I'm full of witty aphorisms and have a proverb for every occasion.",
      "I'm rude to people who lack my commitment to hard work and fair play.",
      "I like to talk at length about my profession.",
      "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
      "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
    ],
    [
      [
        "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization.",
        "Lawful"
      ],
      [
        "Generosity. My talents were given to me so that I could use them to benefit the world. ",
        "Good"
      ],
      [
        "Freedom. Everyone should be free to pursue his or her own livelihood.",
        "Chaotic"
      ],
      ["Greed. I'm only in it for the money.", "Evil"],
      [
        "People. I'm committed to the people I care about, not to ideals.",
        "Neutral"
      ],
      ["Aspiration. I work hard to be the best there is at my craft.", "Any"]
    ],
    [
      "The workshop where I learned my trade is the most important place in the world to me.",
      "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
      "I owe my guild a great debt for forging me into the person I am today.",
      "I pursue wealth to secure someone's love.",
      "One day I will return to my guild and prove that I am the greatest artisan of them all.",
      "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
    ],
    [
      "I'll do anything to get my hands on something rare or priceless.",
      "I'm quick to assume that someone is trying to cheat me.",
      "No one must ever learn that I once stole money from guild coffers.",
      "I'm never satisfied with what I have – I always want more.",
      "I would kill to acquire a noble title.",
      "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
    ],
    "Guild Business: Guilds are generally found in cities large enough to support several artisans practicing the same trade. However, your guild might instead be a loose network of artisans who each work in a different village within a larger realm. Work with your DM to determine the nature of your guild. You can select your guild business from the Guild Business table or roll randomly.",
    ["Traders", "Caravan Masters", "Shopkeepers"]
  ],
  variant: "guildArtisan"
};
const hermit = {
  name: "Hermit",
  intro: "lived in seclusion. For years, they spent time in the wilds, far from society and the mechanisms of civilization.",
  details:
    "You lived in seclusion – either in a sheltered community such as a monastery, or entirely alone – for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.",
  skillProficiencies: ["Medicine", "Religion"],
  toolProficiencies: [toolProficiencies.herbalismKit],
  languages: ["any"],
  startingItems: [
    items.adventuringGear.hermitScrollCase(),
    items.adventuringGear.winterBlanket(),
    items.adventuringGear.commonClothes(),
    items.adventuringGear.herbalismKit(),
    items.currency.gold(5)
  ],
  feature: {
    name: "Discovery",
    desc:  "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society. Work with your DM to determine the details of your discovery and its impact on the campaign."
  },
  personalityTraits: [
    [
      "I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
      "I am utterly serene, even in the face of disaster.",
      "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
      "I feel tremendous empathy for all who suffer.",
      "I'm oblivious to etiquette and social expectations.",
      "I connect everything that happens to me to a grand, cosmic plan.",
      "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
      "I am working on a grand philosophical theory and love sharing my ideas."
    ],
    [
      [
        "Greater Good. My gifts are meant to be shared with all, not used for my own benefit. ",
        "Good"
      ],
      [
        "Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking.",
        "Lawful"
      ],
      [
        "Free Thinking. Inquiry and curiosity are the pillars of progress.",
        "Chaotic"
      ],
      [
        "Power. Solitude and contemplation are paths toward mystical or magical power.",
        "Evil"
      ],
      [
        "Live and Let Live. Meddling in the affairs of others only causes trouble.",
        "Neutral"
      ],
      [
        "Self-Knowledge. If you know yourself, there's nothing left to know.",
        "Any"
      ]
    ],
    [
      "Nothing is more important than the other members of my hermitage, order, or association.",
      "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
      "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
      "I entered seclusion because I loved someone I could not have.",
      "Should my discovery come to light, it could bring ruin to the world.",
      "My isolation gave me great insight into a great evil that only I can destroy."
    ],
    [
      "Now that I've returned to the world, I enjoy its delights a little too much.",
      "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
      "I am dogmatic in my thoughts and philosophy.",
      "I let my need to win arguments overshadow friendships and harmony.",
      "I'd risk too much to uncover a lost bit of knowledge.",
      "I like keeping secrets and won't share them with anyone."
    ],
    "Life of Seclusion: What was the reason for your isolation, and what changed to allow you to end your solitude? You can work with your DM to determine the exact nature of your seclusion, or you can choose to roll on the table below to determine the reason behind your seclusion.",
    [
      "I was searching for spiritual enlightenment.",
      "I was partaking of communal living in accordance with the dictates of a religious order.",
      "I was exiled for a crime I didn't commit.",
      "I retreated from society after a life-altering event.",
      "I needed a quiet place to work on my art, literature, music, or manifesto.",
      "I needed to commune with nature, far from civilization.",
      "I was the caretaker of an ancient ruin or relic.",
      "I was a pilgrim in search of a person, place, or relic of spiritual significance."
    ]
  ],
  variant: undefined
};

const knight = {
  name: "Knight",
  intro: "served as a military and political extension of a noble house where they learned what it means to to serve, protect, and rule.",
  details:
    "A knighthood is among the lowest noble titles in most societies, but it can be a path to higher status. One of your commoner retainers is replaced by a noble who serves as your squire, aiding you in exchange for training on his or her own path to knighthood. Your two remaining retainers might include a groom to care for your horse and a servant who polishes your armor (and even helps you put it on). As an emblem of chivalry and the ideals of courtly love, you might include among your equipment a banner or other token from a noble lord or lady to whom you have given your heart — in a chaste sort of devotion. This person could be your bond.",
  skillProficiencies: ["History", "Persuasion"],
  toolProficiencies: [toolProficiencies.gamingSets],
  languages: ["any"],
  startingItems: [
    [items.adventuringGear.banner(), items.adventuringGear.tokenOfNoble()],
    items.adventuringGear.fineClothes(),
    items.adventuringGear.signetRing(),
    items.adventuringGear.scrollOfPedigree(),
    items.currency.gold(25)
  ],
  feature: {
    name: "Retainers",
    desc:  "You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. Your retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused."
  },
  personalityTraits: [
    [
      "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
      "The common folk love me for my kindness and generosity.",
      "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
      "I take great pains to always look my best and follow the latest fashions.",
      "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.",
      "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
      "My favor, once lost, is lost forever.",
      "If you do me an injury, I will crush you, ruin your name, and salt your fields."
    ],
    [
      [
        "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. ",
        "Good"
      ],
      [
        "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine.",
        "Lawful"
      ],
      [
        "Independence. I must prove that I can handle myself without the coddling of my family.",
        "Chaotic"
      ],
      [
        "Power. If I can attain more power, no one will tell me what to do.",
        "Evil"
      ],
      ["Family. Blood runs thicker than water.", "Any"],
      [
        "Noble Obligation. It is my duty to protect and care for the people beneath me. ",
        "Good"
      ]
    ],
    [
      "I will face any challenge to win the approval of my family.",
      "My house’s alliance with another noble family must be sustained at all costs.",
      "Nothing is more important than the other members of my family.",
      "I am in love with the heir of a family that my family despises.",
      "My loyalty to my sovereign is unwavering.",
      "The common folk must see me as a hero of the people."
    ],
    [
      "I secretly believe that everyone is beneath me.",
      "I hide a truly scandalous secret that could ruin my family forever.",
      "I too often hear veiled insults and threats in every word addressed to me, and I’m quick to anger.",
      "I have an insatiable desire for carnal pleasures.",
      "In fact, the world does revolve around me.",
      "By my words and actions, I often bring shame to my family."
    ]
  ],
  variant: "noble"
};
const noble = {
  name: "Noble",
  intro: "was born into a royal family where they lived a life of privelege and wealth. They became learned in rulership and the values of the upper-class.",
  details:
    "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.",
  skillProficiencies: ["History", "Persuasion"],
  toolProficiencies: [toolProficiencies.gamingSets],
  languages: ["any"],
  startingItems: [
    items.adventuringGear.fineClothes(),
    items.adventuringGear.signetRing(),
    items.adventuringGear.scrollOfPedigree(),
    items.currency.gold(25)
  ],
  feature: {
    name: "Position of Privilege",
    desc:  "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to."
  },
  personalityTraits: [
    [
      "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
      "The common folk love me for my kindness and generosity.",
      "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
      "I take great pains to always look my best and follow the latest fashions.",
      "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.",
      "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
      "My favor, once lost, is lost forever.",
      "If you do me an injury, I will crush you, ruin your name, and salt your fields."
    ],
    [
      [
        "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. ",
        "Good"
      ],
      [
        "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine.",
        "Lawful"
      ],
      [
        "Independence. I must prove that I can handle myself without the coddling of my family.",
        "Chaotic"
      ],
      [
        "Power. If I can attain more power, no one will tell me what to do.",
        "Evil"
      ],
      ["Family. Blood runs thicker than water.", "Any"],
      [
        "Noble Obligation. It is my duty to protect and care for the people beneath me. ",
        "Good"
      ]
    ],
    [
      "I will face any challenge to win the approval of my family.",
      "My house’s alliance with another noble family must be sustained at all costs.",
      "Nothing is more important than the other members of my family.",
      "I am in love with the heir of a family that my family despises.",
      "My loyalty to my sovereign is unwavering.",
      "The common folk must see me as a hero of the people."
    ],
    [
      "I secretly believe that everyone is beneath me.",
      "I hide a truly scandalous secret that could ruin my family forever.",
      "I too often hear veiled insults and threats in every word addressed to me, and I’m quick to anger.",
      "I have an insatiable desire for carnal pleasures.",
      "In fact, the world does revolve around me.",
      "By my words and actions, I often bring shame to my family."
    ]
  ],
  variant: "knight"
};
const outlander = {
  name: "Outlander",
  intro: "grew up in the wilds, far from civilization and the comforts of town and technology. They learned quickly how to survive amongst the beasts and the trees.",
  details:
    "You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don't know the specific features of the terrain, you know the ways of the wild.",
  skillProficiencies: ["Atheletics", "Survival"],
  toolProficiencies: [toolProficiencies.instruments],
  languages: ["any"],
  startingItems: [
    items.adventuringGear.staff(),
    items.adventuringGear.huntingTrap(),
    items.adventuringGear.animalTrophy(),
    items.adventuringGear.travelersClothes(),
    items.currency.gold(10)
  ],
  feature: {
    name: "Wanderer",
    desc:  "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."
  },
  personalityTraits: [
    [
      "I'm driven by a wanderlust that led me away from home.",
      "I watch over my friends as if they were a litter of newborn pups.",
      "I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde. I'd do it again if I had to.",
      "I have a lesson for every situation, drawn from observing nature.",
      "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
      "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
      "I feel far more comfortable around animals than people.",
      "I was, in fact, raised by wolves."
    ],
    [
      [
        "Change. Life is like the seasons, in constant change, and we must change with it.",
        "Chaotic"
      ],
      [
        "Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. ",
        "Good"
      ],
      ["Honor. If I dishonor myself, I dishonor my whole clan.", "Lawful"],
      ["Might. The strongest are meant to rule.", "Evil"],
      [
        "Nature. The natural world is more important than all the constructs of civilization.",
        "Neutral"
      ],
      ["Glory. I must earn glory in battle, for myself and my clan.", "Any"]
    ],
    [
      "My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
      "An injury to the unspoiled wilderness of my home is an injury to me.",
      "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
      "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
      "I suffer awful visions of a coming disaster and will do anything to prevent it.",
      "It is my duty to provide children to sustain my tribe."
    ],
    [
      "I am too enamored of ale, wine, and other intoxicants.",
      "There's no room for caution in a life lived to the fullest.",
      "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
      "I am slow to trust members of other races, tribes, and societies.",
      "Violence is my answer to almost any challenge.",
      "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
    ],
    "Origin: You've been to strange places and seen things that others cannot begin to fathom. Consider some of the distant lands you have visited, and how they impacted you. You can roll on the following table to determine your occupation during your time in the wild, or choose one that best fits your character.",
    [
      "Forester",
      "Trapper",
      "Homesteader",
      "Guide",
      "Exile or outcast",
      "Bounty hunter",
      "Pilgrim",
      "Tribal nomad",
      "Hunter-gatherer",
      "Tribal marauder"
    ]
  ],
  variant: undefined
};

const sage = {
  name: "Sage",
  intro: "grew up being student of a great master of a study. They learned much about the lore of the multiverse.",
  details:
    "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.",
  skillProficiencies: ["Arcana", "History"],
  toolProficiencies: [],
  languages: ["any", "any"],
  startingItems: [
    items.adventuringGear.ink(),
    items.adventuringGear.quill(),
    items.adventuringGear.smallKnife(),
    items.adventuringGear.letterFromDeadColleague(),
    items.adventuringGear.commonClothes(),
    items.currency.gold(10)
  ],
  feature: {
    name: "Researcher",
    desc:  "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an aDventure or even a whole campaign."
  },
  personalityTraits: [
    [
      "I use polysyllabic words that convey the impression of great erudition.",
      "I've read every book in the world's greatest libraries – or I like to boast that I have.",
      "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
      "There's nothing I like more than a good mystery.",
      "I'm willing to listen to every side of an argument before I make my own judgment.",
      "I… speak… slowly… when talking… to idiots,… which… almost… everyone… is… compared… to me.",
      "I am horribly, horribly awkward in social situations.",
      "I'm convinced that people are always trying to steal my secrets."
    ],
    [
      [
        "Knowledge. The path to power and self-improvement is through knowledge.",
        "Neutral"
      ],
      [
        "Beauty. What is beautiful points us beyond itself toward what is true. ",
        "Good"
      ],
      ["Logic. Emotions must not cloud our logical thinking.", "Lawful"],
      [
        "No Limits. Nothing should fetter the infinite possibility inherent in all existence.",
        "Chaotic"
      ],
      ["Power. Knowledge is the path to power and domination.", "Evil"],
      [
        "Self-Improvement. The goal of a life of study is the betterment of oneself.",
        "Any"
      ]
    ],
    [
      "It is my duty to protect my students.",
      "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
      "I work to preserve a library, university, scriptorium, or monastery.",
      "My life's work is a series of tomes related to a specific field of lore.",
      "I've been searching my whole life for the answer to a certain question.",
      "I sold my soul for knowledge. I hope to do great deeds and win it back."
    ],
    [
      "I am easily distracted by the promise of information.",
      "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
      "Unlocking an ancient mystery is worth the price of a civilization.",
      "I overlook obvious solutions in favor of complicated ones.",
      "I speak without really thinking through my words, invariably insulting others.",
      "I can't keep a secret to save my life, or anyone else's."
    ],
    "Specialty: To determine the nature of your scholarly training, choose one of the following options.",
    [
      "Alchemist",
      "Astronomer",
      "Discredited academic",
      "Librarian",
      "Professor",
      "Researcher",
      "Wizard's apprentice",
      "Scribe"
    ]
  ],
  variant: undefined
};
const pirate = {
  name: "Pirate",
  intro: "and spent their earlier years roaming and pillaging the seas with their captain and crew.",
  details:
    "You spent your youth under the sway of a dread pirate, a ruthless cutthroat who taught you how to survive in a world of sharks and savages. You've indulged in larceny on the high seas and sent more than one deserving soul to a briny grave. Fear and bloodshed are no strangers to you, and you've garnered a somewhat unsavory reputation in many a port town.",
  skillProficiencies: ["Atheletics", "Perception"],
  toolProficiencies: [
    toolProficiencies.navigatorsTools,
    toolProficiencies.vehicles("water")
  ],
  languages: [],
  startingItems: [
    [items.adventuringGear.luckyCharm(), items.adventuringGear.trinket()],
    items.adventuringGear.balayingPin(),
    items.adventuringGear.silkRope(),
    items.adventuringGear.luckyCharm(),
    items.adventuringGear.commonClothes(),
    items.currency.gold(10)
  ],
  feature: {
    name: "Bad Reputation",
    desc:  "No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities."
  },
  personalityTraits: [
    [
      "My friends know they can rely on me, no matter what.",
      "I work hard so that I can play hard when the work is done.",
      "I enjoy sailing into new ports and making new friends over a flagon of ale.",
      "I stretch the truth for the sake of a good story.",
      "To me, a tavern brawl is a nice way to get to know a new city.",
      "I never pass up a friendly wager.",
      "My language is as foul as an otyugh nest.",
      "I like a job well done, especially if I can convince someone else to do it."
    ],
    [
      [
        "Respect. The thing that keeps a ship together is mutual respect between captain and crew. ",
        "Good"
      ],
      [
        "Fairness. We all do the work, so we all share in the rewards.",
        "Lawful"
      ],
      [
        "Freedom. The sea is freedom-the freedom to go anywhere and do anything.",
        "Chaotic"
      ],
      [
        "Mastery. I'm a predator, and the other ships on the sea are my prey.",
        "Evil"
      ],
      ["People. I'm committed to my crewmates, not to ideals.", "Neutral"],
      [
        "Aspiration. Someday I'll own my own ship and chart my own destiny.",
        "Any"
      ]
    ],
    [
      "I'm loyal to my captain first, everything else second.",
      "The ship is most important – crewmates and captains come and go.",
      "I'll always remember my first ship.",
      "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
      "I was cheated out of my fair share of the profits, and I want to get my due.",
      "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
    ],
    [
      "I follow orders, even if I think they're wrong.",
      "I'll say anything to avoid having to do extra work.",
      "Once someone questions my courage, I never back down no matter how dangerous the situation.",
      "Once I start drinking, it's hard for me to stop.",
      "I can't help but pocket loose coins and other trinkets I come across.",
      "My pride will probably lead to my destruction."
    ]
  ],
  variant: "sailor"
};
const sailor = {
  name: "Sailor",
  intro: "and had many years afloat on several ships. In their love and struggle with the mighty seas, they became strong and sharp.",
  details:
    "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new.",
  skillProficiencies: ["Atheletics", "Perception"],
  toolProficiencies: [
    toolProficiencies.navigatorsTools,
    toolProficiencies.vehicles("water")
  ],
  languages: [],
  startingItems: [
    [items.adventuringGear.luckyCharm(), items.adventuringGear.trinket()],
    items.adventuringGear.balayingPin(),
    items.adventuringGear.silkRope(),
    items.adventuringGear.luckyCharm(),
    items.adventuringGear.commonClothes(),
    items.currency.gold(10)
  ],
  feature: {
    name: "Ship's Passage",
    desc: "When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need. Your DM will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage."
  },
  personalityTraits: [
    [
      "My friends know they can rely on me, no matter what.",
      "I work hard so that I can play hard when the work is done.",
      "I enjoy sailing into new ports and making new friends over a flagon of ale.",
      "I stretch the truth for the sake of a good story.",
      "To me, a tavern brawl is a nice way to get to know a new city.",
      "I never pass up a friendly wager.",
      "My language is as foul as an otyugh nest.",
      "I like a job well done, especially if I can convince someone else to do it."
    ],
    [
      [
        "Respect. The thing that keeps a ship together is mutual respect between captain and crew. ",
        "Good"
      ],
      [
        "Fairness. We all do the work, so we all share in the rewards.",
        "Lawful"
      ],
      [
        "Freedom. The sea is freedom-the freedom to go anywhere and do anything.",
        "Chaotic"
      ],
      [
        "Mastery. I'm a predator, and the other ships on the sea are my prey.",
        "Evil"
      ],
      ["People. I'm committed to my crewmates, not to ideals.", "Neutral"],
      [
        "Aspiration. Someday I'll own my own ship and chart my own destiny.",
        "Any"
      ]
    ],
    [
      "I'm loyal to my captain first, everything else second.",
      "The ship is most important – crewmates and captains come and go.",
      "I'll always remember my first ship.",
      "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
      "I was cheated out of my fair share of the profits, and I want to get my due.",
      "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
    ],
    [
      "I follow orders, even if I think they're wrong.",
      "I'll say anything to avoid having to do extra work.",
      "Once someone questions my courage, I never back down no matter how dangerous the situation.",
      "Once I start drinking, it's hard for me to stop.",
      "I can't help but pocket loose coins and other trinkets I come across.",
      "My pride will probably lead to my destruction."
    ]
  ],
  variant: "pirate"
};
const soldier = {
  name: "Soldier",
  intro: "and war has been their life for as long as they care to remember. They became hard, disciplined, and fearsome as they participated in many battles as part of a greater unit.",
  details:
    "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.",
  skillProficiencies: ["Atheletics", "Intimidation"],
  toolProficiencies: [
    toolProficiencies.gamingSets,
    toolProficiencies.vehicles("land")
  ],
  languages: [],
  startingItems: [
    items.adventuringGear.gamingSets,
    items.adventuringGear.insigniaOfRank(),
    items.adventuringGear.enemyTrophy(),
    items.adventuringGear.commonClothes(),
    items.currency.gold(10)
  ],
  feature: {
    name: "Military Rank",
    desc:  "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized."
  },
  personalityTraits: [
    [
      "I’m always polite and respectful.",
      "I’m haunted by memories of war. I can’t get the images of violence out of my mind.",
      "I’ve lost too many friends, and I’m slow to make new ones.",
      "I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
      "I can stare down a hell hound without flinching.",
      "I enjoy being strong and like breaking things.",
      "I have a crude sense of humor.",
      "I face problems head-on. A simple, direct solution is the best path to success."
    ],
    [
      [
        "Greater Good. Our lot is to lay down our lives in defense of others. ",
        "Good"
      ],
      ["Responsibility. I do what I must and obey just authority.", "Lawful"],
      [
        "Independence. When people follow orders blindly, they embrace a kind of tyranny.",
        "Chaotic"
      ],
      ["Might. In life as in war, the stronger force wins.", "Evil"],
      [
        "Live and Let Live. Ideals aren’t worth killing over or going to war for.",
        "Neutral"
      ],
      ["Nation. My city, nation, or people are all that matter.", "Any"]
    ],
    [
      "I would still lay down my life for the people I served with.",
      "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
      "My honor is my life.",
      "I’ll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      "Those who fight beside me are those worth dying for.",
      "I fight for those who cannot fight for themselves."
    ],
    [
      "The monstrous enemy we faced in battle still leaves me quivering with fear.",
      "I have little respect for anyone who is not a proven warrior.",
      "I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.",
      "My hatred of my enemies is blind and unreasoning.",
      "I obey the law, even if the law causes misery.",
      "I’d rather eat my armor than admit when I’m wrong."
    ],

    "Specialty: During your time as a soldier, you had a specific role to play in your unit or army. Roll a d8 or choose from the options in the table below to determine your role:",
    [
      "Officer",
      "Scout",
      "Infantry",
      "Cavalry",
      "Healer",
      "Quartermaster",
      "Standard bearer",
      "Support staff (cook, blacksmith, or the like)"
    ]
  ],
  variant: undefined
};
const urchin = {
  name: "Urchin",
  intro: "grew up on the streets alone, orphaned, and poor. They learned much in the forced necessities of thievery and self-reliance.",
  details:
    "You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You've survived despite all odds, and did so through cunning, strength, speed, or some combination of each. You begin your adventuring career with enough money to live modestly but securely for at least ten days. How did you come by that money? What allowed you to break free of your desperate circumstances and embark on a better life?",
  skillProficiencies: ["Sleight of Hand", "Stealth"],
  toolProficiencies: [
    toolProficiencies.disguiseKit,
    toolProficiencies.thievesTools
  ],
  languages: [],
  startingItems: [
    items.adventuringGear.smallKnife(),
    items.adventuringGear.mapOfHomeCity(),
    items.adventuringGear.petMouse(),
    items.adventuringGear.tokenOfParents(),
    items.adventuringGear.commonClothes(),
    items.currency.gold(10)
  ],
  feature: {
    name: "City Secrets",
    desc: "You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow."
  },
  personalityTraits: [
    [
      "I hide scraps of food and trinkets away in my pockets.",
      "I ask a lot of questions.",
      "I like to squeeze into small places where no one else can get to me.",
      "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
      "I eat like a pig and have bad manners.",
      "I think anyone who's nice to me is hiding evil intent.",
      "I don't like to bathe.",
      "I bluntly say what other people are hinting at or hiding."
    ],
    [
      ["Respect. All people, rich or poor, deserve respect. ", "Good"],
      [
        "Community. We have to take care of each other, because no one else is going to do it.",
        "Lawful"
      ],
      [
        "Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things.",
        "Chaotic"
      ],
      [
        "Retribution. The rich need to be shown what life and death are like in the gutters.",
        "Evil"
      ],
      [
        "People. I help the people who help me-that's what keeps us alive.",
        "Neutral"
      ],
      [
        "Aspiration. I'm going to prove that I'm worthy of a better life.",
        "Any"
      ]
    ],
    [
      "My town or city is my home, and I'll fight to defend it.",
      "I sponsor an orphanage to keep others from enduring what I was forced to endure.",
      "I owe my survival to another urchin who taught me to live on the streets.",
      "I owe a debt I can never repay to the person who took pity on me.",
      "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
      "No one else should have to endure the hardships I've been through."
    ],
    [
      "If I'm outnumbered, I will run away from a fight.",
      "Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
      "I will never fully trust anyone other than myself.",
      "I'd rather kill someone in their sleep then fight fair.",
      "It's not stealing if I need it more than someone else.",
      "People who can't take care of themselves get what they deserve."
    ]
  ],
  variant: undefined
};

const backgrounds = {
  acolyte,
  charlatan,
  criminal,
  entertainer,
  folkHero,
  gladiator,
  guildArtisan,
  guildMerchant,
  hermit,
  knight,
  noble,
  outlander,
  pirate,
  sage,
  sailor,
  soldier,
  urchin
};

module.exports = backgrounds;
