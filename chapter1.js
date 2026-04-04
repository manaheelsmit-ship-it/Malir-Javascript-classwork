function changeStyle(){
    document.getElementById("text").style.backgroundColor = "pink"
}
function changeImage(){
document.getElementById("img").className= "hidden"
}
function mouseover(){
   var picture =  document.getElementById("img")
   picture.src = './assets/img2.jpg'
}
var paragraph = document.getElementsByTagName("p")
paragraph[1].innerHTML = "john"
paragraph[1].style.backgroundColor = "pink"