<template>
	<sui-container><MenuTop /><router-view></router-view> </sui-container>
</template>

<script>
import { router } from '../_helper/router';
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
