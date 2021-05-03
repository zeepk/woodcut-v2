<template>
	<div class="ma-10">
		<h3>{{displayName}}</h3>
		<StatsTableContainer />
		<SkillsTable />
	</div>
</template>

<script lang="js">
import Vue from 'vue';
import SkillsTable from '../components/SkillsTable.vue';
import StatsTableContainer from '../components/StatsTableContainer.vue';
import { mapGetters, mapActions } from 'vuex';
export default Vue.extend({
	name: 'PlayerLandingPage',
	components: {
		SkillsTable,
StatsTableContainer	},
	computed: {
		...mapGetters({
			username: 'getCurrentUsername',
			displayName: 'getCurrentDisplayname',
		}),
	},
	methods: {
		...mapActions({
			setCurrentUsername: 'setCurrentUsername',
		}),
	},
	async mounted() {
		if (this.username === null) {
			const formattedUsername = this.$route.params.username
				.toLowerCase()
				.split(' ')
				.join('+');
			this.setCurrentUsername({
				username: formattedUsername,
			});
		}
	},
});
</script>

<style scoped></style>
