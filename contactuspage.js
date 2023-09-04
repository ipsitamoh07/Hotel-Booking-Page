function success(event){
    event.preventDefault();
    alert("Your message has been delivered. Please wait, we will get back to you via email");
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