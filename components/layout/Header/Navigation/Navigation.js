import Link from "next/link";

import styles from "./Navigation.module.css";

const Navigation = ({ isNavOpen }) => {
  const PAGES = [
    {
      title: "Početna",
      link: "/",
      icon: "home-outline",
    },
    {
      title: "O nama",
      link: "/onama",
      icon: "information-outline",
    },
    {
      title: "Ponuda",
      link: "/ponuda",
      icon: "grid-outline",
    },
    {
      title: "Klub",
      link: "/klub",
      icon: "people-outline",
    },
    {
      title: "Kontakt",
      link: "/kontakt",
      icon: "call-outline",
    },
  ];

  const wrapperStyles = [styles.wrapper];
  isNavOpen && wrapperStyles.push(styles.open);

  const renderedLinks = PAGES.map((page, index) => (
    <li className={styles.nav__item} key={page.title}>
      <Link href={`${page.link}`}>
        <a className={styles.nav__link}>
          <ion-icon name={page.icon}></ion-icon>
          {page.title}
        </a>
      </Link>
      {index < PAGES.length - 1 ? <hr className={styles.hr} /> : null}
    </li>
  ));

  return (
    <nav className={wrapperStyles.join(" ")}>
      <ul
        className={styles.nav}
        style={{ gridTemplateColumns: `repeat(${PAGES.length}, max-content)` }}
      >
        {renderedLinks}
      </ul>
    </nav>
  );
};

export default Navigation;

// const SOCIAL_PAGES = [
//   { facebook: "https://www.facebook.com/farmasiolga/" },
//   { instagram: "https://www.instagram.com/streberkefarmasi/" },
//   { youtube: "https://www.youtube.com/c/OlgaVelesyk/" },
// ];

{
  /* <hr className={styles.hr} />
<li className="nav__item">
  <a
    href="https://www.facebook.com/farmasiolga/"
    className="nav__link"
    target="_blank"
  >
    <ion-icon name="logo-facebook"></ion-icon>Facebook
  </a>
</li>
<hr className={styles.hr} />
<li className="nav__item">
  <a
    href="https://www.instagram.com/streberkefarmasi/"
    className="nav__link"
    target="_blank"
  >
    <ion-icon name="logo-instagram"></ion-icon>Instagram
  </a>
</li>
<hr className={styles.hr} />
<li className="nav__item">
  <a
    href="https://www.youtube.com/c/OlgaVelesyk/"
    className="nav__link"
    target="_blank"
  >
    <ion-icon name="logo-youtube"></ion-icon>Youtube
  </a>
</li> */
}
