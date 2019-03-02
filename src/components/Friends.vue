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
	let mutations;
	let getters;
	let state;
	let store;

	let spy;

	afterEach(() => {
		spy.mockClear();
		store.reset();
	});

	beforeEach(() => {
		actions = {
			addUser: jest.fn(),
			addNumber: jest.fn(),
		};
		mutations = {
			ADD_NUMBER: jest.fn(),
			ADD_USER: jest.fn(),
		};
		getters = {
			getNumbers: jest.fn(),
			getUser: jest.fn(),
		};
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

		store = new Vuex.Store({
			modules: {
				users: {
					actions,
				},
			},
		});
	});

	it('should fetch add user by loggin', () => {
		const wrapper = shallowMount(Accueil, { store, localVue });

		const textInputUsername = wrapper.find('input[name="username"]');
		const textInputPassword = wrapper.find('input[name="password"]');
		const loginButton = wrapper.find('button');

		textInputUsername.setValue('test');
		textInputPassword.setValue('test');
		textInputUsername.element.value = 'test';
		textInputUsername.trigger('input');
		textInputPassword.element.value = 'test';
		textInputPassword.trigger('input');

		wrapper.find('form').trigger('submit.prevent');

		expect(actions.addNumber).toHaveBeenCalled();
		// expect(addUserMock.mock.calls.length).toBe(1);
		// expect(actions.addUser).toHaveBeenCalled(); WHY ?
	});
});
