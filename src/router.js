import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: () => import('./views/Shopping.vue'),
    },
    {
      path: '/shopping/:productId',
      name: 'ProductDetail',
      component: () => import('./views/ProductDetail.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('./views/Cart.vue'),
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('./views/Checkout.vue'),
    },
    {
      path: '/order/:orderId',
      name: 'Order',
      component: () => import('./views/Order.vue'),
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('./views/Products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: () => import('./views/Coupons.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orderlist',
          name: 'OrderList',
          component: () => import('./views/OrderList.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue'),
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: () => import('./views/CustomerOrder.vue'),
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: () => import('./views/CustomerCheckout.vue'),
        },
      ],
    },
  ],
});
