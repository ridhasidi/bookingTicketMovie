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
    namaFilm.innerHTML += `<option>${movies[i].title}</option>`;

    console.log(namaFilm.value, movies[i].title);
    // if (namaFilm.value === movies[i].title) {
    //   for (let j = 0; j < movies[i].jamTayang.length; j++) {
    //     jamTayang.innerHTML += `<option>${movies[i].jamTayang[j]}</option>`;
    //   }
    // }
  }
}
namaFilm(movies);

let jam = []
function getNama(value) {
  const jamTayang = document.getElementById("jamTayang");
  console.log(value);

  for (let i = 0; i < movies.length; i++) {
    console.log(value, movies[i].title);
    if (value === movies[i].title) {
      jam = movies[i].jamTayang
      console.log(true, jam);
    }
  }
  for (let j = 0; j < jam.length; j++) {
    jamTayang.innerHTML += `<option>${jam[j]}</option>`
  }

  jam = []
}