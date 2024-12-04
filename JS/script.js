document.addEventListener("DOMContentLoaded", () => {
    const gender = document.getElementById("gender");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultBtn = document.getElementById("result-btn");
    const resetBtn = document.getElementById("reset-btn");
    const resultDiv = document.getElementById("result");
    const bmiResult = document.getElementById("bmi-result");
    const recommendation = document.getElementById("recommendation");

    const validateForm = () => {
        const isValid = gender.value && heightInput.value && weightInput.value;
        resultBtn.disabled = !isValid;
        resetBtn.disabled = !isValid;
    };

    const calculateBMI = () => {
        const height = parseFloat(heightInput.value) / 100;
        const weight = parseFloat(weightInput.value);
        return (weight / (height * height)).toFixed(1);
    };

    const getRecommendation = (bmi) => {
        if (bmi < 18.5) {
            return "Anda berada dalam kategori berat badan kurang. Disarankan untuk meningkatkan asupan kalori.";
        } else if (bmi < 24.9) {
            return "Anda berada dalam kategori berat badan normal. Pertahankan pola makan dan gaya hidup sehat!";
        } else if (bmi < 29.9) {
            return "Anda berada dalam kategori berat badan berlebih. Disarankan untuk olahraga teratur.";
        } else {
            return "Anda berada dalam kategori obesitas. Konsultasikan dengan ahli gizi untuk pola makan sehat.";
        }
    };

    resultBtn.addEventListener("click", () => {
        const bmi = calculateBMI();
        bmiResult.textContent = `BMI Anda: ${bmi}`;
        recommendation.textContent = getRecommendation(bmi);
        resultDiv.style.display = "block";
    });

    resetBtn.addEventListener("click", () => {
        gender.value = "";
        heightInput.value = "";
        weightInput.value = "";
        resultDiv.style.display = "none";
        validateForm();
    });

    [heightInput, weightInput].forEach((input) => {
        input.addEventListener("input", validateForm);
    });
});
