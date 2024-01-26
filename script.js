const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

async function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    
    try {
        const response = await fetch(url);
        const result = await response.json();
        displayResults(result);
        console.log(result); // Aqui você pode acessar o resultado da requisição
        return result; // Se desejar acessar o resultado fora dessa função
    } catch (error) {
        console.error('Erro ao fazer a solicitação à API:', error);
        // Trate o erro aqui, se necessário
    }
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase(); // Converter para minúsculas
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    console.log(searchTerm);
    requestApi(searchTerm);
})

