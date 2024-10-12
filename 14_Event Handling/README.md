# Ringkasan Event Handling

## 1. Event
Suatu kejadian yang dipicu oleh interaksi pengguna, seperti klik, input, atau keypress. Event ini memungkinkan aplikasi merespons tindakan pengguna di halaman web.

## 2. Event Listener
Fungsi yang dipasang untuk mendengarkan dan menangani event pada elemen tertentu. Listener ditambahkan menggunakan metode seperti `addEventListener()`, yang menjalankan fungsi tertentu ketika event terjadi.

## 3. Event Propagation
Proses pergerakan event melalui DOM, terdiri dari dua fase: 
- **Capturing Phase**: Event bergerak dari root ke elemen target.
- **Bubbling Phase**: Event kembali naik dari elemen target ke root.
