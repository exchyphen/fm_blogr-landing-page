import { useState, useEffect } from "react";
import "./App.css";

/* images */
import Nav__Logo from "./assets/images/logo.svg";
import IconArrowDesktop from "./assets/images/icon-arrow-light.svg";
import IconArrowMobile from "./assets/images/icon-arrow-dark.svg";
import PatternCircles from "./assets/images/bg-pattern-circles.svg";
import EditorDesktop from "./assets/images/illustration-editor-desktop.svg";
import Phones from "./assets/images/illustration-phones.svg";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navActiveTab, setNavActiveTab] = useState(0); // 0 = off
  const mobileBreakpoint = 800;

  // find out window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // clean up, remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* handlers */

  /* create item functions */
  const createNavItemList = (index, footer) => {
    if (index === 1) {
      return (
        <div
          className={
            "nav__list-container" + (footer ? " footer__list-container" : "")
          }
        >
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Overview
          </a>
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Pricing
          </a>
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Marketplace
          </a>
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Features
          </a>
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Integrations
          </a>
        </div>
      );
    } else if (index === 2) {
      return (
        <div
          className={
            "nav__list-container" + (footer ? " footer__list-container" : "")
          }
        >
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            About
          </a>
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Team
          </a>
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Blog
          </a>
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Careers
          </a>
        </div>
      );
    } else {
      return (
        <div
          className={
            "nav__list-container" + (footer ? " footer__list-container" : "")
          }
        >
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Contact
          </a>
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Newsletter
          </a>
          <a
            className={"nav__list-item" + (footer ? " footer__list-item" : "")}
          >
            Linkedin
          </a>
        </div>
      );
    }
  };

  const createNavArrows = (index) => {
    const mobile = windowWidth <= mobileBreakpoint;

    return navActiveTab !== index ? (
      mobile ? (
        <img
          className="nav__arrow"
          src={IconArrowMobile}
          alt="arrow down dark"
        ></img>
      ) : (
        <img
          className="nav__arrow"
          src={IconArrowDesktop}
          alt="arrow down light"
        ></img>
      )
    ) : mobile ? (
      <img
        className="nav__arrow nav__arrow--active"
        src={IconArrowMobile}
        alt="arrow up dark"
      ></img>
    ) : (
      <img
        className="nav__arrow nav__arrow--active"
        src={IconArrowDesktop}
        alt="arrow up light"
      ></img>
    );
  };

  const createNavItems = () => {
    const mobile = windowWidth <= mobileBreakpoint;

    return (
      <div className="nav__dropdown-menu">
        <div className="nav__a-wrapper">
          <a onClick={() => setNavActiveTab(navActiveTab === 1 ? 0 : 1)}>
            Product
          </a>
          {createNavArrows(1)}
          {!mobile && navActiveTab === 1 ? createNavItemList(1, false) : null}
        </div>
        <div className="nav__a-wrapper">
          <a onClick={() => setNavActiveTab(navActiveTab === 2 ? 0 : 2)}>
            Company
          </a>
          {createNavArrows(2)}
          {!mobile && navActiveTab === 2 ? createNavItemList(2, false) : null}
        </div>
        <div className="nav__a-wrapper">
          <a onClick={() => setNavActiveTab(navActiveTab === 3 ? 0 : 3)}>
            Connect
          </a>
          {createNavArrows(3)}
          {!mobile && navActiveTab === 3 ? createNavItemList(3, false) : null}
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__left-container">
            <img className="nav__logo" src={Nav__Logo} alt="blogr logo"></img>
            {createNavItems()}
          </div>
          <div className="nav__right-container">
            <a>Login</a>
            <button className="nav__sign-up-button">Sign Up</button>
          </div>
        </nav>
        <div className="header__cta-container">
          <h1 className="header__h1">A modern publishing platform</h1>
          <p className="header__text">
            Grow your audience and build your online brand
          </p>
          <div className="header__cta-button-container">
            <button className="header__start-button">Start for Free</button>
            <button className="header__learn-more-button">Learn More</button>
          </div>
        </div>
      </header>
      <main>
        <section className="feature1">
          <h1>Designed for the future</h1>
          <div className="test">
            <img src={Phones}></img>
            <img src={EditorDesktop}></img>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
