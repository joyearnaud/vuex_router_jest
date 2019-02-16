import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	numbers: [1, 2, 3],
	user: {
		id: null,
		username: null,
		password: null,
		firstName: null,
		lastName: null,
	},
};

const mutations = {
	ADD_NUMBER(state, payload) {
		state.numbers.push(payload);
	},
	ADD_USER(state, payload) {
		state.user = payload;
	},
};

const actions = {
	addNumber(context, number) {
		debugger;
		context.commit('ADD_NUMBER', number);
		debugger;
	},
	addUser(context, user) {
		context.commit('ADD_USER', user);
	},
};

const getters = {
	getNumbers(state) {
		return state.numbers;
	},
	getUser(state) {
		return state.user;
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
