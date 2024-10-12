import React, { useState, useEffect } from 'react'; // Tambahkan useEffect
import { v4 as uuidv4 } from 'uuid'; // Untuk membuat ID unik

// Komponen Header
const Header = () => {
    return (
        <header>
            <h2 className="tulisan">Tabel List Produk</h2>
        </header>
    );
};

// Komponen Footer
const Footer = () => {
    return (
        <footer>
            <p className="footer">© 2024 Perusahaan Anda. Semua hak dilindungi.</p>
        </footer>
    );
};

// Komponen Utama
const CreateProduct = () => {
    const [dataList, setDataList] = useState([]);
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productFreshness, setProductFreshness] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [editId, setEditId] = useState(null); // State untuk mengetahui ID produk yang sedang diedit

    // Menampilkan alert saat pertama kali halaman dimuat
    useEffect(() => {
        alert("Welcome Guys");
    }, []); // Array kosong agar hanya dijalankan saat komponen pertama kali di-load

    // Fungsi untuk menambah atau mengedit data
    const addData = () => {
        if (!productName || !productCategory || !productImage || !productFreshness || !productDescription || !productPrice) {
            alert('Semua field harus diisi!');
            return;
        }

        if (editId) {
            // Jika sedang dalam mode edit, update data yang ada
            const updatedDataList = dataList.map((data) =>
                data.id === editId
                    ? {
                          ...data,
                          productName,
                          productCategory,
                          productImage,
                          productFreshness,
                          productDescription,
                          productPrice,
                      }
                    : data
            );
            setDataList(updatedDataList);
            setEditId(null); // Reset edit mode setelah update
        } else {
            // Tambah data baru jika tidak sedang dalam mode edit
            const newData = {
                id: uuidv4(), // Generate ID unik untuk produk baru
                productName,
                productCategory,
                productImage,
                productFreshness,
                productDescription,
                productPrice,
            };
            setDataList([...dataList, newData]);
        }

        resetFields();
    };

    // Fungsi untuk mengisi form dengan data yang akan diedit
    const loadEditData = (id) => {
        const productToEdit = dataList.find((data) => data.id === id);

        // Mengisi form dengan data produk yang akan diedit
        setProductName(productToEdit.productName);
        setProductCategory(productToEdit.productCategory);
        setProductImage(productToEdit.productImage);
        setProductFreshness(productToEdit.productFreshness);
        setProductDescription(productToEdit.productDescription);
        setProductPrice(productToEdit.productPrice);

        setEditId(id); // Menyimpan id produk yang sedang diedit
    };

    // Fungsi untuk mereset form setelah menambah atau mengedit data
    const resetFields = () => {
        setProductName('');
        setProductCategory('');
        setProductImage('');
        setProductFreshness('');
        setProductDescription('');
        setProductPrice('');
        setEditId(null); // Pastikan edit mode juga di-reset
    };

    // Fungsi untuk menghapus produk berdasarkan ID
    const deleteDataById = (id) => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus produk ini?');
        if (confirmDelete) {
            const updatedDataList = dataList.filter((data) => data.id !== id);
            setDataList(updatedDataList);
        }
    };

    return (
        <div>
            <Header /> {/* Memanggil Komponen Header */}

            <div className="form-container">
                <input type="text" className="custom-input" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Nama Produk" required />
                <input type="text" className="custom-input" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} placeholder="Kategori Produk" required />
                <input type="text" className="custom-input" value={productImage} onChange={(e) => setProductImage(e.target.value)} placeholder="Link Gambar Produk" required />
                <input type="text" className="custom-input" value={productFreshness} onChange={(e) => setProductFreshness(e.target.value)} placeholder="Kesehatan Produk" required />
                <input type="text" className="custom-input" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder="Deskripsi Tambahan" required />
                <input type="text" className="custom-input" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="Harga Produk" required />
            </div>

            <div className="button-x">
                <button onClick={addData}>{editId ? 'Simpan Perubahan' : 'Tambah Produk'}</button>
            </div>

            <table>
                <thead>
                    <tr className="tabel-x">
                        <th>No</th>
                        <th>Nama Produk</th>
                        <th>Kategori Produk</th>
                        <th>Kesehatan Produk</th>
                        <th>Harga</th>
                        <th>Aksi</th> {/* Kolom aksi untuk edit dan delete */}
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((data, index) => (
                        <tr key={data.id}>
                            <td>{index + 1}</td>
                            <td>{data.productName}</td>
                            <td>{data.productCategory}</td>
                            <td>{data.productFreshness}</td>
                            <td>{data.productPrice}</td>
                            <td className='button-bawah'>
                                <button onClick={() => loadEditData(data.id)}>Edit</button> {/* Tombol edit */}
                                <button onClick={() => deleteDataById(data.id)}>Delete</button> {/* Tombol delete */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Footer /> {/* Memanggil Komponen Footer */}
        </div>
    );
};

export default CreateProduct;
