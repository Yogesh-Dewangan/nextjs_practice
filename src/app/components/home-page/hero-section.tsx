import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex items-center">
      <div className="basis-1/2 px-12">
        <h1 className="text-2xl text-violet-900 font-bold mb-2">
          We are here to provide <br /> all services
        </h1>
        <p className="text-sm font-light leading-relaxed mb-6">
          Company that provide local search for different services in India over
          the phone and online
        </p>
        <div className="relative">
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search for product anywhere in India"
          />
          <svg
            className="absolute right-3 top-2/4 -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0"
            ></path>
          </svg>
        </div>
      </div>
      <div className="basis-1/2">
        <Image
          src="/cloths.webp"
          alt="cloth-1"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
}
