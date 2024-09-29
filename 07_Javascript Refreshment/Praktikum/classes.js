class Person {
    constructor(name, age, address) {
        this.name = name; // Menetapkan properti name
        this.age = age;  
        this.address= address;
    }

    introduce() {
        console.log(`Halo, nama saya ${this.name} dan saya berusia ${this.age} tahun saya tinggal di ${this.address}`);
    }
}

// Contoh penggunaan:
const person1 = new Person("Fudhail", 21, "Tadulako");
person1.introduce(); 

const person2 = new Person("IPEDEL", 20, "Tadulako");
person2.introduce(); 

const person3 = new Person("IPEDEL", 20, "Tadulako");
person3.introduce(); 
