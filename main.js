function bookTrip() {
    let place = document.getElementById("place").value;
    let date = document.getElementById("date").value;
    let people = document.getElementById("people").value;
    let message = document.getElementById("message");

    if(place === "" || date === "" || people === ""){
        message.style.color = "red";
        message.innerHTML = "Please fill all booking details!";
    } 
    else{
        message.style.color = "green";
        message.innerHTML = `
        Booking Successful! <br>
        Destination: ${place} <br>
        Date: ${date} <br>
        People: ${people}
        `;
    }
}