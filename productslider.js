import { useState } from 'react';
import { gsap } from 'gsap';

const products = [
  { name: "Luxury Bag", price: "$120", image: "/product1.jpg" },
  { name: "Elegant Watch", price: "$250", image: "/product2.jpg" },
  { name: "Designer Shoes", price: "$180", image: "/product3.jpg" },
];

export default function ProductSlider() {
  const [index, setIndex] = useState(0);

  const slide = (dir) => {
    const newIndex = (index + dir + products.length) % products.length;
    gsap.fromTo("#product", { opacity: 0, x: dir > 0 ? 100 : -100 }, { opacity: 1, x: 0, duration: 0.6 });
    setIndex(newIndex);
  };

  const product = products[index];

  return (
    <section className="my-12 px-4 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Best Selling Products</h2>
      <div id="product" className="transition-transform duration-500 ease-in-out">
        <img src={product.image} alt={product.name} className="mx-auto mb-4 h-40 object-contain" />
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={() => slide(-1)} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Prev</button>
        <button onClick={() => slide(1)} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Next</button>
      </div>
    </section>
  );
}
