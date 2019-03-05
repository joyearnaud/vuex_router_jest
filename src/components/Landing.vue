<template>
	<div class="ui container"><MenuTop /><router-view></router-view></div>
</template>

<script>
import MenuTop from './MenuTop';

export default {
	name: 'Landing',
	data: function() {
		return {};
	},
	components: {
		MenuTop,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
