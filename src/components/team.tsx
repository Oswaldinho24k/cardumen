import swim1 from "../assets/images/swim1.jpeg";
import { BasicCard, LazyImage, RevealComponent } from "./common";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="bg-white px-10 py-10 md:px-16 lg:px-20 grid grid-cols-12 gap-3"
    >
      <div className="md:col-span-4 col-span-12">
        <RevealComponent>
          <p className="text-3xl font-bold text-center">Team Cardumen</p>
          <p className="text-xl mb-5 text-center">...Con Alma de Tiburón...</p>
        </RevealComponent>
      </div>

      <div className="md:col-span-8 col-span-12 grid grid-cols-12">
        {[1, 2, 3, 4].map((item, key) => (
          <div
            key={key}
            className="mb-5 flex flex-col md:flex-row items-center justify-center gap-3 lg:col-span-6 col-span-12"
          >
            <LazyImage
              className="rounded-xl object-cover h-40 w-40 gap-3"
              src={swim1}
              alt="team-member"
            />
            <RevealComponent>
              <p className="font-semibold text-lg">Lorena Apellido</p>
              <p className="text-slate-500 text-lg">Coach</p>
            </RevealComponent>
          </div>
        ))}
      </div>
    </section>
  );
}
