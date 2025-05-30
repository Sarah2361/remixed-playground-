//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "Remixed coding ",
  "For such a time as this.",
  "Glitch is shutting down.",
  "Why is there no internet connection?!?",
  "More homework.",
];

const buttonRetry = document.getElementById("button-network");

// Function to handle the button click and update the text
function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}

//end of network error function

//function dropdown menu (do not edit this first part)
function addText(content) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = content;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFun() {
  var x = document.getElementById("subject").value;
  if (x === "flighty") {
    addText("🍜🥩🧀🥓");
  } else if (x === "vague") {
    addText("🌮🥙🍽️🍴");
  } else if (x === "joyful") {
    addText("🍕🍟🍍🫒🍅🧀");
  } else if (x === "cloudy") {
    addText("🌦️🌨️🫧🌫️☔⚡🥶");
  } else if (x === "hangry") {
    addText("🍟🥨🌮🥗🍱");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "I guess I was wrong",
  "garfield was in the oven",
  "pizza is a dream",
  "hand over the cheese",
  "i like it when you",
  "i like to study",
  "it's ok to be",
  "get it your damn self",
  "never miss a chance",
];
const sevenSyllables = [
  "i would like to see you more",
  "get over here and tell me",
  "everything is better clear",
  "thinking about lasagne",
  "yuk, no i don't want salad",
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "art of war free download",
  "ask izzy",
  "australian family law issues in the news",

  "barrister vs lawyer australia",
  "barrister vs solicitor",
  "bulk billed therapy",

  "can i seek to vary my family court order",
  "ccs has no cctv",
  "chatgpt",

  "delete search history",
  "delusional jealousy",
  "dv stats australia",

  "earliest memories as a child",
  "emotional manipulation signs",
  "eat humble pie", 

  "fridge magnets",
  "Foo Fighters concert", 
  
  "Google", 
  
  "How to use Google", 
  
  "Innovation meaning", 
  
  "J.K.Rowling", 
  
  "Kanye West", 
  
  "Labour by Paris Paloma", 
  
  "Mean girls 1", 
  
  "Never say never Justin Bieber", 
  
  "Oz lotto results", 
  
  "Plagiarism checker", 
  
  "Queer meaning in lgbtq", 
  
  "Rosalin Franklin", 
  
  "Someone help me", 
  
  "Tesselaar Tulip Festival", 
  "Tiktok", 
  
  "UP movie", 
  
  "Vegemite taste", 
  
  "What the hellyante song", 
  "WIP meaning", 
  
  "X-men", 
  
  "Yodel", 
  
  "Zootopia trailor", 
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "Aliens, pilgrims, burn victims, displaced animals, right-wing militants, cyborgs".split(
      ","
    ),
  verbs =
    "wander, analyse, slide into, kneel to pray in, avoid, stare, sprint into, run to".split(
      ","
    ),
  objects =
    "the water damn,the wilted grasslands, vast wastelands,wildernesses unknown, rainbow road path on mario cart, outback red dirt, military bunkers, valleys of ash and bone".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
  setTimeout(processPoem, 1000);
}
// Start the process
processPoem();