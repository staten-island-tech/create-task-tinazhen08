const books = {
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Books",
      question:
        "George Orwell wrote this book, which is often considered a statement on government oversight.",
      correct_answer: "1984",
      incorrect_answers: [
        "The Old Man and the Sea",
        "Catcher and the Rye",
        "To Kill a Mockingbird",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Books",
      question:
        "Who was the author of the 1954 novel, &quot;Lord of the Flies&quot;?",
      correct_answer: "William Golding",
      incorrect_answers: ["Stephen King", "F. Scott Fitzgerald", "Hunter Fox"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Books",
      question: "How many books are in the Chronicles of Narnia series?",
      correct_answer: "7",
      incorrect_answers: ["6", "8", "5"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Books",
      question: "The book &quot;The Little Prince&quot; was written by...",
      correct_answer: "Antoine de Saint-Exup&eacute;ry",
      incorrect_answers: [
        "Miguel de Cervantes Saavedra",
        "Jane Austen",
        "F. Scott Fitzgerald",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Books",
      question:
        "In the Harry Potter universe, what is Cornelius Fudge&#039;s middle name?",
      correct_answer: "Oswald",
      incorrect_answers: ["James", "Harold", "Christopher"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Books",
      question:
        "Which fictional English county was the setting for Thomas Hardy&#039;s novels?",
      correct_answer: "Wessex",
      incorrect_answers: ["Barsetshire", "Fulchester", "Ambridge"],
    },
  ],
};

const computers = {
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "The programming language &#039;Swift&#039; was created to replace what other programming language?",
      correct_answer: "Objective-C",
      incorrect_answers: ["C#", "Ruby", "C++"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "How many values can a single byte represent?",
      correct_answer: "256",
      incorrect_answers: ["8", "1", "1024"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question:
        "Which of the following is a personal computer made by the Japanese company Fujitsu?",
      correct_answer: "FM-7",
      incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question:
        "The teapot often seen in many 3D modeling applications is called what?",
      correct_answer: "Utah Teapot",
      incorrect_answers: ["Pixar Teapot", "3D Teapot", "Tennessee Teapot"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question:
        "What was the first company to use the term &quot;Golden Master&quot;?",
      correct_answer: "Apple",
      incorrect_answers: ["IBM", "Microsoft", "Google"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "The acronym &quot;RIP&quot; stands for which of these?",
      correct_answer: "Routing Information Protocol",
      incorrect_answers: [
        "Runtime Instance Processes",
        "Regular Interval Processes",
        "Routine Inspection Protocol",
      ],
    },
  ],
};

const generalKnowledge = {
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question: "In which fast food chain can you order a Jamocha Shake?",
      correct_answer: "Arby&#039;s",
      incorrect_answers: ["McDonald&#039;s", "Burger King", "Wendy&#039;s"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question:
        "What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
      correct_answer: "Cube",
      incorrect_answers: ["Sphere", "Cylinder", "Pyramid"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question:
        "When was the Declaration of Independence approved by the Second Continental Congress?",
      correct_answer: "July 4, 1776",
      incorrect_answers: ["May 4, 1776", "June 4, 1776", "July 2, 1776"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question:
        "What name represents the letter &quot;M&quot; in the NATO phonetic alphabet?",
      correct_answer: "Mike",
      incorrect_answers: ["Matthew", "Mark", "Max"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question: "What year was Queen Elizabeth II born?",
      correct_answer: "1926",
      incorrect_answers: ["1923", "1929", "1930"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question: "Chartreuse is a color between yellow and what?",
      correct_answer: "Green",
      incorrect_answers: ["Red", "Black", "Purple"],
    },
  ],
};

const mathematics = {
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Mathematics",
      question: "What prime number comes next after 19?",
      correct_answer: "23",
      incorrect_answers: ["25", "21", "27"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Mathematics",
      question: "How many sides does a heptagon have?",
      correct_answer: "7",
      incorrect_answers: ["8", "6", "5"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Mathematics",
      question:
        "To the nearest whole number, how many radians are in a whole circle?",
      correct_answer: "6",
      incorrect_answers: ["3", "4", "5"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Mathematics",
      question: "What Greek letter is used to signify summation?",
      correct_answer: "Sigma",
      incorrect_answers: ["Delta", "Alpha", "Omega"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Mathematics",
      question: "What is the fourth digit of &pi;?",
      correct_answer: "1",
      incorrect_answers: ["2", "3", "4"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Mathematics",
      question:
        "What is the smallest number that can be expressed as the sum of two positive cubes in two different ways?",
      correct_answer: "1729",
      incorrect_answers: ["91", "561", "4104"],
    },
  ],
};

const music = {
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Music",
      question:
        "Which classical composer wrote the &quot;Moonlight Sonata&quot;?",
      correct_answer: "Ludvig Van Beethoven",
      incorrect_answers: [
        "Chief Keef",
        "Wolfgang Amadeus Mozart",
        "Johannes Brahms",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Music",
      question: "Where does the Mac part of the name Fleetwood Mac come from?",
      correct_answer: "John McVie",
      incorrect_answers: ["Christine McVie", "Mac McAnally", "David Tennant"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question: "What is Brian May&#039;s guitar called?",
      correct_answer: "Red Special",
      incorrect_answers: ["Blue Special", "Green Special", "Yellow Special"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question:
        "May 16th of every year is known as __________ Day, named after a punk band prominent in the 1990s.",
      correct_answer: "Lagwagon",
      incorrect_answers: ["Goldfinger", "Less Than Jake", "Lit"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Music",
      question:
        "What is the first track on the Dave Matthews Band album &quot;Before These Crowded Streets&quot;?",
      correct_answer: "Pantala Naga Pampa",
      incorrect_answers: [
        "Stay (Wasting Time)",
        "Rapunzel",
        "Don&#039;t Drink The Water",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Music",
      question: "Where was Nicki Minaj born?",
      correct_answer: "Trinidad and Tobago",
      incorrect_answers: ["Haiti", "Saint Lucia", "Grenada"],
    },
  ],
};

const mythology = {
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Mythology",
      question:
        "This Greek goddess&#039;s name was chosen for the dwarf planet responsible for discord on Pluto&#039;s classification amongst astronomers.",
      correct_answer: "Eris",
      incorrect_answers: ["Charon", "Ceres", "Dysnomia"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Mythology",
      question:
        "The ancient Roman god of war was commonly known as which of the following?",
      correct_answer: "Mars",
      incorrect_answers: ["Jupiter", "Juno", "Ares"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Mythology",
      question: "Which of the following is not one of the Greek Fates?",
      correct_answer: "Narcissus",
      incorrect_answers: ["Clotho", "Atropos", "Lachesis"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Mythology",
      question:
        "The Norse god Odin has two pet crows named &quot;Huginn&quot; and &quot;Muninn&quot;.  What do their names mean?",
      correct_answer: "Thought &amp; Memory",
      incorrect_answers: [
        "Power &amp; Peace",
        "War &amp; Learning",
        "Sleeping &amp; Waking",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Mythology",
      question:
        "According to Algonquian folklore, how does one transform into a Wendigo?",
      correct_answer: "Participating in cannibalism.",
      incorrect_answers: [
        "Excessive mutilation of animal corpses.",
        "Performing a ritual involving murder.",
        "Drinking the blood of many slain animals.",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Mythology",
      question:
        "Talos, the mythical giant bronze man, was the protector of which island?",
      correct_answer: "Crete",
      incorrect_answers: ["Sardinia", "Sicily", "Cyprus"],
    },
  ],
};

const television = {
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Television",
      question: "In the Star Trek universe, what color is Vulcan blood?",
      correct_answer: "Green",
      incorrect_answers: ["Blue", "Red", "Purple"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Television",
      question:
        "In &quot;Star Trek: Voyager&quot;, which episode did Voyager establish real-time communication with Starfleet Headquarters?",
      correct_answer: "Pathfinder",
      incorrect_answers: [
        "Message In A Bottle",
        "Someone To Watch Over Me",
        "Counterpoint",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Television",
      question:
        "Which of the following Autobot names in Michael Bay&#039;s movies was NOT a name for a Transformer in the original 1980&#039;s cartoon?",
      correct_answer: "Mudflap",
      incorrect_answers: ["Skids", "Sideswipe", "Ratchet"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Television",
      question:
        "What is the setting of the show &quot;Parks and Recreation&quot;?",
      correct_answer: "Pawnee, Indiana",
      incorrect_answers: [
        "Eagleton, Indiana",
        "Pasadena, California",
        "London, England",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Television",
      question:
        "Which of these voices wasn&#039;t a choice for the House AI in &quot;The Simpsons Treehouse of Horror&quot; short, House of Whacks?",
      correct_answer: "George Clooney",
      incorrect_answers: ["Matthew Perry", "Dennis Miller", "Pierce Brosnan"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Television",
      question:
        "In &quot;Donkey Kong Country&quot;, why does Donkey Kong want to know the secret of the crystal coconut?",
      correct_answer: "He&#039;s the big kahuna.",
      incorrect_answers: [
        "To find out where all the bananas are.",
        "Because Diddy Kong forced him.",
        "He wants to punish brutes.",
      ],
    },
  ],
};

const videoGames = {
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "In what year was Hearthstone released?",
      correct_answer: "2014",
      incorrect_answers: ["2011", "2013", "2012"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "Which Nintendo 64 game did NOT have Luigi in it?",
      correct_answer: "Super Mario 64",
      incorrect_answers: ["Mario Party 2", "Paper Mario", "Super Smash Bros."],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        "Sean Bean voices the character of &quot;Martin Septim&quot; in which Elder Scrolls game?",
      correct_answer: "The Elder Scrolls IV: Oblivion",
      incorrect_answers: [
        "The Elder Scrolls V: Skyrim",
        "The Elder Scrolls III: Morrowind ",
        "The Elder Scrolls Online",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "Which one of these games wasn&#039;t released in 2016?",
      correct_answer: "Metal Gear Solid V",
      incorrect_answers: [
        "Tom Clancy&#039;s The Division",
        "Killing Floor 2",
        "Hitman",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "Which game was exclusive to Dreamcast?",
      correct_answer: "Pen Pen TriIcelon",
      incorrect_answers: [
        "Sylvester &amp; Tweety in Cagey Capers",
        "Perfect Dark",
        "Tetrisphere",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question:
        "In the original &quot;Super Mario Bros.&quot;, what is the acceleration of Mario if he was in free fall?",
      correct_answer: "91.28 m/s^2",
      incorrect_answers: ["110  m/s^2", "9.42  m/s^2", "4.4  m/s^2"],
    },
  ],
};

const boardGames = {
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Board Games",
      question: "When was the board game Twister, released to the public?",
      correct_answer: "April 1966",
      incorrect_answers: ["September 1965", "January 1969", "February 1966"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Board Games",
      question:
        "The board game Monopoly takes its street names from which real American city?",
      correct_answer: "Atlantic City, New Jersey",
      incorrect_answers: [
        "Las Vegas, Nevada",
        "Duluth, Minnesota",
        "Charleston, South Carolina",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Board Games",
      question:
        "Europa Universalis is a strategy video game based on which French board game?",
      correct_answer: "Europa Universalis",
      incorrect_answers: [
        "Europe and the Universe",
        "Europa!",
        "Power in Europe",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Board Games",
      question:
        "In &quot;Magic: The Gathering&quot;, what instant card has the highest converted mana cost?",
      correct_answer: "Blinkmoth Infusion",
      incorrect_answers: [
        "Vitalizing Wind",
        " Chant of Vitu-Ghazi",
        "Assert Authority",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question:
        "What was the development code name for the &quot;Urza&#039;s Destiny&quot; expansion for &quot;Magic: The Gathering&quot;, released in 1999?",
      correct_answer: "Chimichanga",
      incorrect_answers: ["Burrito", "Taquito", "Enchilada"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question:
        "How many rooms are there, not including the hallways and the set of stairs, in the board game &quot;Clue&quot;?",
      correct_answer: "9",
      incorrect_answers: ["1", "6", "10"],
    },
  ],
};

const film = {
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question:
        "Which movie contains the quote, &quot;Say hello to my little friend!&quot;?",
      correct_answer: "Scarface",
      incorrect_answers: ["Reservoir Dogs", "Heat", "Goodfellas"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question:
        "In the movie &quot;Cast Away&quot; the main protagonist&#039;s best friend while on the island is named",
      correct_answer: "Wilson",
      incorrect_answers: ["Carson", "Jackson", "Willy"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Film",
      question: "Johnny Depp made his big-screen acting debut in which film?",
      correct_answer: "A Nightmare on Elm Street",
      incorrect_answers: [
        "My Bloody Valentine",
        "Halloween",
        "Friday the 13th",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Film",
      question:
        "In the 1979 British film &quot;Quadrophenia&quot; what is the name of the main protagonist?",
      correct_answer: "Jimmy Cooper",
      incorrect_answers: ["Pete Townshend", "Franc Roddam", "Archie Bunker"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Film",
      question:
        "In the &quot;Jurassic Park&quot; universe, when did &quot;Jurassic Park: San Diego&quot; begin construction?",
      correct_answer: "1985",
      incorrect_answers: ["1988", "1986", "1993"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Film",
      question:
        "Which of the following films was directed by Ivan Reitman, written by Gary Ross, featured Kevin Kline, and was released in 1993?",
      correct_answer: "Dave",
      incorrect_answers: ["John", "Will", "Carl"],
    },
  ],
};

export {
  books,
  computers,
  generalKnowledge,
  mathematics,
  music,
  mythology,
  television,
  videoGames,
  boardGames,
  film,
};
