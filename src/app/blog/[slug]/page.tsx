import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostMetas, getPostBySlug } from "@/lib/blog";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostMetas().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* ── Post header ── */}
      <section className="pt-20 md:pt-32 pb-10 md:pb-14 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="label inline-flex items-center gap-1 mb-10 post-back-link"
          >
            ← Writing
          </Link>

          {/* Category */}
          <p
            className="label"
            style={{ color: "var(--color-accent-warm)" }}
          >
            {post.category}
          </p>

          {/* Title */}
          <h1
            className="mt-4 text-4xl md:text-5xl leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {post.title}
          </h1>

          {/* Description */}
          <p
            className="mt-5 text-base leading-relaxed"
            style={{
              fontStyle: "italic",
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-secondary)",
              maxWidth: "52ch",
            }}
          >
            {post.description}
          </p>

          {/* Date */}
          <div
            className="mt-8 pt-6 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <time
              dateTime={post.date}
              className="label"
              style={{ color: "var(--color-text-muted)" }}
            >
              {formatDate(post.date)}
            </time>
          </div>
        </div>
      </section>

      {/* ── Post body ── */}
      <article className="px-6 md:px-10 pb-20 md:pb-32">
        <div className="mx-auto max-w-3xl prose-reza">
          <MDXRemote source={post.content} />
        </div>
      </article>

      {/* ── Post footer ── */}
      <section
        className="py-16 md:py-20 px-6 md:px-10 border-t"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface-muted)",
        }}
      >
        <div className="mx-auto max-w-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="label" style={{ color: "var(--color-text-muted)" }}>
              Written by
            </p>
            <p
              className="mt-1 text-sm font-medium"
              style={{ color: "var(--color-text-primary)" }}
            >
              Reza Ghobady
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/blog" className="btn-secondary text-xs py-2 px-4">
              All writing
            </Link>
            <Link href="/contact" className="btn-ghost text-sm">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
