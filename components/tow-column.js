import styles from 'styles/tow-column.module.css';
export function TowColumn({ children }) {
  return <div className={styles.flexContainer}>{children}</div>;
}
export function TowColumnMain({ children }) {
  return <div className={styles.main}>{children}</div>;
}

export function TowColumnSidebar({ children }) {
  return <div className={styles.sidebar}>{children}</div>;
}
