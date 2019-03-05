<template>
	<transition name="fade" mode="out-in">
		<router-view></router-view>
	</transition>
</template>

<script>
export default {
	name: 'App',
	data: function() {
		return {};
	},
	mounted() {
		window.addEventListener('beforeunload', this.leaving);
	},
	methods: {
		leaving: function() {
			this.$store.dispatch('changeLastRefresh');
		},
	},
};
</script>

<style></style>
