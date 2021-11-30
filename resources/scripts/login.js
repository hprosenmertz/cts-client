
function handleLogin(){
    PostRequest();
}

function PostRequest(){
    const userApiUrl = "https://cts-api-321.herokuapp.com/api/Client/Login";
    let username = document.getElementById("username").value; //gets what user inputted 
    let password = document.getElementById("password").value;
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
        handleOnLoad();
    })
}