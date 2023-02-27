import { Header, Team, Testimonials, Training, Events } from "./components";
import { ParallaxBG } from "./components/common";
import swim1 from "./assets/images/swim1.jpeg";

function App() {
  return (
    <main>
      <Header />
      <Training />
      <Team />
      <Events />
      <Testimonials />
      <ParallaxBG image={swim1}></ParallaxBG>
    </main>
  );
}

export default App;
