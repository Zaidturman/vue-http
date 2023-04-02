<template>
    <div>
      <input v-model="query" placeholder="Search...">
      <button @click="search">Search</button>
     <!--  <ul>
        <li v-for="result in results" :key="result.id">{{ result.title }}</li>
      </ul> -->
    </div>
  </template>
  
  <script>
/*   import axios from 'axios';
 */  
  export default {
    data() {
      return {
        query: '',
        results: []
      }
    },
    methods: {
     /*  async search() {
        const response = await axios.get(`/api/search?q=${this.query}`);
        this.results = response.data;
      } */
    }
  }
  </script>
  
  
<style scoped>
</style>