document.addEventListener('DOMContentLoaded', async () => {
  const movieContainer = document.getElementById('movie-container');

  try {
    const response = await fetch('/api/news');
    const movieData = await response.json();


    
    // Пройдемся по массиву movieData и обновим HTML
    movieData.forEach((movie) => {
      const moviePoster = document.createElement('img');
      moviePoster.src = movie.poster;
      movieContainer.appendChild(moviePoster);

      const movieDescription = document.createElement('div');
      movieDescription.textContent = movie.description;
      movieContainer.appendChild(movieDescription);
    });
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка при получении данных:', error);
  }
});
