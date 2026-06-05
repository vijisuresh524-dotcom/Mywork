const API_URL = "https://6a2259755c61035328699fa4.mockapi.io/Userdetails";
const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phonenumber = document.getElementById("phonenumber");
    const place = document.getElementById("place");
    const password = document.getElementById("password");
    const confirmpassword = document.getElementById("confirmpassword");

// Signup page 
const signup = document.getElementById("signup");

if (signup) {

  signup.addEventListener("submit", async function (e) {

    e.preventDefault();

    let valid = true;

    clearErrors();

    if (fullname.value.trim() === "") {
      setError(fullname, "Name is Required");
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
      setError(email, "Enter Valid Email Id");
      valid = false;
    }

    const phoneNumberPattern = /^[0-9]{10}$/;

    if (!phoneNumberPattern.test(phonenumber.value.trim())) {
      setError(phonenumber, "Phone Number should be 10 digits");
      valid = false;
    }

    const placePattern = /^[a-zA-Z\s]+$/;

    if (!placePattern.test(place.value.trim())) {
      setError(place, "Place should contain only alphabets");
      valid = false;
    }

    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordPattern.test(password.value)) {
      setError(
        password,
        "Password must contain letters and numbers and be at least 8 characters"
      );
      valid = false;
    }

    if (password.value !== confirmpassword.value) {
      setError(confirmpassword, "Passwords do not match");
      valid = false;
    }

    if (valid) {

      const userData = {
        fullname: fullname.value,
        email: email.value,
        phonenumber: phonenumber.value,
        place: place.value,
        password: password.value
      };

      try {

        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userData)
        });

        if (response.ok) {
          alert("Signup Successfully");
          window.location.href = "sign-in.html";
        } else {
          alert("Failed to register user");
        }

      } catch (error) {
        console.error(error);
        alert("Error while registering");
      }
    }

  });

}

function setError(input, message) {

  const parent = input.parentElement;
  const error = parent.querySelector(".error");

  if (error) {
    error.innerText = message;
  }

  input.classList.add("failure");
}

function clearErrors() {

  document.querySelectorAll(".error").forEach((item) => {
    item.innerText = "";
  });

  document.querySelectorAll("input").forEach((input) => {
    input.classList.remove("failure");
  });

}
function togglepassword(id) {

    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }

}

// sign in page
const signin = document.getElementById("signin");

if (signin) {

  signin.addEventListener("submit", async function (e) {

    e.preventDefault();

    const signinemail = document.getElementById("signinemail");
    const signinpassword = document.getElementById("signinpassword");

    let valid = true;

    clearErrors();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(signinemail.value.trim())) {
      setError(signinemail, "ENter the valid Email Id");
      valid = false;
    }

    if (signinpassword.value.trim() === "") {
      setError(signinpassword, "Password is wrong");
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {

      const response = await fetch(API_URL);
      const users = await response.json();

      const user = users.find(
        (item) =>
          item.email === signinemail.value.trim() &&
          item.password === signinpassword.value
      );

      if (user) {

        alert("Login Successfully");

        window.location.href = "travel.html";
         
    } else {

        setError(signinemail, "Invalid Email or Password");
      }

    } catch (error) {

      console.error(error);
      alert("Unable to connect to server");
    }

  });

}

function setError(input, message) {

  const parent = input.parentElement;
  const error = parent.querySelector(".error");

  if (error) {
    error.innerText = message;
  }

  input.classList.add("failure");
}

function clearErrors() {

  document.querySelectorAll(".error").forEach((item) => {
    item.innerText = "";
  });

  document.querySelectorAll("input").forEach((input) => {
    input.classList.remove("failure");
  });

}
function togglepassword(id) {

    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }

}