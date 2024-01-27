import { Container } from "../container/container";
import { Header } from "../header/header";
import styles from "./contactUs.module.css";

export const ContactUs = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bgimg}>
        <div className={styles.blurimg}>
          <Container>
            <div className={styles.contactus}>
              <div className={styles.header}>
                <h1>
                  Contact <span className={styles.logo}>NAZEL</span>
                </h1>
              </div>
              <div className={styles.inputs}>
                <div className={styles.content}>
                  <form>
                    <div className={styles.group}>
                      <input
                        className={styles.input}
                        type="text"
                        required
                      ></input>
                      <span className={styles.highlight}></span>
                      <span className={styles.bar}></span>
                      <label className={styles.label}>Name</label>
                    </div>
                    <div className={styles.group}>
                      <input
                        className={styles.input}
                        type="text"
                        required
                      ></input>
                      <span className={styles.highlight}></span>
                      <span className={styles.bar}></span>
                      <label className={styles.label}>Email</label>
                    </div>
                    <div className={styles.group}>
                      <textarea
                        className={styles.input}
                        type="text"
                        required
                      ></textarea>
                      <span className={styles.highlight}></span>
                      <span className={styles.bar}></span>
                      <label className={styles.label}>
                        What's On Your Mind
                      </label>
                    </div>
                    <div className={styles.group}>
                      <button className={styles.button}>Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
