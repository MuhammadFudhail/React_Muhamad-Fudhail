import React, { useState } from 'react';

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

    const addData = () => {
        if (!productName || !productCategory || !productImage || !productFreshness || !productDescription || !productPrice) {
            alert('Semua field harus diisi!');
            return;
        }

        const newData = {
            productName,
            productCategory,
            productImage,
            productFreshness,
            productDescription,
            productPrice,
        };

        setDataList([...dataList, newData]);
        resetFields();
    };

    const resetFields = () => {
        setProductName('');
        setProductCategory('');
        setProductImage('');
        setProductFreshness('');
        setProductDescription('');
        setProductPrice('');
    };

    const deleteLast = () => {
        if (dataList.length > 0) {
            const updatedList = dataList.slice(0, -1);
            setDataList(updatedList);
        } else {
            alert('Tidak ada data untuk dihapus!');
        }
    };

    const searchData = () => {
        const nameToSearch = prompt('Masukkan nama produk yang dicari:').toLowerCase();
        const found = dataList.find(data => data.productName.toLowerCase() === nameToSearch);

        if (found) {
            alert(`Nama Produk: ${found.productName}, Kategori: ${found.productCategory}, Gambar: ${found.productImage}, Kesehatan: ${found.productFreshness}, Deskripsi: ${found.productDescription}, Harga: ${found.productPrice}`);
        } else {
            alert('Data tidak ditemukan!');
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
                <button onClick={addData}>Add data</button>
                <button onClick={deleteLast}>Delete Last</button>
                <button onClick={searchData}>Search</button>
            </div>

            <table>
                <thead>
                    <tr className="tabel-x">
                        <th>No</th>
                        <th>Nama Produk</th>
                        <th>Kategori Produk</th>
                        <th>Link Gambar Produk</th>
                        <th>Kesehatan Produk</th>
                        <th>Deskripsi Tambahan</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.productName}</td>
                            <td>{data.productCategory}</td>
                            <td>{data.productImage}</td>
                            <td>{data.productFreshness}</td>
                            <td>{data.productDescription}</td>
                            <td>{data.productPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Footer /> {/* Memanggil Komponen Footer */}
        </div>
    );
};

export default CreateProduct;
