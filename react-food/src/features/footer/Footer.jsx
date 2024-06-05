import "../../../assets/css/main.css";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__box}>
            <p className={styles.footer__title}> Рестораны России </p>
            <p className={styles.footer__description}>
                2024
            </p>
        </div>
    </footer>
  );
}

export default Footer;