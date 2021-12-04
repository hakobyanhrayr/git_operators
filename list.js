"use strict"
let quot = 0;
let rem = 0;
let num = 63;
let count = num % 10;
num = (num -count) / 10;
let sum = count + num;
let nul = count * num;

if (nul % sum !== 0) {
    quot = nul % sum;
    console.log(quot);
}
else{
    rem = nul / sum;
    console.log(rem);
}
