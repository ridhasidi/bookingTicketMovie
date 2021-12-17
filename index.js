const movies = [
  {
    title: "Spider-Man: No Way Home",
    price: 30000,
    release: "2021, Tom Holland, Zendaya",
    genre: "Action, Adventure",
    duration: "148min",
    img: "https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg",
    jadwal: [
      {
        jam: "6.00",
        availableSeat: 10,
      },
      {
        jam: "10.00",
        availableSeat: 10,
      },
      {
        jam: "15.00",
        availableSeat: 10,
      },
      {
        jam: "17.00",
        availableSeat: 10,
      },
      {
        jam: "20.00",
        availableSeat: 10,
      },
    ],
  },
  {
    title: "Army of Thieves",
    price: 30000,
    release: "2021, Matthias Schweighöfer",
    genre: "Action, Crime",
    duration: "127min",
    availableSeat: 10,
    bookedSeat: 0,
    img: "https://m.media-amazon.com/images/M/MV5BNzQxYzNjMGItNzVlMS00NjBhLWI4NTItMmVkZTI0NGE3ZDI2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    jadwal: [
      {
        jam: "6.00",
        availableSeat: 10,
      },
      {
        jam: "10.00",
        availableSeat: 10,
      },
      {
        jam: "15.00",
        availableSeat: 10,
      },
      {
        jam: "17.00",
        availableSeat: 10,
      },
      {
        jam: "20.00",
        availableSeat: 10,
      },
    ],
  },
  {
    title: "Resident Evil: Welcome to Raccoon City",
    price: 30000,
    release: "2021, Kaya Scodelario",
    genre: "Action, Horror",
    duration: "107min",
    availableSeat: 10,
    bookedSeat: 0,
    img: "https://www.staynerd.com/wp-content/uploads/2021/10/resident-evil-film-poster-00-819x1024.jpg",
    jadwal: [
      {
        jam: "6.00",
        availableSeat: 10,
      },
      {
        jam: "10.00",
        availableSeat: 10,
      },
      {
        jam: "15.00",
        availableSeat: 10,
      },
      {
        jam: "17.00",
        availableSeat: 10,
      },
      {
        jam: "20.00",
        availableSeat: 10,
      },
    ],
  },
  {
    title: "Red Notice",
    price: 30000,
    release: "2021, Ryan Reynolds, Gal Gadot",
    genre: "Action, Comedy",
    availableSeat: 10,
    duration: "118min",
    bookedSeat: 0,
    img: "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    jadwal: [
      {
        jam: "6.00",
        availableSeat: 10,
      },
      {
        jam: "10.00",
        availableSeat: 10,
      },
      {
        jam: "15.00",
        availableSeat: 10,
      },
      {
        jam: "17.00",
        availableSeat: 10,
      },
      {
        jam: "20.00",
        availableSeat: 10,
      },
    ],
  },
];

let history = [];

