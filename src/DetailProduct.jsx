import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetail = ({ product }) => {
    return (
      <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-lg text-gray-700">Harga: Rp {product.price.toLocaleString()}</p>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </div>
    );
  };
  
  const App = () => {
    // Contoh data produk sementara (ganti dengan data dari temanmu)
    const [productData, setProductData] = useState({
      name: "Nama Produk",
      price: 150000,
      description: "Deskripsi produk yang menarik dan informatif."
    });
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <ProductDetail product={productData} />
      </div>
    );
  };
  
  export default App;