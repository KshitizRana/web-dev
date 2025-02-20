const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btns");

function calculations(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
        return num1/num2;
  }
}

buttons.forEach((btn) => {
    let num1;
    let num2;
  btn.addEventListener("click", () => {
    let val = btn.value;
    if(val !== "clr" && val!=="=" ){
        display.value += val;
    }
    let exp = display.value.split('')
    exp.forEach(val =>{
       if(val ==="+" || val ==="*"|| val ==="-" || val==="/"){
        let num1 = ``
       }
    })
    // traverse ths string
    // as we find a operator num1 = previous values
    // as we find second operator num2 = previous values
    // fxn(num1,num2.operator)
    //result store i num1
  });
});
