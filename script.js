var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")
var check_button = document.getElementsByClassName("check")
var li = document.getElementsByTagName("li")
var del_button = document.getElementsByClassName("del")

function inputLength(){
    return input.value.length
}

function checker(item){
    item.target.parentElement.classList.toggle("done")

}

function del(item){
    item.target.parentElement.remove()
}

function createListElement(){
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));

        var btn = document.createElement("button");
        btn.setAttribute("class", 'check');
        var t = document.createTextNode("done");
        btn.appendChild(t);
        btn.addEventListener("click", checker)
        li.appendChild(btn);

        var del_btn = document.createElement("button");
        del_btn.setAttribute("class", 'del');
        var deltext = document.createTextNode("Delete")
        del_btn.appendChild(deltext)
        del_btn.addEventListener("click", del)
        li.appendChild(del_btn)
        


        ul.appendChild(li)
        input.value = ""
}



function addListAfterClick(){
    if(inputLength() > 0){
        createListElement()
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement()
}}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)

for (item of check_button) { 
    item.addEventListener("click", checker)
} 

for (item of del_button) { 
    item.addEventListener("click", del)
} 
