<template>
	<v-app-bar class="nav--bar" app>
		<v-toolbar-title class="nav--title">
			<router-link to="/">
				<v-img
					max-height="150"
					max-width="250"
					src="../../assets/images/logo.png"
				></v-img>
			</router-link>
		</v-toolbar-title>
		<v-spacer />
		<v-form class="search-form" @submit.prevent="handleSubmit">
			<v-text-field
				v-model="username"
				class=""
				:placeholder="searchPlaceholder"
				outlined
			></v-text-field>
		</v-form>
	</v-app-bar>
</template>

<script lang="js">
import Vue from 'vue';
import { navTitle, searchPlaceholder } from '../../utils/constants';
import { usernameRoute } from '../../router/index';
import { mapActions } from 'vuex';

export default Vue.extend({
	name: 'NavBar',
	data() {
		return {
			navTitle: navTitle,
			searchPlaceholder: searchPlaceholder,
			username: '',
		};
	},
	methods: {
		...mapActions({
			getCurrentUserStatRecords: 'getCurrentUserStatRecords',
			setCurrentUsername: 'setCurrentUsername',
		}),
		async handleSubmit() {
			const formattedUsername = this.username
				.toLowerCase()
				.split(' ')
				.join('%2B');
			this.setCurrentUsername({
				username: formattedUsername,
			});
			this.$router.push({
				...usernameRoute,
				params: { username: formattedUsername },
			});
			await this.getCurrentUserStatRecords();
		},
	},
	mounted() {
		if(this.$route.params.username){
						this.setCurrentUsername({
							username: this.$route.params.username,
			});
				}
	}
});
</script>

<style scoped>
.nav--bar {
	background-color: var(--medium-gray) !important;
}
.nav--title {
	color: var(--text-white);
}
.search-form {
	max-height: 100%;
}
</style>
