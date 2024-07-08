<template>
	<header>
		<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
	</header>

	<main>
		<q-btn @click="quasarConfirm">Confirm Dialog plugin</q-btn>
	</main>
</template>

<script setup lang="ts">
import ConfirmationDialog from "./ConfirmationDialog.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const quasarConfirm = () => $q.dialog({ component: ConfirmationDialog });
</script>
