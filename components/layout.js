import Header from 'components/header';
import Footer from 'components/footer';

export const metadata = {
  title: 'Layout',
  description: 'Layout component',
};
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
