let btn = document.getElementById("iconbtn");
let icon = document.getElementsByClassName("bi-list")[0];
let navwidth = document.getElementById("navbar");
let heading = document.getElementsByTagName("figcaption")[0];
let myimg = document.getElementsByClassName("imgdiv")[0];

var counter = 1;
btn.addEventListener("click", function () {
  counter++

  navwidth.style.width = "280px"
  heading.style.opacity = 1
  icon.className = "bi-list"
  btn.style.transform = "rotate(0deg)"
  myimg.style.top = 60 + "px"

  if (counter == 2) {
    navwidth.style.width = "80px"
    heading.style.opacity = 0
    icon.className = "bi-plus"
    btn.style.transform = "rotate(45deg)"
    myimg.style.top = 70 + "px";

    if (counter = 2) {
      counter = 0;
    }
  }
})

