const textmsg = document.getElementById("text1")
const add_btn = document.getElementById("add_btn")
const container = document.getElementById("task_container")

add_btn.addEventListener("click",function(){
    if(textmsg.value==""){
        alert("enter test")
        return;
    } 
        const li = document.createElement("li");
    li.className = "task";

    const span = document.createElement("span");
    span.className = "task-text";
    span.innerText = textmsg.value;
    const btn = document.createElement("button");
    btn.className = "delete-btn";
    btn.innerText = "Delete";
    
    btn.addEventListener("click", () => {
        li.remove();
    });
    
    li.appendChild(span);
    li.appendChild(btn);
    container.append(li)
    
    textmsg.value = "";
    
}) 