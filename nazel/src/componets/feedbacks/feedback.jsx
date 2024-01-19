import styles from "./feedback.module.css";
import classify from "../../assets/undraw_tourist_map_re_293e.svg";
import currentLocation from "../../assets/undraw_my_current_location_re_whmt.svg";
import rightDirection from "../../assets/undraw_right_direction_tge8.svg";
import { Container } from "../container/container";

export const Feedback = () => {
  return (
    <div className={styles.feeds}>
      <Container>
        <div className={styles.offers}>
          <p>What We Offer</p>
        </div>
        <div className={styles.reasons}>
          <div className={styles.classify}>
            <img src={classify} alt="classify" />
            <p>Classify What Around You</p>
          </div>
          <div className={styles.currentLocation}>
            <img src={currentLocation} alt="currentLocation" />
            <p>Gives You Your Current Location</p>
          </div>
          <div className={styles.rightDirection}>
            <img src={rightDirection} alt="rightDirection" />
            <p>Provide The Right Direction For You</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
