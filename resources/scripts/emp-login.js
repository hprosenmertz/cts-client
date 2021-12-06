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

function PostRequest(json2){
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
           
           console.log(username);
          
           json2.forEach(employee => {

                console.log("this one");
                console.log("a"+ employee.employeeID);
                console.log("b"+ employee.employeeEmail);
                console.log("c"+ username);
                 if(employee.employeeEmail === username){
                        sessionStorage.employeeEmail = employee.employeeEmail;
                        sessionStorage.employeeID = employee.employeeID;
                    }
                });
           console.log("session storage");
           console.log(sessionStorage.employeeEmail);
          window.location.href =  "/Users/hannarosenmertz/Desktop/Source/Repos/cts/client/employee-home.html";
        //    window.location.href = "https://cts-client.herokuapp.com/employee-home.html";
        
        }
        
    })
    .catch(error => console.log(error));
}



// employee -home js


function handleHome(){
    const postApiUrl = "https://cts-api-321.herokuapp.com/api/Event/";
    //const postStatusUrl = "https://cts-api-321.herokuapp.com/api/Event/status";
    fetch(postApiUrl).then(function(response){   
        console.log("yes this one");
      return response.json();
    }).then(function(json){
        console.log("asrjdfbenrkjg "+ sessionStorage.employeeEmail);
        var empEmail = sessionStorage.employeeEmail;
        console.log(json);
        DisplayEvents(json);
        CheckList(json);
    })
    
  }




// Add a "checked" symbol when clicking on a list item
function CheckList(json){
    //const postApiUrl = "https://cts-api-321.herokuapp.com/api/Event/";
    const postApiUrl = "https://localhost:5001/api/Event";
   // const postStatusUrl = "https://cts-api-321.herokuapp.com/api/Event/status";
    var list = document.querySelector('ul');

    var list = document.getElementById("myUL");
    json.forEach(event => {

        var empID = parseInt(sessionStorage.getItem("employeeID"));
        if(event.employeeId === empID){
           
            var eventId = event.eventId;
            var assigned = event.assigned;
            var confirmed = event.confirmed;
            var dos = event.dayOfStatus; 
            var setup = event.setupCompleted;
            var eip = event.inProgress;
            var tearDown = event.tearDown;
            var complete = event.complete;


            event.addEventListener('click', function(ev) {
                console.log(ev.currentTarget);
                if (ev.target.tagName === 'LI') {
                 
                  var clicked = ev.currentTarget.id;
                  var tabId = clicked.split("-").pop();
                  console.log("clicked" +clicked);
              
                  ev.target.classList.toggle('checked');

                  if(clicked.includes("confirmed")){
                    if(confirmed === 0){
                        confirmed = 1;
                    }
                    else{
                        confirmed = 0;
                    }
                  }
                  if(clicked.includes("assigned")){
                    if(assigned === 0){
                        assigned = 1;
                    }
                    else{
                        assigned = 0;
                    }
                  }
                  if(clicked.includes("dayOfStatus")){
                    if(dos === 0){
                        dos = 1;
                    }
                    else{
                        dos = 0;
                    }
                  }
                  if(clicked.includes("setupCompleted")){
                    if(setup === 0){
                        setup = 1;
                    }
                    else{
                        setup = 0;
                    }
                  }
                  if(clicked.includes("inProgress")){
                    if(eip === 0){
                        eip = 1;
                    }
                    else{
                        eip = 0;
                    }
                  }
                  if(clicked.includes("tearDown")){
                    if(tearDown === 0){
                        tearDown = 1;
                    }
                    else{
                        tearDown = 0;
                    }
                  }
                  if(clicked.includes("complete")){
                    if(complete === 0){
                        complete = 1;
                    }
                    else{
                        complete = 0;
                    }
                  }

                  fetch(postApiUrl,{
                    method: "PUT",
                    headers: {
                        "Accept": 'application/json',
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                    
                      // thisEvent
                        eventId: eventId,
                        confirmed: confirmed,
                        assigned: assigned,
                        dayOfStatus: dos,
                        setupCompleted: setup,
                        inProgress: eip,
                        tearDown: tearDown,
                        complete: complete
                        
                    })
                    
                  })
                    .then((response) =>{
                   
                        // document.getElementById("myUL")="";
              
                        handleHome();
                    })
                }
              }, false);

        }
    })
}



//method to show all events for employee
function DisplayEvents(json){

  let html = "";
  var list = document.getElementById("myUL");

  json.forEach(event => {

    var empID = parseInt(sessionStorage.getItem("employeeID"));
    if(empID === event.employeeId){

      html += "<div class=\"box\">";
      html += "<div id=\"myDIV\" class=\"header\">";
      html += "<h6 style=\"margin:5px\"> Event for: " + event.clientEmail + "</h6>";
      html += "</div>";
    //   html += "<ul id=\"myUL\">";
      if(event.confirmed === 1){
        html += "<li id=\"confirmed-" + event.eventId + "\" class=\"checked\">Confirmed</li>";
      }
      else{
        html += "<li id=\"confirmed-" + event.eventId + "\">Confirmed</li>";
      }
      if(event.assigned === 1){
        html += "<li id=\"assigned-" + event.eventId + "\" class=\"checked\">Assigned</li>";
      }
      else{
        html += "<li id=\"assigned-" + event.eventId + "\">Assigned</li>";
      }
      if(event.dayOfStatus === 1){
        html += "<li id=\"dayOfStatus-" + event.eventId + "\" class=\"checked\">\"Day of\" Status</li>";
      }
      else{
        html += "<li id=\"dayOfStatus-" + event.eventId + "\">\"Day of\" Status</li>";
      }
      if(event.setupCompleted === 1){
        html += "<li id=\"setupCompleted-" + event.eventId + "\" class=\"checked\">Setup Completed</li>";
      }
      else{
        html += "<li id=\"setupCompleted-" + event.eventId + "\">Setup Completed</li>";
      }
      if(event.inProgress === 1){
        html += "<li id=\"inProgress-" + event.eventId + "\" class=\"checked\">Event In Progress</li>";
      }
      else{
        html += "<li id=\"inProgress-" + event.eventId + "\">Event In Progress</li>";
      }
      if(event.tearDown === 1){
        html += "<li id=\"tearDown-" + event.eventId + "\" class=\"checked\">Tear Down</li>";
      }
      else{
        html += "<li id=\"tearDown-" + event.eventId + "\">Tear Down</li>";
      }
      if(event.complete === 1){
        html += "<li id=\"complete-" + event.eventId + "\" class=\"checked\">Complete</li>";
      }
      else{
        html += "<li id=\"complete-" + event.eventId + "\">Complete</li>";
      }

      html += "</ul>";
      html += "</div>";
    }
 
  });


  document.getElementById("myUL").innerHTML = html;

  // document.getElementById("prevposts").innerHTML = html;
}

