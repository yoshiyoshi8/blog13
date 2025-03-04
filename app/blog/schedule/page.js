import { getPostBySlug } from 'lib/api';
import Container from '@/components/container';
import PostHeader from '@/components/post-header';
import { TowColumn, TowColumnMain, TowColumnSidebar } from '@/components/tow-column';
import Image from 'next/image';
import PostBody from '@/components/post-body';
import ConvertBody from '@/components/convert-body';
import PostCategories from '@/components/post-categories';

export default async function Schedule() {
  const slug = 'schedule';
  const post = await getPostBySlug(slug);

  // 投稿が見つからない場合の処理
  if (!post) {
    return <div>Post not found</div>;
  }

  const { title, publishDate, content, eyecatch, categories } = post;

  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publishDate} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </figure>

        <TowColumn>
          <TowColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TowColumnMain>
          <TowColumnSidebar>
            <PostCategories categories={categories} />
          </TowColumnSidebar>
        </TowColumn>
      </article>
    </Container>
  );
}
