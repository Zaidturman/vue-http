<template id="About">
    <div class="main">
        <div class="sec1">
            <img src="">
        </div>
        <div class="sec2">
            <h4 class="txt1">What Makes Our Coffee Special?</h4>
            <h4 class="txt2">1. Quality of the coffee</h4>
            <h4 class="txt3">we strive to bring out the best in these carefully harvested and processed beans.</h4>
            <h4 class="txt2">2. Differently Roasted Coffee</h4>
            <h4 class="txt3">The Role of A Roaster in developing a balanced and rich flavor profile of a coffee in the specialty coffee world cannot be understand.</h4>
        </div>

    </div>

</template>
<style scoped>
.main{
    display: flex;
  

  
  height: 100vh;
}

.sec1{
   width: 50%;
   background-image: url("../../public/image/sec2coffee.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  box-shadow:inset 0 0 10px rgba(0, 0, 0, 0.555);
    justify-content: flex-start;

}
.sec2{
    width: 50%;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--main-color);
    color:white;
    text-align: center;

}
.txt1{
   font-weight: bold;
   margin-top: 100px;
}
.txt2{
    color:var(--text-color)
}
</style>