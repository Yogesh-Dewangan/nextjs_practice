import Image from "next/image";

export default function SellerList() {
  const sellerList = [
    {
      id: 1,
      name: "Baby Shop",
      address: "G2 Wood square, Beside VR Mall, Surat",
      timing: "10:30 AM to 9:30 PM",
      distance: 2,
    },
    {
      id: 2,
      name: "Baby Shop",
      address: "G2 Wood square, Beside VR Mall, Surat",
      timing: "10:30 AM to 9:30 PM",
      distance: 2,
    },
    {
      id: 3,
      name: "Baby Shop",
      address: "G2 Wood square, Beside VR Mall, Surat",
      timing: "10:30 AM to 9:30 PM",
      distance: 2,
    },
    {
      id: 4,
      name: "Baby Shop",
      address: "G2 Wood square, Beside VR Mall, Surat",
      timing: "10:30 AM to 9:30 PM",
      distance: 2,
    },
    {
      id: 5,
      name: "Baby Shop",
      address: "G2 Wood square, Beside VR Mall, Surat",
      timing: "10:30 AM to 9:30 PM",
      distance: 2,
    },
    {
      id: 6,
      name: "Baby Shop",
      address: "G2 Wood square, Beside VR Mall, Surat",
      timing: "10:30 AM to 9:30 PM",
      distance: 2,
    },
  ];

  return (
    <section className="my-6">
      <h2 className="text-lg text-blue-700 font-bold mb-4">Shops nearby you</h2>
      <div className="flex gap-6">
        {sellerList.map((seller) => (
          <div
            className="flex flex-col justify-center items-center w-32"
            key={seller.id}
          >
            <Image
              src="/header_logo.png"
              alt=""
              width={100}
              height={50}
              className="mb-2"
            />
            <p className="text-xs text-blue-600 text-nowrap text-ellipsis overflow-hidden text-center mb-1">
              {seller.name}
            </p>
            <p className="text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden text-center w-full  mb-1">
              {seller.address}
            </p>
            <p className="text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden text-center mb-1">
              {seller.timing}
            </p>
            <p className="flex text-xs text-blue-400 text-nowrap text-ellipsis overflow-hidden text-center">
              <Image
                src="/header_logo.png"
                alt="pointer"
                width={10}
                height={10}
                className="mr-1"
              />
              {seller.distance} km
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
