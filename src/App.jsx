import { useState, useEffect } from "react";
import "./App.css";

/* images */
import Nav__Logo from "./assets/images/logo.svg";
import IconArrowDesktop from "./assets/images/icon-arrow-light.svg";
import IconArrowMobile from "./assets/images/icon-arrow-dark.svg";
import Phones from "./assets/images/illustration-phones.svg";
import IconHamburger from "./assets/images/icon-hamburger.svg";
import IconClose from "./assets/images/icon-close.svg";

import EditorMobile from "./assets/images/illustration-editor-mobile.svg";
import LaptopMobile from "./assets/images/illustration-laptop-mobile.svg";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navActiveTab, setNavActiveTab] = useState(0); // 0 = off
  const [menuState, setMenuState] = useState(false);
  const mobileBreakpoint = 1200;

  // find out window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // clean up, remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > mobileBreakpoint) {
      setMenuState(false);
    }
  }, [windowWidth]);

  /* create item functions */
  const createNavItemList = (index, footer) => {
    const mobile = windowWidth <= mobileBreakpoint;

    if (index === 1) {
      return (
        <div
          className={
            !footer
              ? mobile
                ? "nav__list-container--mobile"
                : "nav__list-container"
              : "footer__list-container"
          }
        >
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            Overview
          </a>
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            Pricing
          </a>
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            Marketplace
          </a>
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            Features
          </a>
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            Integrations
          </a>
        </div>
      );
    } else if (index === 2) {
      return (
        <div
          className={
            !footer
              ? mobile
                ? "nav__list-container--mobile"
                : "nav__list-container"
              : "footer__list-container"
          }
        >
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            About
          </a>
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            Team
          </a>
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            Blog
          </a>
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            Careers
          </a>
        </div>
      );
    } else {
      return (
        <div
          className={
            !footer
              ? mobile
                ? "nav__list-container--mobile"
                : "nav__list-container"
              : "footer__list-container"
          }
        >
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            Contact
          </a>
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
          >
            Newsletter
          </a>
          <a
            className={
              (mobile ? "nav__list-item--mobile" : "nav__list-item") +
              (footer ? " footer__list-item" : "")
            }
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
      <div
        className={mobile ? "nav__dropdown-menu--mobile" : "nav__dropdown-menu"}
      >
        <div
          className="nav__dropdown-container"
          onClick={() => setNavActiveTab(navActiveTab === 1 ? 0 : 1)}
        >
          <div className="nav__a-wrapper">
            <a className={mobile && navActiveTab === 1 ? "nav__a--mobile" : ""}>
              Product
            </a>
            {createNavArrows(1)}
          </div>
          {navActiveTab === 1 ? createNavItemList(1, false) : null}
        </div>
        <div
          className="nav__dropdown-container"
          onClick={() => setNavActiveTab(navActiveTab === 2 ? 0 : 2)}
        >
          <div className="nav__a-wrapper">
            <a className={mobile && navActiveTab === 2 ? "nav__a--mobile" : ""}>
              Company
            </a>
            {createNavArrows(2)}
          </div>
          {navActiveTab === 2 ? createNavItemList(2, false) : null}
        </div>
        <div
          className="nav__dropdown-container"
          onClick={() => setNavActiveTab(navActiveTab === 3 ? 0 : 3)}
        >
          <div className="nav__a-wrapper">
            <a className={mobile && navActiveTab === 3 ? "nav__a--mobile" : ""}>
              Connect
            </a>
            {createNavArrows(3)}
          </div>
          {navActiveTab === 3 ? createNavItemList(3, false) : null}
        </div>
      </div>
    );
  };

  /* handlers */

  /* app return */

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__left-container">
            <img className="nav__logo" src={Nav__Logo} alt="blogr logo"></img>
            {windowWidth > mobileBreakpoint ? createNavItems() : null}
          </div>
          {windowWidth > mobileBreakpoint ? (
            <div className="nav__right-container">
              <a>Login</a>
              <button className="nav__sign-up-button">Sign Up</button>
            </div>
          ) : menuState ? (
            <img
              className="nav__menu-icon"
              src={IconClose}
              alt="nav menu close icon"
              onClick={() => setMenuState(false)}
            ></img>
          ) : (
            <img
              className="nav__menu-icon"
              src={IconHamburger}
              alt="nav menu open icon"
              onClick={() => setMenuState(true)}
            ></img>
          )}
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
      {menuState ? (
        <div className="nav__mobile-modal">
          {createNavItems()}
          <div className="nav__divider"></div>
          <div className="nav__right-container nav__right-container--mobile">
            <a>Login</a>
            <button className="nav__sign-up-button nav__sign-up-button--mobile">
              Sign Up
            </button>
          </div>
        </div>
      ) : null}
      <main>
        <h1 className="main__h1">Designed for the future</h1>
        <section className="feature1">
          {windowWidth <= mobileBreakpoint ? (
            <img
              className="feature1__img--mobile feature__img--mobile"
              src={EditorMobile}
              alt="editor mobile img"
            ></img>
          ) : null}
          <div className="feature1__container feature__container">
            <h2>Introducing an extensible editor</h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="feature1__container feature__container">
            <h2>Robust content management</h2>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </section>
        <section className="feature2">
          <img
            className="feature2__phones-img"
            src={Phones}
            alt="phones img"
          ></img>
          <div className="feature2__container feature__container">
            <h3 className="feature2__header">
              State of the Art Infrastructure
            </h3>
            <p className="feature2__text">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </section>
        <section className="feature3">
          {windowWidth <= mobileBreakpoint ? (
            <img
              className="feature3__img--mobile feature__img--mobile"
              src={LaptopMobile}
              alt="laptop mobile img"
            ></img>
          ) : null}
          <div className="feature3__container feature__container">
            <h2>Free, open, simple</h2>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="feature3__container feature__container">
            <h2>Powerful tooling</h2>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </section>
        <footer>
          <div className="footer__container">
            <img
              className="footer__logo"
              src={Nav__Logo}
              alt="footer logo"
            ></img>
            <div className="footer__nav-container">
              <h4>Product</h4>
              {createNavItemList(1, true)}
            </div>
            <div className="footer__nav-container">
              <h4>Company</h4>
              {createNavItemList(2, true)}
            </div>
            <div className="footer__nav-container">
              <h4>Connect</h4>
              {createNavItemList(3, true)}
            </div>
          </div>
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://github.com/exchyphen" target="_blank">
              exc
            </a>
            .
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
