<template>
	<sui-menu pointing>
		<a
			is="sui-menu-item"
			v-for="item in items"
			:active="isActive(item)"
			:key="item"
			:content="item"
			@click="select(item);"
		/>
		<sui-menu-menu position="right">
			<sui-menu-item>
				<sui-input transparent icon="search" placeholder="Search..." />
			</sui-menu-item>
			<a
				is="sui-menu-item"
				:active="isActive('Logout')"
				content="logout"
				@click="logOff"
			/>
		</sui-menu-menu>
	</sui-menu>
</template>

<script>
import { router } from '../_helper/router';

export default {
	name: 'MenuTop',
	data: function() {
		return {
			active: 'home',
			items: ['home', 'messages', 'friends'],
		};
	},
	created() {
		this.active = this.$router.currentRoute.name;
	},
	methods: {
		isActive(name) {
			return this.active === name;
		},
		select(name) {
			this.active = name;
			router.push('/' + this.active);
		},
		logOff() {
			this.$socket.emit('disconnect');
			this.$store.dispatch('logoffUser');
			return router.push('/');
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
