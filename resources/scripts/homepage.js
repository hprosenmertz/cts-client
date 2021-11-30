const baseUrl = "https://cts-client.herokuapp.com/homepage.html";

function loadHomePage(){

    fetch(baseUrl)
    .then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
    }).catch(function(error){
        console.log(error);
    });
};