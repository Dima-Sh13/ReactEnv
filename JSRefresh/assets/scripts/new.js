'use strict';
/*
import { apiKey, apikey2 } from "./util";


import apiKey3 from "./utils.js";  //|| here we have a not named export so we must assign a name when importing it

import * as apikeys from "./util.js"

console.log(apiKey)

console.log(apikeys.apiKey3);
*/

let userMessage = 'I already know this';

console.log(userMessage);

let user = 'Dima'


const mujercita = 'Carolina'

const laMasBella = 'Carolina'

console.log (user + mujercita);

console.log(mujercita === laMasBella);

// ARROW FUNCTIONS

(user) => {
    return user
};

// youcan omit the paranthesis in the arguments if your function only takes 1 argument. only with 1. with zero or 2+ you need parenthesis
username12 => {};

//If your function opnly contains a return you can omit the braces

number => number *3   // ===  function number(number)  {return number * 3} 

// if you want to return an object you have to put the object brackets inside the parenthesis

number1 => ({age: number1})  // returns a js object


// OBJECTS

const marrige = {
    H: "Dima",
    M: 'Carolina',
    saludo() {
        console.log(this.H + this.M + "estan casados")
    }
};


marrige.saludo();


// arrays and arrayslike objects

const array = [1,2,3,4,5];

array.push(7); //.push lets you introduce an item inside the array, in last place, es un append

array.findIndex((item) => {
    return item === 3;  // hobbie.sfindIndex ((item))
})  //used to find the index of a certain ellement/ takes a function as an argument



// map


const hobbiesNew = hobbies.map((item) => item + 1);


// ---------------------- Destructuring

const userData = ["Dima", "Shalupnya"];

let userName = userData[0];
let userFamily = userData[1];

// IS the same as 

const [firstName, lastName] =  ["Dima", "Shalupnya"]; // de construye y nos crea las viarbles con


//destructuring objects

const userr = {
    name: "dima",
    family: "shalupnya"
};

let ussrName = userr.name;
let family = userr.family;

// is te same as 

const {name, family1} = {
    name: "dima",
    family1: "shalupnya"

}

/* 
Destructuring in Function Parameter Lists

The destructuring syntax explained in the previous lecture can also be used in function parameter lists.

For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

Here's an example:

    function storeOrder(order) {
      localStorage.setItem('id', order.id);
      localStorage.setItem('currency', order.currency);
    }

Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

    function storeOrder({id, currency}) { // destructuring
      localStorage.setItem('id', id);
      localStorage.setItem('currency', currency);
    }

The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.

Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).

It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

The function would still be called like this:

    storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!

*/

const poke = {
    type: "water",
    lvl: 45,
    name: "Poliwag",
    catch : 
};
setTimeout(function())



