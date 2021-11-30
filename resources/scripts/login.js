function handleOnLoad(){
    const postApiUrl = "https://cts-api-321.herokuapp.com/api/Client/";

    fetch(postApiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
        displayPosts(json);
    })
}
function handleLogin(){
    PostRequest();
}

function PostRequest(){
    const userApiUrl = "https://cts-api-321.herokuapp.com/api/Client/";
    let password = document.getElementById("password").value; //gets what user inputted 
    let username = document.getElementById("username").value;
    fetch(userApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    .then((response)=> {
        console.log(response);
        document.getElementById("post").value = "";
        gotHome();
    })
}

function gotHome(){
    const postApiUrl = "https://cts-client.herokuapp.com/homepage.html";

    fetch(postApiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
        displayPosts(json);
    })
}
