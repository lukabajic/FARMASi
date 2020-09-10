import Head from "next/head";

import styles from "../styles/Klub.module.css";

import Layout from "../components/layout/Layout/Layout";
import Container from "../components/utility/Container/Container";
import ContactForm from "../components/utility/ContactForm/ContactForm";

const Klub = () => {
  return (
    <Layout>
      <Head>
        <title>Klub - FARMASi #štreberke</title>
      </Head>
      <main className={styles.wrapper}>
        <Container>
          <h1 className={styles.heading}>
            Želite da postanete <span>član</span> našeg <span>kluba</span>?
          </h1>
          <h4 className={styles.heading__small}>
            Besplatno učlanjenje. Sve što je potrebno da uradite jeste da
            popunite formu ispod.
          </h4>
          <div className={styles.container}>
            <div className={styles.text}>
              <p>
                Da li svakog meseca kupujete, šampon, gel za tuširanje, pastu za
                zube?
              </p>
              <p>Da li uštedite kupujući?</p>
              <p>Da li želite da zaradite preporučujući proizvode?</p>
              <p>
                Ako je odgovor na bilo koje pitanje - da, prijavite se za{" "}
                <strong>besplatni katalog</strong> koji će van stići na kućnu
                adresu za par dana.
              </p>
              <p>Bez obaveza, bez pritiska.</p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default Klub;
