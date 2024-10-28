// Variable Hoisting

    console.log(x); // Output: undefined
    var x = 5;

    // Equivalent to:

    var x;
    console.log(x); // Output: undefined
    x = 5;


// Function Hoisting

    sayHello(); // Output: "Hello, world!"
    function sayHello() {
        console.log("Hello, world!");
    }

    // Equivalent to:

    function sayHello() {
        console.log("Hello, world!");
    }
    sayHello(); // Output: "Hello, world!"


// Function Expression Hoistiong

    sayHello(); // Output: TypeError: sayHello is not a function, sayHello is undefined
    var sayHello = function() {
        console.log("Hello, world!");
    }

    // with arrow functions is the same

    sayHello(); // Output: TypeError: sayHello is not a function, sayHello is undefined
    var sayHello = () => {
        console.log("Hello, world!");
    }

    // So, this is equivalent to:

    var sayHello; // undefined
    sayHello(); // Output: TypeError: sayHello is not a function
    sayHello = () => {
        console.log("Hello, world!");
    }

