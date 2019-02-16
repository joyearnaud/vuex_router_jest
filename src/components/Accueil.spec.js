import {
	mount,
	shallow,
	shallowMount,
	createLocalVue,
	RouterLinkStub,
} from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import users from '../store/modules/users.js';

import Accueil from './Accueil.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const router = localVue.use(VueRouter);

describe('Accueil.vue', () => {
	let actions;
	let state;
	let store;
	beforeEach(() => {
		state = {
			numbers: [1, 2, 3],
			user: {
				id: null,
				username: null,
				password: null,
				firstName: null,
				lastName: null,
			},
		};
		actions = {
			addUser: jest.fn(),
			addNumber: jest.fn(),
		};
		store = new Vuex.Store({
			modules: {
				myModule: {
					state,
					actions,
					getters: users.getters,
				},
			},
		});
	});

	it('should fetch store', () => {
		const wrapper = shallowMount(Accueil, { store, localVue });

		expect(store.getters.getNumbers).toEqual([1, 2, 3]);
		expect(store.getters.getUser).toEqual({
			firstName: null,
			id: null,
			lastName: null,
			password: null,
			username: null,
		});
	});

	it('should fetch add user by loggin', () => {
		const wrapper = shallowMount(Accueil, { store, localVue });

		const textInputUsername = wrapper.find('input[name="username"]');
		const textInputPassword = wrapper.find('input[name="password"]');
		const loginButton = wrapper.find('button');

		// textInputUsername.setValue('test');
		// textInputPassword.setValue('test');
		textInputUsername.element.value = 'test';
		textInputUsername.trigger('input');
		textInputPassword.element.value = 'test';
		textInputPassword.trigger('input');

		wrapper.find('form').trigger('submit.prevent');

		expect(actions.addNumber).not.toHaveBeenCalled();
		expect(actions.addUser).toHaveBeenCalled();

		expect(store.getters.getNumbers).toEqual([1, 2, 3]);
		expect(store.getters.getUser).toEqual({
			firstName: 'Arn',
			id: 1,
			lastName: 'Boy',
			username: 'test',
			authdata: 'dGVzdDp0ZXN0',
		});
	});
});
