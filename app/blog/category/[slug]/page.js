import React from 'react';
import { getAllCategories, getAllPostsByCategory } from '@/lib/api';
import Container from '@/components/container';
import PostHeader from '@/components/post-header';
import Posts from '@/components/posts';
import { eyecatchLocal } from '@/lib/constants';

export const dynamicParams = false;

export async function generateStaticParams() {
  const allCats = await getAllCategories();
  return allCats.map(({ slug }) => ({ slug })); // シンプルに
}

export default async function Category({ params }) {
  const resolvedParams = await params; // ✅ await で params を解決
  const { slug: catSlug } = resolvedParams; // 🔥 params から `slug` を取得

  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);

  console.log('catId', cat.id);
  const posts = await getAllPostsByCategory(cat.id);
  console.log('posts', posts);

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal;
    }
  }

  // 該当カテゴリーが見つからない場合の処理
  if (!cat) {
    return (
      <Container>
        <PostHeader title="カテゴリーが見つかりません" subtitle="カテゴリー一覧" />
      </Container>
    );
  }

  return (
    <Container>
      <PostHeader title={cat.name} subtitle="カテゴリー一覧" />
      <Posts posts={posts} />
    </Container>
  );
}
