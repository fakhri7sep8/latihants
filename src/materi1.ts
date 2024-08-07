let age : number = 123
let nama : string = '123'


let siswa : {
    nama : string;
    umur : number;
    isPelajar : boolean;
    alamat? : string;
} = {
    nama : 'ramadhan',
    umur : 10,
    isPelajar : false,
    alamat : 'bekasi',
};

siswa = {
    nama : 'ramadhan sananta',
    umur : 20,
    isPelajar : true,
};

//interface untuk mendenifisikan tipe data object

interface Produck {
    id :number
    name :string
    price :number
    note? :string
    isPremium :boolean
}

const Produck1 : Produck = { 
    id :1,
    name :"hp",
    price :200000,
    isPremium :false,
}

const Produck2 : Produck = { 
    id :2,
    name :"tv",
    price :900000,
    isPremium :false,
    note  : "bagus",
}

//nested object

interface ProdukDetail {
    manufacture : string,
    year : number
}

interface ProdukItem {
    id : number
    produkName :string
    price :number
    detail :ProdukDetail
}

const produk3 : ProdukItem = {
    id : 1,
    produkName : "mobil",
    price : 2000000,
    detail : {
        year : 2024,
        manufacture : "toyota"
    }
}

console.log('pabrik',produk3.detail.manufacture);

//array

const a = [1,2,3,4,5]

//square bracket

let b : number []
b = [1,2,3,4,5]

let c : string []
c = ["b","c","d"]

let d : (string | number | boolean)[]
d = [1,"1",2,false]

let e : {nama :string; umur:number }[] = [
    { nama : "rafo", umur : 98},
    { nama : "rafo", umur : 98},
]


function rumusPersegiPanjang(panjang:number , lebar:number) {
    const luas = panjang + lebar
    return luas
}

const persegi1 = rumusPersegiPanjang(10,5)
const persegi2 = rumusPersegiPanjang(9,5)
const persegi3 = rumusPersegiPanjang(8,5)

console.log(persegi1);
console.log(persegi2);
console.log(persegi3);

//tugas function ts

function penjumlahan(p:number,l:number,t =0) {
    const penjumlahan = p + l + t
    return penjumlahan
}


const hasil1 = penjumlahan(4,5)
const hasil2 = penjumlahan(4,5,6)

console.log(hasil1,hasil2);


function volumeBalok(p:number,l:number,t:number) {
    const vlb = p * l * t
    return vlb
}


const volumeBalok1 = volumeBalok(4,5,6)
const volumeBalok2 = volumeBalok(16,1002,10)
const volumeBalok3 = volumeBalok(1,2,3)

console.log(volumeBalok1);
console.log(volumeBalok2);
console.log(volumeBalok3);


// object function

function pembagian({a , b , c =1 } : {a :number; b:number; c?:number}) {
    const hasil = (a / b) *c;
    return hasil;
}

const kali1 = pembagian({ a:5 , b:10 , c:2});
const kali2 = pembagian({ b:5 , a:10 })// gak harus urut a , b , c 

console.log("kali1",kali1);
console.log("kali2",kali2);

//function no return
function satu({a,b} : SatuInterface) : void { //void untuk mematikan return
    console.log(a,b);
}

function dua({a,b} : SatuInterface) : number {
    return 100
}

function tiga({a,b} : SatuInterface) : boolean {
    return true
}

function empat({a,b} : SatuInterface) : string {
    return "joss"
}

//function pake interface

interface ResponseAPI {
    msg : string,
    status :string
}

interface SatuInterface {
    a : number,
    b : string
}

function contoh({ a , b } : SatuInterface) : ResponseAPI {
    return {
        msg :"berhasil",
        status :"ok"
    }
}

function contoh1() : ResponseAPI {
    return {
        msg : "ok",
        status : "joss",
    }
}

satu({ a : 1 , b : "2" })


function containsNumber(arr: number[], num: number): boolean {
    return arr.includes(num);
}

// Contoh penggunaan:
const numbers = [1, 2, 3, 4, 5];
console.log(containsNumber(numbers, 3)); // Output: true
console.log(containsNumber(numbers, 6)); // Output: false
