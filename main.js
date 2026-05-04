function showHotels(place){

let hotels=document.querySelectorAll(".hotel-list");

hotels.forEach(hotel=>{
hotel.classList.add("hidden");
});

document.getElementById(place+"-hotels").classList.remove("hidden");
}

function bookHotel(name){
alert("Hotel booked successfully at "+name);
}
// 
function bookTrip(){

let place=document.getElementById("place").value;
let date=document.getElementById("date").value;
let people=document.getElementById("people").value;
let message=document.getElementById("message");

if(place==="" || date==="" || people===""){
message.innerHTML="Please fill all booking details!";
message.style.color="red";
}
else{
message.innerHTML=`
Trip Booking Successful <br>
Destination: ${place}<br>
Date: ${date}<br>
People: ${people}
`;

message.style.color="green";
}
}
// 

function loginUser(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;
let loginMessage=document.getElementById("loginMessage");

if(username==="" || password===""){
loginMessage.innerHTML="Enter login details";
loginMessage.style.color="red";
}
else{
loginMessage.innerHTML="Login Successful!";
loginMessage.style.color="green";

document.getElementById("dashboard")
.classList.remove("hidden");
}
}

function showPayment(){

document.getElementById("paymentSection")
.classList.remove("hidden");

document.getElementById("bookingInfo")
.innerHTML="Your booking is ready for payment.";
}

function payNow(){

let method=document.getElementById("paymentMethod").value;
let name=document.getElementById("cardName").value;
let number=document.getElementById("cardNumber").value;
let amount=document.getElementById("amount").value;
let paymentMessage=document.getElementById("paymentMessage");

if(method==="" || name==="" || number==="" || amount===""){
paymentMessage.innerHTML=
"<p style='color:red;'>Fill payment details</p>";
}
else{
paymentMessage.innerHTML=
"<h3 style='color:green;'>✅ Payment Successful! Trip Confirmed</h3>";
}
}