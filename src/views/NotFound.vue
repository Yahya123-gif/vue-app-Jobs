<script setup>
import {RouterLink} from 'vue-router';
</script>

<template>
   <section class="text-center flex flex-col justify-center items-center h-96">
      <i class="pi pi-exclamation-triangle text-yellow-500 fa-4x text-7xl mb-5  "></i>
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <RouterLink
              to="/"
              class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2"
              >Go Back</RouterLink
            >
    </section>
</template>
<!-- <template>
    <section class="flex items-center justify-center h-screen">
      <div class="max-w-4xl mx-auto p-8">
        <div class="flex items-center">
            <i class="pi pi-exclamation-triangle text-yellow-400 fa-4x"></i>
            <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
            <p class="text-xl mb-5">This page does not exist</p>
            <RouterLink
              to="/"
              class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2"
              >Go Back</RouterLink
            >
        </div>
      </div>
    </section>
  </template>
  
   -->