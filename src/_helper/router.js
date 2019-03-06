import Vue from 'vue';
import Router from 'vue-router';

import store from '../store/index.js';

import Landing from '../components/Landing';
import Home from '../components/Home';
import Messages from '../components/Messages';
import Friends from '../components/Friends';
import Accueil from '../components/Accueil';
import Error404 from '../components/Error404';

Vue.use(Router);

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
			path: '/landing',
			name: 'landing',
			title: 'Landing',
			component: Landing,
			children: [
				{
					path: '/home',
					name: 'home',
					title: 'Home',
					component: Home,
				},
				{
					path: '/messages',
					name: 'messages',
					title: 'Messages',
					component: Messages,
				},
				{
					path: '/friends',
					name: 'friends',
					title: 'Friends',
					component: Friends,
				},
				{
					path: '',
					redirect: { name: 'home' },
				},
			],
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

let returnFromError = '/';

router.beforeEach((to, from, next) => {
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ['/', '/error404'];
	const authRequired = !publicPages.includes(to.path);
	// const loggedIn = localStorage.getItem('user');
	const loggedIn = store.getters.getUser;
	const isLogged = !!Object.values(loggedIn).filter(x => x).length;

	if ('/error404' === to.fullPath) {
		returnFromError = to.params[0];
	}
	if (authRequired && !isLogged) {
		if ('/error404' === from.fullPath) {
			return next({
				path: '/',
				query: { returnUrl: returnFromError },
			});
		}
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
