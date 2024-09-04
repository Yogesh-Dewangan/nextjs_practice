import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductOfCategory } from "../shared/fetch-data";
import { updateProducts } from "../store/product.reducer";
import Image from "next/image";

function ProductSection({ category }: string | any) {
  const products = useSelector((state: any) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductOfCategory(category.toLowerCase()).then((data) => {
      dispatch(updateProducts(data));
    });
  }, []);
  return (
    <section className="flex flex-row flex-wrap gap-4 p-4">
      {products.map((product: any) => (
        <div
          key={product?.id}
          className="w-28 flex flex-col justify-center items-center"
        >
          <Image
            src={product?.image}
            alt={product?.title}
            width={60}
            height={40}
            className="mb-4"
          />
          <p className="text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden text-center w-full  mb-1">
            {product?.title}
          </p>
          <p className="text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden text-center w-full  mb-1">
            {product?.description}
          </p>
          <p className="text-xs text-black text-nowrap text-ellipsis overflow-hidden text-center w-full  mb-1">
            MRP: <span className="text-gray-400">Rs {product.price}</span>
          </p>
        </div>
      ))}
    </section>
  );
}

export default ProductSection;
