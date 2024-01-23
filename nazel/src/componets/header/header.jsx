import { Container } from "../container/container";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/About");
};
const handleHome = () => {
  navigate("/");
}
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div onClick={handleHome} className={styles.logo}>NAZEL</div>
          <div className={styles.info}>
            <ul>
              <li><button onClick={handleHome} className={styles.buttonh}>HOME</button></li>
              <li><button onClick={handleAbout} className={styles.buttonh}>ABOUT</button></li>
              <li><button className={styles.buttonh}>CONTACT US</button></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
