import styles from "./frontimg.module.css";
import busimg from "../../assets/NAZEL.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Frontimg = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const handleGetStarted = () => {
    setClicked(true);
    setTimeout(() => {
      navigate("/Map");
    }, 1500);
  };
  return (
    <div className={styles.frontimg}>
      <div className={styles.bgimg}>
        <div className={styles.text}>
          <p className={styles.headertext}>With Us You Won't Get Lost</p>
          <p className={styles.textdes}>
            A Place Can Help You to Know The Road<br></br> For Your Destination
          </p>
        </div>
        <div className={styles.imgbtn}>
          <button onClick={handleGetStarted}>
            <p>Get Started</p>
          </button>
        </div>
      </div>
      <div className={styles.handlebusimg} style={{ transform: clicked ? 'translateX(100%)' : 'translateX(0)', transition: 'transform 3.4s ease' }}>
  <img className={styles.busimg} src={busimg} alt="busimg" />
</div>
    </div>
  );
};
