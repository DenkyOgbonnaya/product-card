import ProductCard from "./components/productCard";
import { products } from "./data/product.data";
import type { IProduct } from "./types/product.type";

function App() {
  const handleProductView = (product: IProduct) => {
    // basic log to get rid of types warnings
    console.log(product);
  };
  const handleAddToCart = (product: IProduct) => {
    // basic log to get rid of types warnings
    console.log(product);
  };
  return (
    <main className="flex flex-col items-center justify-center px-4 min-h-screen py-5 ">
      <section className=" flex flex-col gap-4 max-w-[75rem] bg-bacground shadow-sm p-4 rounded-sm">
        <h1 className="font-heading text-body text-lg md:text-xl font-medium leading-6">
          Featured Products
        </h1>
        <div className="flex items-center flex-wrap gap-2 self-center justify-stretch">
          {products.map((product) => (
            <div
              key={product.id}
              className=" w-[48%] md:w-[32%] lg:w-[15%] self-stretch"
            >
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                onClick={handleProductView}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
