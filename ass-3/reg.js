

reg_btn = document.getElementById("rg_btn")
name_f = document.getElementById("r_name")
email_f = document.getElementById("r_email")
pass_f = document.getElementById("r_pass")
num_f = document.getElementById("r_num")
e_e = document.getElementById("e_e")


function validateName(value) {
    return value.trim().length > 0;
}

function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePassword(value) {
    return value.length >= 6;
}

function validateNumber(value) {
    return /^\d{10}$/.test(value);
}


reg_btn.addEventListener("click", function () {
    uname = name_f.value;
    uemail = email_f.value;
    upass = pass_f.value;
    unum = num_f.value;
    let cnt = 0;

    if (!validateEmail(uemail)) {
       document.getElementById("emailError").style.display = "block";
    }
    else{
        cnt++;
       document.getElementById("emailError").style.display = "none";   
    }

    if (!validatePassword(upass)) {
       document.getElementById("passError").style.display = "block";
    }
    else{
        cnt++;
       document.getElementById("passError").style.display = "none";   
    }

    if (!validateName(uname)) {
       document.getElementById("nameError").style.display = "block";
    }
    else{
        cnt++;
       document.getElementById("nameError").style.display = "none";   
    }

    if (!validateNumber(unum)) {
       document.getElementById("numError").style.display = "block";
    }
    else{
        cnt++;
       document.getElementById("numError").style.display = "none";   
    }
    if(cnt===4)
        alert("login sucsessfull");
    else{
         alert("login fail");
    }

});


