# Ringkasan Konsep JavaScript

## 1. Variabel dan Tipe Data
JavaScript memiliki dua jenis utama tipe data, yaitu:

- **Tipe Data Primitif**:
  - String: Menyimpan teks.
  - Number: Menyimpan angka.
  - Boolean: Menyimpan nilai logika `true` atau `false`.
  - Undefined: Variabel yang telah dideklarasikan tetapi belum diinisialisasi.
  - Null: Menunjukkan ketiadaan nilai atau objek kosong.

- **Tipe Data Referensi**:
  - Object: Struktur data yang terdiri dari pasangan key-value.
  - Array: Koleksi nilai yang disusun dalam satu struktur.
  - Function: Blok kode yang dapat dipanggil untuk menjalankan tugas tertentu.

Deklarasi variabel dapat dilakukan menggunakan:
- `var`: Digunakan secara global atau dalam cakupan fungsi.
- `let`: Dideklarasikan dengan cakupan lokal pada blok tertentu.
- `const`: Deklarasi variabel yang tidak bisa diubah setelah diinisialisasi.

## 2. Fungsi
Fungsi dalam JavaScript adalah blok kode yang dapat digunakan kembali untuk menjalankan tugas tertentu. Fungsi dapat dideklarasikan dengan dua cara utama, yaitu menggunakan kata kunci `function` dan menggunakan arrow function (`=>`). Biasanya, fungsi menerima input berupa parameter dan mengembalikan nilai.

## 3. Asynchronous Programming
Asynchronous programming sangat penting dalam JavaScript, terutama untuk menangani operasi yang memerlukan waktu lebih lama, seperti permintaan jaringan atau pembacaan file. Tiga cara utama untuk menangani operasi asinkron adalah:

- **Callback**: Fungsi yang dipanggil setelah operasi async selesai dijalankan.
- **Promises**: Menyederhanakan penanganan async dengan menggunakan metode `then` dan `catch`.
- **Async/Await**: Membuat penanganan kode async menjadi lebih mudah dipahami karena terlihat seperti kode sinkron.

