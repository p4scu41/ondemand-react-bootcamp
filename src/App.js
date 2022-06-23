import { Route, Routes } from 'react-router-dom';
import { Content, Footer, Section } from './App.styles';
import Header from './components/Header/Header.component';
import Home from './components/Home.component';
import ProductList from './components/ProductList/ProductList.component';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();

  console.log(data, isLoading);

  return (
    <Section>
      <Header title='Furniture Store' />

      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
        </Routes>
      </Content>

      <Footer>
        Ecommerce created during Wizeline's Academy React Bootcamp
      </Footer>
    </Section>
  );
}

export default App;
