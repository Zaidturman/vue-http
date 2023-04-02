 <template>
 <section>
    <base-card>
      <h2>Add Review</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <div>
        <label for="message">Message</label>
      <textarea id="message" name="message" v-model.trim="enteredComment"></textarea>
       </div>
       <div>

       </div>
        
        <p
          v-if="invalidInput"
        >One or more input fields are invalid. Please check your provided data.</p>
        <p v-if="error">{{ error }}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredComment:'',
      chosenRating: null,
      invalidInput: false,
      error: null,
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || this.enteredComment==='') {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      this.error = null;
      fetch('https://caffee-project-cb700-default-rtdb.firebaseio.com/surveys.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.enteredName,
          comment: this.enteredComment,
          rating: this.chosenRating,
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
      this.enteredComment = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
section{
    color:var(--text-color)
}
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  margin-top: 0.5rem;
}
</style>