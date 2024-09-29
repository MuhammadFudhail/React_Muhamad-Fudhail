function swapValues(a, b, ) {
    let temp = a; 
    a = b;  
    b = temp; 
    console.log("Nilai setelah swap: a =", a, "b =", b,);
}

swapValues(10, 20,);

/*
PENJELASAN
let: Ideal untuk variabel yang nilainya berubah, seperti variabel sementara temp.
let memiliki cakupan block (block-scoped), yang lebih aman dibandingkan var.

var: var memiliki cakupan function (function-scoped) dan terkadang menyebabkan bug jika digunakan secara tidak hati-hati karena bisa diakses di luar block.

const: Digunakan untuk variabel yang tidak berubah. 
Pada kasus ini, kita tidak bisa menggunakan const untuk temp karena nilainya akan berubah. 
Namun, kita bisa menggunakan const untuk parameter jika kita ingin memastikan parameter tidak diubah di dalam fungsi, tetapi ini jarang digunakan karena kita biasanya ingin mengubah parameter dalam fungsi seperti ini.

KESIMPULAN
Jadi, penggunaan let adalah yang paling tepat kita gunakaan pada study case ini 
*/