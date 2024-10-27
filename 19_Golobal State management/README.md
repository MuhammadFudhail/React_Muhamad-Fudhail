# Global State Management

Global State Management adalah konsep yang memungkinkan data atau "state" diakses dari berbagai bagian aplikasi tanpa harus mengoper data tersebut melalui prop atau parameter dari satu komponen ke komponen lainnya. Ini sangat bermanfaat dalam aplikasi dengan banyak komponen yang saling bergantung dan membutuhkan data yang sama.

---

## Apa Itu Redux?

**Redux** adalah pustaka manajemen state yang populer dalam ekosistem React. Redux menggunakan `store` sebagai tempat penyimpanan global untuk data aplikasi. Terdapat beberapa konsep utama dalam Redux:

1. **Store**  
   Store adalah pusat penyimpanan semua data atau state aplikasi yang dapat diakses dari komponen mana saja.

2. **Action**  
   Action adalah objek yang mengirimkan instruksi tentang perubahan state yang diinginkan, misalnya `{ type: "ADD_ITEM", payload: newItem }`.

3. **Reducer**  
   Reducer adalah fungsi yang menerima action dan state saat ini, lalu mengembalikan state baru berdasarkan jenis action yang diterima.

4. **Dispatch**  
   Dispatch adalah metode untuk mengirimkan action ke reducer, yang kemudian memperbarui state aplikasi sesuai action yang diterima.

### Kelebihan Redux

- Mengelola state yang kompleks dengan terstruktur.
- Cocok untuk aplikasi berskala besar dengan banyak data yang saling bergantung.

---

## Apa Itu Zustand?

**Zustand** adalah pustaka manajemen state yang lebih ringan dan sederhana dibandingkan dengan Redux. Zustand memungkinkan kita untuk membuat store global dengan cara yang lebih efisien dan minim boilerplate, cocok untuk aplikasi yang tidak terlalu kompleks. Berikut konsep-konsep dasar Zustand:

1. **Store**  
   Store adalah tempat untuk menyimpan state aplikasi yang didefinisikan secara langsung sebagai objek atau fungsi dalam Zustand.

2. **Updater Functions**  
   Zustand menyediakan fungsi sederhana untuk memperbarui state, tanpa perlu membuat action atau reducer.

3. **Selector**  
   Memungkinkan komponen untuk memilih bagian tertentu dari state yang mereka perlukan, sehingga lebih efisien dalam mengurangi rerender komponen.

4. **Middleware**  
   Zustan menyediakan dukungan middleware opsional untuk menambah fungsionalitas pada aplikasi, seperti logging dan persistensi state.

### Kelebihan Zustand

- Setup sederhana, sangat cocok untuk aplikasi yang lebih kecil atau dengan kebutuhan state yang lebih ringan.
- Mengurangi kode boilerplate karena tidak memerlukan action dan reducer.