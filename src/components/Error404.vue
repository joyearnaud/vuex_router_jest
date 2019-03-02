<template>
	<sui-container text>
		<sui-divider hidden />
		<sui-header>Cette page n'existe pas ou n'existe plus.</sui-header>
		<p>Nous vous prions de nous excuser pour la gêne occasionnée.</p>
		<sui-button animated primary v-on:click="getBack();">
			<sui-button-content visible> Get back </sui-button-content>
			<sui-button-content hidden>
				<sui-icon name="left arrow" />
			</sui-button-content>
		</sui-button>
	</sui-container>
</template>

<script>
import { router } from '../_helper/router';

export default {
	name: 'Error404',
	data() {
		return {
			msg: '',
		};
	},
	methods: {
		getBack: function() {
			router.push('/home');
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
