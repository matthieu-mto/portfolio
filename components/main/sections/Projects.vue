<template>
  <div class="section section__skills">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection text="projects" class="gr-12" />
      </div>
      <div class="gr-row gr-row--align-center">
        <Project
          slug="supertrash"
          project-title="Supertrash"
          project-date="February 2020"
          project-link="https://gitlab.com/mattmlz-school/supertrash"
          project-description="For this generative design project, we have created a site dedicated to Supertrash's event service. Do you want to be helped in the processing of your waste for your festival? Supertrash will offer you a unique design for your trash cans that will be placed in the festival."
        />
        <Project
          slug="weisser-ring"
          project-title="Weisser Ring - winter animation"
          project-date="October 2019"
          project-link="https://spenden.weisser-ring.de/"
          project-description="During my internship at Taikonauten, I worked on a winter animation for Weisser Ring. This animation may not appear if it's not winter time ❄️"
        />
        <Project
          slug="hypatos"
          project-title="Hypatos phase 2"
          project-date="August 2019"
          project-link="http://hypatos.ai/"
          project-description="During my internship at Taikonauten, I made the development of the new website of Hypatos."
        />
        <Project
          slug="ecologia"
          project-title="Ecologia"
          project-date="October 2018"
          project-link="/"
          project-description="For a school project, we had to create a wordpress theme about ecology. This project is not online anymore."
        />
        <Project
          slug="wizer"
          project-title="Mini site for an app"
          project-date="October 2018"
          project-link="http://lab.matthieutoussaint.fr/wizer/"
          project-description="We had to create a product for a school projet about reading. We decided to think about an app which facilitate the storing the data of an article. I developed a mini-site to present this application project."
        />
        <Project
          slug="graduation-video"
          project-title="Video realisation for HETIC graduation"
          project-date="June 2018"
          project-link="https://vimeo.com/278643634"
          project-description="I had the opportunity to work with the director of HETIC to create and edit the graduation video for the 2017's promotion of HETIC."
        />
        <Project
          slug="super-voisin"
          project-title="Super Voisin"
          project-date="April 2018"
          project-link="http://super-voisin.matthieutoussaint.fr/"
          project-description="Super Voisin is a school project realized in group during an intensive week. Super Voisin is based on a system of exchange of services against a virtual currency: the 'Super Coins'. The superheroes who offer their services do not do so not financial interest but only because they want to help their neighbors. Users can buy 'Super Coins', the money collected can cover the running costs of the site. This project isn't maintained anymore and errors may appear."
        />
        <Project
          slug="weather-companion"
          project-title="Weather Companion"
          project-date="March 2018"
          project-link="http://lab.matthieutoussaint.fr/weather-companion/"
          project-description="Weather companion is a school project which will be able to ask you your destination, so you can discover if the weather will be good to drive with your motorbike or your scooter, from your location (detected by Google Maps Geolocation API) to your destination. This project isn't maintained anymore and errors may appear."
        />
        <Project
          slug="spacex"
          project-title="Space X - BFR"
          project-date="December 2017"
          project-link="http://lab.matthieutoussaint.fr/spacex/"
          project-description="During an intensive week, we had to realize as a team a complete site on one of the subjects dealt with by SpaceX. We decided to work on the Big Falcon Rocket (BFR)."
        />
        <Project
          slug="player"
          project-title="Biglfo &amp; Oli - Player video"
          project-date="November 2017"
          project-link="http://lab.matthieutoussaint.fr/bigflo-oli-player/"
          project-description="We had, for a school project, the instruction to develop a video player from scratch. My choice fell on a video of the French rap group Bigflo &amp; Oli."
        />
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from '@/components/titles/TitleSection.vue'
import Project from '@/components/misc/Project.vue'
export default {
  components: {
    TitleSection,
    Project
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.section {
  &__projects {
    margin-bottom: $margin-50;
  }
}
</style>
