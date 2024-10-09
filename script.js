document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  console.log("Name: " + name);
  console.log("Email: " + email);

  let valid = validateEmail(email);
  console.log(valid);

  if (valid) {
    alert("Thank you for subscribing!");
  } else {
    alert("Please enter a valid email address and name.");
  }
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}