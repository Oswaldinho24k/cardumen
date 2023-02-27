import swim1 from "../assets/images/swim1.jpeg";
import { RevealComponent } from "./common";
const posts = [
  {
    id: 1,
    title: "Ocean man",
    href: "#",
    description: "... Cardumen con alma de tiburón ...",
    imageUrl: swim1,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Cozumel",
      imageUrl: swim1,
    },
  },
  {
    id: 2,
    title: "Ocean man",
    href: "#",
    description: "... Cardumen con alma de tiburón ...",
    imageUrl: swim1,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Cozumel",
      imageUrl: swim1,
    },
  },
  {
    id: 3,
    title: "Ocean man",
    href: "#",
    description: "... Cardumen con alma de tiburón ...",
    imageUrl: swim1,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Cozumel",
      imageUrl: swim1,
    },
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-white px-10 py-10 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <RevealComponent>
            <p className="text-3xl font-bold text-center">Events</p>
            <p className="text-xl mb-5 text-center">
              ... Cardumen, con alma de tiburón...
            </p>
          </RevealComponent>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
