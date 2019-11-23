window.onload=function() {
var ul=document.createElement("ul")
var m=document.getElementById("m")
var input=document.getElementById("input")
var click=document.getElementById("click")

m.appendChild(ul)
click.onclick=function(){
    var li=document.createElement("li")
    li.innerHTML=input.value
    ul.appendChild(li)
    input.value=" "
}
}