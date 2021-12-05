let str = "_,we have a_.";
let arr = ["Houston", "problem"];

for(let i = 0, k = 0; i < str.length, k < arr.length; i++,k++){
    if(str[i] === "_"){
        let h = arr[i];
        str[i] = h;
        console.log(str[i]);
    }
}
