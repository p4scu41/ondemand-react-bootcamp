import { useState } from 'react';
import { Content, Footer, Section } from './App.styles';
import Header from './components/Header/Header.component';
import Home from './components/Home.component';
import ProductList from './components/ProductList/ProductList.component';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  const [currentPage, setCurrentPage] = useState('home');

  console.log(data, isLoading);

  function handleChangeCurrentPage(event) {
    event.stopPropagation();
    event.preventDefault();
    setCurrentPage(event.currentTarget.dataset.goToPage);
  }

  return (
    <Section>
      <Header title='Furniture Store' handleGoToPage={handleChangeCurrentPage}/>

      <Content>
        {
          (() => {
            switch (currentPage) {
              case 'ProductList':
                return <ProductList />

              default:
                return <Home handleGoToPage={handleChangeCurrentPage}/>
            }
          })()
        }
      </Content>

      <Footer>
        Ecommerce created during Wizeline's Academy React Bootcamp
      </Footer>
    </Section>
  );
}

export default App;
