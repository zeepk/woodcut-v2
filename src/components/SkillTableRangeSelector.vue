<template>
	<div class="d-flex flex-row align-center">
		<v-menu>
			<template v-slot:activator="{ on, attrs }">
				<v-btn class="green lighten-4" v-bind="attrs" v-on="on">
					{{ selectedOption.text }}
				</v-btn>
			</template>

			<v-list>
				<v-list-item
					v-for="option in skillTableRangeOptions"
					:key="option.text"
					@click="handleClick(option)"
				>
					<v-list-item-title>{{ option.text }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script lang="js">
import Vue from 'vue';
import { skillTableRangeOptions } from '../utils/constants';
export default Vue.extend({
	name: 'SkillTableRangeSelector',
	props: ['currentOption'],
	data: function() {
		return {
			skillTableRangeOptions,
			selectedOption: this.currentOption,
		};
	},
	methods: {
		handleClick: function(option) {
			this.selectedOption = option;
			this.$emit('changeSelectedRange', option);
		},
	},
});
</script>

<style scoped></style>
