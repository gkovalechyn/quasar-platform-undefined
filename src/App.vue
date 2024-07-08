<template>
	<header>
		<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
	</header>

	<main>
		<q-btn @click="testConfirm">Confirm</q-btn>
	</main>
</template>

<script setup lang="ts">
import { useConfirmationDialog } from "@/useConfirmationDialog";

const confirm = useConfirmationDialog();

function testConfirm() {
	confirm("Are you sure", "yes", "no").then((value) => alert(value));
}
</script>
