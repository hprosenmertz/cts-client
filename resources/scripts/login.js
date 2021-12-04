

var clientInfo = "2";
localStorage.setItem("clientInfo", clientInfo);

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
            
           
           var clientID;
           json2.forEach(client => {
               
               console.log("this one");
            console.log(client.clientID);
            console.log(client.clientEmail);
            console.log(username);
                    if(client.clientEmail === username){
                           clientID = client.clientID.toString();
                       }
                   });
           console.log("here");
           console.log(clientID);
            clientInfo = clientID;
         window.location.href = "/Users/hannarosenmertz/Desktop/Source/Repos/cts/client/customer-review.html"; 
        
        console.log("this one right here");
  

            console.log("info2: " + clientInfo);
          //   window.location.href = "https://cts-client.herokuapp.com/customer-review.html";
        }
        
    })
    .catch(error => console.log(error));
}



// CUSTOMER REVIEWS

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};



function loadCustReview(){
    
    fetch("https://cts-api-321.herokuapp.com/api/Review")
    .then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        var clientInfo2 = localStorage.getItem("clientInfo");
        console.log("asrjdfbenrkjg "+ clientInfo2);
        displayIDs(json, clientInfo2);
  
    }).catch(function(error){
        console.log(error);
    });
};

function HandleOnSubmit(){
    AddReview();
}



function displayIDs(json, clientID){

    // alert(clientInfo);
    console.log(clientID + "client");


    let html = "<div class =\"container\">";

    json.forEach(review => {
        console.log(review.eventId + "eventId");
    
        html += "<p><b>ID: </b>" + review.eventId + "</p>";
        html += "<p><b>Client Info: </b>" + clientID + "</p>";
    
        
    });
    
    html += "</div>";
    document.getElementById("reviews").innerHTML = html;
}



function AddReview(){
    const apiUrl = "https://cts-api-321.herokuapp.com/api/Review"; 
    //const apiUrl = "https://localhost:5001/api/Review";
    let food = document.getElementById("food").value;
    let music = document.getElementById("music").value; //gets what user inputted 
    let equipment = document.getElementById("equipment").value;
    let overall = document.getElementById("overall").value;
    let text = document.getElementById("text").value
    

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            foodRating: food,
            musicRating: music,
            equipmentRating: equipment,
            overallRating: overall,
            text : text
        })
    })
    .then((response)=> {
        console.log(response);
        console.log(text);
        document.getElementById("food").value = "";
        document.getElementById("music").value = "";
        document.getElementById("equipment").value = "";
        document.getElementById("overall").value = "";
        document.getElementById("text").value = "";
    })
}

