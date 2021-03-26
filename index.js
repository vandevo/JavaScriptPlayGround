
var myButton = document.getElementById("btn")
var awesomeHeader= document.getElementById("myHeader")
var myTitle = document.getElementById("title")
var counter = 5

awesomeHeader.style.background = "lightblue"

awesomeHeader.style.color = "orange"

myButton.addEventListener("click", function(){
    myButton.style.background = 'lightblue'
    myTitle.textContent = "I'm Learning JavaScript"
    counter += 5
    myButton.textContent = counter
    

})

