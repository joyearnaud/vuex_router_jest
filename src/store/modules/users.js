import Vue from 'vue';
import Vuex from 'vuex';

import {
	ADD_NUMBER,
	ADD_USER,
	LOGOFF_USER,
	CHANGE_LAST_CONNEXION,
	SOCKET_MESSAGE,
	CHANGE_LAST_REFRESH,
} from './mutation-type';

Vue.use(Vuex);

const userDefault = {
	authdata: null,
	id: null,
	username: null,
	password: null,
	firstName: null,
	lastName: null,
	lastLogin: null,
};

const state = {
	numbers: [1, 2, 3],
	user: { ...userDefault },
	lastConnexion: null,
	lastRefresh: null,
	messages: [],
};

const mutations = {
	[ADD_NUMBER](state, payload) {
		state.numbers.push(payload);
	},
	[ADD_USER](state, payload) {
		state.user = { ...payload };
	},
	[LOGOFF_USER](state) {
		state.user = { ...userDefault };
	},
	[CHANGE_LAST_CONNEXION](state) {
		state.lastConnexion = new Date();
	},
	[CHANGE_LAST_REFRESH](state) {
		state.lastRefresh = new Date();
	},
	[SOCKET_MESSAGE](state, payload) {
		state.messages.push(payload);
	},
};

const actions = {
	//USER
	addNumber(context, number) {
		context.commit(ADD_NUMBER, number);
	},
	addUser(context, user) {
		let userWithLastLoginDate = { ...user, lastLogin: new Date() };
		context.commit(ADD_USER, userWithLastLoginDate);
		context.commit(CHANGE_LAST_CONNEXION);
	},
	changeLastRefresh(context) {
		context.commit(CHANGE_LAST_REFRESH);
	},
	logoffUser(context) {
		context.commit(LOGOFF_USER);
	},
	//MESSAGE
	SOCKET_MESSAGE(context, message) {
		context.commit(SOCKET_MESSAGE, message);
	},
};

const getters = {
	getNumbers(state) {
		return state.numbers;
	},
	getUser(state) {
		return state.user;
	},
	getLastConnexion(state) {
		return state.lastConnexion;
	},
	getLastRefresh(state) {
		return state.lastRefresh;
	},
	getMessages(state) {
		return state.messages;
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
