import React, { useState } from "react";
import './Product.css';

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

// Komponen untuk Menampilkan Detail Produk
const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h3>Detail Produk</h3>
      <p><strong>Nama Produk:</strong> {product.productName}</p>
      <p><strong>Kategori:</strong> {product.productCategory}</p>
      <p><strong>Link Gambar:</strong> {product.productImage}</p>
      <p><strong>Kesehatan:</strong> {product.productFreshness}</p>
      <p><strong>Deskripsi:</strong> {product.productDescription}</p>
      <p><strong>Harga:</strong> {product.productPrice}</p>
    </div>
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
  const [language, setLanguage] = useState('en'); 
  const [validations, setValidations] = useState({
    productName: true,
    productCategory: true,
    productImage: true,
    productDescription: true,
    productPrice: true,
  });
  const [editIndex, setEditIndex] = useState(null); 
  const [selectedProduct, setSelectedProduct] = useState(null); 

  // Fungsi untuk menambahkan atau mengedit data
  const addData = () => {
    const isProductNameValid = productName.length <= 25;
    const isAllFieldsFilled = productName && productCategory && productImage && productDescription && productPrice;

    setValidations({
      productName: isProductNameValid,
      productCategory: !!productCategory,
      productImage: !!productImage,
      productDescription: !!productDescription,
      productPrice: !!productPrice,
    });

    if (!isProductNameValid) {
      alert('Product Name must not exceed 25 characters.');
      return;
    }

    if (!isAllFieldsFilled) {
      alert('Please fill in all required fields.');
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

    if (editIndex !== null) {
      const updatedList = dataList.map((data, index) =>
        index === editIndex ? newData : data
      );
      setDataList(updatedList);
      setEditIndex(null); 
    } else {
      setDataList([...dataList, newData]); 
    }

    resetFields(); 
  };

  // Fungsi untuk me-reset semua input
  const resetFields = () => {
    setProductName('');
    setProductCategory('');
    setProductImage('');
    setProductFreshness('');
    setProductDescription('');
    setProductPrice('');
    setValidations({
      productName: true,
      productCategory: true,
      productImage: true,
      productDescription: true,
      productPrice: true,
    });
    setSelectedProduct(null); // Reset detail produk yang dipilih
  };

  // Fungsi untuk menghapus data terakhir
  const deleteLast = () => {
    if (dataList.length > 0) {
      const updatedList = dataList.slice(0, -1);
      setDataList(updatedList);
    } else {
      alert('Tidak ada data untuk dihapus!');
    }
  };

  // Fungsi untuk mencari data produk
  const searchData = () => {
    const nameToSearch = prompt('Masukkan nama produk yang dicari:').toLowerCase();
    const found = dataList.find(data => data.productName.toLowerCase() === nameToSearch);

    if (found) {
      alert(`Nama Produk: ${found.productName}, Kategori: ${found.productCategory}, Gambar: ${found.productImage}, Kesehatan: ${found.productFreshness}, Deskripsi: ${found.productDescription}, Harga: ${found.productPrice}`);
    } else {
      alert('Data tidak ditemukan!');
    }
  };

  // Fungsi untuk mengedit data produk
  const editData = (index) => {
    const dataToEdit = dataList[index];
    setProductName(dataToEdit.productName);
    setProductCategory(dataToEdit.productCategory);
    setProductImage(dataToEdit.productImage);
    setProductFreshness(dataToEdit.productFreshness);
    setProductDescription(dataToEdit.productDescription);
    setProductPrice(dataToEdit.productPrice);
    setEditIndex(index);
    setSelectedProduct(dataToEdit); // Set produk yang diedit
  };

  // Fungsi untuk mengganti bahasa
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const titleText = language === 'en' ? 'Product List Table' : 'Tabel List Produk';
  const buttonLabel = language === 'en' ? 'Switch to Indonesian' : 'Ubah ke Inggris';

  return (
    <div>
      <Header title={titleText} /> 
      <div className="container">
        <div className="form-container">
          <input 
            type="text" 
            className={`custom-input ${!validations.productName ? 'error' : ''}`} 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
            placeholder={language === 'en' ? "Product Name" : "Nama Produk"} 
            required 
          />
          <input 
            type="text" 
            className={`custom-input ${!validations.productCategory ? 'error' : ''}`} 
            value={productCategory} 
            onChange={(e) => setProductCategory(e.target.value)} 
            placeholder={language === 'en' ? "Product Category" : "Kategori Produk"} 
            required 
          />
          <input 
            type="text" 
            className={`custom-input ${!validations.productImage ? 'error' : ''}`} 
            value={productImage} 
            onChange={(e) => setProductImage(e.target.value)} 
            placeholder={language === 'en' ? "Product Image Link" : "Link Gambar Produk"} 
            required 
          />
          <input 
            type="text" 
            className="custom-input" 
            value={productFreshness} 
            onChange={(e) => setProductFreshness(e.target.value)} 
            placeholder={language === 'en' ? "Product Freshness" : "Kesehatan Produk"} 
          />
          <input 
            type="text" 
            className={`custom-input ${!validations.productDescription ? 'error' : ''}`} 
            value={productDescription} 
            onChange={(e) => setProductDescription(e.target.value)} 
            placeholder={language === 'en' ? "Additional Description" : "Deskripsi Tambahan"} 
            required 
          />
          <input 
            type="text" 
            className={`custom-input ${!validations.productPrice ? 'error' : ''}`} 
            value={productPrice} 
            onChange={(e) => setProductPrice(e.target.value)} 
            placeholder={language === 'en' ? "Product Price" : "Harga Produk"} 
            required 
          />
        </div>

        <div className="button-x">
          <button onClick={addData}>Add Data</button>
          <button onClick={deleteLast}>Delete Last</button>
          <button onClick={searchData}>Search</button>
          <button onClick={toggleLanguage}>{buttonLabel}</button>
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
              <th>{language === 'en' ? 'Product Price' : 'Harga Produk'}</th>
              <th>{language === 'en' ? 'Action' : 'Aksi'}</th>
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
                <td>
                  <button onClick={() => editData(index)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedProduct && <ProductDetails product={selectedProduct} />} {/* Menampilkan detail produk yang dipilih */}
      </div>
      <Footer />
    </div>
  );
};

export default CreateProduct;
