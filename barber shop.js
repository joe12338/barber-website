// ============================
// BOOKING FORM
// ============================

const form = document.getElementById("bookingForm");

const message = document.getElementById("message");

const dateInput = document.getElementById("date");


// Don't allow dates in the past

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

const todayString = `${year}-${month}-${day}`;

dateInput.min = todayString;


// When the customer submits the form

form.addEventListener("submit", function(event) {

    // Stop the page from refreshing

    event.preventDefault();


    // Get information from the form

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const service = document.getElementById("service").value;

    const date = document.getElementById("date").value;

    const time = document.getElementById("time").value;


    // Display confirmation

    message.textContent =
        `Thanks ${name}! Your ${service} appointment request for ${date} at ${time} has been received.`;


    message.style.color = "#315b3c";


    // Print the information in the browser console
    // Useful while developing

    console.log("NEW APPOINTMENT");

    console.log("Name:", name);

    console.log("Phone:", phone);

    console.log("Service:", service);

    console.log("Date:", date);

    console.log("Time:", time);


    // Clear the form

    form.reset();

    dateInput.min = todayString;

});