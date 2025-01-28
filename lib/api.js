import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` },
    });

    return post.contents?.[0] || null; // データが存在しない場合は null を返す
  } catch (error) {
    console.log('~~ getPostBySlug Error ~~');
    console.error(error);
    return null; // エラー時に明示的に null を返す
  }
}
