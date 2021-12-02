let num = 21;
let a = num % 3;
let b = num % 7;
let c = num % 5;
let sum;
  
if(a == 0 && b == 0 && c == 0){
    console.log("number is a multiple of 3, 5 or 7");
}
else  if(a == 0 && b == 0 ){
    console.log("number is a multiple of 3 or 7");

}
else if(a == 0 && c == 0 ){

    console.log("number is a multiple of 3 or 5");

}
else if(b == 0 && c == 0){
    console.log("number is a multiple of 7 or 5");

}
else {
    console.log("is not a multiple of 3, 5 or 7.");
}

// if(num % a == 0){
//    console.log(sum = num / a);
// }
// else if(num % b == 0){
//     console.log(sum = num / b);
// }
// else if(num % c == 0){
//    console.log( sum = num / c);
// }
// else{
//     console.log("is not a multiple of 3, 5 or 7.");
// }

// if(a && b && c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// else{
//     onsole.log("is not a multiple of 3, 5 or 7.");
// }