import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../utils/hooks/useFetch";
import urlTo from "../../utils/urlTo";
import Categories from "../Categories/Categories.component";
import Pagination from "../Pagination/Pagination.component";
import Product from '../Product.component';
import Loading from "../Shared/Loading.component";
import { Container, FlexCenter, ProductsContainer, Wrapper } from './ProductList.styles';

function ProductList() {
  const [params] = useSearchParams();
  const [categoriesSelected, setCategoriesSelected] = useState(() => params.has('category') ? [params.get('category')] : [] );
  const [page, setPage] = useState(1);
  const {isLoading, data} = useFetch(urlTo.products(page));
  const products = !isLoading && data.results.filter((product) => {
    return categoriesSelected.length === 0 || categoriesSelected.includes(product.data.category.slug);
  });

  function handleSelectCategory(event, category_id) {
    event.stopPropagation();

    setCategoriesSelected((selected) => {
      // Add if not exists
      if (!selected.includes(category_id)) {
        return [category_id, ...selected];
      }

      // Remove if exists
      return selected.filter((value) => value !== category_id);
    });
  }

  function clearFilters() {
    setCategoriesSelected([]);
  }

  return (
    <Container>
      <Categories handleClick={handleSelectCategory} selectedIds={categoriesSelected} clearFilters={clearFilters}/>
      <Wrapper>
        <ProductsContainer>
          {
            !isLoading && products.map(product => <Product product={product} key={product.id} />)
          }
        </ProductsContainer>
        <FlexCenter>
          { !isLoading && products.length > 0 && <Pagination setPage={setPage} currentPage={data.page} totalPages={data.total_pages} /> }
          { !isLoading && products.length === 0 && 'Products not found in the selected categories.' }
          { isLoading && <Loading /> }
        </FlexCenter>
      </Wrapper>
    </Container>
  )
}

export default ProductList;
