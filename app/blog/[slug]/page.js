import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/api';
import Container from '@/components/container';
import PostHeader from '@/components/post-header';
import { TowColumn, TowColumnMain, TowColumnSidebar } from '@/components/tow-column';
import Image from 'next/image';
import PostBody from '@/components/post-body';
import ConvertBody from '@/components/convert-body';
import PostCategories from '@/components/post-categories';
import PostBukken from '@/components/post-bukken';
import prevNextPost from '@/lib/prev-next-post';
import Pagination from '@/components/pagination';

export const dynamicParams = false;
export async function generateStaticParams() {
  const allSlugs = await getAllSlugs();

  return allSlugs.map(({ slug }) => {
    return { slug: slug };
  });
}

export default async function Post({ params }) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  const { title, publishDate: publish, content, categories } = post;
  const eyecatch = post.eyecatch ?? eyecatchLocal;
  const bukken = post.bukken;
  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
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
              {bukken && <PostBukken bukken={bukken} />}
            </PostBody>
          </TowColumnMain>
          <TowColumnSidebar>
            <PostCategories categories={categories} />
          </TowColumnSidebar>
        </TowColumn>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
        <div></div>
        <div></div>
      </article>
    </Container>
  );
}
