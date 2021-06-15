const button = document.querySelectorAll("#button");
console.log(button);
button.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("ClickHandler!");
  });
});
