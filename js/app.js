var addTask = function () {

    var newCheckbox = document.createElement("input"); // create input element
    newCheckbox.type = "checkbox"; // typeof checkbox
    newCheckbox.value = document.getElementById("userDone").value; // 
    document.getElementById("toDoList").appendChild(newCheckbox); // append checkbox to toBeDone

    var label = document.createElement('label');  // create label
    label.htmlFor = document.getElementById("userDone").value; //
    label.appendChild(document.createTextNode(document.getElementById("userDone").value));

    document.getElementById("toDoList").appendChild(label);  // 
    document.getElementById("toDoList").appendChild(document.createElement("br")); 
}