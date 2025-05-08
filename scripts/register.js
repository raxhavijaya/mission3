document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Cegah reload halaman
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak sama!");
      return;
    }
  
    // Simpan akun ke localStorage
    localStorage.setItem("user", JSON.stringify({ username, password }));
  
    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "login.html";
  });

// Untuk Password
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  // Mengecek tipe input password
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Mengubah ikon sesuai dengan tipe password
  if (type === "password") {
    togglePassword.innerHTML = '<i class="fa-solid fa-eye"></i>'; // Mata terbuka
  } else {
    togglePassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'; // Mata tertutup
  }
});

// Untuk Confirm Password
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");

toggleConfirmPassword.addEventListener("click", function () {
  // Mengecek tipe input confirm password
  const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
  confirmPasswordInput.setAttribute("type", type);

  // Mengubah ikon sesuai dengan tipe confirm password
  if (type === "password") {
    toggleConfirmPassword.innerHTML = '<i class="fa-solid fa-eye"></i>'; // Mata terbuka
  } else {
    toggleConfirmPassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'; // Mata tertutup
  }
});


