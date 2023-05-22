import swim1 from "../assets/images/swim1.jpeg";
import { BasicCard, LazyImage, RevealComponent } from "./common";

export default function Training() {
  return (
    <section
      id="training"
      className="bg-cyan-100 px-10 py-10 md:py-20 md:px-16 lg:px-20"
    >
      <RevealComponent>
        <p className="text-3xl font-bold text-center">Cardumen</p>
        <p className="text-xl mb-5 text-center">...Con Alma de Tiburón...</p>
      </RevealComponent>
      <div className=" grid grid-cols-12 gap-5 items-center">
        {[1, 2, 3].map((item, key) => (
          <BasicCard
            key={key}
            title="Cardumen"
            text="Con Alma de Tiburón..."
            image={swim1}
          />
        ))}
      </div>
    </section>
  );
}
