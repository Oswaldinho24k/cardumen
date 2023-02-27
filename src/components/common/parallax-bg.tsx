import { LayzyBackgroundImage, LazyImage, RevealComponent } from ".";

export default function ParallaxBG({ image, children }: any) {
  return (
    <section>
      {/* <section className="relative w-full">
        <div className="absolute w-full h-screen bg-black/30 flex items-center justify-center">
          <RevealComponent>
            <div className="text-white text-center">
              <h1 className="text-5xl">Cardumen</h1>
              <p className="text-2xl">...Con alma de tiburón...</p>
            </div>
          </RevealComponent>
        </div>
        <LazyImage
          src={swim1}
          alt="swimmer"
          className="w-full h-screen object-cover"
        />
      </section> */}
      <LayzyBackgroundImage
        src={image}
        className="h-screen bg-fixed bg-center bg-cover object-cover"
      >
        <div className="w-full h-screen bg-black/30 flex items-center justify-center">
          <RevealComponent>{children}</RevealComponent>
        </div>
      </LayzyBackgroundImage>
    </section>
  );
}
