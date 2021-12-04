var clientInfo = '2';

function handleOnLoad(){
    const postApiUrl = "https://cts-api-321.herokuapp.com/api/Client/";
    //const postApiUrl = "https://localhost:5001/api/Client/"
    fetch(postApiUrl).then(function(response){   
        return response.json();
        
    }).then(function(json){
        console.log(json);
        handleLogin(json);
    })
}

function handleLogin(json2){
    PostRequest(json2);
}





function PostRequest(json2){
    const userApiUrl = "https://cts-api-321.herokuapp.com/api/Client/login";
    console.log("made it here");
    //const userApiUrl = "https://localhost:5001/api/Client/login";
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
           
           
       
           console.log(username);
           
       
           var clientID;
           json2.forEach(client => {
               console.log("this one");
            console.log(client.clientID);
            console.log(client.clientEmail);
            console.log(username);
                    if(client.clientEmail === username){
                           clientID = client.clientID;
                       }
                   });
           console.log("here");
           console.log(clientID);
           
            // var Client = {
            //     clientID : clientID
            // };
            console.log("1" + clientID);
            sendClientID(clientID);
            console.log("info: " + clientInfo);
           window.location.href = "/Users/hannarosenmertz/Desktop/Source/Repos/cts/client/customer-review.html";
   // window.location.href = "https://cts-client.herokuapp.com/customer-review.html";

            // module.exports = {Client};
        }
        
    })
    .catch(error => console.log(error));
}

function sendClientID(clientID){
    console.log("hereeee:" + clientID);
    clientInfo = clientID;
}




function goHome(){
    const postApiUrl = "https://cts-client.herokuapp.com/homepage.html";

    fetch(postApiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
    })
}
