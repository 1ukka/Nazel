import { Container } from "../container/container";
import { Header } from "../header/header";
import styles from "./about.module.css";

export const About = () => {
  return (
    <div className={styles.about}>
      <Header />
      <div className={styles.secondabout}>
        <Container>
          <div className={styles.aboutimg}>
            <img
              src="https://cdn.dribbble.com/users/418188/screenshots/3801140/californication_bus_animation_tubik.gif"
              alt=""
            />
          </div>
          <div className={styles.aboutusheader}>About Us</div>
          <p className={styles.talk}>
            Welcome to <span className={styles.logo}>NAZEL</span>, your
            comprehensive guide to navigating the world of public bus
            transportation. Our mission is simple yet vital:<br></br> to make
            your bus travel easier, more efficient, and accessible, no matter
            where you are.
          </p>
          <div>
            <h2 className={styles.header}>Our Story</h2>
            <p className={styles.talk}>
              Born from the challenges of urban commute and the need for a
              reliable transit guide, <span className={styles.logo}>NAZEL</span>{" "}
              was created to empower travelers like you. We recognized the
              complexity and often the frustration involved in figuring out bus
              routes, schedules, and station locations, especially in bustling
              cities and new areas. Thus, our platform was designed to simplify
              this process, offering an all-in-one solution for your bus travel
              needs.
            </p>
          </div>
          <div>
            <h2 className={styles.header}>What We Offer</h2>
            <p className={styles.reason}>
              At <span className={styles.logo}>NAZEL</span>, we're dedicated to
              enhancing your bus travel experience with our advanced and
              user-friendly features:
            </p>
            <ul className={styles.list}>
              <li>
                <p className={styles.listheader}>User-Friendly Interface:</p>
                <p className={styles.talk}>
                  Our website is designed for ease of use, ensuring that you can
                  find the information you need quickly and effortlessly.
                </p>
              </li>
              <li>
                <p className={styles.listheader}>Interactive Bus Route Maps:</p>
                <p className={styles.talk}>
                  Our comprehensive map displays all bus routes, allowing you to
                  visualize and plan your journey with ease. Each route is
                  clearly classified and color-coded for quick identification,
                  ensuring you can find the best route to your destination.
                </p>
              </li>
              <li>
                <p className={styles.listheader}>
                  Guidance to the Right Direction:
                </p>
                <p className={styles.talk}>
                  Navigating to your bus station or stop has never been easier.
                  We provide step-by-step directions from your current location
                  to your chosen bus stop or station. Whether you're walking,
                  driving, or cycling, our directions are tailored to suit your
                  mode of travel, ensuring you reach your bus stop efficiently.
                </p>
              </li>
              <li>
                <p className={styles.listheader}>
                  Real-Time Location Services:
                </p>
                <p className={styles.talk}>
                  Stay informed and secure with our real-time location feature.
                  This tool not only shows your current location but also tracks
                  your progress as you move towards your bus stop. It's
                  particularly useful for those unfamiliar with the area or when
                  traveling in new cities.
                </p>
              </li>
              <li>
                <p className={styles.listheader}>Wide Geographic Reach:</p>
                <p className={styles.talk}>
                  Our platform includes information on bus routes and stations
                  from multiple cities and regions. Whether it's bustling
                  metropolitan areas or quieter suburban zones, our coverage
                  spans across diverse landscapes, offering users access to a
                  vast network of public transportation options.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.header}>Join Our Community</p>
            <p className={styles.talk}>
              At <span className={styles.logo}>NAZEL</span>, we believe in the
              power of seamless and stress-free travel. We're more than just a
              platform; we're a community of explorers, commuters, and everyday
              travelers, united in the pursuit of easier bus journeys. Join us
              today and embark on a smarter way to travel by bus!
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};
