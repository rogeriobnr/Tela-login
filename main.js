function myFunction() {
    var password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

  const toggleBtn = document.getElementById("toggle-theme");
  const body = document.body;
  
  toggleBtn.addEventListener("click", function() {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
  });
  