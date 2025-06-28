import type { IProduct } from "../../types/product.type";

interface ProductProps {
  product: IProduct;
  onClick: (product: IProduct) => void;
  onAddToCart: (product: IProduct) => void;
}
export default function ProductCard({
  product,
  onClick,
  onAddToCart,
}: ProductProps) {
  const isOutOfStock = product.stock < 1;
  return (
    <article
      onClick={() => onAddToCart(product)}
      data-testid="product"
      className=" bg-card cursor-pointer rounded-sm flex flex-col gap-4 shadow-sm max-w-[19rem] h-full hover:shadow-lg overflow-hidden"
    >
      <img
        src={product.imageUrl}
        alt={product.title}
        className=" w-full h-[10rem] object-cover bg-red-500"
      />
      <section className="flex flex-col gap-2 p-3 flex-1">
        <h3
          data-testid="product-name"
          className=" font-body text-sm md:text-base font-normal leading-6 text-body text-ellipsis"
        >
          {product.title}
        </h3>

        <data
          className=" font-semibold font-body text-base md:text-lg"
          value="100.00"
          data-testid="product-price"
        >
          ${product.price}
        </data>

        <ul
          data-testid="product-variants"
          className="flex items-center gap-2 flex-wrap mt-2 flex-1"
        >
          {product.variants?.map((variant) => (
            <li key={variant.label}>
              <button
                disabled={!variant.available}
                aria-disabled={!variant.available}
                className={`border border-border/80  ${
                  variant.available
                    ? "hover:border-primary hover:text-primary"
                    : " text-muted line-through cursor-not-allowed"
                } cursor-pointer rounded-sm p-1 flex justify-center items-center font-body leading-5 text-body`}
              >
                {variant.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => onAddToCart(product)}
          disabled={isOutOfStock}
          data-testid="add-to-cart-btn"
          aria-disabled={isOutOfStock}
          className=" font-body mt-4 font-medium text-onPrimary cursor-pointer bg-brand-button/90 hover:bg-brand-button/100 disabled:bg-button-muted disabled:cursor-not-allowed p-2 rounded-sm"
        >
          {isOutOfStock ? "Out of stock" : "Add to cart"}
        </button>
      </section>
    </article>
  );
}
