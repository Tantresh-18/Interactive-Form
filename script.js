let currentStep = 0;

const steps = document.querySelectorAll(".step");
const progress = document.getElementById("progress");

function showStep(index) {
    steps.forEach(step => step.classList.remove("active"));
    steps[index].classList.add("active");

    progress.style.width = ((index + 1) / steps.length) * 100 + "%";
}

function nextStep() {
    if (validateStep()) {
        currentStep++;
        if (currentStep >= steps.length) currentStep = steps.length - 1;
        showStep(currentStep);
    }
}

function prevStep() {
    currentStep--;
    if (currentStep < 0) currentStep = 0;
    showStep(currentStep);
}

// Validation
function validateStep() {

    if (currentStep === 0) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        if (name === "") {
            document.getElementById("nameError").innerText = "Enter name";
            return false;
        }

        if (!email.includes("@")) {
            document.getElementById("emailError").innerText = "Invalid email";
            return false;
        }
    }

    if (currentStep === 1) {
        let phone = document.getElementById("phone").value;

        if (!/^[0-9]{10}$/.test(phone)) {
            document.getElementById("phoneError").innerText = "Invalid phone";
            return false;
        }
    }

    if (currentStep === 2) {
        let pass = document.getElementById("password").value;
        let confirm = document.getElementById("confirm").value;

        if (pass.length < 6) {
            document.getElementById("passwordError").innerText = "Weak password";
            return false;
        }

        if (pass !== confirm) {
            document.getElementById("confirmError").innerText = "Passwords mismatch";
            return false;
        }
    }

    return true;
}

// Submit
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Form submitted successfully 🚀");
});

// Init
showStep(currentStep);