import { getPostData } from '../../../../lib/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPostData(`${params.slug}.mdx`);

  if (!post) return {};

  return {
    title: post.title,
    description: `Read more about "${post.title}" on my blog.`,
  };
}


export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
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
