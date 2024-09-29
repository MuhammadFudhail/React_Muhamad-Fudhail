function findLargest(arr) {
    let largest = arr[0]; 

    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > largest) { 
            largest = arr[i];   
        }
    }

    return largest; 
}

// Contoh penggunaan:
const numbers = [10, 25, 5, 30, 45, 12, 60];
console.log(findLargest(numbers)); 
