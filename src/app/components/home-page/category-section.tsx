import Image from "next/image";
import Link from "next/link";

import { getCategories } from "../shared/fetch-data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../store/category.reducer";

export default function CategorySection() {
  const categories = useSelector((state: any) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories().then((data) => {
      dispatch(updateCategory(data));
    });
  }, []);

  return (
    <section className="my-6">
      <h2 className="text-lg text-blue-700 font-bold mb-4">
        Choose you are looking for
      </h2>
      <div className="flex gap-6">
        {categories.map((category: string) => (
          <Link href={`/category?name=${category}`}>
            <div
              className="flex flex-col justify-center items-center w-16"
              key={category}
            >
              <span className="p-2 border rounded-full overflow-hidden bg-white mb-2 inline-block w-14 h-14 flex items-center">
                <Image src="/header_logo.png" alt="" width={50} height={50} />
              </span>
              <p className="text-xs text-blue-400 w-16 text-nowrap text-ellipsis overflow-hidden text-center">
                {category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
