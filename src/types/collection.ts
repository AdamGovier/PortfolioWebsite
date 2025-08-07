export interface BlogPostMetadata {
  title: string;
  pubDate: Date;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  author: string | undefined;
  tags: string[];
  relativePath: string | undefined;
  draft: boolean | undefined;
  pinned: number | undefined;
}
