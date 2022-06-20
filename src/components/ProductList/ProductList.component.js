import { useEffect, useState } from "react";
import loadingImg from '../../img/loading.gif';
import items from "../../mocks/en-us/products.json";
import Categories from "../Categories/Categories.component";
import Pagination from "../Pagination/Pagination.component";
import Product from '../Product.component';
import { Container, FlexCenter, ImgLoading, ProductsContainer, Wrapper } from './ProductList.styles';

function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const products = items.results.filter((product) => {
    return categoriesSelected.length === 0 || categoriesSelected.includes(product.data.category.id);
  });

  useEffect(() => {
    // window.scrollTo({top: 0, behavior: 'smooth'});
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);

  function handleSelectCategory(event, category_id) {
    event.stopPropagation();

    setCategoriesSelected((selected) => {
      if (!selected.includes(category_id)) {
        return [category_id, ...selected];
      }

      return selected.filter((value) => value !== category_id);
    });
  }

  return (
    <Container>
      <Categories show_title={true} show_image={false} handleClick={handleSelectCategory} selectedIds={categoriesSelected}/>
      <Wrapper>
        <ProductsContainer>
          {
            !isLoading && products.map(product => <Product product={product} key={product.id} />)
          }
        </ProductsContainer>
        <FlexCenter>
          { !isLoading && products.length > 0 && <Pagination /> }
          { !isLoading && products.length === 0 && 'Products not found in the selected categories.' }
          { isLoading && <ImgLoading alt="loading..." src={loadingImg} /> }
        </FlexCenter>
      </Wrapper>
    </Container>
  )
}

export default ProductList;
