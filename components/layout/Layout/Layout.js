import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, homePage }) => (
  <>
    <Header homePage={homePage} />
    {children}
    <Footer />
  </>
);

export default Layout;
