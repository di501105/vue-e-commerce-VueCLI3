<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <section class="container mb-5 mb-md-7">
      <div class="row">
        <div class="col-md-4 mb-5 mb-md-0" v-for="item in threeProducts"
        :key="item.id">
          <div class="product-card">
            <div class="product-image" :style="{backgroundImage: `url(${item.imageUrl})`}">
              <div class="product-tag">本日精選</div>
              <div class="product-favorite">
                <label class="favorite-checked-display">
                  <input type="checkbox" class="favorite-checkbox">
                  <i class="material-icons favorite">
                    favorite
                  </i>
                  <i class="material-icons unfavorite">
                    favorite_border
                  </i>
                </label>
              </div>
            </div>
            <router-link class="product-body text-center d-flex" :to="`/shopping/${item.id}`">
              <div class="product-name col">{{ item.title }}</div>
              <strong class="product-price col">NT$ {{ item.price }}</strong>
            </router-link>
            <a href="#" class="btn btn-primary-lighter btn-block btn-xl"
            @click.prevent="addtoCart(item.id)">加入購物車</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';


export default {
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products`;
      this.$store.dispatch('getProducts', url);
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('addtoCart', { id, qty });
    },
  },
  computed: {
    threeProducts() {
      return this.products.filter((item, i) => i < 3);
    },
    ...mapGetters(['isLoading', 'products']),
  },
  created() {
    this.getProducts();
  },
};
</script>
