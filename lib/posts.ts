// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';



const postsDirectory = path.join(process.cwd(), 'posts');

// get all posts (title, slug, date)
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);


  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || 'Unknown date',
    };
  });
}

// get one post content
export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory,slug);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || 'Unknown date',
    contentHtml,
  };
}
