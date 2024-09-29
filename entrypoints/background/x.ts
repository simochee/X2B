const ALLOWED_HOSTS = new Set(["x.com", "twitter.com"]);
const ALLOWED_PATHS = new Set(["/intent/post", "/intent/tweet"]);

/**
 * X の Web Intent URL かどうかを判定する
 */
export const isXIntentUrl = (url: string | undefined): boolean => {
	if (!url) return false;

	try {
		const { host, pathname } = new URL(url);
		const path = pathname.replace(/\/$/, "");

		return ALLOWED_HOSTS.has(host) && ALLOWED_PATHS.has(path);
	} catch {
		return false;
	}
};
