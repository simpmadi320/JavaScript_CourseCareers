function addTodo() {
    const todoElement = document.getElementById("new-todo");
    const todo = todoElement.value;
    todoElement.value = "";
    if (!todo){
        return alert("You must have some text for your todo list")
    }
    else{
        const list = document.getElementById("list");
        const li = document.createElement("li");
        const text = document.createTextNode(todo);

        li.setAttribute("onclick", "this.remove()")

        li.appendChild(text);
        list.appendChild(li);
    }
}