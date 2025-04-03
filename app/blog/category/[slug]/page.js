import React from 'react';
import { getAllCategories } from '@/lib/api';
import Container from '@/components/container';
import PostHeader from '@/components/post-header';

export const dynamicParams = false;

export async function generateStaticParams() {
  const allCats = await getAllCategories();
  return allCats.map(({ slug }) => ({ slug })); // シンプルに
}

export default async function Category({ params }) {
  const { slug: catSlug } = params; // 🔥 params から `slug` を取得

  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);

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
      <PostHeader title={cat.name} subtitle="カテゴリー一覧a" />
    </Container>
  );
}
