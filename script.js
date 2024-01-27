const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");
const closeButton = document.getElementById("close-button");
const footer = document.getElementById("footer");
const search_area = document.getElementById("search-area");

async function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    displayResults(result);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Erro ao fazer a solicitação à API:", error);
  }
}

function displayResults(result) {
  resultPlaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  result.forEach((element) => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });

  resultArtist.classList.remove("hidden");
}

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultPlaylist.classList.remove("hidden");
    resultArtist.classList.add("hidden");
    return;
  }
  console.log(searchTerm);
  requestApi(searchTerm);
});

closeButton.addEventListener("click", function () {
  footer.classList.add("hidden");
});

search_area.addEventListener("click", function () {
  searchInput.focus();
});
