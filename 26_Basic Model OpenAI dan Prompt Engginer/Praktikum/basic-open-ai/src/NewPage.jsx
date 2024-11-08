import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './Chat.css';

function GoogleGenerativeAIChat() {
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("default response");

  const apiKey = "AIzaSyCuBOYHqYNPqE-11q9Srxxf9JsQNOVdyKw";

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });

  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 1,
  };

  // Fungsi untuk mengubah input user
  function handleChange(e) {
    setInputUser(e.target.value);
  }

  // Fungsi untuk menangani pengiriman prompt
  async function handlePromptSubmit() {
    console.log("input user =", inputUser);

    // Daftar kata kunci terkait kesehatan
    const keywords = ["sakit", "penyakit", "demam", "kesehatan", "flu", "obat", "gejala"];

    // Cek apakah input pengguna mengandung kata kunci terkait kesehatan
    const isHealthQuestion = keywords.some(keyword => inputUser.toLowerCase().includes(keyword));

    // Jika pertanyaan tidak terkait kesehatan, beri tahu pengguna
    if (!isHealthQuestion) {
      setResponse("Harap ajukan pertanyaan tentang kesehatan atau penyakit.");
      return;
    }

    try {
      // Membuat sesi percakapan baru
      const chatSession = model.startChat({
        generationConfig,
        history: []
      });

      // Menambahkan prompt yang hanya berfokus pada kesehatan dan penyakit
      let prompt = `Anda adalah asisten kesehatan yang dapat membantu menjawab pertanyaan tentang penyakit dan kesehatan. Pertanyaan pengguna: "${inputUser}"`;

      // Mengirim pesan dan menerima respons dari model
      const result = await chatSession.sendMessage(prompt);
      console.log(result.response.text());

      // Menyimpan respons dari model ke state
      setResponse(result.response.text());
    } catch (error) {
      console.error("Error:", error);
      setResponse("Terjadi kesalahan dalam menghubungi API.");
    }
  }

  return (
    <div className='container'>
      <h1>Semoga Cepat Sembuh</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Tanyakan tentang penyakit atau kesehatan..."
      />
      <button onClick={handlePromptSubmit} type="button">Submit</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default GoogleGenerativeAIChat;
