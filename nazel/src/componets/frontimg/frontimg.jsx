import styles from "./frontimg.module.css";
import busimg from "../../assets/NAZEL.png"
import { useNavigate} from "react-router-dom";

export const Frontimg = () => {
  const navigate = useNavigate();

  const  handleGetStarted = async() => {

    setTimeout(() => {navigate("/map");}, 1500);
    
  };
  return (
    
    <div className={styles.frontimg}>
      <div className={styles.bgimg}>
        <div className={styles.text}>
          <p className={styles.headertext}>With Us You Won't Get Lost</p>
          <p className={styles.textdes}>A Place Can Help You to Know The Road<br></br> For Your Destination</p>
        </div>
        <div className={styles.imgbtn}><button onClick={handleGetStarted}><p>Get Started</p></button></div>
      </div>
      <div className={styles.handlebusimg}><img className={styles.busimg} src={busimg} alt="busimg" /></div>
    </div>
  );
};
