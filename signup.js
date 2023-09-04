const signupForm=document.getElementById('signupForm');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const contact=document.getElementById('contact').value;
    const formData={
        username:username,
        email:email,
        password:password,
        contact:contact
    }
    fetch("http://localhost:3000/users",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('Sign Up Successful',data);
        alert("You have signed up successfully!")
        window.location.href='signin.html';

    })
    .catch(error=>{
        console.log("error",error);
    })
    
})

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