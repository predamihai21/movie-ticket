const seatsContainer = document.querySelector('.seats-container');
const seats = document.querySelectorAll('.seat');
const movieSelect = document.querySelector('#movie');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');

let ticketPrice = movieSelect.value;

seatsContainer.addEventListener('click', selectSeat);

function selectSeat(e) {
	if (
		e.target.classList.contains('seat') &&
		!e.target.classList.contains('occupied')
	) {
		e.target.classList.toggle('selected');
	}
	updateCountAndTotalPrice();
}

function updateCountAndTotalPrice() {
	const selectedSeats = document.querySelectorAll('.row .selected');
	countEl.innerHTML = selectedSeats.length;
	totalEl.innerHTML = selectedSeats.length * ticketPrice;
}

movieSelect.addEventListener('change', updateTicketPrice);

function updateTicketPrice() {
	ticketPrice = movieSelect.value;
	updateCountAndTotalPrice();
}
