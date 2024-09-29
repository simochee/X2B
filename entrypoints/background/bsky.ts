/**
 * Bluesky の Action Intent Link を生成する
 */
export const buildBskyIntentUrl = (
	xUrl: string | undefined,
): string | undefined => {
	if (!xUrl) return;

	const { searchParams } = new URL(xUrl);
	const text = searchParams.get("text") ?? "";
	const url = searchParams.get("url") ?? "";
	const hashtags = searchParams.get("hashtags") ?? "";

	const bskyUrl = new URL("https://bsky.app/intent/compose");
	const bskyHashtags = hashtags
		.split(",")
		.map((hashtag) => `#${hashtag}`)
		.join(" ");
	const bskyText = `${text} ${url} ${bskyHashtags}`.trim();

	if (!bskyText) return;

	bskyUrl.searchParams.set("text", bskyText);

	return bskyUrl.href;
};