export type HeadingLike = {
	depth: number;
	slug: string;
	text: string;
};

export type OutlineItem = {
	slug: string;
	text: string;
	depth: number;
	children: OutlineItem[];
};

export function buildOutline(headings: HeadingLike[]): OutlineItem[] {
	const filtered = headings.filter((h) => h.depth === 2 || h.depth === 3);
	const outline: OutlineItem[] = [];
	let currentH2: OutlineItem | null = null;

	for (const heading of filtered) {
		const item: OutlineItem = {
			slug: heading.slug,
			text: heading.text,
			depth: heading.depth,
			children: [],
		};

		if (heading.depth === 2) {
			currentH2 = item;
			outline.push(item);
			continue;
		}

		if (currentH2) {
			currentH2.children.push(item);
		} else {
			outline.push(item);
		}
	}

	return outline;
}
