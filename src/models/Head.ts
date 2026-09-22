export interface SearchEngineMetaData {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: Date | string;
  noindex?: boolean;
}
