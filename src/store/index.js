import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate';

import users from './modules/users';

Vue.use(Vuex);

const logger = createLogger({
	collapsed: false, // auto-expand logged mutations
	filter(mutation, stateBefore, stateAfter) {
		// returns `true` if a mutation should be logged
		// `mutation` is a `{ type, payload }`
		return mutation.type !== 'aBlacklistedMutation';
	},
	transformer(state) {
		// transform the state before logging it.
		// for example return only a specific sub-tree
		return state.users;
	},
	mutationTransformer(mutation) {
		// mutations are logged in the format of `{ type, payload }`
		// we can format it any way we want.
		return mutation;
	},
	logger: console, // implementation of the `console` API, default `console`
});

export default new Vuex.Store({
	modules: {
		users: users,
	},
	plugins: [logger, createPersistedState()],
});
