fetch('db.json')
  .then(response => response.json())
  .then(films => {
    renderfilmsDetails(films[0]);
    accessMovieMenu(films);
  });

function renderfilmsDetails(film) {
    const availableTickets = film.capacity - film.tickets_sold;

    document.getElementById('movieTitle').textContent = `Title: ${film.title}`;
    document.getElementById('movieRuntime').textContent = `Runtime: ${film.runtime} minutes`;
    document.getElementById('movieShowtime').textContent = `Showtime: ${film.showtime}`;
    document.getElementById('movieDescription').textContent = film.description;
    document.getElementById('ticketCount').textContent = `Available Tickets: ${availableTickets}`;
    document.getElementById('poster').src = film.poster;
    console.log(film.poster);
}

function accessMovieMenu(films) {
    const filmsList = document.getElementById('films');
    filmsList.innerHTML = '';

    films.forEach(film => {
        const filmItem = document.createElement('li');
        filmItem.textContent = film.title;
        filmItem.classList.add('film', 'item');
        filmItem.addEventListener('click', () => renderfilmsDetails(film));
        filmsList.appendChild(filmItem);
    });
}

document.getElementById('buyTicket').addEventListener('click', () => {
    let availableTickets = parseInt(document.getElementById('ticketCount').textContent.replace('Available Tickets: ', ''));
    if (availableTickets > 0) {
        availableTickets -= 1;
        document.getElementById('ticketCount').textContent = `Available Tickets: ${availableTickets}`;
    } else {
        document.getElementById('buyTicket').disabled = true;
        document.getElementById('buyTicket').textContent = 'Sold Out';
    }
});
