function handleOnLoad(){
    const postApiUrl = "https://cts-api-321.herokuapp.com/api/Client/";

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
    const userApiUrl = "https://cts-api-321.herokuapp.com/api/Client/login";
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
    .then((response)=> {
        console.log(response);
        console.log(username);
        console.log(password);
        goHome();
        //document.getElementById("user").value = "";
        
    })
}

function goHome(){
    const postApiUrl = "https://cts-client.herokuapp.com/homepage.html";

    fetch(postApiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
    })
}
