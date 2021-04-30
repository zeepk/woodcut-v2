<template>
	<div class="ma-10">
		<v-data-table
			:headers="skillTableHeaders"
			:items="skills"
			disable-pagination
			hide-default-footer
		>
			<template v-slot:[`header.weekGain`]="{}">
				<SkillTableRangeSelector />
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
				<div>
					{{ item.dayGain.toLocaleString('en', { useGrouping: true }) }}
				</div>
			</template>
			<template v-slot:[`item.weekGain`]="{ item }">
				<div>
					{{ item.weekGain.toLocaleString('en', { useGrouping: true }) }}
				</div>
			</template>
			<template v-slot:[`item.monthGain`]="{ item }">
				<div>
					{{ item.monthGain.toLocaleString('en', { useGrouping: true }) }}
				</div>
			</template>
			<template v-slot:[`item.yearGain`]="{ item }">
				<div>
					{{ item.yearGain.toLocaleString('en', { useGrouping: true }) }}
				</div>
			</template>
		</v-data-table>
	</div>
</template>

<script lang="js">
import Vue from 'vue';
import SkillTableRangeSelector from '../components/SkillTableRangeSelector.vue';
import sampleGains from '../assets/temp/sampleGainsResponse.json';
import { mapGetters, mapActions } from 'vuex';
import { skillTableHeaders, skillTableRangeOptions } from '../utils/constants';
import { skillIcon, skillNameArray } from '../utils/helperFunctions';

export default Vue.extend({
	name: 'SkillsTable',
	components: {
		SkillTableRangeSelector,
	},
	data() {
		return {
			skillTableRangeOptions,
			skillIcon,
			skillTableHeaders: [...skillTableHeaders, skillTableRangeOptions[0]],
			selectedRange: skillTableHeaders[0],
		};
	},
	methods: {
		...mapActions({
			setCurrentUsername: 'setCurrentUsername',
			getCurrentUserStatRecords: 'getCurrentUserStatRecords',
		}),
		changeSelectedRange(option) {
			this.selectedRange = option;
			return 'hi';
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
