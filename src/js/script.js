/* Request for datas */
const requestURL = 'http://localhost:3000/data/all.json'
const request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

/* Variables */
const $header = document.querySelector('header.header')
const $section_about = document.querySelector('section.about')
const $section_projects = document.querySelector('section.projects')

/* Functions - generation of content in HTML */
request.onload = function() {
    const response = request.response
    section_header(response)
    section_about(response)
    section_projects(response)
}

/* Generate header */
function section_header(jsonObj) {
    const $general_title = $header.querySelector('h1.title')
    $general_title.innerHTML = jsonObj['general'].title

    const $general_picture = $header.querySelector('img.profile-picture')
    $general_picture.src = jsonObj['general'].picture

    const $general_description = $header.querySelector('p.description')
    $general_description.innerHTML = jsonObj['general'].description

}

/* Generate about section */
function section_about(jsonObj) {
    const about = jsonObj['about']
    const description = about.description
    const $description = $section_about.querySelector('div.description')
    const skills = about.skills
    const $skills = $section_about.querySelector('div.skills')
    const socials = about.socials
    const $socials = $section_about.querySelector('div.socials')

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
        $skill.classList.add(skills[i].slug)
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

    //Generate about socials
    for(var i=0; i < socials.length; i++) {
        const $social = document.createElement('div')
        $social.classList.add('social')
        $social.classList.add(socials[i].slug)
        const $social_img = document.createElement('img')
        const $social_p = document.createElement('p')
        const $social_link = document.createElement('a')

        $social_img.src = 'src/img/svg/'+socials[i].slug+'.svg'
        $social_img.alt = socials[i].slug
        $social_img.classList.add(socials[i].slug)


        $social_p.innerHTML = socials[i].title
        $social_p.classList.add('social-name')

        $social_link.setAttribute('href', socials[i].link)
        $social_link.setAttribute('target', '_blank')

        $social_link.appendChild($social_img)
        $social_link.appendChild($social_p)
        $social.appendChild($social_link)

        $socials.appendChild($social)
    }
}

/* Generate projects */
function section_projects(jsonObj) {
    const projects = jsonObj['projects']
    const $projects = $section_projects.querySelector('div.projects')

    for(var i=0; i < projects.length; i++) {
        const $project = document.createElement('div')
        const $project_title = document.createElement('h3')
        const $project_date = document.createElement('h4')
        const $project_description = document.createElement('p')

        $project.classList.add('project', projects[i].slug)

        $project_title.innerHTML = projects[i].title
        $project_date.innerHTML = projects[i].date
        $project_description.innerHTML = projects[i].description

        $project.appendChild($project_title)
        $project.appendChild($project_date)

        if(projects[i].link) {
            const $project_link = document.createElement('a')

            $project_link.setAttribute('href', projects[i].link)
            $project_link.setAttribute('target', '_blank')
            $project_link.innerHTML = 'discover'

            $project.appendChild($project_link)
        }

        if(projects[i].preview == true) {
            const $project_preview = document.createElement('img')

            $project_preview.src = 'src/medias/previews/'+projects[i].slug+'.png'
            $project_preview.alt = projects[i].slug

            $project.appendChild($project_preview)
        }

        $project.appendChild($project_description)


        $projects.appendChild($project)
    }
}