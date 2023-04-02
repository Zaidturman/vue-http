<template >
    <div class="body">
        <div>
            <h1>Zaid Coffee</h1>
        </div>
        <div class="nav">
            
             <the-nav></the-nav>
        </div>
        <div class="icon">
          <img src="../../public/image/icons8-search-30.png" id="icon1">
          <img src="../../public/image/icons8-fast-cart-64.png" id="icon2">
          

        </div>
        
    
   
    </div>
</template>
<script>
import TheNav from './TheNav.vue';
export default {
    components:{
        TheNav,
    }
}
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
    background-color: var(--main-color);
    
  }
  h1{
    color:var(--text-color);
    font-size: 25px;
   
  }
  .body{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .icon #icon1{
    width: 20px;
    margin-right: 5px;
  }
  .icon #icon1:hover{
    width: 20.5px;
  }
  .icon #icon2:hover{
    width: 20.5px;
  }
  .icon #icon2{
    width: 20px;
  }
  .icon{
    padding: 10px;
    margin: 10px;
  }
</style>
