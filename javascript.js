console.log(23 + 97);

console.log(3 + 6 + 9 + 3 + 6 + 9);

console.log((4 + 6 + 9) / 77); 

let a = 10;

console.log(a);

console.log(9 * a); 

let b = 7 * a;

console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;  

// String 

//A string in JavaScript must be surrounded by quotes.

//let str = "Hello";
//let str2 = 'Single quotes are ok too';
//let phrase = `can embed another ${str}`;

let name = "John";

alert(`Hello, ${name}!`); 

alert(`the result is ${1 + 2}`);


//JS Types

// What is the output of the script? 

// let name = "Ilya";

// alert( `hello ${1}` ); 

// alert( `hello ${"name"}` ); 

// alert( `hello ${name}` );  

//solution

// let name = "Ilya";

// // the expression is a number 1
// alert( `hello ${1}` ); // hello 1

// // the expression is a string "name"
// alert( `hello ${"name"}` ); // hello name

// // the expression is a variable, embed it
// alert( `hello ${name}` ); // hello Ilya




// let percentage = actual / max; 
// >>>>>>> 07cbf2434193f34fc1c9547728cd7c4ee0b2eaa0

// const string = "The revolution will not be televised.";
// console.log(string); 

// Declaring strings 

const string = "The revolution will not be televised.";

const badString = string;
console.log(badString); 



// Single quotes, double quotes, and backticks

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick); 


//Embedding JavaScript 

//Inside a template literal, you can wrap JavaScript variables or expressions inside ${ }, and the result will be included in the string: 

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

// You can use the same technique to join together two variables:

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?" 

// Joining strings together like this is called concatenation.

// Concatenation using "+"

// You can only use ${} with template literals, not with normal strings. You can concatenate normal strings using the + operator:

const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris" 

// However, template literals usually give you more readable code:

const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"



// Including expressions in strings

// You can include JavaScript expressions in template literals, as well as just variables, and the results will be included in the result:

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

// Multiline strings

// Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:

const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/   

// To have the equivalent output using a normal string you'd have to include line break characters (\n) in the string:

const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/ 

// Including quotes in strings

// Since we use quotes to indicate the start and end of strings, how can we include actual quotes in strings? We know that this won't work:

const badQuotes = "She said "I think so!""; // This is incorrect

// One common option is to use one of the other characters to declare the string:

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;


// Another option is to escape the problem quotation mark. Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character. Try this:

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);  



// Numbers vs. strings 

// What happens when we try to concatenate a string and a number? Let's try it in our console: 

const name = "Front ";
const number = 242;
console.log(`${name}${number}`); // "Front 242"


// If you have a numeric variable that you want to convert to a string, or a string variable that you want to convert to a number, you can use the following two constructs:

// The Number() function converts anything passed to it into a number, if it can. Try the following: 

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number  

// Conversely, the String() function converts its argument to a string. Try this:

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string










