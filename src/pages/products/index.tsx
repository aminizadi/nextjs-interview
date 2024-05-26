import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      products
      <div className="">
        {data.map((item) => (
          <div className="" key={item.key}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
