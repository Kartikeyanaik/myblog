import { getPostData } from '../../../../lib/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostData(`${params.slug}.mdx`);
  if (!post) return {};

  return {
    title: post.title,
    description: `Post on ${post.date}`,
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
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
