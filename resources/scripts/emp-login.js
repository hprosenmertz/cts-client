function handleOnLoad(){
    const postApiUrl = "https://cts-api-321.herokuapp.com/api/Employee/";

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
    const userApiUrl = "https://cts-api-321.herokuapp.com/api/Employee/emplogin";
    let password = document.getElementById("password").value; //gets what user inputted 
    let username = document.getElementById("username").value;
    fetch(userApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            employeeEmail: username,
            employeePass: password
        })
    })
    .then((response)=> response.json()).then(num =>{
        if (num === 0){
            alert("Incorrect Login");
            localStorage.setItem("employee",0);
        } else {
            alert("Success!");
            localStorage.setItem("employee", num);
            //goHome();
        }
        
    })
    .catch(error => console.log(error));
}