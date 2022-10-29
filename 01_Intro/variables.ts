let greetings: string = "Hello Rishon";

// greetings = 6 not allowed safety
let num = 6;
// num.toUpperCase;
greetings.toLowerCase();
console.log(greetings);

// number
let userId: number = 3348;

// userId.toFixed()

let no = 3343; // here no need to add annotation (:number)

// boolean
let isLoggedIn: boolean = false;

export {};

// DON'T NOT USE ANY -> its not type checked
// in such case annotation
let hero: string;

function getHero() {
  return "true";
}

hero = getHero;
