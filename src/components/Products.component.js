import styled from "styled-components";
import useFetch from "../utils/hooks/useFetch";
import urlTo from "../utils/urlTo";
import Product from './Product.component';
import Loading from "./Shared/Loading.component";

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function Products() {
  const {isLoading, data: {results: products}} = useFetch(urlTo.featuredProducts());

  return (
    <ProductsContainer>
      {
        isLoading
        ? <center><Loading /></center>
        : products.map(product => <Product product={product} key={product.id} />)
      }
    </ProductsContainer>
  );
}
