const apiKey = 'YOUR_TMDB_API_KEY';
const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
const filmLibrary = document.getElementById('film-library');
const loadMoreButton = document.getElementById('load-more');

let currentPage = 1;

async function fetchMovies(page) {
    const response = await fetch(`${apiUrl}&page=${page}`);
    const data = await response.json();
    return data.results;
}

function createFilmCard(movie) {
    const card = document.createElement('div');
    card.className = 'film-card';
    
    const img = document.createElement('img');
    img.src = `${imageBaseUrl}${movie.poster_path}`;
    img.alt = movie.title;
    
    const title = document.createElement('div');
    title.className = 'film-title';
    title.textContent = movie.title;
    
    card.appendChild(img);
    card.appendChild(title);
    
    return card;
}

async function loadMovies() {
    const movies = await fetchMovies(currentPage);
    movies.forEach(movie => {
        const filmCard = createFilmCard(movie);
        filmLibrary.appendChild(filmCard);
    });
}

loadMoreButton.addEventListener('click', () => {
    currentPage++;
    loadMovies();
});

loadMovies();
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};

function handleIntersect(entries) {
    if (entries[0].isIntersecting) {
        currentPage++;
        loadMovies();
    }
}

const observer = new IntersectionObserver(handleIntersect, observerOptions);
observer.observe(loadMoreButton);

// Сховати кнопку, оскільки ми використовуємо Infinity Scroll
loadMoreButton.style.display = 'none';
