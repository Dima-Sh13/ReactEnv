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



