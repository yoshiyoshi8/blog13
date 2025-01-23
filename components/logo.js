import Link from 'next/link';

import styles from 'styles/logo.module.css';

const logo = ({ boxOn = false }) => {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      CUBE
    </Link>
  );
};

export default logo;
