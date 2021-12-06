function handleOnLoad(){
    const postApiUrl = "https://cts-api-321.herokuapp.com/api/Employee/";

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
           // window.location.href = "https://cts-client.herokuapp.com/employee-home.html";
        
           var empID;
           json2.forEach(employee => {
               
               console.log("this one");
            console.log(employee.employeeId);
            console.log(employee.employeeEmail);
            console.log(username);
                    if(client.clientEmail === username){
                           sessionStorage.clientEmail = client.clientEmail;
                       }
                   });
           console.log("session storage");
           console.log(sessionStorage.clientEmail);
        
        
        
        }
        
    })
    .catch(error => console.log(error));
}

