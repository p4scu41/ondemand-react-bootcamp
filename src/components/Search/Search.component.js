import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../utils/hooks/useFetch";
import urlTo from "../../utils/urlTo";
import Pagination from "../Pagination/Pagination.component";
import Product from "../Product.component";
import { FlexCenter, ProductsContainer } from "../ProductList/ProductList.styles";
import Loading from "../Shared/Loading.component";

export default function Search() {
  const [params] = useSearchParams();
  const searchTerm = params.get('q');
  const [page, setPage] = useState(1);
  const {isLoading, data} = useFetch(urlTo.searchProducts(searchTerm, page));

  return (
    <>
      <ProductsContainer>
        {
          !isLoading && data.results.map(product => <Product product={product} key={product.id} />)
        }
      </ProductsContainer>
      <FlexCenter>
        { !isLoading && data.results.length > 0 && <Pagination setPage={setPage} currentPage={data.page} totalPages={data.total_pages} /> }
        { !isLoading && data.results.length === 0 && `Products not found with the term "${searchTerm}".` }
        { isLoading && <Loading /> }
      </FlexCenter>
    </>
  )
}
