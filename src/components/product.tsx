import { ProductType } from "@/pages/products";
import Image from "next/image";
type PropsType = {
  product: ProductType;
};
export default function Product({ product }: PropsType) {
  const { title, description, image, category, price, rating } = product;

  return (
    <div className="w-full p-4 border border-gray-200 rounded-md">
      <div className="flex flex-col justify-center items-center h-48">
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <div className="h3 min-h-12 overflow-hidden line-clamp-2">{title}</div>
      <div className="text-justify text-gray-500 text-sm overflow-hidden line-clamp-3">
        {description}
      </div>
      <div className="bg-zinc-100 px-2 py-1 rounded-sm my-2 text-sm font-bold">
        {category}
      </div>
      <div className="text-purple-800 font-bold">{price}$</div>
      <div className="border-t-gray-100 border-t pt-2 mt-2">
        {rating.rate}
        <span className="text-gray-700 text-xs"> of</span> {rating.count}
      </div>
    </div>
  );
}
