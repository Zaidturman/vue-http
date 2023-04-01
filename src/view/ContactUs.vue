<template>
    <h1>Contact Us</h1>
   <div class="main">
     <div class="contact">
        <div>
          <contact-comp></contact-comp>
        </div>
     </div>
     <div class="info">
        <img src="../../public/image/need-more-coffee.png">
        <div class="con">
            <div><h4>
                Phone:
            </h4>
            <p>+972 568 096 370</p>
        </div>
            <div><h4>
                Office Hours:
            </h4>
            <p>
                Every Day 
            </p>
            <p>
                7:00Am To 12:00Am
            </p>
        </div>
        </div>

     </div>
     <div class="madia">
         <img src="../../public/image/icons8-facebook-50.png">
         <img src="../../public/image/icons8-instagram-50.png">
         <img src="../../public/image/icons8-twitter-60.png">
     </div>
   </div>
</template>
<script>
import ContactComp from '../components/ContactComp.vue';
export default {
    components:{
        ContactComp
    }
}
</script>
<style scoped>
.main{
    background-color: var(--main-color);
    display: flex;
    justify-content: space-around;
}


h1{
    color: var(--main-color);
    background-color: var(--text-color);
    margin:0;
    text-align: center;
}
.con{
    color:var(--text-color);
    display: flex;
    justify-content: space-around;
}
.madia img{
    width: 30px;
    margin-top: 5%;
}
.madia{
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-top: 20%;
}
</style>