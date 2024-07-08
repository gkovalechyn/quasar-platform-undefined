<template>
	<q-dialog v-model="isOpen">
		<q-card>
			<q-card-section> {{ props.title }}</q-card-section>
			<q-card-section>
				<q-btn @click="props.onConfirmed">{{ props.confirmText }}</q-btn>
				<q-btn @click="props.onCancelled">{{ props.cancelText }}</q-btn>
			</q-card-section>
		</q-card>
	</q-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const props = defineProps<{
	title: string;
	confirmText: string;
	cancelText: string;
	onConfirmed: () => void;
	onCancelled: () => void;
}>();

function open() {
	isOpen.value = true;
}

defineExpose({
	open
});
</script>
