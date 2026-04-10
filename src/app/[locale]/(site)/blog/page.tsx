import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getAllPostMetas } from "@/lib/blog";
import type { PostMeta, PostCategory } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays, notes, and experiment logs on AI automation, contemporary art, business systems, and tools.",
};

const CATEGORIES: PostCategory[] = ["AI", "Art", "Business", "Tools", "Personal"];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostRow({ post, isFirst }: { post: PostMeta; isFirst: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="post-row block py-7"
      style={{
        borderTop: isFirst ? "1px solid var(--color-border-strong)" : "1px solid var(--color-border)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
        <h2
          className="text-xl md:text-2xl font-normal leading-snug post-title"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-text-primary)",
          }}
        >
          {post.title}
        </h2>
        <time
          dateTime={post.date}
          className="label shrink-0"
          style={{ color: "var(--color-text-muted)" }}
        >
          {formatDate(post.date)}
        </time>
      </div>
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: "var(--color-text-secondary)", maxWidth: "none" }}
      >
        {post.description}
      </p>
      <span
        className="mt-3 inline-block label"
        style={{ color: "var(--color-accent-warm)" }}
      >
        {post.category}
      </span>
    </Link>
  );
}

interface BlogIndexProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogIndex({ searchParams }: BlogIndexProps) {
  const { category } = await searchParams;
  const allPosts = await getAllPostMetas();

  const activeCategory = CATEGORIES.find((c) => c === category) ?? null;
  const posts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  return (
    <>
      {/* ── Header ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Writing
          </p>
          <h1
            className="mt-6 text-5xl md:text-6xl leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            This is where I think in public.
          </h1>
          <p
            className="mt-5 text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "48ch" }}
          >
            Essays and notes on AI automation, systems thinking, contemporary
            art, and the specific kind of business problems I find interesting.
          </p>

          {/* Category filter */}
          <div className="mt-10 flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`category-pill ${!activeCategory ? "category-pill--active" : ""}`}
            >
              All
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${cat}`}
                className={`category-pill ${activeCategory === cat ? "category-pill--active" : ""}`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Post list ── */}
      <section className="pb-20 md:pb-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          {posts.length > 0 ? (
            <>
              {posts.map((post, i) => (
                <PostRow key={post.slug} post={post} isFirst={i === 0} />
              ))}
              {/* Bottom border */}
              <div
                style={{ borderTop: "1px solid var(--color-border)" }}
                className="pt-1"
              />
            </>
          ) : (
            <div
              className="border-t pt-8"
              style={{ borderColor: "var(--color-border-strong)" }}
            >
              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                No posts in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
