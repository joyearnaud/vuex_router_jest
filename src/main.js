// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import SuiVue from 'semantic-ui-vue';
import VueSocketIO from 'vue-socket.io';

import { router } from './_helper/router.js';

import 'semantic-ui-css/semantic.min.css';

// setup fake backend
import { configureFakeBackend } from './_helper/fakeBakend';
configureFakeBackend();

Vue.config.devtools = true;
Vue.config.productionTip = false;

Vue.use(SuiVue);
Vue.use(
	new VueSocketIO({
		debug: true,
		connection: 'https://meetus-back.herokuapp.com:80',
		vuex: {
			store,
			actionPrefix: 'SOCKET_',
			mutationPrefix: 'SOCKET_',
		},
	}),
);

const state = {
	loading: false,
};

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: { App },
	data: {
		state,
	},
	template: '<App/>',
	created: function() {
		// `this` points to the vm instance
		console.log('[App started]');
	},
});
