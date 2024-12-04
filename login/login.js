let userName = '';
let userEmail = '';

// Data pengguna default
const users = [
    {
        name: "ropip",
        email: "ropip@gmail.com",
        password: "123",
        profileImage: "https://via.placeholder.com/150"
    },
    {
        name: "najwa",
        email: "najwa@gmail.com",
        password: "1",
        profileImage: "https://via.placeholder.com/150"
    }
];

// Simpan data pengguna ke localStorage jika belum ada
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Event listener untuk menangani login
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit secara default

    // Ambil input email dan password
    const email = document.querySelector('.form-control input[type="text"]').value;
    const password = document.querySelector('.form-control input[type="password"]').value;

    // Ambil data pengguna dari localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Cari pengguna berdasarkan email dan password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Login berhasil
        userName = user.name;
        userEmail = user.email;

        alert('Login berhasil! Selamat datang, ' + user.name);

        // Alihkan ke halaman utama (folder web)
        window.location.href = "../web/index.html";
    } else {
        // Login gagal
        alert('Email atau password salah!');
    }
});
