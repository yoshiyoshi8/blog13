import styles from '/styles/hero.module.css';
import Image from 'next/image';
import cube from 'images/cube.jpg';

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figcaption>
          <Image
            src={cube}
            alt="cube"
            layout="responsive"
            sizes="(min-width: 1152px) 576px, 100vw, (min-width: 768px) 50vw, 100vw"
          />
        </figcaption>
      )}
    </div>
  );
}
