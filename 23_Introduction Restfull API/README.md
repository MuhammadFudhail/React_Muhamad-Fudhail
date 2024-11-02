# Pengantar RESTful API

RESTful API (Representational State Transfer) adalah arsitektur yang digunakan dalam pengembangan aplikasi web yang memungkinkan komunikasi antara klien dan server melalui protokol HTTP. REST memiliki beberapa prinsip dasar yang menjadikannya efektif untuk membangun layanan web yang skalabel dan dapat digunakan kembali:

## Prinsip Dasar RESTful API

1. **Stateless**: 
   Setiap permintaan dari klien ke server harus mengandung semua informasi yang diperlukan untuk memahami permintaan tersebut. Server tidak menyimpan status sesi pengguna antara permintaan.

2. **Resource-Based**: 
   API REST berfokus pada sumber daya (resources) yang dapat diakses dan dimanipulasi melalui URL. Sumber daya ini diwakili dalam format seperti JSON atau XML.

3. **HTTP Methods**: 
   RESTful API menggunakan metode HTTP seperti GET, POST, PUT, DELETE untuk melakukan operasi pada sumber daya:
   - **GET**: Mengambil data dari server.
   - **POST**: Mengirimkan data baru ke server.
   - **PUT**: Memperbarui data yang sudah ada di server.
   - **DELETE**: Menghapus data dari server.

4. **Representasi**: 
   Klien dan server berkomunikasi dengan pertukaran representasi sumber daya. Ketika klien meminta sumber daya, server mengirimkan representasi yang sesuai.

5. **Hypermedia**: 
   RESTful API sering kali menggunakan hypermedia sebagai bagian dari antarmuka, di mana respons dari server mencakup tautan yang dapat diikuti untuk navigasi lebih lanjut dalam API.


