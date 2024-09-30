import { describe, expect, test } from "vitest";
import { buildBskyIntentUrl } from "./bsky";

describe("buildBskyIntentUrl", () => {
	test("text のみ指定", () => {
		const result = buildBskyIntentUrl("https://x.com/intent/post?text=hello");
		expect(result).toBe("https://bsky.app/intent/compose?text=hello");
	});

	test("url のみ指定", () => {
		const result = buildBskyIntentUrl(
			"https://x.com/intent/post?url=https://example.com",
		);
		expect(result).toBe(
			"https://bsky.app/intent/compose?text=https%3A%2F%2Fexample.com",
		);
	});

	test("hashtags のみ指定（単数）", () => {
		const result = buildBskyIntentUrl(
			"https://x.com/intent/post?hashtags=tag1",
		);
		expect(result).toBe("https://bsky.app/intent/compose?text=%23tag1");
	});

	test("hashtags のみ指定（複数）", () => {
		const result = buildBskyIntentUrl(
			"https://x.com/intent/post?hashtags=tag1,tag2",
		);
		expect(result).toBe("https://bsky.app/intent/compose?text=%23tag1+%23tag2");
	});

	test("text, url, hashtags を指定", () => {
		const result = buildBskyIntentUrl(
			"https://x.com/intent/post?text=hello&url=https://example.com&hashtags=tag1,tag2",
		);
		expect(result).toBe(
			"https://bsky.app/intent/compose?text=hello+https%3A%2F%2Fexample.com+%23tag1+%23tag2",
		);
	});

	test("text と url が指定されている場合", () => {
		const result = buildBskyIntentUrl(
			"https://x.com/intent/post?text=hello&url=https://example.com",
		);
		expect(result).toBe(
			"https://bsky.app/intent/compose?text=hello+https%3A%2F%2Fexample.com",
		);
	});

	test("text と hashtags が指定されている場合", () => {
		const result = buildBskyIntentUrl(
			"https://x.com/intent/post?text=hello&hashtags=tag1,tag2",
		);
		expect(result).toBe(
			"https://bsky.app/intent/compose?text=hello+%23tag1+%23tag2",
		);
	});

	test("url と hashtags が指定されている場合", () => {
		const result = buildBskyIntentUrl(
			"https://x.com/intent/post?url=https://example.com&hashtags=tag1,tag2",
		);
		expect(result).toBe(
			"https://bsky.app/intent/compose?text=https%3A%2F%2Fexample.com+%23tag1+%23tag2",
		);
	});
});
