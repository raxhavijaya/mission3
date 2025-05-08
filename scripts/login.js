document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
  
    const savedUser = JSON.parse(localStorage.getItem("user"));
  
    if (savedUser && savedUser.username === loginUsername && savedUser.password === loginPassword) {
      alert("Login berhasil!");
      window.location.href = "home.html";
    } else {
      alert("Username atau password salah!");
    }
  });

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("loginPassword");

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
