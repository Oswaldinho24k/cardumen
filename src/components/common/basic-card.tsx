import { LazyImage } from ".";

export default function BasicCard({ title, text, image }: any) {
  return (
    <div className="col-span-12 lg:col-span-4 bg-white rounded-xl overflow-hidden md:flex md:items-center lg:block">
      <div className="px-10 py-5 md:w-1/3 lg:w-full">
        <p className="text-2xl">{title}</p>
        <p>{text}</p>
      </div>
      <div className="md:w-2/3 lg:w-full">
        <LazyImage src={image} alt="swimmer" className="w-full object-cover" />
      </div>
    </div>
  );
}
