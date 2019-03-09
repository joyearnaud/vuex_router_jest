<template>
	<div class="ui cards">
		<div class="card">
			<div class="content">
				<img
					class="right floated mini ui image"
					src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Dizzy&eyebrowType=UnibrowNatural&mouthType=Sad&skinColor=Black"
				/>
				<div class="header">Elliot Fu</div>
				<div class="meta">Friends of Veronika</div>
				<div class="description">
					Elliot requested permission to view your contact details
				</div>
			</div>
			<div class="extra content">
				<div class="ui two buttons">
					<div class="ui basic green button">Approve</div>
					<div class="ui basic red button">Decline</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="content">
				<img
					class="right floated mini ui image"
					src="https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Round&hatColor=PastelGreen&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=Overall&clotheColor=White&eyeType=WinkWacky&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Light"
				/>
				<div class="header">Jenny Hess</div>
				<div class="meta">New Member</div>
				<div class="description">
					Jenny wants to add you to the group <b>best friends</b>
				</div>
			</div>
			<div class="extra content">
				<div class="ui two buttons">
					<div class="ui basic green button">Approve</div>
					<div class="ui basic red button">Decline</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Invitations',
	data: function() {
		return {
			invitationNumber: 0,
		};
	},
	methods: {},
	computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
