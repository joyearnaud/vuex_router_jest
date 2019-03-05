<template>
	<sui-container>
		<h1>{{ msg }}</h1>
		<p>number depuis le store : {{ getNumbers }}</p>
		<p>user depuis le store : {{ getUserInfo }}</p>
		<p>lastRefresh depuis le store : {{ getLastRefresh }}</p>
	</sui-container>
</template>

<script>
import { router } from '../_helper/router';
import MenuTop from './MenuTop';

export default {
	name: 'Home',
	data: function() {
		return {
			numbers: [],
			user: {},
			msg: 'Welcome home boy !',
		};
	},
	methods: {
		getFullName: function(user) {
			return user.firstName + ' ' + user.lastName;
		},
	},
	computed: {
		getNumbers: function() {
			return this.$store.getters.getNumbers;
		},
		getUser: function() {
			return this.$store.getters.getUser;
		},
		getUserInfo: function() {
			return this.getFullName(this.getUser);
		},
		getLastRefresh: function() {
			return this.$store.getters.getLastRefresh;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
