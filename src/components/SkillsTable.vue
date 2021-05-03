<template>
	<div class="ma-10">
		<v-data-table
			:headers="tableHeaders"
			:items="skills"
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
					<v-img :src="item.skillIcon" class="icon--skill mr-1" />
					<div>{{ item.skillName }}</div>
				</div>
			</template>
			<template v-slot:[`item.xp`]="{ item }">
				<div>{{ item.xp.toLocaleString('en', { useGrouping: true }) }}</div>
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
import sampleGains from '../assets/temp/sampleGainsResponse.json';
import { mapGetters } from 'vuex';
import { skillTableHeaders, skillTableRangeOptions } from '../utils/constants';
import { skillIcon, skillNameArray } from '../utils/helperFunctions';

export default Vue.extend({
	name: 'SkillsTable',
	components: {
		SkillTableRangeSelector,
		SkillTableGainItem,
	},
	data() {
		return {
			skillTableRangeOptions,
			skillIcon,
			selectedRange: skillTableRangeOptions[0],
			skillTableHeaders
		};
	},
	methods: {
		changeSelectedRange(option) {
			this.selectedRange = option;
		},
	},
	computed: {
		...mapGetters({
			skillGains: 'currentUserSkillGains',
			isDev: 'isDev',
		}),
		skills: function() {
			// if local, use sample data so we don't throttle the official API
			const skills = this.isDev
				? sampleGains.sampleSkillGains
				: this.skillGains;
			return skills.map((s) => {
				return {
					...s,
					skillIcon: skillIcon(s.skillId),
					skillName: skillNameArray[s.skillId],
				};
			});
		},
		tableHeaders: function() {
			return [...this.skillTableHeaders, this.selectedRange];
		}
	},
});
</script>

<style scoped>
.icon--skill {
	max-width: 25px;
}
</style>
