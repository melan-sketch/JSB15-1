function calculateBmi() {
    const weight = document.getElementById('Weight').value
    const height = document.getElementById('Height').value
    const bmi = weight / (height * height)

    if (bmi < 18.5) {
        document.getElementById('text').innerHTML = "Your BMI is: " + bmi;
        document.getElementById('second_Text').innerHTML = "Underweight";
    }
    else if (bmi > 18.5 && bmi <= 25) {
        document.getElementById('text').innerHTML = "Your BMI is: " + bmi;
        document.getElementById('second_Text').innerHTML = "Normal weight";
    }
    else if (bmi > 25 && bmi <= 30) {
        document.getElementById('text').innerHTML = "Your BMI is: " + bmi;
        document.getElementById('second_Text').innerHTML = "Overweight";
    }
    else if (bmi > 30 && bmi <= 40) {
        document.getElementById('text').innerHTML = "Your BMI is: " + bmi;
        document.getElementById('second_Text').innerHTML = "Obese";
    }
    else {
        document.getElementById('text').innerHTML = "Your BMI is: " + bmi;
        document.getElementById('second_Text').innerHTML = "Very Obese";
    }
}