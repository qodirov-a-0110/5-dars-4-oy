// 1-misol
// Berilgan massivdagi barcha sonlarni ikki barobarga oshiring va natijani yangi massivga saqlang.
// let arr = [1,2,3,4,5,6];
// let res = [];
// for(let i = 0;i < arr.length; i++){
//     res.push(arr[i]*2);

// }console.log(res);

// 2-misol
//   Berilgan massivni teskari qilib, yangi massivga saqlang.
// let arr = [1,5,8,9,6];
// let res = [];
// for ( let i =0;i < arr.length; i++){
//     res.unshift(arr[i]);
// }console.log(res);

// 3-misol
//  Berilgan massivdan manfiy sonlarni olib tashlang va yangi massivga saqlang.
// let arr = [1,2,3,-6,-8,-9,5,];
// let res = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]>=0) {
//         res.push(arr[i])
//     }
// }console.log(res);

// 4-masala
// Berilgan massivdagi barcha sonlarning yig‘indisini hisoblang.
// let arr = [1,2,-9,8,7,8];
// let sum = 0;
// for ( let i = 0;i < arr.length;i++){
//     sum = sum + arr[i];
// }console.log(sum);

// 5-masala
// Berilgan massivning oxiriga yangi element qo‘shing.
// let arr = [1,2,3,4,8,9,7];
// arr.push('salom');
// console.log(arr);

// 6-misol
// Berilgan massivdan oxirgi elementni olib tashlang.
// let arr = [1,2,4,5,7,'salom'];
// arr.pop();
// console.log(arr);

// 7-misol
// Berilgan massivdan boshidagi elementni olib tashlang.
// let arr = [0,1,5,7,9,2,4];
// for(let i = 0;i<arr.length; i++){
//     arr.pop();
// }console.log(arr);

// 8-misol
//  Berilgan massivning boshiga yangi element qo‘shing.
// let arr = [1,2,4,5,7,'salom'];
// arr.unshift('hello');
// console.log(arr);

// 9-misol
//  Berilgan massivda qidirilayotgan elementning indeksini toping.
// let a = +prompt('son kiritin')
// let arr = [7,8,9,5,4];
// console.log(arr[a]);

// 10-misol
//  Berilgan massivdagi barcha elementlarni boshqa yangi massivga ko‘chiring.
// let arr = [1,2,3,4,5,6,44];
// let res = [];
// for (let i = 0; i<arr.length;i++){
//     res.push(arr[i]);
// }console.log(res);

// 11-misol
// Berilgan massivdagi eng katta elementni toping.
// let arr = [1,2,4,55,8,7,9];
// let max = 0;
// for(let i = 0;i<arr.length;i++){
//     if (arr[i]>max) {
//         max=arr[i];
//     }else{
//         max=max;
//     }
// }console.log(max);

// 12-misol
// Berilgan massivdagi eng kichik elementni toping.
// let arr = [5, -8, 96, 3, 1, 2, 3];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// 13-misol

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = [];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     res.push(arr[i])
//   }
// }
// console.log(res);

// 14-misol

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = [];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     res.push(arr[i])
//   }
// }
// console.log(res);

// 15-misol

// let arr = [1,0, 2,0, 3,0, 4, 5, 6, 7];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     res.push(arr[i])
//   }
// }
// console.log(res);

// 16-misol

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = [];
// for (let i = 1; i < arr.length; i++) {
//     res.push(arr[i]);
//     res.push(arr[i]);
// }
// console.log(res);

// 17-misol

// let arr = [ 1,2,3,4,5,6,7,8,9,10]
// let newArr1 = []
// let newArr2 = []

// let n = arr.length
// let natija1 = Math.floor(n / 2)

// for (let i = 0; i <= n; i++) {
//     if (i < natija1) {
//         newArr1.push(arr[i])
//     }else{
//         newArr2.push(arr[i])
//     }

// }

// console.log(newArr1);
// console.log(newArr2);

// 18-misol

// let arr = [1, 2, 3, 4, 5, 6];
// let sum = 1;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum * arr[i];

// }
// console.log(sum);

// 19-misol

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = [];
// for (let i = 0; i < arr.length; i+=2) {
//     res.push(arr[i])
// }
// console.log(res);

// 20-misol

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = [];
// for (let i = 1; i < arr.length; i+= 2) {
//     res.push(arr[i])
// }
// console.log(res);

// 21-misol
// let arr = [1, 'salom', 3, 'qale', 5, 'hayrli', 7];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'string'){
//       res.push(arr[i]);

//     }
// }
// console.log(res);

// 22-misol

// let arr = [1, "salom", 3, "qale", 5, "hayrli", 7];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'number') {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

// 23-misol

// let arr = [1, "salom", 3, "qale", 5, "hayrli", 7];
// let length = arr.length
// console.log(length);
