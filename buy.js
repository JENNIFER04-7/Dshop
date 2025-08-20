const element = document.getElementById("order");
const myname = document.getElementById("name");
const add = document.getElementById("add");

element.addEventListener("click", myFunction);

function myFunction() {
  if (myname.value === "" || add.value === "") {
    alert("Form is empty");
  } else {
    window.location.assign("index.html");
}
}