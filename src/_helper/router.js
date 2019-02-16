import Vue from 'vue';
import Router from 'vue-router';

import store from '../store';

import HelloWorld from '../components/HelloWorld';
import Accueil from '../components/Accueil';
import Error404 from '../components/Error404';

Vue.use(Router);

//https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store

export const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'accueil',
			title: 'Accueil',
			component: Accueil,
		},
		{
			path: '/helloworld',
			name: 'helloworld',
			title: 'HelloWorld',
			component: HelloWorld,
		},
		{
			path: '/error404',
			name: 'error404',
			title: 'Error404',
			component: Error404,
		},

		// otherwise redirect to home
		{ path: '*', redirect: { name: 'error404' } },
	],
});

router.beforeEach((to, from, next) => {
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ['/', '/error404'];
	const authRequired = !publicPages.includes(to.path);
	// const loggedIn = localStorage.getItem('user');
	const loggedIn = store.getters.getUser;
	const isLogged = !!Object.values(loggedIn).filter(x => x).length;
	if (authRequired && !isLogged) {
		return next({
			path: '/',
			query: { returnUrl: to.path },
		});
	}

	next();
});

router.afterEach((to, from) => {
	//setTimeout(() => (app.loading = false), 1500);
});
