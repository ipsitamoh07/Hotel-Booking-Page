function login(event){
event.preventDefault();    
const username=document.getElementById('username');
const password=document.getElementById('password');
console.log("Login function called");
fetch("http://localhost:3000/users",{ 
    method:'GET',
})
.then((res) =>res.json())
.then((data)=>{
    console.log(data);
    const user =data.find((element) => element.username===username.value && element.password===password.value);
    console.log("user:", user);
if(user) {
    const token=Date.now();
    let id= user.id;
    console.log(id);
    localStorage.setItem('token', token);
    localStorage.setItem('Userid', id );
    alert("Logged in Successfully");
    window.location.href='bookings.html';
}
else{
    alert("You are not a Member please sign in");
    window.location.href='signup.html';
}
})
.catch((err) => {
    console.log("error occured duing the fteching" , err)
})
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