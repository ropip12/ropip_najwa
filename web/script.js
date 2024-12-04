let cart = [];
let totalPrice = 0;





// Menampilkan profil pengguna saat mengklik menu Profil
document.getElementById('profileButton').addEventListener('click', function () {
    // Tampilkan modal profil
    document.getElementById('profileModal').style.display = 'block';
    document.getElementById('profileName').textContent = userName;
    document.getElementById('profileEmail').textContent = userEmail;
});

// Menutup modal profil
document.getElementById('closeProfile').addEventListener('click', function () {
    document.getElementById('profileModal').style.display = 'none';
});


// Fungsi untuk menangani pencarian buku
function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Ambil input pencarian dan ubah ke huruf kecil
    const books = document.querySelectorAll('.book'); // Ambil semua elemen buku

    books.forEach(book => {
        const title = book.getAttribute('data-title').toLowerCase(); // Ambil judul buku dan ubah ke huruf kecil
        if (title.includes(searchInput)) {
            book.style.display = 'block'; // Jika judul buku cocok dengan pencarian, tampilkan buku
        } else {
            book.style.display = 'none'; // Jika tidak cocok, sembunyikan buku
        }
    });
}

// Menambahkan buku ke dalam keranjang
function addToCart(bookName, price) {
    cart.push({ name: bookName, price: price });
    totalPrice += price;
    renderCart(); // Memperbarui tampilan keranjang
}

// Menampilkan keranjang belanja
function renderCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = ""; // Reset tampilan keranjang

    cart.forEach((item) => {
        const div = document.createElement("div");
        div.textContent = `${item.name} - Rp${item.price.toLocaleString()}`;
        cartItems.appendChild(div);
    });

    // Menampilkan total harga
    document.getElementById("totalPrice").textContent = totalPrice.toLocaleString();
}

// Proses pembayaran
document.getElementById("checkoutButton").addEventListener("click", () => {
    console.log("Tombol Bayar diklik"); // Debugging log
    if (cart.length === 0) {
        alert("Keranjang Anda kosong.");
    } else {
        alert(`Total pembayaran: Rp${totalPrice.toLocaleString()}. Terima kasih telah membeli buku!`);
        cart = [];  // Reset keranjang
        totalPrice = 0;  // Reset total harga
        renderCart();  // Perbarui tampilan keranjang
    }
});


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
localStorage.setItem('users', JSON.stringify(users));