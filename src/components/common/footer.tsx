// import coliseumLogo from "../../assets/images/coliseum-logo.webp";

import {
  RiInstagramLine,
  RiWhatsappLine,
  RiFacebookBoxLine,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer>
      <section className="flex flex-col items-center justify-between gap-1 bg-cyan-100 p-5">
        <div className="mb-1">
          {/* <img
            loading="lazy"
            src={coliseumLogo}
            alt="coliseum"
            className="object-cover w-24 h-24 md:w-32 md:h-32 rounded-full"
          /> */}
          <p>Cardumen</p>
        </div>
        <div className="mb-3 flex gap-5">
          <a
            aria-label="Instagram account"
            href="https://www.instagram.com/cardumenaguasabiertas/"
            target="_blank"
            className="text-md flex gap-3 sm:items-center sm:text-sm"
            rel="noreferrer"
          >
            <RiInstagramLine className="text-xl sm:text-2xl" />
          </a>
          <a
            aria-label="whatsapp contact"
            href="https://wa.me/520000000000/"
            target="_blank"
            className="text-md flex gap-3 sm:items-center sm:text-sm"
            rel="noreferrer"
          >
            <RiWhatsappLine className="text-xl sm:text-2xl" />
          </a>
          <a
            aria-label="facebook account"
            href="https://www.instagram.com/cardumenaguasabiertas/"
            target="_blank"
            className="text-md flex gap-3 sm:items-center sm:text-sm"
            rel="noreferrer"
          >
            <RiFacebookBoxLine className="text-xl sm:text-2xl" />
          </a>
        </div>
        <p className="text-center text-sm">
          © Cardumen Aguas Abiertas {new Date().getFullYear()}
        </p>
        <p className="text-center text-sm text-black/70">
          <a
            className=""
            href="https://oswaldinho24k.dev/"
            target="_blank"
            aria-label="Oswaldinho website for contact"
          >
            <i>🏊🏽‍♂️</i> By Oswaldinho
            <i>🏊🏽‍♂️</i>
          </a>
        </p>
      </section>
    </footer>
  );
}
