<script setup>
import Hero from '../components/Hero.vue';
import HomeCards from '../components/HomeCards.vue';
import JobsListing  from '../components/jobsLestens.vue';
import Footer  from '../components/footer.vue';
</script>

<template>
  <Hero />
  <HomeCards />
  <JobsListing limit="3" showButton="true"/>
  <Footer />
</template>
