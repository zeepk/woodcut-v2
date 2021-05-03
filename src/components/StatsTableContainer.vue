<template>
	<div class="container--tabs d-flex align-center justify-center">
		<v-progress-circular
			v-if="isLoading"
			:size="100"
			:width="5"
			indeterminate
			color="green lighten-4"
		></v-progress-circular>
		<v-card class="card--tabs" v-else>
			<v-tabs v-model="tab" background-color="green lighten-4" centered dark>
				<v-tabs-slider></v-tabs-slider>

				<v-tab
					v-for="(tab, i) in statTableTabs"
					:key="i"
					:href="`#tab-${i + 1}`"
				>
					{{ tab.text }}
				</v-tab>
			</v-tabs>

			<v-tabs-items v-model="tab">
				<v-tab-item :value="'tab-1'">
					<v-card flat>
						<SkillsTable />
					</v-card>
				</v-tab-item>
				<v-tab-item :value="'tab-2'">
					<v-card flat>
						<MinigamesTable />
					</v-card>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
	</div>
</template>

<script lang="js">
import Vue from 'vue';
import SkillsTable from '../components/SkillsTable.vue';
import MinigamesTable from '../components/MinigamesTable.vue';
import {statTableTabs} from '../utils/constants'
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
	name: 'StatsTableContainer',
	components: {
		SkillsTable,
		MinigamesTable
	},
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
				isLoading: 'isLoading'
		}),
	},
	async mounted() {
			await this.getCurrentUserStatRecords();
	},
});
</script>

<style scoped>
.container--tabs {
	min-height: 70vh;
}
.card--tabs {
	width: 100%;
}
.icon--skill {
	max-width: 25px;
}
</style>
