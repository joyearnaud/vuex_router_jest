// import {
// 	mount,
// 	shallow,
// 	createLocalVue,
// 	RouterLinkStub,
// } from '@vue/test-utils';
// import Vuex from 'vuex';
// import VueRouter from 'vue-router';

// import store from '../store';

// import HelloWorld from './HelloWorld.vue';

// const localVue = createLocalVue();

// localVue.use(Vuex);
// function createWrapper() {
// 	return mount(HelloWorld, { localVue, store });
// }

// const router = localVue.use(VueRouter);

// describe('HelloWorld.vue', () => {
// 	it('should fetch store', () => {
// 		const wrapper = createWrapper();

// 		expect(store.getters.getNumbers).toEqual([1, 2, 3, 9]);
// 		expect(store.getters.getUser).toEqual({
// 			firstName: null,
// 			id: null,
// 			lastName: null,
// 			password: null,
// 			username: null,
// 		});
// 	});
// });
