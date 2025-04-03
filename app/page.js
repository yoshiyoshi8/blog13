import { getAllPosts } from '@/lib/api';
import Image from 'next/image';
import Layout from 'components/layout';
import Hero from 'components/hero';
import Container from '@/components/container';
import Posts from '@/components/posts';
import { eyecatchLocal } from '@/lib/constants';
import Pagination from '@/components/pagination';
export default async function Home() {
  const posts = await getAllPosts(4);
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal;
    }
  }
  return (
    <Container>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
}
