import Vue from 'vue';
import App from './App.vue';
import VueSoonspace from 'vue-soonspace';

Vue.config.productionTip = false;

Vue.use(VueSoonspace);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
