<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row">
        <main role="main" class="col px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
