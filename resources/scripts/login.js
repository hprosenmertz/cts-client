function handleOnLoad(){
    //const postApiUrl = "https://cts-api-321.herokuapp.com/api/Client/";
    const postApiUrl = "https://localhost:5001/api/Client/"
    fetch(postApiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
    })
}
function handleLogin(){
    PostRequest();
}

function PostRequest(){
    //const userApiUrl = "https://cts-api-321.herokuapp.com/api/Client/login";
    const userApiUrl = "https://localhost:5001/api/Client/login";
    let password = document.getElementById("password").value; //gets what user inputted 
    let username = document.getElementById("username").value;
    fetch(userApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            clientEmail: username,
            clientPass: password
        })
    })
    .then((response)=> response.json()).then(num =>{
        if (num === 0){
            alert("Incorrect Login");
            localStorage.setItem("client",0);
        } else {
            alert("Success!");
            localStorage.setItem("client", num);
        }
        
    })
    .catch(error => console.log(error));
}

function goHome(){
    const postApiUrl = "https://cts-client.herokuapp.com/homepage.html";

    fetch(postApiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
    })
}
