<template>
	<header>
		<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
	</header>

	<main>
		<q-btn @click="confirm">Confirm</q-btn>
	</main>

	<confirmation-dialog
		title="test"
		cancel-text="Cancel"
		confirm-text="Confirm"
		:on-cancelled="onCancelled"
		:on-confirmed="onConfirmed"
		ref="confirmationDialogRef"
	/>
</template>

<script setup lang="ts">
import ConfirmationDialog from "./ConfirmationDialog.vue";
import { ref } from "vue";

const confirmationDialogRef = ref<typeof ConfirmationDialog>();
const confirm = () => confirmationDialogRef.value?.open();

const onConfirmed = () => console.log("confirmed");
const onCancelled = () => console.log("cancelled");
</script>
