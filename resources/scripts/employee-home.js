
// Add a "checked" symbol when clicking on a list item
function CheckList(){
    var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

}


function handleOnLoad(){
  DisplayEvents();
  const postApiUrl = "https://cts-api-321.herokuapp.com/api/Event/";

  fetch(postApiUrl).then(function(response){   
      return response.json();
  }).then(function(json){
      console.log(json);
  })
    CheckList();
  
}

//need method to update back end

//method to show all events for employee
function DisplayEvents(){

  let html = "<body>";

  json.forEach(text => {
      html = "<div class=\"box\">";
      html += "<div id=\"myDIV\" class=\"header\">";
      html += "<h3 style=\"margin:5px\">Event To Do List</h3>"
      html += "</div>"
      html += "</div>"
 
      
  });
  
  html += "</div>";

  document.getElementById("prevposts").innerHTML = html;
}
