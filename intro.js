"use strict";

console.log("123");

// sample
let counter = 100;
console.log(counter);
counter = 120;
console.log(counter);

counter += 100;
console.log(counter);

// with scope
let count;
console.log(counter); {
    count = 2;
    console.log(count);
}
count += 3;
console.log(count);

// indention and local x global
let height = 157; //global
{
    let weight = 80; //local
    {
        let info = "tall";
        console.log(height);
    }
    // console.log(info);   local
    console.log(height);
}
// console.log(weight); local
// console.log(height); global
// console.log(info); local

// functions
function testFunction() {
    console.log("123");
    console.log("456");
}

// testFunction();

var globalGreeting = "good";

function testingFunction() {
    var localGreeting = "night";
    console.log("Function: ");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testingFunction();
console.log(globalGreeting);
// console.log(localGreeting); local undefined.

function flowers() {
    const price = 8;
    let quantity = 70;
    let newQuantity = quantity - 20;
    let value = price * newQuantity;
    var rose = value;
    {
        const price = 10;
        let quantity = 50;
        let newQuantity = quantity - 30;
        let value = price * quantity;
        var lily = value;
        {
            const price = 2;
            let quantity = 120;
            let value = price * quantity;
            var tulip = value;
        }
    }
    return console.log("Total: ", rose + lily + tulip);
}

flowers();