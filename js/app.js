var addTask = function () {

    var newCheckbox = document.createElement("input"); // create input element
    newCheckbox.type = "checkbox"; // type of checkbox
    newCheckbox.value = document.getElementById("userDone").value; // Value of the checkbox is 'userDone'
    document.getElementById("toDoList").appendChild(newCheckbox); // append checkbox to toDoList div

    var label = document.createElement('label');  // create label
    label.htmlFor = document.getElementById("userDone").value; // label or userDone checkbox
    label.appendChild(document.createTextNode(document.getElementById("userDone").value)); // append label to userDone

    document.getElementById("toDoList").appendChild(document.createTextNode (" "));
    document.getElementById("toDoList").appendChild(label);  //print the label/checkbox
    document.getElementById("toDoList").appendChild(document.createElement("br")); //new line (since its in the same id, if we ommit this it appends on same line)

    document.getElementById("userDone").value = ""; // Clear textarea
}