<template>
    <div class="container">
    
    <form  @submit.prevent="submitMassage">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Name" v-model.trim="enteredName" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Email" v-model.trim="enteredEmail" required>

      <label for="message">Message:</label>
      <textarea id="message" name="message" placeholder="Massage" v-model.trim="enteredMassage" required></textarea>

      <base-button >Submit</base-button>
    </form>
  </div>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
    components:{
        BaseButton
    },
   
  data() {
    return {
      enteredName: '',
      enteredEmail:'',
      enteredMassage:'',
     
      invalidInput: false,
      error: null,
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitMassage() {
      if (this.enteredName === '' || this.enteredEmail==='' || this.enteredMassage==='') {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      this.error = null;
      fetch('https://https://caffee-project-requests-default-rtdb.firebaseio.com/surveys.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cname: this.enteredName,
          email: this.enteredEmail,
          massage: this.enteredMassage,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // ...
          } else {
            throw new Error('Could not save data!');
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });

      this.enteredName = '';
      this.enteredEmail = '';
      this.enteredMassage = '';
    },
  },
};


</script>
<style scoped>
.container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}

h1 {

  text-align: center;
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
    color:var(--text-color);
  font-size: 14px;
  margin-bottom: 5px;
}

input,
textarea {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: #404040;
  color: #fff;
}

button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  
  font-weight: bold;
  cursor: pointer;
}
</style>