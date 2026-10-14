
import type { Product } from "../../types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article
      className="
        group relative isolate flex flex-col
        overflow-hidden rounded-xl
        border border-transparent bg-white
        p-3
        transition-[transform,box-shadow,border-color]
        duration-300 ease-out
        motion-safe:hover:-translate-y-1
        hover:border-[#F47721]/50
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)]
        motion-reduce:transition-none
        sm:p-5
      "
    >
      {/* Product Image */}
      <div
        className="
          relative flex aspect-[4/3]
          items-center justify-center
          overflow-hidden
        "
      >
        <img
          src={product.image ?? undefined}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Name */}
      <h3
        className="
          mt-4 text-sm font-semibold
          text-[#111719]
          transition-colors duration-300
          group-hover:text-[#F47721]
          motion-reduce:transition-none
          sm:text-base
        "
      >
        {product.name}
      </h3>

      {/* Animated Bottom Accent */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-0 left-0 h-[3px] w-full
          origin-left scale-x-0
          bg-[#F47721]
          transition-transform duration-500 ease-out
          group-hover:scale-x-100
          motion-reduce:transition-none
        "
      />
    </article>
  );
}
