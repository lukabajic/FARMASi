import styles from "./HeaderToggler.module.css";

const HeaderToggler = ({ clicked, isNavOpen, homePage }) => {
  const iconStyles = [styles.icon];
  homePage && iconStyles.push(styles.icon__light);
  isNavOpen && iconStyles.push(styles.icon__active);

  return (
    <div className={styles.toggler} onClick={clicked}>
      <div className={iconStyles.join(" ")}></div>
    </div>
  );
};

export default HeaderToggler;
