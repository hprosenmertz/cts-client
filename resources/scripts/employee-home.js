const postApiUrl = "https://cts-api-321.herokuapp.com/api/Event/";
const postStatusUrl = "https://cts-api-321.herokuapp.com/api/Event/status";
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
          confirmed = 1;
      }
      else{
          confirmed = 0;
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
