function openwebsite(){
    window.location.href="index.html";
}

function redirect(){
    window.location.href="bookings.html";
}
function abtus(){
    window.location.href="finalabtus.html";
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