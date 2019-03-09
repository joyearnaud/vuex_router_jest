<template>
	<div><Invitations></Invitations> <CurrentFriendList></CurrentFriendList></div>
</template>

<script>
  import Invitations from './Invitations';
  import CurrentFriendList from './CurrentFriendList.vue';

  export default {
	name: 'Friends',
	data: function() {
		return {
			friends: [],
			invitationNumber: 0,
		};
	},
	components: { Invitations, CurrentFriendList },
	methods: {},
	computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
