import { getPostData } from '../../../../lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostData(`${params.slug}.mdx`);
  return {
    title: post?.title ?? 'Blog Post',
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostData(`${params.slug}.mdx`);
  if (!post) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-3xl mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{post.date}</p>
      <article
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
