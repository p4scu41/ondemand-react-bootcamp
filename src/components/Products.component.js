import styled from "styled-components";
import items from "../mocks/en-us/products.json";
import Product from './Product.component';

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function Products({filter}) {
  const products = filter ? items.results.filter(filter) : items.results;

  return (
    <ProductsContainer>
      { products.map(product => <Product product={product} key={product.id} />) }
    </ProductsContainer>
  );
}
