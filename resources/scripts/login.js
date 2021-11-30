
function handleLogin(){
    PostRequest();
}

function PostRequest(){
    const userApiUrl = "https://cts-api-321.herokuapp.com/api/Client/";
    let value = document.getElementById("abcd").value; //gets what user inputted 
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