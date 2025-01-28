import { getPostBySlug } from 'lib/api';
import Container from '@/components/container';

export default async function Schedule() {
  const slug = 'schedule';
  const post = await getPostBySlug(slug);

  // 投稿が見つからない場合の処理
  if (!post) {
    return <div>Post not found</div>;
  }

  const { title, publish, content, eyecatch, categories } = post;

  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}
