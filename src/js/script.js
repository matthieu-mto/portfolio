const requestURL = 'http://localhost:3000/data/all.json';
const request = new XMLHttpRequest();

const $header = document.querySelector('.header')

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const response = request.response;
    general(response);
}

function general(jsonObj) {
    const $general_title = $header.querySelector('h1.title')
    $general_title.innerHTML = jsonObj['general'].title

    const $general_picture = $header.querySelector('img.profile-picture')
    $general_picture.src = jsonObj['general'].picture

    const $general_description = $header.querySelector('p.description')
    $general_description.innerHTML = jsonObj['general'].description

}