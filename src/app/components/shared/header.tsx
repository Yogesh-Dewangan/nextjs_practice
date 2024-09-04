import Image from "next/image";

export default function Header() {
  return (
    <section className="flex justify-between px-10 py-2 shadow-lg">
      <Image src="/header_logo.png" alt="logo" width={100} height={60} />
      <span className="flex items-center gap-x-3">
        <span className="text-xs text-blue-400">Location</span>
        <Image
          src="/header_logo.png"
          alt="location_img"
          width={40}
          height={20}
        />
        <Image src="/header_logo.png" alt="search_img" width={40} height={20} />
        <Image src="/header_logo.png" alt="cart_img" width={40} height={20} />
        <Image src="/header_logo.png" alt="heart_img" width={40} height={20} />
        <Image
          src="/header_logo.png"
          alt="forword_img"
          width={40}
          height={20}
        />
      </span>
    </section>
  );
}
