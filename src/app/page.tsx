// COMPONENTS
import { Calls, Card, CarouselInfo, UserInfo } from "@/components";
// HOOKS
// REDUX
// INTERFACE
// LIBRARY
// CSS
// JAVASCRIP

export const metadata = {
  title: "Tauros Home",
  description:
    "Compra gelatinas de pata naturales en Tauros. Fortalece tus articulaciones con productos saludables y de calidad. Envíos rápidos y atención personalizada.",
};

export default function Home() {
  return (
    <main>
      <section>
        <CarouselInfo />
      </section>
      <section>
        <Card />
      </section>
      <section>
        <UserInfo />
      </section>
      <section>
        <Calls />
      </section>
    </main>
  );
}
