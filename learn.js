// membuat variabel
let myNumber = 16;
let myString = "Hello"
let myBoolean = true
const phi = 3.14
// menampilkan informasi ke console
console.log(myNumber)
console.log(myString)
console.log(myBoolean)
console.log(phi)
// menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber)
window.alert('Angka favorit saya adalah : ' + myNumber)
window.alert(`Angka favorit saya adalah : ${myNumber}`)

let x=8;
let y=4;
console.log(x, y); // menampilkan 8, 4
console.log('x + y =', x + y); // menampilkan 12
console.log('x - y =', x - y); // menampilkan 4
console.log('x * y =', x * y); // menampilkan 32
console.log('x / y =', x / y); // menampilkan 2
console.log('x % y =', x % y); // menampilkan 0
console.log('x++ =', x++); // menampilkan 8
console.log('++x =', ++x); // menampilkan 10
console.log('x-- =', x--); // menampilkan 10
console.log('--x =', --x); // menampilkan 8

let a = 8;
let b = 4;
console.log(a, b); // menampilkan 8, 4
console.log('a > b =', a > b); // menampilkan true
console.log('a < b =', a < b); // menampilkan false
console.log('a >= b =', a >= b); // menampilkan true
console.log('a <= b =', a <= b); // menampilkan false
console.log('a == b =', a == b); // menampilkan false
console.log('a != b =', a != b); // menampilkan true
console.log('a === b =', a === b); // menampilkan false
console.log('a !== b =', a !== b); // menampilkan false

console.log('true && true =', true && true); // menampilkan true
console.log('true && false =', true && false); // menampilkan false
console.log('false && true =', false && true); // menampilkan false
console.log('false && false =', false && false); // menampilkan false
console.log('true || true =', true || true); // menampilkan true
console.log('true || false =', true || false); // menampilkan true 
console.log('false || true =', false || true); // menampilkan true 
console.log('false || false =', false || false); // menampilkan false
console.log('!true =', !true); // menampilkan false
console.log('!false =', !false); // menampilkan true

function hitungLuasPersegi(s) {
    var luas = s * s
    return luas
  }
  var hasil = hitungLuasPersegi(5)
  console.log(hasil) // menampilkan 25



function luasSegitiga(a,t) {
    var l2=(a * t) / 2
    return l2
  }
  var h2=luasSegitiga(3,4)
  console.log(h2) //menampilkan 6



function volumeBalok(p,l,t){
      var v=(p * l * t)
      return v

  }
  var h3=volumeBalok(4,6,4)
  console.log(h3) //menampilkan 96

  var buah = ["Naga", "Nanas", "Mengkudu", "Sirsak"];
console.log(buah[0]); // menampilkan Naga
console.log(buah[1]); // menampilkan Nanas
console.log(buah[2]); // menampilkan Mengkudu
console.log(buah[3]); // menampilkan Sirsak
buah[1] = "Leci"; // mengganti Nanas menjadi Leci
console.log(buah); // mengecek perubahan
buah.push("Pir"); // menambah Pir di akhir Array
console.log(buah); // mengecek perubahan
buah.pop("Pir"); // melihat dan menghapus item dari Array
console.log(buah); // mengecek perubahan
console.log('Panjang Array = ', buah.length); // menghitung panjang Array
buah.unshift("Semangka"); // menambah Semangka di awal Array
console.log(buah); // mengecek perubahan
buah.shift(); // menampilkan dan menghapus item awal dari array
console.log(buah); // mengecek perubahan
console.log(buah.sort()); // mengurutkan Array
console.log(buah.reverse()); // membalikkan urutan Array

let data_diri = {
    namaDepan : "Rifo",
    namaBelakang : "Trinanda Akbar",
    alamat : "Pekanbaru",
    insta : "@rifotrinanda9",
    pekerjaan : "Mahasiswa",
    namaLengkap : function(){
        return this.namaDepan + " " + this.namaBelakang;
    }
}

console.log(data_diri.namaDepan); // menampilkan nama depan
console.log(data_diri.namaBelakang); // menampilkan nama belakang
console.log(data_diri.alamat); // menampilkan alamat
console.log(data_diri.insta); // menampilkan insta
console.log(data_diri.pekerjaan); // menampilkan pekerjaan 
console.log(data_diri.namaLengkap()); // menampilkan nama lengkap

console.log(data_diri["namaDepan"]); // menampilkan nama depan
console.log(data_diri["namaBelakang"]); // menampilkan nama belakang
console.log(data_diri["alamat"]); // menampilkan alamat
console.log(data_diri["insta"]); // menampilkan insta
console.log(data_diri["pekerjaan"]); // menampilkan pekerjaan
console.log(data_diri["namaLengkap"]()); // menampilkan nama lengkap


console.log(0.1 + 0.2 == 0.3); // menampilkan false karena hasil penjumlahannya tidak sama
console.log(1 + "1"); // menampilkan 11 karena merupakan penggabungan angka dan string
console.log(1 - "1"); // menampilkan 0 karena operator pengurangan hanya untuk numerik, setelah itu keduanya akan diubah ke numerik
console.log(1 < 2 < 3); // menampilkan true karena perbandingannya benar
console.log(3 > 2 > 1); // menampilkan false karena perbandingannya salah
console.log(null == 0); // menampilkan false karena null tidak sama dengan 0 int
console.log(null > 0); // menampilkan false karena null=+0 sama dengan 0
console.log(null >= 0); // menampilkan true karena null > = 0