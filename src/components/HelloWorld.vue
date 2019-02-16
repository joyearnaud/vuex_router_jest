<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p>number depuis le store : {{ getNumbers }}</p>
		<p>user depuis le store : {{ getUserInfo }}</p>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data: function() {
		return {
			numbers: [],
			user: {},
			msg: 'Welcome to Your Vue.js App',
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
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
