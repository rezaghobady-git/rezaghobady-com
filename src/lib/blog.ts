import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type PostCategory = "AI" | "Art" | "Business" | "Tools" | "Personal";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: PostCategory;
  description: string;
  draft: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

function parseDate(dateStr: string): Date {
  return new Date(dateStr);
}

export function getAllPostMetas(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        category: data.category as PostCategory,
        description: data.description as string,
        draft: (data.draft as boolean) ?? false,
      };
    })
    .filter((post) => !post.draft);

  return posts.sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );
}

export function getRecentPosts(count = 3): PostMeta[] {
  return getAllPostMetas().slice(0, count);
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (data.draft) return null;

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: data.category as PostCategory,
    description: data.description as string,
    draft: false,
    content,
  };
}
