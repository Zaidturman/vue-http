<template>
    <h1 class="header">MENU</h1>
    <div class="main">
        <base-card >
            <h1 >Iced Latte</h1>
            <img src="../../public/image/iced-vanilla-latte.webp">
            <div class="mount"><h5>$15.00</h5>
            
            <base-button>Add</base-button></div>
        </base-card>
        <base-card >
            <h1 >Caffe Mocha</h1>
            <img src="../../public/image/caffe-mocha.webp">

            <div class="mount"><h5>$15.00</h5>
            <base-button>Add</base-button></div>
        </base-card>
        <base-card >
            <h1 >Caramel Mac</h1>
            <img src="../../public/image/iced-caramel-macchiato.webp">

            <div class="mount"><h5>$15.00</h5>
            <base-button>Add</base-button></div>
        </base-card>
        <base-card >
            <h1 >Chocolata far</h1>
            <img src="../../public/image/mocha-blended-iced-img5.webp">
            
            <div class="mount"><h5>$15.00</h5>
            <base-button>Add</base-button></div>
        </base-card>
        <base-card >
            <h1 >Flat White</h1>
            <img src="../../public/image/flat-white.png">
            
            <div class="mount"> <h5>$15.00</h5>
            <base-button>Add</base-button></div>
        </base-card>
        <base-card >
            <h1 >Frappe</h1>
            <img src="../../public/image/caffe-mocha.webp">
            
            <div class="mount">
            <h5>$15.00</h5>
            <base-button>Add</base-button></div>
        </base-card>
        <base-card >
            <h1 >Vanilla Far</h1>
            <img src="../../public/image/VanillaFar.webp">
            
            <div class="mount">
            <h5>$15.00</h5>
            <base-button>Add</base-button></div>
        </base-card>
        <base-card >
            <h1 >Chocolate Mocha</h1>
            <img src="../../public/image/white-chocolate-mocha.webp">
            
            <div class="mount">
            <h5>$15.00</h5>
            <base-button>Add</base-button></div>
        </base-card>
        <base-card >
            <h1 >Arabic Coffee</h1>
            <img src="../../public/image/coffee-bg.png" class="arabic">
            
            <div class="mount">
            <h5>$15.00</h5>
            <base-button>Add</base-button></div>
        </base-card>
    </div>
</template>
<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
export default {
    components:{
        BaseCard,
        BaseButton
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