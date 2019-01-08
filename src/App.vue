<template>
  <div id="app">
    <Alert/>
    <router-view/>
  </div>
</template>

<script>
import Alert from './components/AlertMessage.vue';

export default {
  name: 'App',
  components: {
    Alert,
  },
  // created() {
  //   const api = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/products` //'https://vue-course-api.hexschool.io/api/di/products';
  //   console.log(process.env.APIPATH, process.env.CUSTOMPATH)
  //   this.$http.get(api).then((response) => {
  //     console.log(response.data)
  //   });
  // },
};
</script>


<style lang="scss">
@import "./assets/all";
</style>
