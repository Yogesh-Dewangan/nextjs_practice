import Image from "next/image";

export default function BannerSection() {
  return (
    <section>
      <Image src="/banner.webp" alt="banner" width={1920} height={160} />
    </section>
  );
}
