function signup(event) {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var phone = document.getElementById("mobileNo").value;
  var uname = document.getElementById("uname").value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  event.preventDefault();

  if (
    email == "" ||
    password == "" ||
    name == "" ||
    phone == "" ||
    uname == ""
  ) {
    alert("Please fill all the fields");
  } else if (password.length < 6 && password.length > 20) {
    alert("Password must be atleast 6 characters long");
  } else if (phone.length != 10) {
    alert("Enter a valid phone number");
  } else if (!email.match(regex)) {
    alert("Enter a valid email");
  } else {
    var data = {
      email: email,
      password: password,
      name: name,
      phone: phone,
      uname: uname,
    };
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "success") {
          alert(data.message);
          email = "";
          uname = "";
          password = "";
          name = "";
          phone = "";
          document.getElementById("signup-container").style.display = "none";
          document.getElementById("login_form").style.display = "block";
        } else {
          alert(data.message);
        }
      });
  }
}
document.getElementById("register").addEventListener("click", signup);
document.getElementById("loginbtn2").addEventListener("click", function () {
  document.getElementById("signup-container").style.display = "none";
  document.getElementById("login_form").style.display = "block";
});

function login(event) {
  console.log("login");
  var uname_login = document.getElementById("uname_login").value;
  var password_login = document.getElementById("password_login").value;
  if (uname_login == "" || password_login == "") {
    alert("Please fill all the fields");
    return;
  } else {
    var data = {
      uname_login: uname_login,
      password_login: password_login,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "success") {
          alert(data.message);
        } else {
          alert(data.message);
        }
      });
    uname_login == "";
    password_login == "";
  }
}
document.getElementById("loginbtn").addEventListener("click", login);
document.getElementById("signupbtn").addEventListener("click", function () {
  document.getElementById("signup-container").style.display = "block";
  document.getElementById("login_form").style.display = "none";
});
