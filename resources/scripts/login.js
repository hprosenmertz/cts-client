

// var clientInfo = "2";
// localStorage.setItem("clientInfo", clientInfo);

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
                           sessionStorage.clientEmail = client.clientEmail;
                       }
                   });
           console.log("session storage");
           console.log(sessionStorage.clientEmail);
            // clientInfo = clientID;
            // localStorage.setItem("clientInfo", clientInfo);
           // window.location.href = "file:///Users/treyrush/Desktop/cts/cts-client/customer-review.html"; 
        
             window.location.href = "https://cts-client.herokuapp.com/customer-review.html";
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


function loadEventData(){
    
    fetch("https://cts-api-321.herokuapp.com/api/Event")
    .then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
       // var clientInfo2 = localStorage.getItem("clientInfo");
        console.log("asrjdfbenrkjg "+ sessionStorage.clientEmail);
        var clientEmail = sessionStorage.clientEmail;
        console.log("dasjfnadshjkf 22" + clientEmail);
        var id = GetClientData();
        console.log("client id:" + id);
        console.log("MADE IT");
        //displayEvent(json, clientEmail);
  
    }).catch(function(error){
        console.log(error);
    });
};

function displayEvent(json, clientEmail){
    let html = "<div class =\"container\">";
    // console.log("review.clientEmail" + review.clientEmail);
 
     json.forEach(event => {
         console.log("event.clientEmail" + event.clientEmail);
     console.log("clientEmail" + clientEmail);
         if(event.clientEmail === clientEmail){
             html += "<label for=\"exampleFormControlInput1\" class=\"form-label\">Event ID:" +event.eventId +"</label>";
             html += "<label for=\"exampleFormControlInput1\" class=\"form-label\">Client ID:" +event.clientId +"</label>";
             html += "<label for=\"exampleFormControlInput1\" class=\"form-label\">Package:" +event.package +"</label>";
             html += "<p></p";
         }
         console.log(event.eventId + "eventId");
 
         
     });
     
     html += "</div>";
     document.getElementById("reviews").innerHTML = html;
}


function loadCustReview(){
    
    fetch("https://cts-api-321.herokuapp.com/api/Review")
    .then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
       // var clientInfo2 = localStorage.getItem("clientInfo");
        console.log("asrjdfbenrkjg "+ sessionStorage.clientEmail);
        var clientEmail = sessionStorage.clientEmail;
        console.log("dasjfnadshjkf 22" + clientEmail);
        var id = GetClientData();
        console.log("client id:" + id);
        displayIDs(json, id);
        loadEventData();
  
    }).catch(function(error){
        console.log(error);
    });
};

function GetClientData(){
    console.log("dasjfnadshjkf 21" + sessionStorage.clientEmail);
   const apiUrl = "https://cts-api-321.herokuapp.com/api/Client"; 
    //const apiUrl = "https://localhost:5001/api/Client";
    fetch(apiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
        var id = GetClientID(json);
    })
}

function GetClientID(json){
    // var json = GetClientData();
    var id;
    console.log("this one yes" + sessionStorage.clientEmail);
    json.forEach(client => {
     console.log("abcdef" + client.clientEmail);
             if(client.clientEmail === sessionStorage.clientEmail){
                    id = client.clientID;
                }
     });
     return id;
}

function HandleOnSubmit(){
    AddReview();
}



function displayIDs(json, id){

    let html = "<div class =\"container\">";
   // console.log("review.clientEmail" + review.clientEmail);
    //console.log("clientEmail" + clientEmail);

    // json.display(review => {
    //     if(review.clientEmail === clientEmail){
    //         html += "<label for=\"exampleFormControlInput1\" class=\"form-label\">Event ID:" +review.eventId +"</label>";
    //         html += "<label for=\"exampleFormControlInput1\" class=\"form-label\">Client ID:" +review.clientId +"</label>";
    //         html += "<p></p";
    //     }
    // }
    // )
    

    json.forEach(review => {
        //console.log("review.clientEmail" + review.clientEmail);
    console.log("clientEmail" + clientEmail);
        if(review.clientId === id){
            html += "<label for=\"exampleFormControlInput1\" class=\"form-label\">Event ID:" +review.eventId +"</label>";
            html += "<label for=\"exampleFormControlInput1\" class=\"form-label\">Client ID:" +review.clientId +"</label>";
            html += "<label for=\"exampleFormControlInput1\" class=\"form-label\">Package:" +review.package +"</label>";
            html += "<p></p";
        }
        console.log(review.eventId + "eventId");

        
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

