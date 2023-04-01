<template>
   <the-header></the-header>
   <home-view></home-view>
   <about-us></about-us>
   <the-menu></the-menu>
   <customers-review></customers-review>
   <contact-us></contact-us>

</template>

<script>
import TheHeader from './layout/TheHeader.vue';
import HomeView from './view/HomeView.vue';
import AboutUs from './view/AboutUs.vue';
import TheMenu from './view/TheMenu.vue';
import CustomersReview from './view/CustomersReview.vue';
import ContactUs from './view/ContactUs.vue';
export default {
  components:{
    TheHeader,
    HomeView,
    AboutUs,
    TheMenu,
    CustomersReview,
    ContactUs


  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
:root{
  --main-color:black;
  --text-color:#c6ac8f;
  --first-color:#5e503f;
}
* {
  box-sizing: border-box;

}

html {
  font-family: 'Bebas Neue', cursive;}

body {
  margin: 0;
}
</style>