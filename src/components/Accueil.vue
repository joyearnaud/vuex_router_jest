<template>
	<sui-container>
		<span>Last connexion : {{ getLastConnexion }}</span>
		<div class="alert alert-info">
			Username: test<br />
			Password: test
		</div>

		<sui-divider hidden />
		<sui-header as="h1"> Login </sui-header>

		<sui-form @submit.prevent="handleSubmit">
			<sui-segment>
				<sui-form-field>
					<label for="username">Username</label>
					<input
						type="text"
						v-model="username"
						name="username"
						class="form-control"
						:class="{ 'is-invalid': submitted && !username }"
					/>
					<sui-message
						negative
						v-show="submitted && !username"
						class="invalid-feedback"
					>
						Username is required
					</sui-message>
				</sui-form-field>

				<sui-form-field>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						v-model="password"
						name="password"
						class="form-control"
						:class="{ 'is-invalid': submitted && !password }"
					/>
					<sui-message
						negative
						v-show="submitted && !username"
						class="invalid-feedback"
					>
						Password is required
					</sui-message>
				</sui-form-field>

				<sui-divider hidden />

				<sui-form-field active>
					<sui-button primary v-show="!loading"> Login </sui-button>
					<sui-button primary loading v-show="loading"> Login </sui-button>
				</sui-form-field>

				<sui-message negative v-if="error" class="alert alert-danger">{{
					error
				}}</sui-message>
			</sui-segment>
		</sui-form>
	</sui-container>
</template>

<script>
import { router } from '../_helper/router';
import { userService } from '../_service/users.service';

export default {
	name: 'Accueil',
	data() {
		return {
			username: '',
			password: '',
			submitted: false,
			loading: false,
			returnUrl: '/landing',
			error: '',
		};
	},
	created() {
		let user = this.getUser;
		if (user) {
			router.push('/landing');
		} else {
			this.$store.dispatch('addNumber', 9);
		}
	},
	methods: {
		addUser(user) {
			this.$store.dispatch('addUser', user);
		},
		handleSubmit(e) {
			this.submitted = true;
			const { username, password } = this;

			// stop here if form is invalid
			if (!(username && password)) {
				return;
			}

			this.loading = true;
			userService.login(username, password).then(
				user => {
					this.addUser(user);
					router.push(this.returnUrl);
				},
				error => {
					this.error = error;
					this.loading = false;
				}
			);
		},
	},
	computed: {
		getLastConnexion: function() {
			return this.$store.getters.getLastConnexion;
		},
		getUser: function() {
			return this.$store.getters.getUser;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
