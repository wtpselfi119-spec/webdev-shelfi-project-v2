
// Variabel untuk menyimpan status apakah mode gelap aktif
let darkMode = false;

// -----------------------------------------------------------
// FUNGSI UNTUK MENGGANTI MODE TEMA SAAT TOMBOL DIKLIK
// -----------------------------------------------------------
button.addEventListener("click", function () {
    console.log("Tombol Tema diklik");

    // Membalik nilai darkMode (true/false)
    darkMode = !darkMode;

    // Menambah atau menghapus kelas 'dark-mode' pada body
    document.body.classList.toggle("dark-mode");

    // Menyesuaikan teks tombol berdasarkan mode yang aktif
    if (darkMode) {
        button.textContent = "Ubah ke Light Mode";
    } else {
        button.textContent = "Ubah ke Dark Mode";
    }
});


// -----------------------------------------------------------
// TOMBOL SAPA PENGGUNA – MENGAMBIL ELEMEN YANG DIBUTUHKAN
// -----------------------------------------------------------
const sayHiBtn = document.getElementById("sayHiBtn");
const greeting = document.getElementById("greeting");

// -----------------------------------------------------------
// FUNGSI SAAT TOMBOL SAPA DIKLIK
// -----------------------------------------------------------
sayHiBtn.addEventListener("click", function () {
    console.log("Tombol Sapa Saya diklik");

    // Memunculkan prompt untuk meminta nama pengguna
    let nama = prompt("Siapa nama kamu?");

    // Menampilkan sapaan berdasarkan input pengguna
    if (nama && nama.trim() !== "") {
        greeting.innerText = "Halo, " + nama + "!";
    } else {
        greeting.innerText = "Halo, pengunjung!";
    }
});


// -----------------------------------------------------------
// CATATAN REFLEKSI – BAGIAN TUGAS
// -----------------------------------------------------------
/*
Bagian yang paling sulit dipahami adalah bagaimana event listener bekerja
karena awalnya membingungkan bagaimana tombol dapat memicu fungsi tertentu.

Momen WOW terjadi saat tombol berhasil mengubah warna tema dan sapaan
muncul di halaman. Halaman yang tadinya statis langsung terasa hidup!
*/