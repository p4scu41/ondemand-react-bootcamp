import { useEffect, useState } from "react";
import styled from "styled-components";
import loadingImg from '../img/loading.gif';
import items from "../mocks/en-us/products.json";
import Categories from "./Categories";
import Pagination from "./Pagination";
import Product from './Product.js';

const Container = styled.div`
  display: flex;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

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
      <div style={{flex: 'auto'}}>
        <ProductsContainer>
          {
            !isLoading && products.map(product => <Product product={product} key={product.id} />)
          }
        </ProductsContainer>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          { !isLoading && products.length > 0 && <Pagination /> }
          { !isLoading && products.length === 0 && 'Products not found in the selected categories.' }
          { isLoading && <img alt="loading..." src={loadingImg} style={{width: '60px'}}/> }
        </div>
      </div>
    </Container>
  )
}

export default ProductList;
