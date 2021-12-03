let a = 8;
let b = 45689;
let b2 = b.toString();


for(let i = 0; i < b2.length; i++){
   if(a === +b2[i]){
    console.log("this is number 8");
   }
   else{
       console.log("no such numbers");
   }
}
