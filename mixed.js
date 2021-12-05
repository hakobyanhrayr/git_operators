let arr = [7,0,'hey', 10, 3, 'null', 5, 'true'];
let newArr = [];
 for(let i = 0; i < arr.length; i++){
     if(arr[i] === Number(arr[i])){
         newArr.sort().push(arr[i]);
     }
 }
console.log(newArr);