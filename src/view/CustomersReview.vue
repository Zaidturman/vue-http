<template >
    <div class="back">
    <h1 class="header">CUSTOMER REVIEW</h1>
    <div>
        <base-button @click="loadExperiences">Load Review</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p
        v-else-if="!isLoading && (!results || results.length === 0)"
      >No stored experiences found. Start adding some survey results first.</p>
       <div class="main">
        <review-result
        v-for="result in results"
          :key="result.id"
          :name="result.name"
          :comment="result.comment"
        ></review-result>
       </div>
        <div class="btn">
           
        <base-button @click="toggleShow()">New Review</base-button>
    </div>
    <add-review v-if="isShow"></add-review>
    </div>
        
       
       
    
</template>
<script>
import BaseButton from '../UI/BaseButton.vue';
import AddReview from '../components/AddReview.vue';
import ReviewResult from '../components/ReviewResult.vue';
export default {
    data(){
        return{
            isShow:false,
            results: [],
      isLoading: false,
      error: null,
        }
    },
    methods:{
       toggleShow(){
          this.isShow = !this.isShow
       },
       loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch('https://caffee-project-cb700-default-rtdb.firebaseio.com//surveys.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              comment: data[id].comment,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fetch data - please try again later.';
        });
    },
    },
    components:{
        
        BaseButton,
        AddReview,
        ReviewResult
    },
    mounted() {
    this.loadExperiences();
  },
}
</script>
<style scoped>
.header{
    background-color: var(--text-color);
    color:var(--main-color);
    margin:0;
}
.main{
    display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.back{
    background-color: var(--main-color);

}
h4 {
    color:var(--text-color);
    text-align: start;
    
}
h1 {
    color:var(--text-color);
    text-align: center;
    
}
p{
    color:var(--text-color);
    
}
.mount{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.customer{
    display: flex;
    justify-content: space-around;
}
.btn{
    display: flex;
    justify-content: center;
    
}

</style>