document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Data login yang diperbolehkan
    const username = "admin";
    const password = "12345";

    // Ambil input user
    const inputUser = document.getElementById("username").value;
    const inputPass = document.getElementById("password").value;

    if (inputUser === username && inputPass === password) {
        // Simpan status login di localStorage
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html"; // Arahkan ke dashboard
    } else {
        alert("Username atau password salah!");
    }
});

// Cek status login sebelum masuk dashboard
if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html"; // Kembali ke login jika belum login
    }
}

// Fungsi logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}
