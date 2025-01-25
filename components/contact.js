import styles from 'styles/contact.module.css';
import Social from 'components/social';
export default function contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Conatact</h3>
      <Social iconSize="30px" />
      <address>cube@web.mail.cddress</address>
    </div>
  );
}
