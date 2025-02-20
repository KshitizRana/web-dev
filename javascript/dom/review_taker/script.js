const reviews = document.getElementById("inputTxt");
const button = document.getElementById("submit-btn");
const testimonial = document.getElementById("testimonials");
const err = document.getElementById("empty");
const nameInp = document.getElementById("name-taker");
button.addEventListener("click", (event) => {
  event.preventDefault();
  let para = document.createElement("p");
  let userName = "~" + nameInp.value.trim();
  console.log(userName);
  let span = document.createElement("span");
  span.classList.add("name-str");
  if (reviews.value === "" && userName ==="~") {
    reviews.style.border = "1px solid red";
    nameInp.style.border = "1px solid red";
    span.innerHTML = `* Please enter all the details`;
    span.style.color = "red";
    err.prepend(span);
    
    return;
  } else {
    para.innerHTML = reviews.value.trim() + "\n";
    span.innerHTML = userName;
    para.appendChild(span);
    testimonial.prepend(para);
    nameInp.value = "";
    reviews.value = "";
  }
});
