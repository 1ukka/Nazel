import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <div className="footer">
      <div className={"footercontent"}>
        <div className={"footertext"}>Feel free To Contact Us</div>
        <div className={"icons"}>
          <ul>
            <li>
              <a className="facebook" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i className="fa fa-facebook" aria-hidden="true">
                  <FontAwesomeIcon icon={faFacebookF} />
                </i>
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i className="fa fa-twitter" aria-hidden="true">
                  <FontAwesomeIcon icon={faTelegram} />
                </i>
              </a>
            </li>
            <li>
              <a className="instagram" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i className="fa fa-instagram" aria-hidden="true">
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
