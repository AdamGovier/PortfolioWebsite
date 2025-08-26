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
  attachments?: Attachment[];
}

export interface Attachment {
  href: string;
  contentType: "application/pdf" | "audio/mpeg";
  displayName: string;
}