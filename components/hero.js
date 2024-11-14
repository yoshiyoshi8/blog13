import styles from '/styles/hero.module.css';

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && <figcaption>image</figcaption>}
    </div>
  );
}
