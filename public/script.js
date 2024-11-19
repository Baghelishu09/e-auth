// Define global variables for form fields in the signup form
let fullname = document.getElementById("name");
let email = document.getElementById("email");
let mob = document.getElementById("mobileNo");
let pswd = document.getElementById("password");
let uname = document.getElementById("uname");

// Validation function for signup form
function validate(event) {
  // Prevent the form from submitting normally to handle custom validation
  event.preventDefault();
  const nameval = document.getElementById("name").value;
  const emailval = document.getElementById("email").value;
  const mobval = document.getElementById("mobileNo").value;
  const pswdval = document.getElementById("password").value;
  const unameval = document.getElementById("uname").value;

  // form validation

  let errors = [];

  if (
    nameval == "" ||
    emailval == "" ||
    mobval == "" ||
    pswdval == "" ||
    unameval == ""
  ) {
    errors.push(`All fields are mandatory`);
  } else if (pswdval.length < 6) {
    errors.push("Password must be atleast 6 characters long");
  } else if (mobval.length != 10) {
    errors.push("Mobile number must be 10 digits long");
  } else if (emailval.indexOf("@") <= 0) {
    errors.push("Invalid email");
  }
  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    const formData = {
      name: nameval,
      uname: unameval,
      email: emailval,
      mobileNo: mobval,
      password: pswdval,
    };
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        fullname.value = "";
        email.value = "";
        mob.value = "";
        pswd.value = "";
        uname.value = "";
        document.getElementById("signup-container").style.display = "none";
        document.getElementById("login_form").style.display = "block";
      });
  }
}
function loginbtn(event) {
  document.getElementById("signup-container").style.display = "none";
  document.getElementById("login_form").style.display = "block";
}
function registertosignup() {
  document.getElementById("signupbtn").addEventListener("click", function () {
    document.getElementById("login_form").style.display = "none";
    document.getElementById("signup-container").style.display = "block";
  });
}
registertosignup();
