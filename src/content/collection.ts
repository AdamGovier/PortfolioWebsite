import { getCollection } from 'astro:content';

type CollectionName = "blog"

// https://www.rick.me.uk/posts/2024/03/custom-url-formats-in-astro/
export async function loadAndFormatCollection(
  name: CollectionName,
  filter?: (post: any) => boolean
) {
  let posts = await getCollection(name);

  posts.forEach(post => {
    const date = new Date(post.data.pubDate);
    const year = date.getFullYear();

    post.data.relativePath = `${year}/${post.data.slug}`;
  });

  if (filter) {
    posts = posts.filter(filter);
  }

  return posts;
}
