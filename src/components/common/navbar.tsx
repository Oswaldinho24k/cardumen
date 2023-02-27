import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const links = [
  { text: "Home", linkTo: "#home" },
  { text: "Entrena", linkTo: "#training" },
  { text: "Equipo", linkTo: "#team" },
  { text: "Eventos", linkTo: "#events" },
  { text: "Testimonios", linkTo: "#testimonials" },
];

const Navbar = () => {
  return (
    <nav className="lg:px-30 flex w-full items-start justify-between gap-3 p-5 sm:px-10 md:px-20 xl:px-40 fixed bg-cyan-100 z-50">
      <div className="sm:hidden">
        <Disclosure as={"div"}>
          <Disclosure.Button className="font-semibold">
            <Bars3Icon className="h-8" />
          </Disclosure.Button>
          <Disclosure.Panel className="">
            <ul className="mt-3 flex flex-col items-start justify-start gap-3">
              {links.map((element, key) => (
                <a href={element.linkTo} key={`${element.text}-${key}`}>
                  <li>{element.text}</li>
                </a>
              ))}
            </ul>
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div className="flex items-center gap-1">
        <h1 className=" text-xl font-bold">Cardumen</h1>
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-3">
          {links.map((element, key) => (
            <a href={element.linkTo} key={`${element.text}-${key}`}>
              <li>{element.text}</li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
