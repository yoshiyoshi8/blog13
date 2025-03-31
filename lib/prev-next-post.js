import React from 'react';

const prevNextPost = (allSlugs, currentSlug) => {
  const numberOfPost = allSlugs.length;
  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);

  const prevPost = index + 1 === numberOfPost ? { title: '', slug: '' } : allSlugs[index + 1];
  const nextPost = index === 0 ? { title: '', slug: '' } : allSlugs[index - 1];
  return [prevPost, nextPost];
};

export default prevNextPost;
