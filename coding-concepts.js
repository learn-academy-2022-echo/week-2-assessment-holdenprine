// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: "E", "c", "h", "o", " ", "2", "0", "2", "2"
// b) Verify and explain: This is confirmed to be correct as the .split method will divide up every character in a string and seperator using the specified seperator inside the parens. In this case the seperator was "", so each element will be seperated as such.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: The reason undefined will be logged is because the function doesn't have a return statement. The return statement will pass along the result of the  processes of the function but because no info is being returned no value will be returned.


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8,10,12,14,16]
// b) Verify and explain: This answer will output the same because the .map() method will take an array and return another of the same size back after performing whatever operations specified inside the parens.


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: This new array is the verified answer because the .filter() method takes in an array and returns a smaller array based on logic provided inside the parens. In this case the array given in the variable declaration is filtered by the operation done on the number parameter which would only output odd numbers.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: The answer will be the same because the element at index 0 paired with the key languages is being logged. The dot notation used allows access to the different keys inside the object myCodingSkills, in this case language is accessed and because it's paired with  an array, you can access the values inside the array using []


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Learn {student: "George", cohort = "Echo", year = 2022}
// b) Verify and explain: This is the verified solution because of how the class takes arguments of new objects. In this case, the class Learn only has one argument for its properties while the rest are immutable. This means only one parameter needs to be defined and the output will always be the same for the other two properties of the class. This output in particular will show key value pairs of the new object learnStudent because it is simply being called on its own without any specific key being referenced. In this case it will show the structure of the object with its class and key value pairs.
