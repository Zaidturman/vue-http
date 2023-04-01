<template>
    <div class="body">
        <div class="img">
            <img src="">
             <div class="info">
                <div>
                  <h1>Coffee Time</h1><br>
                  <h5>Makes Your Day special </h5>
                  <p>The Key Thing That Pepole Find Difficult To Understand Is That Coffee Is More Than Just Coffee</p>
                  <base-button>Shop Now</base-button>
                </div>
            </div>
        </div> 
       
    </div>
</template>
<script>
export default {
    components:{
        
    }
}
</script>

<style scoped>
.img{
    background-image: url("../../public/image/backgrounfCafe.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 400px;
}
.info{
    color:var(--text-color);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
    text-align:center ;
}
.info div p{
    max-width: 300px;
}
.info div h5{
    margin-top: 0;
    
}

</style>