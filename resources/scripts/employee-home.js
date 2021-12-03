const postApiUrl = "https://cts-api-321.herokuapp.com/api/Event/";
// Add a "checked" symbol when clicking on a list item
function CheckList(events){

    var list = document.querySelector('ul');

    var list = document.getElementById("myUL");

    var assigned;
    var confirmed;
    var dos;
    var setup;
    var eip;
    var tearDown;
    var complete;

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    console.log(ev.target.id);
   
    var clicked = ev.target.id;
    var tabId = clicked.split("-").pop();
    console.log(tabId);

    ev.target.classList.toggle('checked');

    if(clicked.includes("confirmed")){
      if(ev.target.className === "checked"){
          confirmed = true;
      }
      else{
          confirmed = false;
      }
    }
    if(clicked.includes("assigned")){
      if(ev.target.className === "checked"){
          assigned = true;
      }
      else{
          assigned = false;
      }
    }
    if(clicked.includes("dayOfStatus")){
      if(ev.target.className === "checked"){
          dos = true;
      }
      else{
          dos = false;
      }
    }
    if(clicked.includes("setupCompleted")){
      if(ev.target.className === "checked"){
          setup = true;
      }
      else{
          setup = false;
      }
    }
    if(clicked.includes("inProgress")){
      if(ev.target.className === "checked"){
          eip = true;
      }
      else{
          eip = false;
      }
    }
    if(clicked.includes("tearDown")){
      if(ev.target.className === "checked"){
          tearDown = true;
      }
      else{
          tearDown = false;
      }
    }
    if(clicked.includes("complete")){
      if(ev.target.className === "checked"){
          complete = true;
      }
      else{
          complete = false;
      }
    }
    
  //  const thisEvent = fetch(`${postApiUrl}/${tabId}`).then((res) => res.json());
  //   thisEvent.then((event => {
  //     event.confirmed = confirmed;
  //     event.assigned = assigned;
  //     event.dayOfStatus = dos;
  //     event.setupCompleted = setup;
  //     event.inProgress = eip;
  //     event.tearDown = tearDown;
  //     event.complete = complete;
  //   }))

    fetch(postApiUrl,{
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
        return response.json();
    })
  }
}, false);

}


function handleOnLoad(){

  fetch(postApiUrl).then(function(response){   
    return response.json();
  }).then(function(json){
    console.log(json);
    DisplayEvents(json);
    CheckList(json);
  })
  
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
