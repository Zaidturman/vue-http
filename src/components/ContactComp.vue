<template>
    <div class="container">
    
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Email" required>

      <label for="message">Message:</label>
      <textarea id="message" name="message" placeholder="Massage" required></textarea>

      <base-button >Submit</base-button>
    </form>
  </div>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
    components:{
        BaseButton
    }
}
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