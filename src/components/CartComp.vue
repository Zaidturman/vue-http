<template>
  <h1>Cart</h1>
  <div class="main">
    <base-card>
     
      <ul>
        <li v-for="item in cart" :key="item.id">
        {{ item.name }}- {{ item.quantity }} - ${{ item.price }}
        </li>
      </ul>
      <p>Total: ${{ total }}</p>
    </base-card>
  </div>
  </template>
  
  <script>
  import BaseCard from '../UI/BaseCard.vue';
  export default {
    props: ['cart'],
    components:{
      BaseCard
    },
    computed: {
       total() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
     
    },
    methods:{
     
    }
    }
  
  </script>
  <style scoped>
.main{
    display: flex;
    justify-content: center;
  
  background-color: var(--main-color);
}
h1 {
    color:var(--main-color);
    text-align: center;
    background-color: var(--text-color);
    margin: 0;
    
}
h6{
  font-family: 'Courier New', Courier, monospace;
  color :red;
}
p ,
li{
    color:var(--text-color);
    text-decoration: none;
}
.mount{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

  </style>
