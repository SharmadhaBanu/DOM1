let element= document.getElementById("root")
//element.innerText="<h1> Welcome to DOM</h1>"
let greetings = document.createElement("h1")
greetings.innerText= "Welcome to DOM"
element.append(greetings,"Iam appended")
function constructUl(){
let node = document.createElement("div")

let node1= document.createElement("ul")

let listItem1= document.createElement("li")
listItem1.innerText = "create element"
node1.appendChild(listItem1)

let listItem2= document.createElement("li")
listItem2.innerText = "get element"
node1.appendChild(listItem2)

let listItem3= document.createElement("li")
listItem3.innerText = "create element"
node1.appendChild(listItem3)

node.appendChild(node1)

document.body.appendChild(node)
}

let button = document.createElement("button")
button.innerText ="click me"
button.setAttribute("id","btn")
button.setAttribute("class","button")
button.addEventListener("click",constructUl) 
document.body.appendChild(button)

let button1 = document.createElement("button")
button1.innerText = "QuerySelector"
button1.setAttribute("id","btn")
button1.setAttribute("class","button")
button1.addEventListener("click",()=>{
    let elements = document.querySelector(".list")
    elements.setAttribute("style","list-style-type: circle;")
})
document.body.appendChild(button1)

let button2 = document.createElement("button")
button2.innerText = "QuerySelectorAll"
button2.setAttribute("id","btn")
button2.setAttribute("class","button")
button2.addEventListener("click",()=>{
    let elements = document.querySelectorAll(".list")
    elements.forEach((e)=>{
        e.setAttribute("style","list-style-type: circle;")
    })
})
document.body.appendChild(button2)