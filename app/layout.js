import './globals.css';
import Layout from '@/components/layout';

//サイトに関する情報
import { siteMeta } from '@/lib/constants';
const { siteTitle, siteDesc, siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta;

//Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: 'アウトプットしていくサイト',
  openGraph: {
    type: 'website',
    description: 'アウトプットしていくサイト',
  },
};
