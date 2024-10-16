import React from "react";




const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: (
        <>
          Below is an example form built entirely with Bootstrap’s form controls.
          <br />
          <br />Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
        </>
      ),
  },
};


const Article = () => {
    return (
      <div className="gambar-bs">
        <img src="/image/bos-logo.png" alt="Deskripsi Gambar" className="article-image" />
        <h1 className="tulisan-1">{article.title.en}</h1>
        <p>{article.description.en}</p>
      </div>
    );
  };


export default Article;
