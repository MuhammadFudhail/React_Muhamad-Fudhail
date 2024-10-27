import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateProduct from './CreateProduct';

describe('CreateProduct Component', () => {
  test('should accept input text for Product Name', () => {
    render(<CreateProduct />);
    
    const productNameInput = screen.getByPlaceholderText(/Product Name/i); // Mengambil input dengan placeholder
    fireEvent.change(productNameInput, { target: { value: 'Produk Uji' } }); // Mengubah nilai input

    expect(productNameInput.value).toBe('Produk Uji'); // Memastikan nilai input sesuai
  });

  test('should save and display form selections correctly', () => {
    render(<CreateProduct />);

    const productNameInput = screen.getByPlaceholderText(/Product Name/i);
    const productCategoryInput = screen.getByPlaceholderText(/Product Category/i);
    const productImageInput = screen.getByPlaceholderText(/Product Image Link/i);
    const productDescriptionInput = screen.getByPlaceholderText(/Additional Description/i);
    const productPriceInput = screen.getByPlaceholderText(/Product Price/i);

    // Mengisi semua field input
    fireEvent.change(productNameInput, { target: { value: 'Produk Uji' } });
    fireEvent.change(productCategoryInput, { target: { value: 'Kategori Uji' } });
    fireEvent.change(productImageInput, { target: { value: 'http://example.com/image.jpg' } });
    fireEvent.change(productDescriptionInput, { target: { value: 'Deskripsi Uji' } });
    fireEvent.change(productPriceInput, { target: { value: '100000' } });

    // Menambahkan data
    const addDataButton = screen.getByText(/Add Data/i);
    fireEvent.click(addDataButton);

    // Memastikan data ditampilkan di tabel
    const row = screen.getByText(/Produk Uji/i);
    expect(row).toBeInTheDocument(); // Memastikan baris data muncul di tabel
  });
});
