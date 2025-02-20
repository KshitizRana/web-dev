// function convertTemperature(value, scale) {
//     // Convert temperature based on the scale ("C" to "F" or "F" to "C")
//     if(scale === "C"){
//       let f=0;
//       f=((value*9/5) + 32)
//       return `${f}°F`
//     }else{
//         let c=0;
//         c = (( value-32) * 5/9);
//         return `${c}°C`
//     }
//   }

// console.log(convertTemperature(0, "C"));

function calculator(num1, num2, operator) {
    // Perform basic arithmetic operations using switch case
    switch(operator){
      case "/":
        if(num2===0){
          return "Cannot ivide by Zero"
        }else{
          return num1/num2;
        }
      case "+":
        return num1+num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1*num2;
      
    }
  }

  console.log(calculator(10, 0, "/"));