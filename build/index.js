"use strict";
let age = 123;
let nama = '123';
let siswa = {
    nama: 'ramadhan',
    umur: 10,
    isPelajar: false,
    alamat: 'bekasi'
};
siswa = {
    nama: 'ramadhan sananta',
    umur: 20,
    isPelajar: true,
};
const Produck1 = {
    id: 1,
    name: "hp",
    price: 200000,
    isPremium: false,
};
const Produck2 = {
    id: 2,
    name: "tv",
    price: 900000,
    isPremium: false,
    note: "bagus",
};
const produk3 = {
    id: 1,
    produkName: "mobil",
    price: 2000000,
    detail: {
        year: 2024,
        manufacture: "toyota"
    }
};
console.log('pabrik', produk3.detail.manufacture);
