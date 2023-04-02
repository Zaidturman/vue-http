<template>
     <base-card >
            <div class="customer">
                <h4 >{{ name }}</h4>
                <img src="../../public/image/icons8-customer-40.png">
            </div>
            <div class="comment">
                <p>{{ comment }}</p>
            </div>
            <base-rate></base-rate>
        </base-card>
</template>
<script>

import BaseCard from '../UI/BaseCard.vue';
import BaseRate from '../UI/BaseRate.vue';

export default {
    props: ['name', 'comment'],
    components:{
        BaseCard,
        BaseRate
    }
}
</script>

<style scoped>
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
</style>