const inputs = document.getElementById("form-inputs");
const output = document.getElementById("result");

inputs.addEventListener('submit',(e)=>{
    e.preventDefault();
    let weight= document.getElementById("WeightInput").value;
    let height= document.getElementById("HeightInput").value;
    let bmi = weight / (height**2);
    let span = document.createElement("span");
    if(bmi<18.5){
        span.innerHTML = `Your BMI is ${bmi} (Under Weight)`
        output.appendChild(span);
    }else if(bmi>=18.5 && bmi<25){
        let span = document.createElement("span");
        span.innerHTML = `Your BMI is ${bmi} (Normal Weight)`
        output.appendChild(span);
    }else if(bmi>=25 && bmi<30){
        let span = document.createElement("span");
        span.innerHTML = `Your BMI is ${bmi} (Over Weight)`
        output.appendChild(span);
    }else if(bmi>=30){ 
        let span = document.createElement("span");
        span.innerHTML = `Your BMI is ${bmi} (Obesity)`
        output.appendChild(span);
    }
    
})
