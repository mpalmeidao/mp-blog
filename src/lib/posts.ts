export type PostLike = {
	id: string;
	data: {
		pubDate: Date;
		draft?: boolean;
	};
};

export function sortPostsByDate<T extends PostLike>(posts: T[]): T[] {
	return [...posts].sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

export function filterPublishedPosts<T extends PostLike>(
	posts: T[],
	production: boolean,
): T[] {
	if (!production) return [...posts];
	return posts.filter((post) => !post.data.draft);
}
