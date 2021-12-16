const movies = [
  {
    title: "Spider-Man : No Way Home",
    price: 30000,
    availableSeat: 30,
    bookedSeat: 0,
    img: "https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg",
    jamTayang: ["12:00", "13:00", "15:00", "17:00", "21:00"],
  },
  {
    title: "Eternals",
    price: 30000,
    availableSeat: 30,
    bookedSeat: 0,
    img: "https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
    jamTayang: ["12:00", "13:00", "15:00", "17:00", "16:00"],
  },
  {
    title: "Yuni",
    price: 25000,
    availableSeat: 30,
    bookedSeat: 0,
    img: "https://m.media-amazon.com/images/M/MV5BYmMzMTZjODEtYWQyYi00MGZmLTg4NTUtYjJkMjRiMTI4MDViXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    jamTayang: ["12:00", "13:00", "15:00", "16:00", "17:00"],
  },
  {
    title: "Seperti Dendam, Rindu Harus Dibayar Tuntas",
    price: 25000,
    availableSeat: 30,
    bookedSeat: 0,
    img: "https://upload.wikimedia.org/wikipedia/id/4/43/Poster_teatrikal_film_Seperti_Dendam%2C_Rindu_Harus_Dibayar_Tuntas_2021.jpg",
    jamTayang: ["12:00", "13:00", "15:00", "17:00", "24:00"],
  },
];

function listMovie(movies) {
  const listMovies = document.getElementById("list-movie");
  listMovies.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    listMovies.innerHTML += `<div class="col">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <img class="card-img-top" src="${movies[i].img}" alt="${movies[i].title}">
        <h5 class="card-title">${movies[i].title}</h5>
        <p class="card-text">Harga: ${movies[i].price}</p>
        <p class="card-text">Jam tayang: ${movies[i].jamTayang}</p>
      </div>
    </div>
  </div>`;
  }
}

listMovie(movies);

function namaFilm(movies) {
  const namaFilm = document.getElementById("namaFilm");
  const jamTayang = document.getElementById("jamTayang");
  for (let i = 0; i < movies.length; i++) {
    namaFilm.innerHTML += `<option>${movies[i].title}</option>`;
  }
}
namaFilm(movies);

function getNama(value) {
  let jam = [];
  const jamTayang = document.getElementById("jamTayang");
  // console.log(value);

  for (let i = 0; i < movies.length; i++) {
    if (value === movies[i].title) {
      jam = movies[i].jamTayang;
      break;
    }
  }
  jamTayang.innerHTML = "";
  for (let j = 0; j < jam.length; j++) {
    jamTayang.innerHTML += `<option>${jam[j]}</option>`;
  }
}
