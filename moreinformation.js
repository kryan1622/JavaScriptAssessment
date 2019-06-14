
function moreInformation(){
    let req = new XMLHttpRequest();
    req.onload = function(){
        console.log(req.responseText)
    }
    let id = document.getElementById("specificmovie").value;
    req.open("GET", "http://www.omdbapi.com/?apikey=6bad81d7&t=" + id)
    req.send();
}

//method prints to console was moving on to put in table but ran out of time