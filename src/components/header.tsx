import swim1 from "../assets/images/swim1.jpeg";
import { ParallaxBG } from "./common";

export default function Header() {
  return (
    <section id="home">
      <ParallaxBG image={swim1}>
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold">Cardumen</h1>
          <p className="text-2xl">...Con alma de tiburón...</p>
        </div>
      </ParallaxBG>
    </section>
  );
}
