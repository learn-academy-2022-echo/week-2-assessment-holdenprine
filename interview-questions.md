# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a dynamic value in a function that is defined by a given input; an argument. An argument will directly correspond to the parameter as the value meant to be processed in the function

Researched answer: A parameter is a value that is declared initially when a function is declared. This allows function input that creates a dynamic behavior within the function based upon what kind of values are introduced. On the other end, an argument is a value corresponding to the given parameters that sets the initial input for a function to operate. When defining parameters, each must have a corresponding argument for when the function is invoked/called.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map() method takes three predefined parameters with two being required to utilize its functionality. These three parameters are value, index, and array; of which only value and index are required in order to work. This is because of the functionality of .map(); used in returning an array of the same length as the one thats passed to it. In this case only the value and index are needed in order to transform the given array.

Researched answer: After extra research there is a bit of discrepancy as to what is actually required of .map() but there is a general consensus on what is can take in terms of parameters. Firstly, the value parameter is always required which is obvious considering that the values inside an array need to be known in order to perform operations on it. The consensus ends here though as some sources claim this is the only required parameter needed. The others of course are index and array where the index of the given array is tracked and the array as a whole is known respectively. Coming to my own conclusions in the face of discrepancy, I would rather side with utilizing both value and index in a required lense as it provides greater information to work with.

3. What is the difference between map and filter?

Your answer: The difference between map and filter is in the size of the array that they return. In the case of .map(), an array of the same size will be returned after whatever operations are performed on it. In the case of .filter(), the whole point is to filter down the elements of an array conditionally which then returns a smaller array based on that criteria

Researched answer: After greater research my own answer above covers functionality over all yet there are some specifics in behavior that is important to consider. The .map() method specifically looks at every value on every index when performing operations on said values, not particularly needing to see the entire array but instead stepping through each index like a standard for loop. On the opposite end, .filter takes the entire array with the intent of whittling down the number of indexes based on the criteria set on the values stored at said indexes. While this also functions much like a loop in how it steps through the array, the fundamental actions are more so conditional than purely operational.

4. What is the DOM?

Your answer: The DOM is the document object model

Researched answer: Based on greater research the DOM is not in anyway a programming language but more so a model for other languages to interface based on a general representation of the data and functionality held within it. In simpler terms, its meant to represent functionality and behavior in a document setting. In the context of the web, it represents the actual webpage, allowing code to manipulate the document and change structure, style and content. This is generally achieved using objects and nodes which allow interaction. 

5. What is React? Why would you use it?

Your answer: At its core, React is a JavaScript library developed by Meta. Its component based giving flexibility and scalability to its developer base with the ability to implement reusable UI elements that hold data and aspects of behavior.

Researched answer: At its core, React.js is a virtual DOM built off a tree of JavaScript components created to mimic a DOM tree. Its major use cases are for building out simple UIs in a component based style. The major draw of React comes from its scalability and maintenance. The scaling is made easy due to Reacts ability to handle all ends of the server client model, with huge implications for mobile development as well. In terms of maintenance, the reusable nature of components along with the generally easy to read syntax creates quick and easy ways to update and maintain the code base of a given application. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting at is core, is the concept of functions, variables, and classes being able to be executed outside of their scope due to how JavaScript can interpret it ahead of their own declaration.

Researched answer: After some greater research its important to note that hoisting is generally not recommend because while the process can be safe, it also has great potential to throw errors. The general idea surround hoisting is the execution of code, in particular functions, variables and classes, before their declaration or outside their intended scope. While this can be a little safer invoking functions by hoisting, in the case of variables and classes, items will initially return undefined until declared, which again, can cause a series of issues. Overall, I don't use this not only because it affects legibility but also can contribute to unneeded errors.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: Goals that are often implemented in sprints, meant to set specifications for what an application should and shouldn't do for the user.

2. Spread operator: The spread operator -> (...) allows for the expansion of iterables like strings and arrays in places where they might return zero or where more arguments are expected but no arguments are provided.

3. React props: React props are arbitrary inputs into components that return react elements describing behavior of what should display in applications. Functions that accept props are defined as functional components 

4. Conditional rendering: This is a concept that centers around a function that presents a condition and returns different functional components that defines the behavior of an aspect of an application. 

5. DOM events: DOM events are handlers that are registered to different HTML and JSX elements. This often defines the behavior of an applications components and dictates how they are handled, even more often surrounding user interaction.
