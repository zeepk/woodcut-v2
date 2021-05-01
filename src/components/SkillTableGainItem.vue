<template>
	<div :class="itemClass">
					{{ this.value.toLocaleString('en', { useGrouping: true }) }}
				</div>
</template>

<script lang="js">
import Vue from 'vue';
export default Vue.extend({
	name: 'SkillTableGainItem',
	props: ['value'],
    computed: {
        itemClass: function() {
            return Number(this.value) > 0 ? 'gain' : '';
        }
    }
});
</script>

<style scoped>
.gain {
    color: var(--text-gain);
}
</style>
