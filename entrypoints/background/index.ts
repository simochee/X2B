import { browser } from "wxt/browser";
import { buildBskyIntentUrl } from "./bsky";
import { isXIntentUrl } from "./x";

export default defineBackground(() => {
	browser.tabs.onUpdated.addListener((tabID, tab) => {
		if (tab.status === "loading" && isXIntentUrl(tab.url)) {
			const bskyUrl = buildBskyIntentUrl(tab.url);

			if (bskyUrl) {
				browser.tabs.update(tabID, { url: bskyUrl });
			}
		}
	});
});
