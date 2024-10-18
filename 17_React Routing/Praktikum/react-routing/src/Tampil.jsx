const ProductDetailsPage = ({ product }) => {
  return (
    <div className="product-detail">
      <h3>Detail Produk</h3>
      <p><strong>Nama Produk:</strong> {product.productName}</p>
      <p><strong>Kategori Produk:</strong> {product.productCategory}</p>
      <p><strong>Link Gambar:</strong> {product.productImage}</p>
      <p><strong>Kesehatan Produk:</strong> {product.productFreshness}</p>
      <p><strong>Deskripsi:</strong> {product.productDescription}</p>
      <p><strong>Harga:</strong> {product.productPrice}</p>
    </div>
  );
};
export default ProductDetailsPage;