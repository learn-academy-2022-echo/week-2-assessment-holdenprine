// ASSESSMENT 2: Coding Practical Questions with Jest

//const { exportAllDeclaration } = require("@babel/types")
//const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

//Psuedo Code:
// 1. Create a test case that checks if each number stored in the given object is divisible by 3
// 2. Write a function called divisibleByThree that takes a value from number -> param = obj
// 3. use conditional statements to check if obj.number % 3 === 0 or if not and output the expected output message

    describe("divisibleByThree",()=>{
        it("return the string statement (number) is divisible by three or not divisible by three", ()=>{
            expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
            expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
            expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
        })
    })    

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

const divisibleByThree = (obj) => {
    if(obj.number % 3 === 0) {
        return `${obj.number} is divisible by three`
    } else {
        return `${obj.number} is not divisible by three`
    }
}




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//Psuedo Code:
// 1. Create a test case that checks if a function capFirstLetter takes the first character of each array element and captializes it
// 2. Create the function called capFirstLetter that takes an array and takes the first character of each element and uses .toUpperCase
// 3. Will use .map() to return an array of the same size but implement .toUpperCase on each element and .slice to print the rest of the element as is 

describe("capFirstLetter",()=>{
    it("returns each element of the array with the first character of the string capitalized", ()=>{
        expect(capFirstLetter(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capFirstLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])    
    })
})  

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.

const capFirstLetter = (array) =>{
   
    return array.map((value)=>{
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
    
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//Psuedo Code:
// 1. create a test case that takes in a string and logs the index of the first vowel
// 2. create a function called firstVowel that uses a for loop to check where the first vowel appears and logs the index

describe("firstVowel",()=>{
    it("returns the index of the first vowel in the given string", ()=>{
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)     
    })
})  


const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.

const firstVowel = (string) => {
  for(let i = 0; i < string.length; i++) {
    const vowels = ['a','e','i','o','u']
    if(vowels.includes(string[i])){
        return i
    }
  }
}

