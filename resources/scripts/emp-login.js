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
    console.log("made it here");
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
                    }
                });
           console.log("session storage");
           console.log(sessionStorage.employeeEmail);
           window.location.href = "https://cts-client.herokuapp.com/employee-home.html";
        
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
        console.log("yes this one");
        console.log("asrjdfbenrkjg "+ sessionStorage.employeeEmail);
        var empEmail = sessionStorage.employeeEmail;
        console.log(json);
        DisplayEvents(json);
        CheckList(json);
    })
    
  }




// Add a "checked" symbol when clicking on a list item
function CheckList(events){
    const postApiUrl = "https://cts-api-321.herokuapp.com/api/Event/";
    const postStatusUrl = "https://cts-api-321.herokuapp.com/api/Event/status";
    var list = document.querySelector('ul');

    var list = document.getElementById("myUL");

    var assigned;
    // var confirmed;
    var dos;
    var setup;
    var eip;
    var tearDown;
    var complete;

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    //console.log(ev.target.id);
   
    var clicked = ev.target.id;
    var tabId = clicked.split("-").pop();
    console.log(tabId);

    ev.target.classList.toggle('checked');
    console.log("confirmed" + confirmed);
    if(clicked.includes("confirmed")){
      if(ev.target.className === "checked"){
          var confirmed = 1;
      }
      else{
          var confirmed = 0;
      }
    }
    if(clicked.includes("assigned")){
      if(ev.target.className === "checked"){
          assigned = 1;
      }
      else{
          assigned = 0;
      }
    }
    if(clicked.includes("dayOfStatus")){
      if(ev.target.className === "checked"){
          dos = 1;
      }
      else{
          dos = 0;
      }
    }
    if(clicked.includes("setupCompleted")){
      if(ev.target.className === "checked"){
          setup = 1;
      }
      else{
          setup = 0;
      }
    }
    if(clicked.includes("inProgress")){
      if(ev.target.className === "checked"){
          eip = 1;
      }
      else{
          eip = 0;
      }
    }
    if(clicked.includes("tearDown")){
      if(ev.target.className === "checked"){
          tearDown = 1;
      }
      else{
          tearDown = 0;
      }
    }
    if(clicked.includes("complete")){
      if(ev.target.className === "checked"){
          complete = 1;
      }
      else{
          complete = 0;
      }
    }

    console.log("adshjfbdsajhfbshjbfjalsdfbjlh");
    console.log("confirmed after" + confirmed);

    fetch(postStatusUrl,{
      method: "PUT",
      headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
      },
      body: JSON.stringify({
      
        // thisEvent
          eventId: tabId,
          confirmed: confirmed,
          assigned: assigned,
          dayOfStatus: dos,
          setupCompleted: setup,
          inProgress: eip,
          tearDown: tearDown,
          complete: complete
    })
    })
      .then(function(response){
          console.log("variables");
        // return response.json();
    })
  }
}, false);

}







//method to show all events for employee
function DisplayEvents(json){

  let html = "<body>";
  var list = document.getElementById("myUL")

  json.forEach(event => {
      html = "<div class=\"box\">";
      html += "<div id=\"myDIV\" class=\"header\">";
      html += "<h3 style=\"margin:5px\">" + event.eventId + "</h3>";
      html += "</div>";
      html += "<ul id=\"myUL\">";
      if(event.confirmed){
        html += "<li id=\"confirmed-" + event.eventId + "\" class=\"checked\">Confirmed</li>";
      }
      else{
        html += "<li id=\"confirmed-" + event.eventId + "\">Confirmed</li>";
      }
      if(event.assigned){
        html += "<li id=\"assigned-" + event.eventId + "\" class=\"checked\">Assigned</li>";
      }
      else{
        html += "<li id=\"assigned-" + event.eventId + "\">Assigned</li>";
      }
      if(event.dayOfStatus){
        html += "<li id=\"dayOfStatus-" + event.eventId + "\" class=\"checked\">\"Day of\" Status</li>";
      }
      else{
        html += "<li id=\"dayOfStatus-" + event.eventId + "\">\"Day of\" Status</li>";
      }
      if(event.setupCompleted){
        html += "<li id=\"setupCompleted-" + event.eventId + "\" class=\"checked\">Setup Completed</li>";
      }
      else{
        html += "<li id=\"setupCompleted-" + event.eventId + "\">Setup Completed</li>";
      }
      if(event.inProgress){
        html += "<li id=\"inProgress-" + event.eventId + "\" class=\"checked\">Event In Progress</li>";
      }
      else{
        html += "<li id=\"inProgress-" + event.eventId + "\">Event In Progress</li>";
      }
      if(event.tearDown){
        html += "<li id=\"tearDown-" + event.eventId + "\" class=\"checked\">Tear Down</li>";
      }
      else{
        html += "<li id=\"tearDown-" + event.eventId + "\">Tear Down</li>";
      }
      if(event.complete){
        html += "<li id=\"complete-" + event.eventId + "\" class=\"checked\">Complete</li>";
      }
      else{
        html += "<li id=\"complete-" + event.eventId + "\">Complete</li>";
      }

      html += "</ul>";
      html += "</div>";
 
  });
  
  html += "</body>";
  document.getElementById("myUL").innerHTML = html;

  // document.getElementById("prevposts").innerHTML = html;
}

