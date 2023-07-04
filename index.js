var checkBox = document.querySelector(".check_box")
var ball = document.querySelector(".ball")
var body = document.querySelector("body")
var text = document.querySelector(".text")
var toggle = document.querySelector(".toggle")

checkBox.addEventListener("change",()=>{
    console.log("toggle")
    ball.classList.toggle("move")
    toggle.classList.toggle("active")
    if(ball.className == "ball"){
        body.style.backgroundColor="white"
    }
    else{
        body.style.backgroundColor="#0f0f0f"
        

    }
})
