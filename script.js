var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = ""; // implement Reset text input field

  //START STRIKETHROUGH
  // because it's in the function, it only adds it for new items
  function crossOut() {
    li.classList.toggle("done"); //implement me
    if (li.style.textDecoration == "line-through") {
      li.style.textDecoration = "None"
    } else {
      li.style.textDecoration = "line-through";
    }
  }

  li.addEventListener("click", crossOut);
  //END STRIKETHROUGH

  // START ADD DELETE BUTTON

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X")); //Use the implemented function from below here
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", deleteListItem);
  // END ADD DELETE BUTTON

  //ADD CLASS DELETE (DISPLAY: NONE)
  function deleteListItem() {
    li.classList.add("delete");
    li.remove();
  }
  //END ADD CLASS DELETE
}

function addListAfterClick() {
  if (inputLength() > 0) {
    //makes sure that an empty input field doesn't create a li
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
