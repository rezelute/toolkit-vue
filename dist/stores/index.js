import { ref as e } from "vue";
import { defineStore as t } from "pinia";
//#region src/stores/userStore.ts
var n = t("userStore", () => {
	let t = e(!1);
	function n(e) {
		t.value = e;
	}
	return {
		isSignedIn: t,
		updateAuth: n
	};
}), r = { useUserStore: n };
//#endregion
export { r as default, n as useUserStore };
