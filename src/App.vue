<template>
	<v-app class="app">
		<NavBar />
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '../src/components/common/NavBar.vue';
import './assets/global.css';

export default Vue.extend({
	name: 'App',

	components: {
		NavBar,
	},

	data: () => ({
		//
	}),
});
</script>
<style scoped>
.app {
	background: var(--dark-gray) !important;
	min-height: 100vh;
}
</style>
