#summary Materi CSS

1. Selectors dan Peranannya
Dalam CSS, selector digunakan untuk memilih elemen HTML yang ingin diberikan gaya. Ada berbagai jenis selector yang dapat digunakan, di antaranya element selector, class selector, dan ID selector.

a. Element selector secara langsung menerapkan gaya ke semua elemen dari tipe tertentu, seperti "p" atau h1>. Misalnya, jika kita ingin semua   paragraf memiliki warna teks biru, kita dapat menggunakan selector p { color: blue; }.

b. Class selector memungkinkan kita untuk menerapkan gaya pada elemen tertentu yang memiliki atribut class. Ini dilakukan dengan menambahkan titik di depan nama class. Contoh: .content { font-size: 16px; }. Gaya ini akan diterapkan pada semua elemen yang memiliki class content.

c. ID selector digunakan untuk elemen yang memiliki atribut ID unik dan diidentifikasi dengan menggunakan tanda pagar #. Misalnya, #header { background-color: gray; } akan menerapkan gaya hanya pada elemen dengan ID header.

2. Box Model
Setiap elemen HTML dirender menggunakan CSS Box Model, yang mengatur ruang elemen di halaman. Box model terdiri dari empat bagian utama:

a. Content: Ini adalah area di mana teks atau gambar ditempatkan. Ukuran content dapat diatur menggunakan properti seperti width dan height.
Padding: Area di sekitar content, yang menciptakan ruang di dalam batas elemen tetapi di luar konten. Padding bisa diatur dengan padding: 10px; untuk membuat jarak di dalam elemen.

b. Border: Ini adalah garis yang mengelilingi padding dan content, yang dapat diatur dalam ketebalan, gaya, dan warnanya. Contoh: border: 1px solid black;.
Margin: Area di luar border yang menciptakan jarak antara elemen dengan elemen lain di halaman. Misalnya, margin: 20px; akan menambahkan ruang di luar border elemen.

c. Box model ini penting dalam mengatur tata letak halaman dan membuat elemen terlihat lebih teratur dan proporsional. Memahami bagaimana box model bekerja juga membantu dalam memecahkan masalah penempatan elemen.

3. Positioning dan Layout
CSS menyediakan berbagai cara untuk mengatur tata letak elemen di halaman menggunakan properti position. Ada beberapa nilai penting dalam properti ini:

a. Static: Ini adalah nilai default, di mana elemen ditempatkan dalam aliran normal dokumen. Tidak ada perubahan posisi yang terjadi dengan nilai ini.
Relative: Elemen dengan position: relative; diposisikan relatif terhadap posisi aslinya. Misalnya, top: 20px; akan memindahkan elemen 20 piksel ke bawah dari posisi aslinya.

b. Absolute: Dengan position: absolute;, elemen diposisikan relatif terhadap elemen induknya yang memiliki posisi non-static (biasanya relative, absolute, atau fixed). Elemen ini dihapus dari aliran normal dokumen, sehingga elemen-elemen lain tidak akan terpengaruh oleh posisinya.

c. Fixed: Elemen dengan position: fixed; akan tetap di tempat yang sama bahkan saat halaman digulir. Biasanya digunakan untuk header atau elemen navigasi yang selalu terlihat saat pengguna menggulir halaman.