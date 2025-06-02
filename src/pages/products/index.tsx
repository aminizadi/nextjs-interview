import Product from "@/components/product";
import { useEffect, useState } from "react";
export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="container mx-auto my-4 px-4">
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {data.map((product: ProductType) => (
          <Product product={product} key={`product-${product.id}`} />
        ))}
      </div>
    </div>
  );
}
