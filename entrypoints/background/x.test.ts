import { describe, expect, test } from "vitest";
import { isXIntentUrl } from "./x";

describe("isXIntentUrl", () => {
	test("x.com の Intent Link", () => {
		expect(isXIntentUrl("https://x.com/intent/post")).toBe(true);
		expect(isXIntentUrl("https://x.com/intent/post/")).toBe(true);
		expect(isXIntentUrl("https://x.com/intent/tweet")).toBe(true);
		expect(isXIntentUrl("https://x.com/intent/tweet/")).toBe(true);
		expect(isXIntentUrl("https://x.com/intent/post?text=Hello")).toBe(true);
	});

	test("twitter.com の Intent Link", () => {
		expect(isXIntentUrl("https://twitter.com/intent/post")).toBe(true);
		expect(isXIntentUrl("https://twitter.com/intent/post/")).toBe(true);
		expect(isXIntentUrl("https://twitter.com/intent/tweet")).toBe(true);
		expect(isXIntentUrl("https://twitter.com/intent/tweet/")).toBe(true);
		expect(isXIntentUrl("https://twitter.com/intent/tweet?text=Hello")).toBe(
			true,
		);
	});

	test("x.com の不正な URL", () => {
		expect(isXIntentUrl("https://x.com/intent/retweet")).toBe(false);
		expect(isXIntentUrl("https://x.com/intent/like/")).toBe(false);
		expect(isXIntentUrl("https://x.com/X/status/1838249549724278907")).toBe(
			false,
		);
		expect(isXIntentUrl("https://x.com")).toBe(false);
	});

	test("twitter.com の不正な URL", () => {
		expect(isXIntentUrl("https://twitter.com/intent/retweet")).toBe(false);
		expect(isXIntentUrl("https://twitter.com/intent/like/")).toBe(false);
		expect(
			isXIntentUrl("https://twitter.com/X/status/1838249549724278907"),
		).toBe(false);
		expect(isXIntentUrl("https://twitter.com")).toBe(false);
	});

	test("不正なオリジンの URL", () => {
		expect(isXIntentUrl("https://example.com/intent/post")).toBe(false);
		expect(isXIntentUrl("https://example.com/intent/tweet")).toBe(false);
		expect(isXIntentUrl("https://example.com")).toBe(false);
		expect(isXIntentUrl("https://docs.x.com/intent/post")).toBe(false);
		expect(isXIntentUrl("https://docs.twitter.com/intent/post")).toBe(false);
	});
});
