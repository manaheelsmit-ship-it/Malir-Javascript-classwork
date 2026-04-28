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


function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

myCalculator(5, 5);