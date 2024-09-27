# CSS Concepts

## 1. Selector

Selector dalam CSS adalah pola yang digunakan untuk memilih elemen HTML yang ingin diberi gaya. Ada beberapa jenis selector, antara lain:

### Type Selector
Memilih elemen berdasarkan jenis tag, misalnya `p` untuk semua paragraf.

### Class Selector
Memilih elemen dengan atribut class, ditandai dengan titik (.), misalnya `.classname`.

### ID Selector
Memilih elemen dengan atribut id, ditandai dengan pagar (#), misalnya `#idname`.

### Attribute Selector
Memilih elemen berdasarkan atribut tertentu, misalnya `[type="text"]`.

---

## 2. Box Model

Box model adalah konsep dalam CSS yang menggambarkan cara elemen ditampilkan di halaman web. Setiap elemen dianggap sebagai kotak yang memiliki beberapa komponen:

- **Content**: Area di mana teks dan gambar ditampilkan.
- **Padding**: Ruang antara konten dan batas (border) elemen.
- **Border**: Garis yang mengelilingi padding dan konten.
- **Margin**: Ruang di luar border yang memisahkan elemen dari elemen lain.

Box model mempengaruhi ukuran total elemen, sehingga pemahaman tentang ini penting untuk pengaturan layout yang tepat.

---

## 3. Positioning/Layout

Positioning dalam CSS digunakan untuk menentukan posisi elemen di dalam halaman. Ada beberapa jenis positioning:

- **Static**: Nilai default, elemen ditempatkan di dalam alur dokumen normal.
- **Relative**: Elemen diposisikan relatif terhadap posisi asalnya, memungkinkan penggeseran menggunakan properti `top`, `right`, `bottom`, dan `left`.
- **Absolute**: Elemen diposisikan relatif terhadap elemen terdekat yang memiliki posisi selain static. Ini mengeluarkan elemen dari alur dokumen normal.
- **Fixed**: Elemen diposisikan relatif terhadap jendela tampilan (viewport), tetap di tempat saat halaman digulir.
- **Sticky**: Elemen berperilaku sebagai relative sampai mencapai batas tertentu, kemudian berperilaku seperti fixed.
