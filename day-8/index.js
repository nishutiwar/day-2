document.querySelector(".login-btn").addEventListener("click", function (e) {
    e.preventDefault();
  
    const email = document.querySelector("input[type='text']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();
  
    if (!email || !password) {
      alert("Please fill in both email/phone and password.");
    } else {
      alert(`Logged in with\nEmail/Phone: ${email}\nPassword: ${password}`);
    }
  });
  