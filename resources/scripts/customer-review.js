/*!
* Start Bootstrap - Stylish Portfolio v6.0.4 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
// window.addEventListener('DOMContentLoaded', event => {

//     const sidebarWrapper = document.getElementById('sidebar-wrapper');
//     let scrollToTopVisible = false;
//     // Closes the sidebar menu
//     const menuToggle = document.body.querySelector('.menu-toggle');
//     menuToggle.addEventListener('click', event => {
//         event.preventDefault();
//         sidebarWrapper.classList.toggle('active');
//         _toggleMenuIcon();
//         menuToggle.classList.toggle('active');
//  })

//     // Closes responsive menu when a scroll trigger link is clicked
//     var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
//     scrollTriggerList.map(scrollTrigger => {
//         scrollTrigger.addEventListener('click', () => {
//             sidebarWrapper.classList.remove('active');
//             menuToggle.classList.remove('active');
//             _toggleMenuIcon();
//         })
//     });

//     function _toggleMenuIcon() {
//         const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
//         const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-times');
//         if (menuToggleBars) {
//             menuToggleBars.classList.remove('fa-bars');
//             menuToggleBars.classList.add('fa-times');
//         }
//         if (menuToggleTimes) {
//             menuToggleTimes.classList.remove('fa-times');
//             menuToggleTimes.classList.add('fa-bars');
//         }
//     }

    // Scroll to top button appear
//     document.addEventListener('scroll', () => {
//         const scrollToTop = document.body.querySelector('.scroll-to-top');
//         if (document.documentElement.scrollTop > 100) {
//             if (!scrollToTopVisible) {
//                 fadeIn(scrollToTop);
//                 scrollToTopVisible = true;
//             }
//         } else {
//             if (scrollToTopVisible) {
//                 fadeOut(scrollToTop);
//                 scrollToTopVisible = false;
//             }
//         }
//     })
// })

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};



function loadCustReview(){
    fetch("https://cts-api-321.herokuapp.com/api/Review")
    .then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        console.log(clientInfo + "client");
        displayIDs(json);
      //  GetClientInfo();
    }).catch(function(error){
        console.log(error);
    });
};

function HandleOnSubmit(){
    AddReview();
}

function GetClientInfo(){
    const apiUrl = "https://cts-api-321.herokuapp.com/api/Client"; 
    //const apiUrl = "https://localhost:5001/api/Client";
    fetch(apiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
        
    })
}

// function GetClientID(json){
//     let id = JSON.parse(clientId);
//     console.log("made it here" + id);
// }


function displayIDs(json){

    // alert(clientInfo);
    console.log(clientInfo+ "client");

    let html = "<div class =\"container\">";


    // json.display(html += "<p><b>ID: </b>" + review.eventId + "</p>",
    // html += "<p><b>Client ID: </b>" + review.clientId + "</p>",
    // html += "<p><b>Package: </b>" + review.package + "</p>"
    // );

    json.forEach(review => {
        html += "<p><b>ID: </b>" + review.eventId + "</p>";
        html += "<p><b>Client ID: </b>" + review.clientId + "</p>";
        html += "<p><b>Package: </b>" + review.package + "</p>";
        
    });
    
    html += "</div>";
    document.getElementById("reviews").innerHTML = html;
}



function AddReview(){
    const apiUrl = "https://cts-api-321.herokuapp.com/api/Review"; 
    //const apiUrl = "https://localhost:5001/api/Review";
    let food = document.getElementById("food").value;
    let music = document.getElementById("music").value; //gets what user inputted 
    let equipment = document.getElementById("equipment").value;
    let overall = document.getElementById("overall").value;
    let text = document.getElementById("text").value
    

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            foodRating: food,
            musicRating: music,
            equipmentRating: equipment,
            overallRating: overall,
            text : text
        })
    })
    .then((response)=> {
        console.log(response);
        console.log(text);
        document.getElementById("food").value = "";
        document.getElementById("music").value = "";
        document.getElementById("equipment").value = "";
        document.getElementById("overall").value = "";
        document.getElementById("text").value = "";
    })
    window.location.href = "https://cts-client.herokuapp.com/employee-home.html";
}
