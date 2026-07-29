<script setup lang="ts">
import { profile } from '~/data/profile'
import { abs } from '#shared/site'

const title = `${profile.name} — Solutions Engineer`
const description =
  'Solutions Engineer and former full-stack developer (6 years). I own SaaS integration projects end to end — scoping, specifications, deployment, go-live — for HRIS/TMS connectors, APIs and SSO.'
const url = abs('/')
const ogImage = abs('/og-image.png')

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: url,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${profile.name} — Solutions Engineer`,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

useHead({
  link: [{ rel: 'canonical', href: url }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: 'Solutions Engineer',
        email: `mailto:${profile.email}`,
        url,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Vendôme',
          addressCountry: 'FR',
        },
        sameAs: [profile.linkedin, profile.github],
      }),
    },
  ],
})
</script>

<template>
  <main id="main">
    <div class="shell">
      <HeroSection />
      <hr class="rule" />
      <StatementSection />
      <ExperienceSection />
      <SkillsSection />
      <BackgroundSection />
      <CommitmentSection />
    </div>
    <ContactBanner />
  </main>
</template>
