import { defineConfig } from "wxt";

export default defineConfig({
	manifest: {
		default_locale: "en",
		name: "__MSG_extName__",
		description: "__MSG_extDescription__",
		permissions: ["activeTab"],
		host_permissions: ["*://twitter.com/intent/*", "*://x.com/intent/*"],
	},
});
