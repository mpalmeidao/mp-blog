import { filterPublishedPosts, sortPostsByDate, type PostLike } from './posts';

export type FeedPost = PostLike & {
	data: PostLike['data'] & {
		title: string;
		description: string;
	};
};

export function prepareFeedPosts<T extends FeedPost>(
	posts: T[],
	production: boolean,
): T[] {
	return sortPostsByDate(filterPublishedPosts(posts, production));
}
