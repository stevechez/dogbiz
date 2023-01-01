import Footer from "./Footer";
import HeaderTop from "./header/HeaderTop";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <>
      <HeaderTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
