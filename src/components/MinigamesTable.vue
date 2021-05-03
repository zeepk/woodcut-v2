<template>
	<div class="ma-10">
		<v-data-table
			:headers="tableHeaders"
			:items="minigames"
			disable-pagination
			hide-default-footer
		>
			<template v-slot:[`header.weekGain`]="{}">
				<SkillTableRangeSelector
				v-on:changeSelectedRange="changeSelectedRange(...arguments)"
				v-bind:currentOption="selectedRange" />
			</template>
			<template v-slot:[`header.monthGain`]="{}">
				<SkillTableRangeSelector
				v-on:changeSelectedRange="changeSelectedRange(...arguments)"
				v-bind:currentOption="selectedRange" />
			</template>
			<template v-slot:[`header.yearGain`]="{}">
				<SkillTableRangeSelector
				v-on:changeSelectedRange="changeSelectedRange(...arguments)"
				v-bind:currentOption="selectedRange" />
			</template>
			<template v-slot:[`item.skillIcon`]="{ item }">
				<div class="d-flex flex-row align-center">
					<div>{{ item.minigameName }}</div>
				</div>
			</template>
			<template v-slot:[`item.xp`]="{ item }">
				<div>{{ item.score.toLocaleString('en', { useGrouping: true }) }}</div>
			</template>
			<template v-slot:[`item.rank`]="{ item }">
				<div>{{ item.rank.toLocaleString('en', { useGrouping: true }) }}</div>
			</template>
			<template v-slot:[`item.dayGain`]="{ item }">
				<SkillTableGainItem :value="item.dayGain" />
			</template>
			<template v-slot:[`item.weekGain`]="{ item }">
				<SkillTableGainItem :value="item.weekGain" />
			</template>
			<template v-slot:[`item.monthGain`]="{ item }">
				<SkillTableGainItem :value="item.monthGain" />
			</template>
			<template v-slot:[`item.yearGain`]="{ item }">
				<SkillTableGainItem :value="item.yearGain" />
			</template>
		</v-data-table>
	</div>
</template>

<script lang="js">
import Vue from 'vue';
import SkillTableRangeSelector from '../components/SkillTableRangeSelector.vue';
import SkillTableGainItem from '../components/SkillTableGainItem.vue';
import { mapGetters } from 'vuex';
import { minigameTableHeaders, skillTableRangeOptions } from '../utils/constants';
import { rs3Stats } from '../utils/helperFunctions';

export default Vue.extend({
	name: 'MinigamesTable',
	components: {
		SkillTableRangeSelector,
		SkillTableGainItem,
	},
	data() {
		return {
			skillTableRangeOptions,
			rs3Stats,
			selectedRange: skillTableRangeOptions[0],
			minigameTableHeaders
		};
	},
	methods: {
		changeSelectedRange(option) {
			this.selectedRange = option;
		},
	},
	computed: {
		...mapGetters({
			minigameGains: 'currentUserMinigameGains',
			isDev: 'isDev',
		}),
		minigames: function() {
			// if local, use sample data so we don't throttle the official API
			const minigames = this.minigameGains;
			return minigames.map((s) => {
				return {
					...s,
					minigameName: rs3Stats[s.minigameId],
				};
			});
		},
		tableHeaders: function() {
			return [...this.minigameTableHeaders, this.selectedRange];
		}
	},
});
</script>

<style scoped>
.icon--skill {
	max-width: 25px;
}
</style>
