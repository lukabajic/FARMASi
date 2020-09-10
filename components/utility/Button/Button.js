import Link from "next/link";

import styles from "./Button.module.css";

const Button = (props) => {
  const buttonClasses = [styles.button];
  props.small && buttonClasses.push(styles.button__small);
  props.blue && buttonClasses.push(styles.button__blue);
  props.white && buttonClasses.push(styles.button__white);
  props.transparent && buttonClasses.push(styles.button__transparent);
  props.growShadow && buttonClasses.push(styles.grow__shadow);
  props.center && buttonClasses.push(styles.center);

  if (props.blank) {
    return (
      <a
        href={props.href ? props.href : ""}
        target="_blank"
        className={buttonClasses.join(" ")}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link href={props.href ? props.href : ""}>
      <a className={buttonClasses.join(" ")}>{props.children}</a>
    </Link>
  );
};

export default Button;
