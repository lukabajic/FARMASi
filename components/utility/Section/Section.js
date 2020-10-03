import { useState } from "react";
import Button from "../Button/Button";

import styles from "./Section.module.css";

const Section = (props) => {
  const {
    buttonText,
    buttonLink,
    paragraph,
    header,
    imageUrl,
    imgAlt,
    reverse,
    noImageSpacing,
    newWindow,
  } = props;

  const figureStyles = [styles.figure];
  const wrapperStyles = [styles.wrapper];
  reverse && wrapperStyles.push(styles.reverse);
  noImageSpacing && figureStyles.push(styles.no__spacing);

  const [link, setLink] = useState(buttonLink);

  if (buttonLink.toLowerCase().includes("pdf")) {
    const pdfID = buttonLink.split(" ")[1];
    (async () => {
      const res = await fetch(
        `https://cdn.contentful.com/spaces/xmr7ioriechc/environments/master/assets/${pdfID}?access_token=_68lPZExyj4BhsOGwlXpa00EYe_tRDnCFHCDcDiUZx0`
      );
      const data = await res.json();
      setLink(data.fields.file.url);
    })();
  }

  return (
    <section className={wrapperStyles.join(" ")}>
      <figure className={figureStyles.join(" ")}>
        <img src={"https:" + imageUrl} alt={imgAlt} className={styles.img} />
      </figure>
      <div className={styles.content}>
        {header && (
          <h2
            dangerouslySetInnerHTML={{ __html: header }}
            className={styles.header}
          />
        )}
        {paragraph && (
          <p
            dangerouslySetInnerHTML={{ __html: paragraph }}
            className={styles.text}
          />
        )}
        {buttonText && (
          <Button blue growShadow href={link} blank={newWindow}>
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default Section;
