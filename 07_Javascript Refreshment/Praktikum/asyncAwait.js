async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { message: "Data berhasil diambil!" }; 
            resolve(data);
        }, 2000); 
    });
}

// Contoh penggunaan:
fetchData().then((result) => {
    console.log(result.message); 
});
