const baseUrl = "file:///Users/hannarosenmertz/Desktop/Source/Repos/cts/client/homepage.html";

function loadHomePage(){
    const peopleUrl = baseUrl;

    fetch(peopleUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        displayTable(json);
    }).catch(function(error){
        console.log(error);
    });
};