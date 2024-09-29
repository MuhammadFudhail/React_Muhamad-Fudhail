const calculator = {
    // Metode penjumlahan
    add: function(a, b) {
        return a + b;
    },
    
    // Metode pengurangan
    subtract: function(a, b) {
        return a - b;
    },
    
    // Metode perkalian
    multiply: function(a, b) {
        return a * b;
    },
    
    // Metode pembagian
    divide: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Tidak bisa membagi dengan 0";
        }
    }
};

// Contoh penggunaan:
console.log(calculator.add(10, 5));      
console.log(calculator.subtract(10, 5));  
console.log(calculator.multiply(10, 5));  
console.log(calculator.divide(10, 5));    
console.log(calculator.divide(10, 0));    
