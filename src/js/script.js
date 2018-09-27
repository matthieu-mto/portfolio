//Request for datas
const requestURL = 'http://localhost:3000/data/all.json'
const request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

//Variables
const $header = document.querySelector('header.header')
const $section_about = document.querySelector('section.about')


request.onload = function() {
    const response = request.response
    section_header(response)
    section_about(response)
}

//Generate header
function section_header(jsonObj) {
    const $general_title = $header.querySelector('h1.title')
    $general_title.innerHTML = jsonObj['general'].title

    const $general_picture = $header.querySelector('img.profile-picture')
    $general_picture.src = jsonObj['general'].picture

    const $general_description = $header.querySelector('p.description')
    $general_description.innerHTML = jsonObj['general'].description

}

//Generate about section
function section_about(jsonObj) {
    const about = jsonObj['about']
    const description = about.description
    const $description = $section_about.querySelector('div.description')
    const skills = about.skills
    const $skills = $section_about.querySelector('div.skills')

    //Generate about descriptions
    for(var i=0; i < description.length; i++) {
        const $descriptions = document.createElement('p')
        $descriptions.innerHTML = description[i].content
        $descriptions.classList.add(description[i].class)
        $description.appendChild($descriptions)
    }

    //Generate about skills
    for(var i=0; i < skills.length; i++) {
        const $skill = document.createElement('div')
        $skill.classList.add('skill')
        const $skill_img = document.createElement('img')
        const $skill_p = document.createElement('p')

        $skill_img.src = 'src/img/svg/'+skills[i].slug+'.svg'
        $skill_img.alt = skills[i].slug
        $skill_img.classList.add(skills[i].slug)

        $skill_p.innerHTML = skills[i].title
        $skill_p.classList.add('skill-name')

        $skill.appendChild($skill_img)
        $skill.appendChild($skill_p)

        $skills.appendChild($skill)
    }
}