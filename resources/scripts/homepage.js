const baseUrl = "https://cts-client.herokuapp.com/";

function handleOnLoad(){
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