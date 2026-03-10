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


hobbies.map((item) => item + 1);
