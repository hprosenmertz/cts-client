/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

function handleOnLoad(){
    const ApiUrl = "http://cts-api-321.herokuapp.com/api/Review";

    fetch(ApiUrl).then(function(response){   
        return response.json();
    }).then(function(json){
        console.log(json);
        displayPosts(json);
    })
}

function displayPosts(json){

    let html = "<div class =\"container\">";

    json.forEach(review => {
        html += "<p><b>Review: </b>" + review.text + "</p>";
    });
    
    html += "</div>";

    document.getElementById("prevposts").innerHTML = html;
}

// use for new review submission
// function AddPost(){
//     const postApiUrl = "https://localhost:5001/api/Post";
//     let postText = document.getElementById("post").value; //gets what user inputted 
//     fetch(postApiUrl, {
//         method: "POST",
//         headers: {
//             "Accept": 'application/json',
//             "Content-Type": 'application/json'
//         },
//         body: JSON.stringify({
//             Text: postText
//         })
//     })
//     .then((response)=> {
//         console.log(response);
//         document.getElementById("post").value = "";
//         handleOnLoad();
//     })
// }





