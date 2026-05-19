// function changeStyle(){
//     document.getElementById("text").style.backgroundColor = "pink"
// }
// function changeImage(){
// document.getElementById("img").className= "hidden"
// }
// function mouseover(){
//    var picture =  document.getElementById("img")
//    picture.src = './assets/img2.jpg'
// }
// var paragraph = document.getElementsByTagName("p")
// paragraph[1].innerHTML = "john"
// paragraph[1].style.backgroundColor = "pink"

// Callback function


// function user(userName) {
//     console.log("hello " + userName)
// }

// function output(last) {
//     let name = "manaheel"
//     last(name)
// }
// output(user)




// ordefood(kitchen(waiter(eatfood)))



// function amount(profit){
//     let  profitamount = 13
//     console.log(profit + profitamount)
// }
// function lose(gainAmount){
//     let getAmount = 20
//     gainAmount(getAmount)
// }
// lose(amount)


// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// myCalculator(5, 5);



// closures


// function outer() {
//   let name = "john";

//   function inner() {
//     console.log(name);
//   }

//   return inner;
// }

// const myFunc = outer();

// myFunc();





// function counter() {
//   let count = 0;

//   return function () {
//     count++; //0
//     console.log(count);
//   };
// }

// const increment = counter();

// increment();
// increment();
// increment();


// function bankAccount() {
//   let balance = 1000;

//   return { 
//     balance,
//     deposit(amount) {
//       balance += amount;
//       console.log(balance);
//     },
//     withdraw(amount) {
//       balance -= amount;
//       console.log(balance);
//     }
//   };
// }

// const account = bankAccount();

// account.deposit(500);
// account.withdraw(200);
// console.log(account.balance)


// const  newSet = new Set([1,1,2,3,4,2,3,2,1])
// newSet.add(6)
// newSet.delete(2)
// console.log(newSet.has(2))
// newSet.clear()
// console.log(newSet.size)
// console.log(newSet)

// const newMap = new Map([
//     ["name", "john"], 
//     ["age",43]
// ])
// newMap.set("city", "karachi")
// console.log(newMap.get("name"))
// console.log(newMap.has("age"))
// newMap.delete("name")
// newMap.clear()
// console.log(newMap.size)
// console.log(newMap)


// var array = [1, 2, 3, 4, 6, 7, 64, 3]
// array.forEach((data,index)=>console.log(data,index))

// const prices = [100,200,300];
// const discounted = prices.map(price => price * 0.9);
// console.log(discounted)


// const numbers=[10,20,30,40];
// const result = numbers.filter(n => n > 20);
// console.log(result);

// const users=[{id:1,name:"manaheel"},{id:2, name:"john"}];
// const user = users.find(data=>data.id===2);
// console.log(user);

// const nums=[10,20,30];
// const total = nums.reduce((data,num)=>console.log(data,num));
// console.log(total)

// // Returns true if ANY element matches.
// const nums=[1,3,5,8];
// console.log(nums.some(n=>n%2===0));

// const nums=[2,4,6,3];
// console.log(nums.every(n=>n%2===0));

// const arr=["JS","React"];
// console.log(arr.includes("mana"));

// const nums=[5,2,9];
// nums.sort((a,b)=>b-a);
// console.log(nums);

// const arr=[1,[2,[3,[6]]]];
// console.log(arr.flat(2));

// console.log(a)
// let a = 5
// // data()
// // function data(){
// //     console.log("data")
// // }

// declaration

// initialization 

// var a ;
// a = 8
// SHALLOW COPY
// const original = [
//   { id: 1, name: "Sagar" },
//   { id: 2, name: "Raj" }
// ];

// const shallowCopy = [...original];

// // Now change a nested property
// shallowCopy[0].name = "Aman";
// console.log(original[0].name); //


// HEAP MEMORY 

// const original = [
//   { id: 1, name: "Sagar" },
//   { id: 2, name: "Raj" }
// ];

// const deepCopy = original.map(item => ({ ...item }));

// deepCopy[0].name = "Aman";

// console.log(original[0].name); // ✅ "Sagar" → original not affected
// console.log(deepCopy[0].name); // ✅ 

//for of // for in loop
// const fruits = ["apple", "banana", "mango"];

// for (const element of fruits){
//     console.log(element)
// }

// const object = { a: 1, b: 2, c: 3 };

// for ( let  j  of object){
//     console.log(j)
//


// console.log("jhdfuiaj")
// console.log("jhdfuiaj")

// console.log("jhdfuiaj")

// console.log("jhdfuiaj")
// // take 1 minute 
// console.log("jhdfuiaj")
// console.log("jhdfuiaj")

// console.log("jhdfuiaj")

// console.log("jhdfuiaj")
// // check value if trueconsole.log("jhdfuiaj")
// console.log("jhdfuiaj")

// console.log("jhdfuiaj")

// console.log("jhdfuiaj")

// function placeOrder(food) {
//     return new Promise((resolve, reject) => {
//         let checkOrder = true
//         if (checkOrder) {
//             resolve("yes received")
//         } else {
//             reject("not received")
//         }
//     })
// }
// newPromise
//     .then(console.log("message"))
//     .then(console.log("message"))
//     .then(console.log("message"))
//     .then(console.log("message"))
//     .then(console.log("message"))
//     .catch((error) => console.log(error))



// async function getData() {
//     try {
//         const responce = await fetch("https://dummyjson.com/products")
//         const convert = await responce.json()
//         const data = convert.products.map(product => product.title)
//         console.log(data)
//     }
//     catch (error) {
//         console.log(`error ${error}`)
//     }
// }
// getData()
// async function data(params) {
//     return params
// }
// data().then(console.log("data"))

// console.log('Start');
// setTimeout(() => { console.log('Timeout'); }, 2000);
// console.log('End');
console.log('Start');
setTimeout(() => console.log('setTimeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
