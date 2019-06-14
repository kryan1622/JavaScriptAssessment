
function makeRequest(method, url, body) {

    return new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest

        req.open(method, url);
        req.send(body);
        req.onload = function () {
            const data = JSON.parse(req.responseText);
            if (req.status === 200) {
                resolve(data);
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(Error("Network Error"))
        }
    })
}


function findMovie() {
    let id = document.getElementById("movie").value;
    sessionStorage.setItem('movie', Number(document.getElementById("movie").value));
    makeRequest("GET", "http://www.omdbapi.com/?apikey=6bad81d7&s=" + id)
        .then((data) => {
            const container2 = document.getElementById('movieTable');
            console.log(data.Search[0].Type);

            for (let i = 0; i < 11; i++) {
            let myRow = document.createElement('tr');
            container2.appendChild(myRow);
                let myTitle = document.createElement('td');
                myTitle.innerHTML =data.Search[i].Title;
                let myYear = document.createElement('td');
                myYear.innerHTML = data.Search[i].Year;
                let myType = document.createElement('td');
                myType.innerHTML = data.Search[i].Type;
                
                myRow.appendChild(myTitle);
                myRow.appendChild(myYear);
                myRow.appendChild(myType);

            }
        })
        .catch((error) => console.log(error.message));
    return false;
}


