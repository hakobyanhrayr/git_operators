"use strict";
let arr =  ["anymore", "raven", "me", "communicate"];
let min = [];
let max = [];
let sum;
let lgth = 0;
for(let i = 0; i < arr.length; i++){
    if (arr[i].length > lgth) {
        lgth = arr[i].length;
        max = arr[i];
    }
    else if(arr[i].length < lgth) {
        lgth = arr[i].length;
        min = arr[i];
    }
    sum = min + max;
}
console.log(`min:${min.length} + max:${max.length} = sum:${sum.length}`);
