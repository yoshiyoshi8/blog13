import Image from 'next/image';
import styles from '../page.module.css';
import Hero from '@/components/hero';
import Container from '@/components/container';

export default function Blog() {
  return (
    <Container>
      <Hero title="Blog" subtitle="Blog development activities" />
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