function listMovie(movies) {
  const listMovies = document.getElementById("list-movie");
  // console.log(listMovies);
  for (let i = 0; i < movies.length; i++) {
    listMovies.innerHTML += `<div class="col">
    <div class="card" style="background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) ), url('${movies[i].img}'); display: flex; background-position: center; background-size: cover; display: flex;
    justify-content:flex-end;">
      <div style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ); padding: 10px; width: 263.75px; border-bottom-right-radius: 20px 20px; border-bottom-left-radius: 20px 20px; border-top-left-radius: 20px 20px; border-top-right-radius: 20px 20px;">
        <h5 class="card-title">${movies[i].title}</h5>
        <p class="card-text">${movies[i].release}</p>
        <p class="card-text">${movies[i].genre} <span id="duration">${movies[i].duration}</span></p>
        <a href="#" class="btn btn-primary">Rp ${movies[i].price}</a> 
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
  event.preventDefault();
  let jam = document.getElementById("jamTayang").value;
  let film = document.getElementById("namaFilm").value;
  let jumlah = document.getElementById("jumlahTiket").value;
  console.log(jam, film, jumlah);

  let message = document.getElementById("msg-container");
  let cancelButton = document.getElementById("cancel-btn");
  console.log(cancelButton);

  for (let i = 0; i < movies.length; i++) {
    let totalPrice = 0;

    // let availableSeat = movies[i].availableSeat;
    // if (film === movies[i].title) {
    //   if (jumlah > movies[i].availableSeat) {
    //     message.innerHTML = `<p id="msg-txt">Maaf, jumlah kursi kurang</p>`;
    //     cancelButton.classList.remove("cancel-btn");
    //   } else {
    //     totalPrice = jumlah * movies[i].price;
    //     movies[i].availableSeat -= jumlah
    //     console.log(movies[i]);
    //     message.innerHTML = `<p id="msg-txt">Anda memesan film ${movies[i].title} untuk ${jumlah} orang, dan harganya adalah Rp.${totalPrice} pada pukul ${jam}, sisa kursi ${movies[i].availableSeat} buah.</p>`;

    //     movies[i].bookedSeat += jumlah;
    //     cancelButton.classList.remove("cancel-btn");

    //     history.push({ // Nambah disini
    //       nama: film,
    //       jamNonton: jam,
    //       tiket: jumlah
    //     })
    //   }
    // }

    // Ini kode gantinya
    // let jadwal = movies[i].jadwal
    for (let j = 0; j < movies[i].jadwal.length; j++) {
      // console.log(movies[i].jadwal, movies[i].title, film);
      if (film === movies[i].title) {
        if (jam === movies[i].jadwal[j].jam) {
          console.log(movies[i].jadwal[j].jam);
          if (jumlah > movies[i].jadwal[j].availableSeat) {
            message.innerHTML = `<p id="msg-txt">Maaf, jumlah kursi kurang</p>`;
            cancelButton.classList.remove("cancel-btn");
          } else {
            totalPrice = jumlah * movies[i].price;
            movies[i].jadwal[j].availableSeat -= jumlah;
            message.innerHTML = `<p id="msg-txt">Anda memesan film ${movies[i].title} untuk ${jumlah} orang dengan total harga Rp${totalPrice} pada pukul ${jam}, sisa kursi ${movies[i].jadwal[j].availableSeat} buah.</p>`;
            movies[i].bookedSeat += jumlah;
            cancelButton.classList.remove("cancel-btn");

            history.push({
              // Nambah disini
              nama: film,
              jamNonton: jam,
              tiket: jumlah,
            });
          }
        }
      }
    }
  }
}

function cancelPemesanan() {
  let message = document.getElementById("msg-txt");
  message.remove();
  let cancelButton = document.getElementById("cancel-btn");
  cancelButton.classList.add("cancel-btn");
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title === history[history.length - 1].nama) {
      for (let j = 0; j < movies[i].jadwal.length; j++) {
        if (movies[i].jadwal[j].jam === history[history.length - 1].jamNonton) {
          movies[i].jadwal[j].availableSeat += Number(history[history.length - 1].tiket);
        }
      }
    }
  }
  console.log(movies);
  history.pop();
  console.log(history);
  historyButton();
}

function getNama(value) {
  let jam = [];
  const jamTayang = document.getElementById("jamTayang");
  console.log(value);

  for (let i = 0; i < movies.length; i++) {
    // console.log(value, movies[i].title);
    // if (value === movies[i].title) {
    //   jam = movies[i].jamTayang;
    //   console.log(true, jam);
    //   break;
    // }
    for (let j = 0; j < movies[i].jadwal.length; j++) {
      // Nambah disini
      if (value === movies[i].title) {
        jam.push(movies[i].jadwal[j].jam);
        // console.log(jam);
      }
    }
  }
  jamTayang.innerHTML = "";
  for (let j = 0; j < jam.length; j++) {
    jamTayang.innerHTML += `<option>${jam[j]}</option>`;
  }
}

// Fungsi untuk melihat history
function historyButton() {
  let historyContainer = document.getElementById("history");
  historyContainer.innerHTML = "";
  for (let i = 0; i < history.length; i++) {
    historyContainer.innerHTML += `<div id="history-msg">
    <h4>Riwayat Pemesanan</h4>
    <h5>${history[i].nama}</h5>
    <p>Sejumlah: ${history[i].tiket}</p>
    <p>Pada pukul: ${history[i].jamNonton}</p>
  </div>`;
  }

  console.log(historyContainer);
}
