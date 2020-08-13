var list = document.getElementById("list");



function addTodo(){
    var todo_item = document.getElementById("todo-item")
    
    // create li tag with text Node
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    
    // create delete button
    var delBtn = document.createElement('button')
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", "BtnDelte")
    delBtn.setAttribute("onclick", "deletItem(this)")
    delBtn.appendChild(delText)
    
    // edit button 
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class", "BtnEdit")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText)


    li.appendChild(delBtn)
    li.appendChild(editBtn)
    
    list.appendChild(li)

    todo_item.value = ""
}

function deletItem(e){
    e.parentNode.remove()

}

function editItem(e){
    var val = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)

    e.parentNode.firstChild.nodeValue = val;
}

function deleteAll(){
    list.innerHTML = ""
}