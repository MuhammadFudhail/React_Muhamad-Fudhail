import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, updateProducts, deleteLastProducts, deleteByIndex } from './redux/productSlice';
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

// Komponen Detail Produk
const ProductDetailsPage = ({ product }) => {
  return (
    <div className="product-details">
      <h3>Detail Produk</h3>
      <p><strong>Nama Produk:</strong> {product.productName}</p>
      <p><strong>Kategori:</strong> {product.productCategory}</p>
      <p><strong>Gambar:</strong> {product.productImage}</p>
      <p><strong>Kesehatan:</strong> {product.productFreshness}</p>
      <p><strong>Deskripsi:</strong> {product.productDescription}</p>
      <p><strong>Harga:</strong> {product.productPrice}</p>
    </div>
  );
};

// Komponen Utama
const CreateProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  // console.log(products)
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

  const addData = () => {
    const isProductNameValid = productName.length <= 25;
    const isProductPriceValid = !isNaN(productPrice) && productPrice.trim() !== '';
    const isAllFieldsFilled = productName && productCategory && productImage && productDescription && isProductPriceValid;

    setValidations({
      productName: isProductNameValid,
      productCategory: !!productCategory,
      productImage: !!productImage,
      productDescription: !!productDescription,
      productPrice: isProductPriceValid,
    });

    if (!isProductNameValid) {
      alert('Product Name must not exceed 25 characters.');
      return;
    }

    if (!isAllFieldsFilled) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    const newData = {
      id: Date.now() + Math.floor(Math.random() * 1), // ID lebih unik dengan timestamp dan angka acak
      productName,
      productCategory,
      productImage,
      productFreshness,
      productDescription,
      productPrice,
    };
    
    console.log("New data ID:", newData.id);
    console.log({newData})

    if (editIndex !== null) {
      try {
        dispatch(updateProducts({ index: editIndex, product: newData }));
        setEditIndex(null);
      } catch (error) {
        console.log({error})
      }
    } else {
      dispatch(addProducts(newData));
    }

    resetFields();
  };

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
  };

  const deleteLast = () => {
    if (products.length > 0) {
      dispatch(deleteLastProducts());
    } else {
      alert('Tidak ada data untuk dihapus!');
    }
  };

  const deleteProduct = (index) =>{
    dispatch(deleteByIndex({index}))
  }

  const searchData = () => {
    const nameToSearch = prompt('Masukkan nama produk yang dicari:').toLowerCase();
    const found = products.dataList.find(data => data.productName.toLowerCase() === nameToSearch);

    if (found) {
      alert(`Nama Produk: ${found.productName}, Kategori: ${found.productCategory}, Gambar: ${found.productImage}, Kesehatan: ${found.productFreshness}, Deskripsi: ${found.productDescription}, Harga: ${found.productPrice}`);
    } else {
      alert('Data tidak ditemukan!');
    }
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const editData = (index) => {
    if (!products || !products.dataList) {
      console.error('Products dataList not found');
      return;
    }

    const dataToEdit = products.dataList[index];
    console.log("ini data yang akan diedit", dataToEdit.productName)

    if (!dataToEdit) {
      console.error('Data not found at index:', index);
      return;
    }
    setProductName(dataToEdit.productName || '');
    setProductCategory(dataToEdit.productCategory || '');
    setProductImage(dataToEdit.productImage || '');
    setProductFreshness(dataToEdit.productFreshness || '');
    setProductDescription(dataToEdit.productDescription || '');
    setProductPrice(dataToEdit.productPrice || '');

    // Menyimpan index untuk referensi penyimpanan nanti
    setEditIndex(index);

    console.log("coba tes",{
      editIndex,
      productName,
      productCategory,
      productImage,
      productFreshness,
      productDescription,
      productPrice
    })
  };

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
          <input type="text" className={`custom-input ${!validations.productName ? 'error' : ''}`} value={productName} onChange={(e) => setProductName(e.target.value)} placeholder={language === 'en' ? "Product Name" : "Nama Produk"} required />
          <input type="text" className={`custom-input ${!validations.productCategory ? 'error' : ''}`} value={productCategory} onChange={(e) => setProductCategory(e.target.value)} placeholder={language === 'en' ? "Product Category" : "Kategori Produk"} required />
          <input type="text" className={`custom-input ${!validations.productImage ? 'error' : ''}`} value={productImage} onChange={(e) => setProductImage(e.target.value)} placeholder={language === 'en' ? "Product Image Link" : "Link Gambar Produk"} required />
          <input type="text" className="custom-input" value={productFreshness} onChange={(e) => setProductFreshness(e.target.value)} placeholder={language === 'en' ? "Product Freshness" : "Kesehatan Produk"} />
          <input type="text" className={`custom-input ${!validations.productDescription ? 'error' : ''}`} value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder={language === 'en' ? "Additional Description" : "Deskripsi Tambahan"} required />
          <input type="string" className={`custom-input ${!validations.productPrice ? 'error' : ''}`} value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder={language === 'en' ? "Product Price" : "Harga Produk"} required />
        </div>

        <div className="button-x">
          {/* <button onClick={addData}>Add data</button> */}
          {/* <button onClick={deleteLast}>Delete Last</button> */}
          <button onClick={searchData}>Search</button>
          <button onClick={toggleLanguage}>{buttonLabel}</button>
        </div>

        <table>
          <thead>
            <tr className="tabel-x">
              {/* <th>No</th> */}
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
            {products.dataList.map((data, index) => (
              <tr key={index}>
                {/* <td>{index + 1}</td> */}
                <td>{data.id}</td>
                <td>{data.productName}</td>
                <td>{data.productCategory}</td>
                <td>{data.productImage}</td>
                <td>{data.productFreshness}</td>
                <td>{data.productDescription}</td>
                <td>{data.productPrice}</td>
                <td className="button-table">
                  <button className="addb" onClick={() => addData(index)}>Tambah Data</button>
                  <button className="edit" onClick={() => editData(index)}>Edit</button>
                  <button className="delete" onClick={() => deleteProduct(index)}>Delete</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        {selectedProduct && <ProductDetailsPage product={selectedProduct} />}
      </div>
      <Footer />
    </div>
  );
};

export default CreateProduct;
