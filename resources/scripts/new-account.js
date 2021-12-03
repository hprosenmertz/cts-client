function handleOnLoad(){

    const apiUrl = "https://cts-api-321.herokuapp.com/api/Client"; 
    //const apiUrl = "https://localhost:5001/api/Client";
    fetch(apiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
    })
}

function handleOnSubmit(){
    AddClient();
}

function AddAccount(){
    // console.log("dfghjkmnbvcdfghjkhgfvb vghju")

    // const apiUrl = "https://cts-api-321.herokuapp.com/api/Client"; 
    // let username = document.getElementById("email").value;
    // let password = document.getElementById("password").value; //gets what user inputted 
    // let firstName = document.getElementById("fName").value;
    // let lastName = document.getElementById("lName").value;
    // let phone = document.getElementById("phone").value;

    // console.log(username )
    // console.log( password )//gets what user inputted 
    // console.log( firstName, lastName, phone )

    // {
    //     clientFirstName: firstName,
    //     clientLastName: lastName,
    //     clientEmail: username,
    //     clientPass: password,
    //     phone: phone
    // }

    // fetch(apiUrl, {
    //     method: "POST",
    //     headers: {
    //         "Accept": 'application/json',
    //         "Content-Type": 'application/json'
    //     },
    //     body: JSON.stringify({
    //             clientFirstName: firstName,
    //             clientLastName: lastName,
    //             clientEmail: username,
    //             clientPass: password,
    //             phone: phone
    //         })
    // })
    // .then((response)=> response.json()).then(num =>{
    //     if (num === 0){
    //         alert("Invalid Account Creation, please try again");
    //         localStorage.setItem("client",0);
    //     } else {
    //         alert("Success, account created!");
    //         localStorage.setItem("client", num);
    //         document.getElementById("email").value = "";
    //         document.getElementById("password").value = "";
    //         document.getElementById("fName").value = "";
    //         document.getElementById("lName").value = "";
    //         document.getElementById("phone").value = "";
    //         //handleOnLoad();
    //     }
        
    // })
    // .catch(error => console.log(error));

}

function AddClient(){
    const apiUrl = "https://cts-api-321.herokuapp.com/api/Client"; 
    //const apiUrl = "https://localhost:5001/api/Client";
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value; //gets what user inputted 
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let phone = document.getElementById("phone").value;

    fetch(apiUrl, {
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
    .then((response)=> {
        console.log(response);
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("fName").value = "";
        document.getElementById("lName").value = "";
        document.getElementById("phone").value = "";
        // handleOnLoad();
    })





}