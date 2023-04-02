<template>
    <div>
    <a href="/" class="a">Home</a>
    <a href="#About" class="a">About Us</a>
    <a href="../view/TheMenu.vue" class="a">Menu</a>
    <a href="../view/CustomersReview.vue" class="a">Customers Review</a>
    <a href="../view/ContactUs.vue" class="a">Contact Us</a>
    </div>

</template>
<script>
  export default {
   
  }
  
</script>
<style scoped>
 div{
    
    padding:10px;
     display: flex;
  justify-content: space-between;
  list-style: none;
  /* Removes the bullet points */
  margin: 10px;
  /* Removes the default margin */
  padding: 0;
  /* Removes the default padding */
  font-size: 13px;
  }
  .a{
    color:var(--first-color);
    font-size: 15px;
    padding: 10px;
  /* Adds some padding to each list item */
  text-decoration: none;
  font-weight: bold;
  }
  
  .a:hover{
    
    color:var(--text-color);

  }
</style>