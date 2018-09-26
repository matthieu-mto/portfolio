const requestURL = 'http://localhost:3000/data/all.json'
const request = new XMLHttpRequest()

const $header = document.querySelector('header.header')
const $section_about = document.querySelector('section.about')

request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function() {
    const response = request.response
    section_header(response)
    section_about(response)
}

function section_header(jsonObj) {
    const $general_title = $header.querySelector('h1.title')
    $general_title.innerHTML = jsonObj['general'].title

    const $general_picture = $header.querySelector('img.profile-picture')
    $general_picture.src = jsonObj['general'].picture

    const $general_description = $header.querySelector('p.description')
    $general_description.innerHTML = jsonObj['general'].description

}

function section_about(jsonObj) {
    const about = jsonObj['about']
    const description = about.description
    const $description = $section_about.querySelector('div.description')

    for(var i=0; i < description.length; i++) {
        $description.innerHTML += "<p class='"+description[i].class+"'>"+description[i].content+"<p/>"
    }
}