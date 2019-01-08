<template>
  <div>
    <HomeNavbar/>
    <HomeContent/>
    <HomeProducts/>
    <Footer/>
  </div>
</template>

<script>
import HomeNavbar from '../components/HomeNavbar.vue';
import HomeContent from '../components/HomeContent.vue';
import HomeProducts from '../components/HomeProducts.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    HomeNavbar,
    HomeContent,
    HomeProducts,
    Footer,
  },
};
</script>
