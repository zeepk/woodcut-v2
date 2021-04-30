<template>
	<div>
		<h1>
			{{ homeHeader }}
		</h1>
	</div>
</template>

<script lang="js">
import Vue from 'vue';
import { homeHeader } from '../utils/constants';

export default Vue.extend({
	name: 'Home',
	data() {
		return {
			homeHeader: homeHeader,
		};
	},
});
</script>
