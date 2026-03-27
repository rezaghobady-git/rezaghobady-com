import Link from "next/link";
import { getRecentPosts } from "@/lib/blog";
import type { PostMeta } from "@/lib/blog";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostRow({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="post-row block border-t py-6"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <h3
          className="text-lg md:text-xl font-normal leading-snug post-title"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-text-primary)",
          }}
        >
          {post.title}
        </h3>
        <span
          className="label shrink-0"
          style={{ color: "var(--color-text-muted)" }}
        >
          {formatDate(post.date)}
        </span>
      </div>
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: "var(--color-text-secondary)", maxWidth: "none" }}
      >
        {post.description}
      </p>
      <p
        className="mt-3 label post-category"
        style={{ color: "var(--color-accent-warm)" }}
      >
        {post.category}
      </p>
    </Link>
  );
}

export default function RecentWritingSection() {
  const posts = getRecentPosts(3);

  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <div className="mb-2">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Writing
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            Recent writing
          </h2>
        </div>

        {/* Posts list */}
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
            {/* Final divider */}
            <div
              className="border-t pt-6"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Link
                href="/blog"
                className="btn-ghost text-sm"
              >
                All writing →
              </Link>
            </div>
          </div>
        ) : (
          <div
            className="border-t pt-6"
            style={{ borderColor: "var(--color-border)" }}
          >
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Writing coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
