'use strict';

let score = 0;

let username = prompt('Welcome! What name should I call you by?');
// console.log(username);
let question1 = prompt(`${username}! Am I bigger than a breadbox?\n(y/n)`).toLowerCase();
// console.log(question1)
alert((question1 == 'y') ? "How'd you know!?" : "That's the wrong answer!");
let question2 = prompt('do I have a mustache?\n(y/n)').toLowerCase();
// console.log(question2);
alert("sometimes, true"); // both y and n are true, sometimes
let question3 = prompt('do I wanna play Magic?\n(y/n)').toLowerCase();
// console.log(question3);
alert((question3 == 'y') ? "I thought you'd never ask!" : "Do YOU wanna play Magic?");
let question4 = prompt('would I rather be outside?\n(y/n)').toLowerCase();
// console.log(question4);
alert("I'm probably outside right now!");
let question5 = prompt("is it obvious that i'm enjoying myself?\n(y/n)").toLowerCase();
// console.log(question5);
alert((question5 == 'y') ? `Excellent!\nThanks for coming, ${username}!` : `I'll try harder next time!\nThanks for coming, ${username}!`);

let question6 = parseInt(prompt("What's the password? It's a number between 1 and 10..."));
let count = 3;
while (question6 !== 6) {
  // console.log(count);
  if (count === 0) {
    alert("The password is 6!");
    break;
  }
  question6 = (question6 < 6) ? parseInt(prompt(`too low\n${count} more tries.`)) : parseInt(prompt(`too high\n${count} more tries.`));
  count--;
}
if (question6 === 6) {
    alert("Well done!");
    score++;
}

const answers = [
  {'water': 'stay hydrated'},
  {'coffee': 'b l a c k'},
  {'beer': 'only the finest belgians'},
  {'juice': 'not from concentrate'},
];
let question7 = prompt("these are a few of my favorite drinks...").toLowerCase();
count = 5;
let correct = 4;
let x = true;
while (count > 0) {
  for (let i = 0; i < answers.length; i++) {
    // console.log(answers[i][question7]);
    if (answers[i][question7]) {
      correct--;
      score++;
      question7 = prompt(`${answers[i][question7]}\nthere's ${correct} more on the list...`);
      x = false;
      break;
    } else {
        x = true;
      }
  }
  if (x) {
    // console.log(question7);
    question7 = prompt(`not on the list\nthere's ${correct} more on the list...`)
  }
  count--;
}

let list = ''
for (let i = 0; i < answers.length; i++) {
  list += Object.keys(answers[i]) + ' ';
}

let questions1to5 = [question1,question2,question3,question4,question5];
for (let i = 0; i < questions1to5.length; i++) {
  if (questions1to5[i] == 'y') {
    score++;
  }
}

// console.log(list);
alert(`here's the list\n${list}\n\nyou got ${score} right!`);