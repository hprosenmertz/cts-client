function handleOnLoad(){

    const apiUrl = "https://cts-api-321.herokuapp.com/api/Client/"; 

    fetch(apiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
    })
}

function handleOnSubmit(){
    AddAccount();
}

function AddAccount(){

    const apiUrl = "https://cts-api-321.herokuapp.com/api/Client/"; 
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value; //gets what user inputted 
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;


    fetch(postApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            clientFirstName: firstName,
            clientLastName: lastName,
            clientEmail: username,
            clientPass: password,
            phone: phone
        })
    })
    .then((response)=> response.json()).then(num =>{
        if (num === 0){
            alert("Invalid Account Creation, please try again");
            localStorage.setItem("client",0);
        } else {
            alert("Success, account created!");
            localStorage.setItem("client", num);
        }
        
    })
    .catch(error => console.log(error));

}