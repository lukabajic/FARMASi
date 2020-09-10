import Button from "../Button/Button";

import styles from "./Section.module.css";

const Section = (props) => {
  const {
    buttonText,
    text,
    header,
    imgSrc,
    imgAlt,
    reverse,
    noImgSpacing,
    href,
    blank = false,
  } = props;

  const figureStyles = [styles.figure];
  const wrapperStyles = [styles.wrapper];
  reverse && wrapperStyles.push(styles.reverse);
  noImgSpacing && figureStyles.push(styles.no__spacing);

  // const figure = () => (
  //   <figure className={figureStyles.join(" ")}>
  //     <img src={imgSrc} alt={imgAlt} className={styles.img} />
  //   </figure>
  // );
  // const content = () => (
  //   <div className={styles.content}>
  //     {header && <h2 className={styles.header}>{header}</h2>}
  //     {text && <p className={styles.text}>{text}</p>}
  //     {buttonText && (
  //       <Button blue growShadow href={href} blank={blank}>
  //         {buttonText}
  //       </Button>
  //     )}
  //   </div>
  // );

  // let render = (
  //   <>
  //     {figure()}
  //     {content()}
  //   </>
  // );
  // if (reverse) {
  //   render = (
  //     <>
  //       {content()}
  //       {figure()}
  //     </>
  //   );
  // }

  return (
    <section className={wrapperStyles.join(" ")}>
      <figure className={figureStyles.join(" ")}>
        <img src={imgSrc} alt={imgAlt} className={styles.img} />
      </figure>
      <div className={styles.content}>
        {header && <h2 className={styles.header}>{header}</h2>}
        {text && <p className={styles.text}>{text}</p>}
        {buttonText && (
          <Button blue growShadow href={href} blank={blank}>
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default Section;
