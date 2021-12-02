let arr = [5, 2, 10];
let corn = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < arr[i + 1]) {
    corn.unshift(arr[i]);
  } else {
    corn.push(arr[i]);
  }
}
console.log(corn);
