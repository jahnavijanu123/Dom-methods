btn1=document.getElementById("btn1")
btn1.style.backgroundColor="red"
btn1.style.color="white"


// let btn3 = document.getElementsByClassName("btn")
// btn3[1].style.backgroundColor="blue"
// btn3[0].style.backgroundColor="red"


// let btn4 = document.getElementsByTagName("button")
// btn4[1].style.backgroundColor="blue"
// btn4[0].style.backgroundColor="red"


// let btn5 = document.querySelector(".btn")
// btn5.style.color="red"

// let btn6 = document.querySelector("#btn2")
// btn6.style.color="red"

// let btn7= document.querySelectorAll(".btn")
// btn7[0].style.color="red"

btn1.addEventListener("click",()=>{

    let x=document.createElement("div")
x.style.border="2px solid"
x.style.height="300px"
x.style.width="300px"

let deleter = document.createElement("span")
deleter.textContent="⌦"
deleter.style.cursor="pointer"
x.appendChild(deleter)
deleter.addEventListener("click",()=>{
    x.remove()
})


let name1 = document.createElement("h1")
name1.innerHTML="hello"
name1.style.color="pink"

let name2 = document.createElement("h1")
name2.innerHTML="world"
name2.style.color="pink"
name2.style.textAlign="center"


document.body.appendChild(x)

x.appendChild(name1)
x.appendChild(name2)
})




