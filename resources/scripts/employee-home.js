
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
    CheckList();
  
}

//need method to update back end

//method to show all events for employee
function DisplayEvents(){

  let html = "<body>";

  json.forEach(text => {
      html = "<div class=\"box\">";
      html += "<div id=\"myDIV\" class=\"header\">";
 
      
  });
  
  html += "</div>";

  document.getElementById("prevposts").innerHTML = html;
}
