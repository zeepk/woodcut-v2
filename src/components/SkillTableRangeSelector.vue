<template>
	<div class="d-flex flex-row align-center">
		<v-menu>
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" dark v-bind="attrs" v-on="on">
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
	data: function() {
		return {
			skillTableRangeOptions,
			selectedOption: skillTableRangeOptions[0],
		};
	},
	methods: {
		handleClick: (option) => {
			console.log(option);
		},
	},
});
</script>

<style scoped></style>
