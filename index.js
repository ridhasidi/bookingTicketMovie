const movies = [
  {
    title: "Spiderman",
    price: 30000,
    availableSeat: 10,
    bookedSeat: 0,
    img: "https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg",
    jamTayang: ["12:00", "13:00", "15:00", "17:00", "21:00"],
  },
  {
    title: "Eternals",
    price: 30000,
    availableSeat: 10,
    bookedSeat: 0,
    img: "https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg",
    jamTayang: ["12:00", "13:00", "15:00", "17:00", "16:00"],
  },
  {
    title: "Yuni",
    price: 30000,
    availableSeat: 10,
    bookedSeat: 0,
    img: "https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg",
    jamTayang: ["12:00", "13:00", "15:00", "16:00", "17:00"],
  },
  {
    title: "Seperti dendam",
    price: 30000,
    availableSeat: 10,
    bookedSeat: 0,
    img: "https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg",
    jamTayang: ["12:00", "13:00", "15:00", "17:00", "24:00"],
  },
];

function listMovie(movies) {
  const listMovies = document.getElementById("list-movie");
  // console.log(listMovies);
  for (let i = 0; i < movies.length; i++) {
    listMovies.innerHTML += `<div class="col">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <img class="card-img-top" src="${movies[i].img}" alt="${movies[i].title}">
        <h5 class="card-title">${movies[i].title}</h5>
        <p class="card-text">Harga</p>
      </div>
    </div>
  </div>`;
  }
}

listMovie(movies);

function namaFilm(movies) {
  const namaFilm = document.getElementById("namaFilm");

  for (let i = 0; i < movies.length; i++) {
    namaFilm.innerHTML += `<option value="${movies[i].title}">${movies[i].title}</option>`;

    console.log(namaFilm.value, movies[i].title);
    // if (namaFilm.value === movies[i].title) {
    //   for (let j = 0; j < movies[i].jamTayang.length; j++) {
    //     jamTayang.innerHTML += `<option>${movies[i].jamTayang[j]}</option>`;
    //   }
    // }
  }
}
namaFilm(movies);

function kirim(event) {
  event.preventDefault()
  let jam = document.getElementById("jamTayang").value
  let film = document.getElementById("namaFilm").value
  let jumlah = document.getElementById("jumlahTiket").value
  console.log(jam, film, jumlah);

  let message = document.getElementById('msg-container')
  let cancelButton = document.getElementById('cancel-btn')
  console.log(cancelButton);

  for (let i = 0; i < movies.length; i++) {
    let totalPrice = 0
    let availableSeat = movies[i].availableSeat
    let bookedseat = movies[i].bookedSeat
    if (film === movies[i].title) {
      if (jumlah > movies[i].availableSeat) {
        message.innerHTML = `<p id="msg-txt">Maaf, jumlah kursi kurang</p>`

      }
      else {
        totalPrice = jumlah * movies[i].price
        availableSeat -= jumlah
        message.innerHTML = `<p id="msg-txt">Anda memesan film ${movies[i].title} untuk ${jumlah} orang, dan harganya adalah Rp.${totalPrice} pada pukul ${jam}, sisa kursi ${availableSeat} buah.</p>`

        bookedseat += jumlah
      }
    }
  }
  cancelButton.classList.remove('cancel-btn')
}

function cancelPemesanan() {
  let message = document.getElementById('msg-txt')
  message.remove()
  let cancelButton = document.getElementById('cancel-btn')
  cancelButton.classList.add('cancel-btn')
}

function getNama(value) {
  let jam = [];
  const jamTayang = document.getElementById("jamTayang");
  console.log(value);

  for (let i = 0; i < movies.length; i++) {
    console.log(value, movies[i].title);
    if (value === movies[i].title) {
      jam = movies[i].jamTayang;
      console.log(true, jam);
      break;
    }
  }
  jamTayang.innerHTML = "";
  for (let j = 0; j < jam.length; j++) {
    jamTayang.innerHTML += `<option>${jam[j]}</option>`;
  }
}