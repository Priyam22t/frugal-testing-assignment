// ================= FORM ELEMENTS =================
const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordStrengthText = document.getElementById("passwordStrength");

// ================= DROPDOWN ELEMENTS =================
const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");

// ================= LOCATION DATA =================
const locationData = {
    India: {
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
        "Karnataka": ["Bangalore", "Mysore", "Mangalore"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
        "Kerala": ["Kochi", "Trivandrum", "Kozhikode"]
    },
    USA: {
        "California": ["Los Angeles", "San Francisco", "San Diego"],
        "Texas": ["Dallas", "Austin", "Houston"],
        "New York": ["New York City", "Buffalo", "Albany"],
        "Florida": ["Miami", "Orlando", "Tampa"],
        "Illinois": ["Chicago", "Springfield", "Naperville"]
    }
};

// ================= FORM VALIDATION =================
form.addEventListener("input", validateForm);

function validateForm() {
    errorMessage.innerText = "";
    successMessage.innerText = "";

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const terms = document.getElementById("terms").checked;

    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    const other = document.getElementById("other").checked;

    const emailValid = validateEmail(email);
    const phoneValid = phone.length >= 10;
    const genderSelected = male || female || other;
    const passwordMatch = password === confirmPassword && password.length > 0;

    checkPasswordStrength(password);

    if (
        firstName &&
        lastName &&
        emailValid &&
        phoneValid &&
        genderSelected &&
        passwordMatch &&
        terms
    ) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function validateEmail(email) {
    if (email.includes("@tempmail.com")) {
        return false;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkPasswordStrength(password) {
    let strength = "Weak";
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        strength = "Strong";
    } else if (password.length >= 6) {
        strength = "Medium";
    }
    passwordStrengthText.innerText = "Password Strength: " + strength;
}

// ================= FORM SUBMIT =================
form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("errorMessage").innerText = "";
    document.getElementById("successMessage").innerText = "";

    let lastName = document.getElementById("lastName").value.trim();

    if (!lastName) {
        document.getElementById("errorMessage").innerText =
            "❌ Last Name is required";
        return;
    }

    document.getElementById("successMessage").innerText =
        "✅ Registration Successful!";

    form.reset();
});


// ================= COUNTRY → STATE =================
countrySelect.addEventListener("change", function () {
    stateSelect.innerHTML = '<option value="">Select State</option>';
    citySelect.innerHTML = '<option value="">Select City</option>';

    const states = locationData[this.value];
    if (states) {
        Object.keys(states).forEach(function (state) {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }
});

// ================= STATE → CITY =================
stateSelect.addEventListener("change", function () {
    citySelect.innerHTML = '<option value="">Select City</option>';

    const cities = locationData[countrySelect.value][this.value];
    cities.forEach(function (city) {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
});
