<template>
<Button />
  
  <section class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <div class="text-gray-500 mb-4">{{ state.job.type }}</div>
              <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>
              <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                <i class="pi pi-map-marker text-lg text-orange-700 mr-2"></i>
                <p class="text-orange-700">{{ state.job.location }}</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-green-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p class="mb-4">{{ state.job.description }}</p>

              <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

              <p class="mb-4">{{ state.job.salary }} / Year</p>
            </div>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">{{ state.job.company?.name }}</h3> <!-- Added optional chaining -->

            <p class="my-2">{{ state.job.company?.description }}</p> <!-- Added optional chaining -->

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job.company?.contactEmail }}</p> <!-- Added optional chaining -->

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job.company?.contactPhone }}</p> <!-- Added optional chaining -->
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.job.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Edit Job
            </RouterLink>
            <button @click="deleteJob"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Button from '../components/backButton.vue'
import { reactive, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import jobsListing from '../components/jobsLesting.vue'; // Corrected import statement
import Buton from '../components/backButton.vue';

const route = useRoute();
const jobID = route.params.id;
const toast = useToast();
const router = useRouter();

const state = reactive({
  job: {}
});

const deleteJob = async () => {
  try {
    const confirm = window.confirm('Are You Sure You Want To Delete This Job? ');
    if(confirm){
      await axios.delete(`/api/jobs/${jobID}`);
      toast.success('Job deleted successfully');
      router.push('/jobs');
    }
    
  } catch (error) {
    console.error('Error deleting job:', error);
    toast.error('Job not deleted');
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobID}`);
    state.job = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>