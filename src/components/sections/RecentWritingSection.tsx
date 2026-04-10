import { Link } from "@/i18n/navigation"; // Use localized Link
import { getRecentPosts } from "@/lib/blog";
import type { PostMeta } from "@/lib/blog";
import { useTranslations, useFormatter, useLocale } from 'next-intl';

function PostRow({ post }: { post: PostMeta }) {
  const format = useFormatter();
  const locale = useLocale();

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
          {/* Automatically formats date based on locale (en-GB vs fr-FR) */}
          {format.dateTime(new Date(post.date), {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
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
        {/* If category is also translated in Keystatic, use post.category */}
        {post.category}
      </p>
    </Link>
  );
}

export default function RecentWritingSection() {
  const t = useTranslations('Writing');
  const posts = getRecentPosts(3);

  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-2">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            {t('label')}
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {t('headline')}
          </h2>
        </div>

        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
            <div
              className="border-t pt-6"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Link
                href="/blog"
                className="btn-ghost text-sm"
              >
                {t('viewAll')}
              </Link>
            </div>
          </div>
        ) : (
          <div
            className="border-t pt-6"
            style={{ borderColor: "var(--color-border)" }}
          >
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              {/* Add a key for this in your JSON if you want to localize it */}
              Writing coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}