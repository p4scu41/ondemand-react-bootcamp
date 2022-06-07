import items from "../mocks/en-us/products.json";
import Product from './Product.js';

export default function Products() {
  const products = items.results;

  return (
    <div className="products" style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
      { products.map(product => <Product product={product}  key={product.id} />) }
    </div>
  );
}
