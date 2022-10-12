// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let c = 1; c <= 10; c++) {
//   console.log(c);
//   if (c % 3 == 0) {
//     console.log(".");
//   }
// }

// const dataDiri = {
//   nama: "Yanuar Faturahman",
//   alamat: "Purbalingga",
//   umur: umur(),
// };

// function umur() {
//   return 2022 - 2002;
// }

// function greet() {
//   console.log(
//     `Selamat datang ${dataDiri.nama}, Saya berumur ${dataDiri.umur} tahun`
//   );
// }

// greet();
function bintang(angka) {
  for (let i = 1; i <= angka; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
      bintang += "*";
    }
    console.log(bintang);
  }
}

bintang(3);
