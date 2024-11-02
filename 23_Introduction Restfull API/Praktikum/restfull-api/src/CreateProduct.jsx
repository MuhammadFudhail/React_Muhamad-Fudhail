import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
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
      <p><strong>Deskripsi:</strong> {product.additionalDescription}</p>
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
  const [additionalDescription, setadditionalDescription] = useState(''); 
  const [productPrice, setProductPrice] = useState(''); 
  const [searchQuery, setSearchQuery] = useState(''); // State untuk pencarian
  const [language, setLanguage] = useState('en'); 
  const [validations, setValidations] = useState({
    productName: true,
    productCategory: true,
    productImage: true,
    additionalDescription: true,
    productPrice: true,
  });
  const [editIndex, setEditIndex] = useState(null); 
  const [selectedProduct, setSelectedProduct] = useState(null); 

  // Fetch products from the MockAPI
  useEffect(() => {
    axios.get('https://6718b4807fc4c5ff8f4aabe4.mockapi.io/products')
      .then(response => {
        setDataList(response.data); // Set fetched products to dataList
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const addData = () => {
    const isProductNameValid = productName.length <= 25;
    const isAllFieldsFilled = productName && productCategory && productImage && additionalDescription && productPrice;
  
    setValidations({
      productName: isProductNameValid,
      productCategory: !!productCategory,
      productImage: !!productImage,
      additionalDescription: !!additionalDescription,
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
      additionalDescription,
      productPrice,
    };
  
    if (editIndex !== null) {
      const updatedList = dataList.map((data, index) =>
        index === editIndex ? newData : data
      );
      setDataList(updatedList);
      setEditIndex(null); 
    } else {
      //Fungsi kode yang menyimpan ke mockapi
      axios.post('https://6718b4807fc4c5ff8f4aabe4.mockapi.io/products', newData)
      .then(response => {
        setDataList([...dataList, response.data]);
        alert('Data berhasil disimpan!');
      })
      .catch(error => {
        console.error('There was an error saving the data!', error);
      });
  }


  resetFields();
};

const updateData = () => {
  if (editIndex !== null) {
    const updatedData = {
      productName,
      productCategory,
      productImage,
      productFreshness,
      additionalDescription,
      productPrice,
    };

    axios.put(`https://6718b4807fc4c5ff8f4aabe4.mockapi.io/products/${dataList[editIndex].id}`, updatedData)
      .then(response => {
        const updatedList = dataList.map((data, index) =>
          index === editIndex ? response.data : data
        );
        setDataList(updatedList);
        alert('Data berhasil diupdate!');
        resetFields();
        setEditIndex(null);
      })
      .catch(error => {
        console.error('There was an error updating the data!', error);
      });
  }
};

const deleteProduct = (index) => {
  const productId = dataList[index].id;

  axios.delete(`https://6718b4807fc4c5ff8f4aabe4.mockapi.io/products/${productId}`)
    .then(() => {
      const updatedList = dataList.filter((_, i) => i !== index);
      setDataList(updatedList);
      alert('Data berhasil dihapus!');
    })
    .catch(error => {
      console.error('There was an error deleting the data!', error);
    });
};


  // Fungsi untuk menghapus produk terakhir
  const deleteLast = () => {
    if (dataList.length > 0) {
      const updatedList = dataList.slice(0, dataList.length - 1);
      setDataList(updatedList);
    } else {
      alert('Tidak ada data untuk dihapus.');
    }
  };

  // Fungsi pencarian produk
  const searchData = () => {
    const filteredData = dataList.filter(data => 
      data.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setDataList(filteredData);

    if (filteredData.length === 0) {
      alert('Produk tidak ditemukan.');
    }
  };

  // Fungsi untuk mengubah bahasa
  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'id' : 'en'));
  };

  // Reset fields function
  const resetFields = () => {
    setProductName('');
    setProductCategory('');
    setProductImage('');
    setProductFreshness('');
    setAdditionalDescription('');
    setProductPrice('');
  };

  return (
    <div>
      <Header title={language === 'en' ? 'Product List Table' : 'Tabel List Produk'} /> 
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
            className={`custom-input ${!validations.additionalDescription ? 'error' : ''}`} 
            value={additionalDescription} 
            onChange={(e) => setadditionalDescription(e.target.value)} 
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
          <input 
            type="text" 
            className="custom-input" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder={language === 'en' ? "Search by Product Name" : "Cari berdasarkan Nama Produk"} 
          />
        </div>

        <div className="button-x">
          <button onClick={addData}>Add Data</button>
          <button onClick={deleteLast}>Delete Last</button>
          <button onClick={searchData}>Search</button>
          <button onClick={toggleLanguage}>{language === 'en' ? 'Switch to Indonesian' : 'Ubah ke Inggris'}</button>
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
                <td>{data.additionalDescription}</td>
                <td>{data.productPrice}</td>
                <td>
                    <center>
                 
                      <button className="edit-button" onClick={() => { setSelectedProduct(data); setEditIndex(index); }}>Edit</button>
                      <button className="delete-button" onClick={() => deleteProduct(index)}>Delete</button>
                      <button className="update-button" onClick={() => updateData(index)}>Update</button>


                    </center>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedProduct && <ProductDetails product={selectedProduct} />}
      </div>
      <Footer />
    </div>
  );
};

export default CreateProduct;
