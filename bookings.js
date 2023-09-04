const token=localStorage.getItem('token');
const uid=localStorage.getItem("Userid");
if(!token){
    alert("You Are Not Logged in");
    window.location.href='signin.html';
}
function logout(){
  const token=localStorage.getItem('token');
  if(token){
      localStorage.removeItem("token");
      localStorage.removeItem("Booked");
      localStorage.removeItem("Userid");
      alert("You Are Logged Out");
      window.location.href="index.html";
  }
  else{
      alert("Log In First");
      window.location.href="index.html";
  }
}
function bill(){
    window.location.href="bill.html";
}

const bkng = document.getElementById("userbooked");

  fetch("http://localhost:3000/booked", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rData = data.filter((el) => el.bookid===uid);
      console.log(rData);
      displayData(rData);
    })

  .catch(error=>{
        console.log(error);
  })
function displayData(rData){
        const bkng=document.getElementById('userbooked');
        rData.forEach(items => {
        const div = document.createElement("div");
        const bookingId = document.createElement("h4");
        const name = document.createElement("h3");
        const email = document.createElement("h4");
        const phoneno= document.createElement("h4");
        const aadhar = document.createElement("h4");
        const checkIn = document.createElement("h4");
        const checkOut = document.createElement("h4");
        const numberOfNights=document.createElement("h4");
        const rooms = document.createElement("h4");
        const roomtype = document.createElement("h4");
        const price=document.createElement("h4");
        const del = document.createElement("button");
  
          
        bookingId.textContent=`BILL no:${items.billno}`;
        name.textContent=`NAME:${items.name}`;
        email.textContent=`Email:${items.email}`;
        phoneno.textContent=`Phone No:${items.phoneno}`;
        aadhar.textContent=`Aadhar/Pan:${items.aadhar}`;
        checkIn.textContent=`Check IN Date:${items.checkIn}`;
        checkOut.textContent=`Check OUT Date:${items.checkOut}`;
        numberOfNights.textContent=`No of Nights:${items.numberOfNights}`;
        rooms.textContent=`No of Rooms:${items.rooms}`;
        roomtype.textContent=`Room Type:${items.roomtype}`;
        price.textContent=`Price:${items.price}`;
          
          div.id="bookeddiv";
          del.id = "cancelBtn";
          del.textContent=`CANCEL BOOKING`;
          del.addEventListener("click", () => {
            fetch(`http://localhost:3000/booked/${items.id}`,{
              method:'DELETE'
            })
             .then(response=>{
              if(response.ok){
                alert(`Booking Cancelled Successfully`);
                window.location.reload("bookings.html");
              }
              else{
                console.log(error);
              }})
              .catch(error=>{
                console.log(error);
              })
            })
  
          bkng.append(div,
            bookingId,
            name,
            aadhar,
            phoneno,
            email,
            rooms,
            checkIn,
            checkOut,
            roomtype,
            price,
            del);
  });
}