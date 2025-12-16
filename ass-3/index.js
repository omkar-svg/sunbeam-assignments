const lg_btn = document.getElementById("lg_btn");
const email_area = document.getElementById("email1");
const pass_area = document.getElementById("pass1");
const input_div = document.getElementById("input_div");
const e_w = document.getElementById("n_w")
lg_btn.addEventListener("click", function () {

    let email = email_area.value;
    let pass = pass_area.value;

    if (email.includes("@")&&pass) {
        alert("Login successful!");
        email_area.style.borderColor = "green";
    } else {
        alert("Invalid email or password");

    }
});

lg_btn.add