'use strict';

// x Create an About Me guessing game that utilizes HTML, CSS, & JavaScript.

// x Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have.

// x Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

// x Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

// x Ask the user their name through a prompt()

// x Display that name back to the user through a custom greeting welcoming them to your site.

// x Display the user’s name back to them in your final message to the user.

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
alert((question3 == 'y') ? "I thought you'd never ask!" : "Do you wanna play Magic?");
let question4 = prompt('would I rather be outside?\n(y/n)').toLowerCase();
// console.log(question4);
alert("I'm probably outside right now!");
let question5 = prompt("is it obvious that i'm enjoying myself?\n(y/n)").toLowerCase();
// console.log(question5);
alert((question5 == 'y') ? `Excellent!\nThanks for coming, ${username}!` : `I'll try harder next time!\nThanks for coming, ${username}!`);
