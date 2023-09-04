const roomTypeDropdown = document.getElementById('room-type');
const numRoomsInput = document.getElementById('rooms');
const priceInput = document.getElementById('price');

  const roomPrices = {
    standard: 2999,    //change it accordingly
    premium: 5599,
    honeymoon: 7599,
  };
  
  function calculatePrice() {
    const selectedRoomType = roomTypeDropdown.value;
    const selectedPrice = roomPrices[selectedRoomType];
    priceInput.value = selectedPrice;
    const numRooms = parseInt(numRoomsInput.value);
    const nonight=document.getElementById("numberOfNights").value;
    const totalPrice = selectedPrice * numRooms * nonight;
    priceInput.value = totalPrice;
  }
  roomTypeDropdown.addEventListener('change', calculatePrice);
  numRoomsInput.addEventListener('input', calculatePrice);

  function calculateNumberOfNights() {
    const checkInDate = new Date(document.getElementById('checkIn').value);
    const checkOutDate = new Date(document.getElementById('checkOut').value);

    if (checkInDate > checkOutDate) {
      alert("Check-out date must be greater than the Check-in date.");
      return;
    }
    const timeDifference = checkOutDate - checkInDate;
    const numberOfNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    document.getElementById('numberOfNights').value = numberOfNights;
  }
  
  const token = JSON.parse(localStorage.getItem("token"));
  const uid=JSON.parse(localStorage.getItem("Userid"));
  const id=uid.toString();
  function handleFormSubmit(event) {
    event.preventDefault();
    const name=document.getElementById('name').value;
    const aadhar=document.getElementById('aadhar').value;
    const email=document.getElementById('email').value;
    const phoneno=document.getElementById('phoneno').value;
    const checkIn=document.getElementById('checkIn').value;
    const checkOut=document.getElementById('checkOut').value;
    const roomtype=document.getElementById('room-type').value;
    const rooms=document.getElementById('rooms').value;
    const price=document.getElementById('price').value;
    const numberOfNights=document.getElementById('numberOfNights').value;
    const bookobj={
        billno:token, 
        name:name,
        aadhar:aadhar,
        email:email,
        phoneno:phoneno,
        checkIn:checkIn,
        checkOut:checkOut,
        roomtype:roomtype,
        rooms:rooms,
        price:price,
        numberOfNights:numberOfNights,
        bookid:id,
    }
    fetch("http://localhost:3000/booked",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(bookobj)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('Booked Successful',data);
        /*alert("You have signed up successfully!")*/
        window.location.href='bookings.html';

    })
    .catch(error=>{
        console.log("error",error);
    })
  
}

      /*console.log('Database Updated',data);
      alert("Thank You For Choosing BnB. ENJOY YOUR STAY!");
      window.location.href="bookings.html";
    });
}*/
    /*.then(response=>response.json())
    .then(data=>{
        console.log('Database Updated',data);
        alert("Thank You For Choosing BnB. ENJOY YOUR STAY!"); 
      })*/

  
  document.getElementById('billingForm').addEventListener('submit', handleFormSubmit);
  document.getElementById('rooms').addEventListener('change', calculatePrice);
  document.getElementById('checkIn').addEventListener('change', calculateNumberOfNights);
  document.getElementById('checkOut').addEventListener('change', calculateNumberOfNights);