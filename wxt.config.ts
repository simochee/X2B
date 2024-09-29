import { defineConfig } from "wxt";

export default defineConfig({
	manifest: {
		name: "X2B",
		description: "Convert X intent links to Bluesky intent links automatically",
		permissions: ["activeTab"],
		host_permissions: ["*://twitter.com/intent/*", "*://x.com/intent/*"],
	},
});
