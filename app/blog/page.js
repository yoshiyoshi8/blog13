import { getAllPosts } from '@/lib/api';
import Image from 'next/image';
import styles from '../page.module.css';
import Hero from '@/components/hero';
import Container from '@/components/container';
import Posts from '@/components/posts';
import { eyecatchLocal } from '@/lib/constants';

export default async function Blog() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return (
    <Container>
      <Hero title="Blog" subtitle="Blog development activities" />
      <Posts posts={posts}></Posts>
    </Container>
  );
}

export const metadata = {
  title: 'ブログ',
  description: 'ブログ記事一覧',
  openGraph: {
    description: 'ブログ記事一覧',
  },
};
