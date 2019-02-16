// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store";

import { router } from "./_helper/router.js";

// setup fake backend
import { configureFakeBackend } from "./_helper/fakeBakend";
configureFakeBackend();

Vue.config.productionTip = false;

const state = {
  loading: false
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  data: {
    state
  },
  template: "<App/>",
  created: function() {
    // `this` points to the vm instance
    console.log("[App started]");
  }
});
