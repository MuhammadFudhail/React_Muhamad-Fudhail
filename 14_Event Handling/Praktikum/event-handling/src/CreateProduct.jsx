import React, { useState } from 'react';

// Komponen Header
const Header = ({ title }) => {
    return (
        <header>
            <h2 className="tulisan">{title}</h2>
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
    const [language, setLanguage] = useState('en'); // State untuk menyimpan bahasa
    const [validations, setValidations] = useState({ // State untuk validasi
        productName: true,
        productCategory: true,
        productImage: true,
        productDescription: true,
        productPrice: true,
    });

    const addData = () => {
        const isProductNameValid = productName.length <= 25;
        const isAllFieldsFilled = productName && productCategory && productImage && productDescription && productPrice;

        setValidations({
            productName: isProductNameValid,
            productCategory: isAllFieldsFilled,
            productImage: isAllFieldsFilled,
            productDescription: isAllFieldsFilled,
            productPrice: isAllFieldsFilled,
        });

        if (!isProductNameValid) {
            alert('Last Name must not exceed 25 characters.');
            return; 
        }

        if (!isAllFieldsFilled) {
            alert('Please enter a valid product name.');
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
        setValidations({ productName: true, productCategory: true, productImage: true, productDescription: true, productPrice: true });
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

    const handleRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`Angka acak: ${randomNumber}`);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'id' : 'en'); // Toggle antara 'en' dan 'id'
    };

    const titleText = language === 'en' ? 'Product List Table' : 'Tabel List Produk';
    const buttonLabel = language === 'en' ? 'Switch to Indonesian' : 'Ubah ke Inggris';

    return (
        <div>
            <Header title={titleText} /> {/* Memanggil Komponen Header */}

            <div className="form-container">
                <input type="text" className={`custom-input ${!validations.productName ? 'error' : ''}`} value={productName} onChange={(e) => setProductName(e.target.value)} placeholder={language === 'en' ? "Product Name" : "Nama Produk"} required />
                <input type="text" className={`custom-input ${!validations.productCategory ? 'error' : ''}`} value={productCategory} onChange={(e) => setProductCategory(e.target.value)} placeholder={language === 'en' ? "Product Category" : "Kategori Produk"} required />
                <input type="text" className={`custom-input ${!validations.productImage ? 'error' : ''}`} value={productImage} onChange={(e) => setProductImage(e.target.value)} placeholder={language === 'en' ? "Product Image Link" : "Link Gambar Produk"} required />
                <input type="text" className="custom-input" value={productFreshness} onChange={(e) => setProductFreshness(e.target.value)} placeholder={language === 'en' ? "Product Freshness" : "Kesehatan Produk"} />
                <input type="text" className={`custom-input ${!validations.productDescription ? 'error' : ''}`} value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder={language === 'en' ? "Additional Description" : "Deskripsi Tambahan"} required />
                <input type="text" className={`custom-input ${!validations.productPrice ? 'error' : ''}`} value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder={language === 'en' ? "Product Price" : "Harga Produk"} required />
            </div>

            <div className="button-x">
                <button onClick={addData}>Add data</button>
                <button onClick={deleteLast}>Delete Last</button>
                <button onClick={searchData}>Search</button>
                <button onClick={handleRandomNumber}>Tampilkan Angka Acak</button>
                <button onClick={toggleLanguage}>{buttonLabel}</button> {/* Button untuk mengganti bahasa */}
            </div>

            <table>
                <thead>
                    <tr className="tabel-x">
                        <th>No</th>
                        <th>{language === 'en' ? 'Product Name' : 'Nama Produk'}</th>
                        <th>{language === 'en' ? 'Product Category' : 'Kategori Produk'}</th>
                        <th>{language === 'en' ? 'Product Image Link' : 'Link Gambar Produk'}</th>
                        <th>{language === 'en' ? 'Product Freshness' : 'Kesehatan Produk'}</th>
                        <th>{language === 'en' ? 'Additional Description' : 'Deskripsi Tambahan'}</th>
                        <th>{language === 'en' ? 'Price' : 'Harga'}</th>
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
