import { products } from "../../data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section className="w-full bg-[#EDEDED] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-3xl lg:mb-10">
          Our Products
        </h2>

        {/* 2 cols on mobile · 3 cols on tablet · 5 cols on desktop */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
