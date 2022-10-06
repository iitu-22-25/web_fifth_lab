function add_new_todo() {
    let tag = document.createElement("div");
    let input = document.getElementById("add_todo_input")
    let text = document.createTextNode(input.value);
    tag.appendChild(text);
    let element = document.getElementById("todo_list");
    element.appendChild(tag);
    input.value = ""
}
