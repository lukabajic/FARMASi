import styles from "./Additional.module.css";

import Container from "../../utility/Container/Container";

const Additional = () => (
  <section className={styles.wrapper}>
    <article className={styles.creator}>
      <div className={styles.creator__name}>
        Tvorac <strong>prirodne formule</strong> dr. Cevdet Tuna
      </div>
      <figure className={styles.creator__container}>
        <img
          src="onama/dr.jpg"
          alt="dr. Cevdet Tuna"
          className={styles.creator__img}
        />
      </figure>
      <p className={styles.creator__text}>
        Dr. Cevdet Tuna, rođen je u Edime (Turska). Studirao je na Goethe
        Medicinskom fakultetu u Nemačkoj uz tursku državnu stipendiju. Početkom
        50-ih godina prošlog veka, uspostavio je jednu od prvih fabrika lekova u
        Istambulu koja je proizvela prvi sirup protiv kašlja, tablete protiv
        bolova, gelove za masažu... koji su poslužili kao preteča mnogim
        današnjim savremenim lekovima. Danas brand Dr. C. Tuna čini više od 100
        licenciranih proizvoda
      </p>
    </article>

    <article className={styles.source}>
      <figure>
        <img
          src="onama/izvor-lepote.jpg"
          alt="Izvor lepote"
          className={styles.source__img}
        />
      </figure>
      <div className={styles.source__text}>
        <h3 className={styles.source__heading}>
          Na izvoru <strong>lepote</strong>
        </h3>
        <p className={styles.source__paragraph}>
          <span>
            Samo srce FARMASi laboratorije krije dragoceni izvor vode smešten na
            zaštićenom i ekološki najčistijem području Istanbula
          </span>
          . Kvalitet naših proizvoda ogleda se upravo u lekovitim svojstvima ove
          prirodne vode čiji mineralni sastav nije moguće reprodukovati: njena
          jedinstvena formula prevazilazi mogućnosti i najvećih svetskih umova.
          Potekla iz netaknutih dubina. FARMASi voda je bistra, mirisna,
          ozdravljujuća te je sa izuzetno blagotvornim svojstvima. Zapravo izvor
          olakšanja, posebno za osetljivu kožu kojoj je potrebna delikatna nega.
          Zahvaljujući svojoj idealnoj pH vrednosti ona umiruje, hidrira,
          pospešuje regeneraciju i deluje izotonično.
        </p>
      </div>
    </article>
  </section>
);

export default Additional;
