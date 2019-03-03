<template>
	<div class="ui link cards">
		<div class="card">
			<div class="image">
				<img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
			</div>
			<div class="content">
				<div class="header">Matt Giampietro</div>
				<div class="meta"><a>Friends</a></div>
				<div class="description">
					Matthew is an interior designer living in New York.
				</div>
			</div>
			<div class="extra content">
				<span class="right floated"> Joined in 2013 </span>
				<span> <i class="user icon"></i> 75 Friends </span>
			</div>
		</div>
		<div class="card">
			<div class="image">
				<img src="https://semantic-ui.com/images/avatar2/large/molly.png" />
			</div>
			<div class="content">
				<div class="header">Molly</div>
				<div class="meta"><span class="date">Coworker</span></div>
				<div class="description">
					Molly is a personal assistant living in Paris.
				</div>
			</div>
			<div class="extra content">
				<span class="right floated"> Joined in 2011 </span>
				<span> <i class="user icon"></i> 35 Friends </span>
			</div>
		</div>
		<div class="card">
			<div class="image">
				<img src="https://semantic-ui.com/images/avatar2/large/elyse.png" />
			</div>
			<div class="content">
				<div class="header">Elyse</div>
				<div class="meta"><a>Coworker</a></div>
				<div class="description">
					Elyse is a copywriter working in New York.
				</div>
			</div>
			<div class="extra content">
				<span class="right floated"> Joined in 2014 </span>
				<span> <i class="user icon"></i> 151 Friends </span>
			</div>
		</div>
		<div class="card">
			<div class="image">
				<img src="https://semantic-ui.com/images/avatar2/large/molly.png" />
			</div>
			<div class="content">
				<div class="header">Momo</div>
				<div class="meta"><span class="date">Coworker</span></div>
				<div class="description">
					Molly is a personal assistant living in Paris.
				</div>
			</div>
			<div class="extra content">
				<span class="right floated"> Joined in 2011 </span>
				<span> <i class="user icon"></i> 35 Friends </span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CurrentFriendList',
	data: function() {
		return {
			friends: [],
		};
	},
	methods: {},
	computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
