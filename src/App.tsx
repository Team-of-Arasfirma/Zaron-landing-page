
import Header from "./components/Header";
import Products from "./components/products/Products";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Products />
        <Location />
        <Footer />
      </main>
    </>
  );
}
