// COMPONENTS
import {
  ButtonOrder,
  CarouselInfo,
  Footer,
  Products,
  Owners,
} from "@/components";
// HOOKS
// REDUX
// INTERFACE
// LIBRARY
// CSS
import "@/styles/background.styles.css";
// JAVASCRIP

export const metadata = {
  title: "Tauros Home",
  description:
    "Compra gelatinas de pata naturales en Tauros. Fortalece tus articulaciones con productos saludables y de calidad. Envíos rápidos y atención personalizada.",
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="backgroun1">
        <CarouselInfo />
      </section>
      <section className="backgroun2">
        <Products />
      </section>
      <section className="backgroun1">
        <Owners />
      </section>
      <section className="backgroun2">
        <Footer />
      </section>
      <ButtonOrder />
    </main>
  );
}
