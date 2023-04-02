<template>
    <h1 class="header">MENU</h1>
    <div class="main">
        <product-comp v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart"></product-comp>
    </div>
    <cart-comp :cart="cart" ></cart-comp>
  
</template>
<script>
import CartComp from '../components/CartComp.vue';
import ProductComp from '../components/ProductComp.vue';
export default {
    components:{
        CartComp,
        ProductComp
    },
    data(){
        return {
            products: [
        { id: 1, name: 'Iced Latte', price: 15, image: "../../public/image/iced-vanilla-latte.webp" },
        { id: 2, name: 'Caffe Mocha', price: 15, image: "../../public/image/caffe-mocha.webp" },
        { id: 3, name: 'Caramel Mac', price: 20, image: "../../public/image/iced-caramel-macchiato.webp" },
        { id: 4, name: 'Chocolata far', price: 18, image: "../../public/image/mocha-blended-iced-img5.webp" },
        { id: 5, name: 'Flat White', price: 17, image: "../../public/image/flat-white.png" },
        { id: 6, name: 'Frappe', price: 15, image: "../../public/image/caffe-mocha.webp" },
        { id: 7, name: 'Vanilla Far', price: 20, image: "../../public/image/VanillaFar.webp" },
        { id: 8, name: 'Chocolate Mocha', price: 20, image: "../../public/image/white-chocolate-mocha.webp" },
        { id: 9, name: 'Arabic Coffee', price: 10, image: "../../public/image/coffee-bg.png" },
      ],
      cart:[],
        }
    },
    methods: {
    addToCart(product) {
      const cartItem = this.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    }
    }
 
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
  background-color: var(--main-color);
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
img{
    width: 200px;
}
img:last-child{
    margin-top: 25px;
}
</style>