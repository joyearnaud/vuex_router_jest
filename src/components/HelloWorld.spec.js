import {
	mount,
	shallow,
	createLocalVue,
	RouterLinkStub,
} from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import storeLegacy from '../store';

import HelloWorld from './HelloWorld.vue';

let store;
const localVue = createLocalVue();

localVue.use(Vuex);
function createWrapper() {
	return mount(HelloWorld, { localVue, store });
}

const router = localVue.use(VueRouter);

describe('HelloWorld.vue', () => {
	beforeEach(() => {
		store = new Vuex.Store({
			modules: {
				store: storeLegacy,
			},
		});
	});

	it('should fetch store', () => {
		const wrapper = createWrapper();

		expect(store.getters.getNumbers).toEqual([]);
	});
});
