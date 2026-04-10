import { createReader } from '@keystatic/core/reader';
import config from '../../keystatic.config';

export type PostCategory = 'AI' | 'Art' | 'Business' | 'Tools' | 'Personal';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: PostCategory;
  description: string;
  draft: boolean;
}

export interface Post extends PostMeta {
  content: () => Promise<import('@keystatic/core').DocumentElement[]>;
}

const reader = createReader(process.cwd(), config);

export async function getAllPostMetas(): Promise<PostMeta[]> {
  const slugs = await reader.collections.posts.list();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await reader.collections.posts.read(slug);
      if (!post) return null;
      return {
        slug,
        title: post.title,
        date: post.date ?? '',
        category: post.category as PostCategory,
        description: post.description,
        draft: post.draft,
      };
    })
  );

  return posts
    .filter((p): p is PostMeta => p !== null && !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getRecentPosts(count = 3): Promise<PostMeta[]> {
  const posts = await getAllPostMetas();
  return posts.slice(0, count);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = await reader.collections.posts.read(slug);
  if (!post || post.draft) return null;

  return {
    slug,
    title: post.title,
    date: post.date ?? '',
    category: post.category as PostCategory,
    description: post.description,
    draft: post.draft,
    content: post.content,
  };
}
