import styles from "./AboutText.module.css";

const AboutText = () => (
  <article className={styles.wrapper}>
    <h2 className={styles.heading}>
      Zašto biram <span>FARMASi?</span>
    </h2>
    <ul>
      <li className={styles.item}>
        Jer mi je stalo do <strong>ekologije</strong>{" "}
        <span>
          (FARMASi laboratorije nemaju dimnjake i svi izvori energije se
          recikliraju)
        </span>
        .
      </li>
      <li className={styles.item}>
        Zato što se brinem za svoje <strong>zdravlje</strong>{" "}
        <span>
          (sve linije preparativne i dekorativne kozmetike su dermatološki
          testirane)
        </span>
        .
      </li>
      <li className={styles.item}>
        Poštujem i volim <strong>životinje</strong>{" "}
        <span>(nijedan FARMASi proizvod nije testiran na životinjama)</span>.
      </li>
      <li className={styles.item}>
        Želim da budem <strong>lepa</strong>{" "}
        <span>
          (bogati asortiman preko 2000 kozmetičkih i medicinsko-kozmetiških
          proizvoda)
        </span>
        .
      </li>
      <li className={styles.item}>
        Jer mogu, uživajući u proverenom kvalitetu, koji je prepoznalo viče od
        350 miliona korisnika u 123 zemplje na pet kontinenata, da preporučujem
        FARMASi prijateljima, da uključujem druge, da zaradim i izgradim zavidnu
        karijeru.
      </li>
    </ul>
  </article>
);

export default AboutText;
