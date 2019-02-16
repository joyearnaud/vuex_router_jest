<template>
	<div class="error404">
		<h1>{{ msg }}</h1>
		<button v-on:click="getBack();">Get back</button>
	</div>
</template>

<script>
import { router } from '../_helper/router';

export default {
	name: 'Error404',
	data() {
		return {
			msg: '404 Not Found',
		};
	},
	methods: {
		getBack: function() {
			router.push('/helloworld');
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
