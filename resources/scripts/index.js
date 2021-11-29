const baseUrl = "https://localhost:5001/api/Event";


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

