<template >
    <div class="back">
    <h1 class="header">CUSTOMER REVIEW</h1>
    <div class="main">
        <base-card >
            <div class="customer">
                <h4>Zaid turman</h4>
                <img src="../../public/image/icons8-customer-40.png">
            </div>
            <div class="comment">
                <p>We strive to being out the best in these carefully harvested and ve strive to bring out</p>
            </div>
            <base-rate></base-rate>
        </base-card>
        <base-card >
            <div class="customer">
                <h4>Ali</h4>
                <img src="../../public/image/icons8-customer-40.png">
            </div>
            <div class="comment">
                <p>We strive to being out the best in these carefully harvested and ve strive to bring out</p>
            </div>
            <base-rate></base-rate>
        </base-card>
        <base-card >
            <div class="customer">
                <h4>Sara</h4>
                <img src="../../public/image/icons8-customer-40.png">
            </div>
            <div class="comment">
                <p>We strive to being out the best in these carefully harvested and ve strive to bring out</p>
            </div>
            <base-rate></base-rate>
        </base-card>
        <base-card >
            <div class="customer">
                <h4>Ahmad</h4>
                <img src="../../public/image/icons8-customer-40.png">
            </div>
            <div class="comment">
                <p>We strive to being out the best in these carefully harvested and ve strive to bring out</p>
            </div>
            <base-rate></base-rate>
        </base-card>
        <base-card >
            <div class="customer">
                <h4>Jon</h4>
                <img src="../../public/image/icons8-customer-40.png">
            </div>
            <div class="comment">
                <p>We strive to being out the best in these carefully harvested and ve strive to bring out</p>
            </div>
            <base-rate></base-rate>
        </base-card>
        </div>
        <div class="btn">
        <base-button >New Review</base-button>
    </div>
    </div>
        
       
       
    
</template>
<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseRate from '../UI/BaseRate.vue';
import BaseButton from '../UI/BaseButton.vue';
export default {
    components:{
        BaseCard,
        BaseRate,
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
}
.back{
    background-color: var(--main-color);

}
h4 {
    color:var(--text-color);
    text-align: start;
    
}
h1 {
    color:var(--text-color);
    text-align: center;
    
}
p{
    color:var(--text-color);
    
}
.mount{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.customer{
    display: flex;
    justify-content: space-around;
}
.btn{
    display: flex;
    justify-content: center;
    
}

</style>