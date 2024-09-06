let a = document.querySelector("i");
a.addEventListener("click", navlink);
function navlink() {
  document.getElementById("navlinks").classList.toggle("change");
}