document.getElementById("form").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); // stop page from reloading

    // ------ Collect Inputs ------
    const fullname = document.getElementById("fname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
    const state = document.getElementById("state").value;

    // ------ Validations ------

    if (!fullname) {
        alert("Please enter your full name.");
        return;
    }

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    if (state === "blank") {
        alert("Please select your state.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // ------ Create the form data object ------
    const formData = {
        name: fullname,
        email: email,
        password: password,
        state: state
    };

    console.log("Form Data:", formData);

    // ------ AJAX Request ------
    const xhr = new XMLHttpRequest();

    // GitHub Pages requires GET request
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            const response = JSON.parse(xhr.responseText);

            // show message from JSON response
            document.getElementById("message").innerText = response.message;

            alert("Form submitted successfully!");

            // reset form
            document.getElementById("form").reset();
        } 
        else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };

    xhr.send();
}
