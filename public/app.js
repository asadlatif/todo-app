var list = document.getElementById("list");

firebase.database().ref('todos').on('child_added',function(data){
    console.log(data.val())
    // create li tag with text Node
    var li = document.createElement("li");
    var liText = document.createTextNode(data.val().value)
    li.appendChild(liText)
    
    // create delete button
    var delBtn = document.createElement('button')
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute('id', data.val().key)
    delBtn.setAttribute("class", "BtnDelte")
    delBtn.setAttribute("onclick", "deletItem(this)")
    delBtn.appendChild(delText)
    
    // edit button 
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute('id', data.val().key)
    editBtn.setAttribute("class", "BtnEdit")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText)


    li.appendChild(delBtn)
    li.appendChild(editBtn)
    
    list.appendChild(li)
})


function addTodo(){
    var todo_item = document.getElementById("todo-item")
    var database = firebase.database().ref('todos')
    var key = database.push().key;
    var todo = {
        value: todo_item.value,
        key: key
    }
    database.child(key).set(todo)
    

    todo_item.value = ""
}

function deletItem(e){
    firebase.database().ref('todos').child(e.id).remove()
    e.parentNode.remove()

}

function editItem(e){
    var val = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)
    var editTodo = {
        value: val,
        key: e.id      
    }
    firebase.database().ref('todos').child(e.id).set(editTodo)
    e.parentNode.firstChild.nodeValue = val;
}

function deleteAll(){
    list.innerHTML = ""
    firebase.database().ref('todos').remove()
}