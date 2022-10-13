// Menampilkan Bilangan Prima
function cekPrima(hasilooping) {
  for (let i = 1; i <= Math.sqrt(hasilooping); i++) {
    if (i == 1) {
      continue;
    } else if (hasilooping % i == 0) {
      return false;
    }
  }
  return true;
}

function loopingPrima(inputAngka) {
  for (let i = 1; i <= inputAngka; i++) {
    if (i == 1) {
      continue;
    } else if (cekPrima(i)) {
      console.log(i);
    }
  }
}

// loopingPrima(100);

// Menampilkan gambar piramida
function piramidaPertama(angka) {
  for (let i = 1; i <= angka; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
      bintang += "*";
    }
    console.log(bintang);
  }
}

// piramidaPertama(4);

function piramidaKedua(angka) {
  for (let i = 1; i <= angka; i++) {
    let bintang = "";
    for (let j = angka; i <= j; j--) {
      bintang += "*";
    }
    console.log(bintang);
  }
}

// piramidaKedua(4);

function piramidaKetiga(angka) {
  let bintang = "";
  for (let i = 1; i <= angka; i++) {
    for (let j = 1; j <= angka - i; j++) {
      bintang += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      bintang += "*";
    }
    bintang += "\n";
  }
  console.log(bintang);
}

// piramidaKetiga(4);

function piramidaKeempat(angka) {
  let bintang = "";
  for (let i = 0; i <= angka; i++) {
    for (let j = 0; j <= i; j++) {
      bintang += " ";
    }
    for (let k = 0; k < 2 * (angka - i) - 1; k++) {
      bintang += "*";
    }
    bintang += "\n";
  }
  console.log(bintang);
}

// piramidaKeempat(4);

// Menghitung rata-rata nilai

const data = [
  {
    nama: "Andi",
    nilai: 90,
  },
  {
    nama: "Budi",
    nilai: 89,
  },
  {
    nama: "Santi",
    nilai: 70,
  },
  {
    nama: "Andi",
    nilai: 60,
  },
];

function rataRataNilai(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].nilai;
  }
  console.log(total / data.length);
}

// rataRataNilai(data);
