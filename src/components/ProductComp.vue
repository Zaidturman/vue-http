<template>
    <div class="main">
    <base-card>
      <h1>{{ product.name }}</h1>
      <p @click="toggleShow" >show ditails</p>
      <div v-if="isShow"> 
        <h1>show ditails </h1>
      </div>
      <div v-else><img src="../../public/image/iced-caramel-macchiato.webp" alt="product image">
      <div class="mount">
    
      <h5>${{ product.price }}</h5>
      <base-button @click="addToCart">Add to Cart</base-button>
    </div>
    </div>
</base-card>
</div>
  </template>
  
  <script>
  import BaseCard from '../UI/BaseCard.vue';
  import BaseButton from '../UI/BaseButton.vue';
  export default {
    props: ['product'],
    data(){
      return {
        isShow:false,
      }
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.product);
      },
      toggleShow(){
        this.isShow=!this.isShow
      }
    },
    components:{
        BaseCard,
        BaseButton
    }
  }
  </script>

  <style scoped>

.main{
    
}
h1 {
    color:var(--text-color);
    text-align: center;
    
}
h5{
    color:var(--text-color);
    
}
.mount{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
p{
  color: white;
  text-align: center;
  margin: 0;
}
img{
    width: 200px;
}
img:last-child{
    margin-top: 25px;
}
</style>