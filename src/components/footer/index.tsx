import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <p>Footer</p>
        <div>
          <p>Desnvolvido por:</p>
          <p>Pedro Landim</p>
        </div>
      </div>
    </footer>
  );
}
