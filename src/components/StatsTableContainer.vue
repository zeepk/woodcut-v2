<template>
	<v-card>
		<v-tabs
			v-model="tab"
			background-color="deep-purple accent-4"
			centered
			dark
			icons-and-text
		>
			<v-tabs-slider></v-tabs-slider>

			<v-tab href="#tab-1">
				Recents
				<v-icon>mdi-phone</v-icon>
			</v-tab>

			<v-tab href="#tab-2">
				Favorites
				<v-icon>mdi-heart</v-icon>
			</v-tab>
		</v-tabs>

		<v-tabs-items v-model="tab">
			<v-tab-item :value="'tab-1'">
				<v-card flat>
					<v-card-text>{{ 'tab 1 stuff' }}</v-card-text>
				</v-card>
			</v-tab-item>
			<v-tab-item :value="'tab-2'">
				<v-card flat>
					<v-card-text>{{ 'tab 2 stuff' }}</v-card-text>
				</v-card>
			</v-tab-item>
		</v-tabs-items>
	</v-card>
</template>

<script lang="js">
import Vue from 'vue';
// import SkillTableRangeSelector from '../components/SkillTableRangeSelector.vue';
import {statTableTabs} from '../../utils/constants'
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
	name: 'StatsTableContainer',
	data() {
      return {
		  statTableTabs,
        tab: null,
      }
    },
		methods: {
			...mapActions({
			getCurrentUserStatRecords: 'getCurrentUserStatRecords',
		}),
				},
					computed: {
		...mapGetters({
			isDev: 'isDev',
		}),
	},
	async mounted() {
		if (!this.isDev) {
			await this.getCurrentUserStatRecords();
		}
	},
});
</script>

<style scoped>
.icon--skill {
	max-width: 25px;
}
</style>
