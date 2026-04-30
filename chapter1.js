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


function user(userName) {
    console.log("hello " + userName)
}

function output(last) {
    let name = "manaheel"
    last(name)
}
output(user)




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

const newMap = new Map([
    ["name", "john"], 
    ["age",43]
])
newMap.set("city", "karachi")
console.log(newMap.get("name"))
console.log(newMap.has("age"))
newMap.delete("name")
newMap.clear()
console.log(newMap.size)
console.log(newMap)