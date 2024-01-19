import { Container } from "../container/container";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>NAZEL</div>
          <div className={styles.info}>
            <ul>
              <li><button className={styles.buttonh}>HOME</button></li>
              <li><button className={styles.buttonh}>ABOUT</button></li>
              <li><button className={styles.buttonh}>CONTACT US</button></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
