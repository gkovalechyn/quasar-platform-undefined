import { DeferredPromise } from "@/DeferredPromise";
import { h, render } from "vue";
import ConfirmationDialog from "./ConfirmationDialog.vue";
import appVueInstance from "./app";

export function useConfirmationDialog() {
	return function (title: string, confirmText: string, cancelText: string) {
		const deferred = new DeferredPromise<boolean>();
		const body = document.querySelector("body")!;
		const container = body.appendChild(document.createElement("div"));
		const renderedDialog = h(ConfirmationDialog, {
			title,
			confirmText,
			cancelText,
			onConfirmed() {
				render(null, container);
				container.remove();
				deferred.resolve(true);
			},
			onCancelled() {
				render(null, container);
				container.remove();
				deferred.resolve(false);
			}
		});

		const boundRender = render.bind(appVueInstance);
		boundRender(renderedDialog, container);

		if (renderedDialog.component && renderedDialog.component.exposed) {
			renderedDialog.component.exposed.open(title, confirmText, cancelText);
		}

		return deferred.getPromise();
	};
}
