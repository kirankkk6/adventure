document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("travelDate").value;
    let seat = document.getElementById("seat").value;

    let bookingId = "BUS" + Math.floor(Math.random() * 100000);

    document.getElementById("ticket").classList.remove("hidden");

    document.getElementById("ticketDetails").innerHTML = `
        <strong>Booking ID:</strong> ${bookingId}<br>
        <strong>Passenger:</strong> ${name}<br>
        <strong>Route:</strong> ${source} → ${destination}<br>
        <strong>Date:</strong> ${date}<br>
        <strong>Seat:</strong> ${seat}
    `;
});
