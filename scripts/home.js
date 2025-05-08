// Function to toggle the dropdown menu visibility
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function (e) {
    const menu = document.getElementById("dropdownMenu");
    const button = document.querySelector(".profile-btn");
    if (!button.contains(e.target)) {
        menu.classList.remove("show");
    }
});

const watchMovies = [
    { title: "Movie 1", image: "images/banner-movie/Type=1.png" },
    { title: "Movie 2", image: "images/banner-movie/Type=2.png" },
    { title: "Movie 3", image: "images/banner-movie/Type=3.png" },
    { title: "Movie 4", image: "images/banner-movie/Type=4.png" },
    { title: "Movie 5", image: "images/banner-movie/Type=5.png" },
    { title: "Movie 6", image: "images/banner-movie/Type=6.png" },
    { title: "Movie 7", image: "images/banner-movie/Type=7.png" },
    { title: "Movie 8", image: "images/banner-movie/Type=8.png" },
    { title: "Movie 9", image: "images/banner-movie/Type=9.png" },
    { title: "Movie 10", image: "images/banner-movie/Type=10.png" },
    { title: "Movie 11", image: "images/banner-movie/Type=11.png" },
    { title: "Movie 12", image: "images/banner-movie/Type=12.png" },
    { title: "Movie 13", image: "images/banner-movie/Type=13.png" },
    { title: "Movie 14", image: "images/banner-movie/Type=14.png" },
    { title: "Movie 15", image: "images/banner-movie/Type=15.png" },
    { title: "Movie 16", image: "images/banner-movie/Type=16.png" },
    { title: "Movie 17", image: "images/banner-movie/Type=17.png" },
    { title: "Movie 18", image: "images/banner-movie/Type=18.png" },
    { title: "Movie 19", image: "images/banner-movie/Type=19.png" },
    { title: "Movie 20", image: "images/banner-movie/Type=20.png" },
];
const topRatingMovies = [
    { image: "images/movie-list/Number=1.png" },
    { image: "images/movie-list/Number=2.png" },
    { image: "images/movie-list/Number=3.png" },
    { image: "images/movie-list/Number=4.png" },
    { image: "images/movie-list/Number=5.png" },
    { image: "images/movie-list/Number=6.png" },
    { image: "images/movie-list/Number=7.png" },
    { image: "images/movie-list/Number=8.png" },
    { image: "images/movie-list/Number=9.png" },
    { image: "images/movie-list/Number=10.png" },

];

const trendingMovies = [
    { image: "images/movie-list/Number=8.png" },
    { image: "images/movie-list/Number=9.png" },
    { image: "images/movie-list/Number=10.png" },
    { image: "images/movie-list/Number=11.png" },
    { image: "images/movie-list/Number=12.png" },
    { image: "images/movie-list/Number=13.png" },
    { image: "images/movie-list/Number=14.png" },
    { image: "images/movie-list/Number=15.png" },
    { image: "images/movie-list/Number=16.png" },
    { image: "images/movie-list/Number=17.png" },
    { image: "images/movie-list/Number=18.png" },
    { image: "images/movie-list/Number=19.png" },
    { image: "images/movie-list/Number=20.png" },

];

const releaseMovies = [
    { image: "images/movie-list/Number=10.png" },
    { image: "images/movie-list/Number=11.png" },
    { image: "images/movie-list/Number=12.png" },
    { image: "images/movie-list/Number=13.png" },
    { image: "images/movie-list/Number=14.png" },
    { image: "images/movie-list/Number=15.png" },
    { image: "images/movie-list/Number=16.png" },
    { image: "images/movie-list/Number=17.png" },
    { image: "images/movie-list/Number=18.png" },
    { image: "images/movie-list/Number=19.png" },
    { image: "images/movie-list/Number=20.png" },

];

// Fungsi untuk membuat carousel
function createCarousel(containerId, movies) {
    const carousel = document.getElementById(containerId);
    
    // Menambahkan gambar ke dalam carousel
    movies.forEach((movie) => {
        const img = document.createElement("img");
        img.src = movie.image;
        img.className = "carousel-img";
        carousel.appendChild(img);
    });
}

// Fungsi untuk scroll carousel
function scrollCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const scrollAmount = 240; // geser sejauh lebar gambar + gap
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

// Membuat carousel untuk masing-masing kategori
createCarousel("carousel1", watchMovies);
createCarousel("carousel2", topRatingMovies);
createCarousel("carousel3", trendingMovies);
createCarousel("carousel4", releaseMovies);
