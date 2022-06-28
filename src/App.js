import { Route, Routes } from 'react-router-dom';
import { Content, Footer, Section } from './App.styles';
import Header from './components/Header/Header.component';
import Home from './components/Home.component';
import ProductDetail from './components/ProductDetail/ProductDetail.component';
import ProductList from './components/ProductList/ProductList.component';
import Search from './components/Search/Search.component';

function App() {
  return (
    <Section>
      <Header title='Furniture Store' />

      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Content>

      <Footer>
        Ecommerce created during Wizeline's Academy React Bootcamp
      </Footer>
    </Section>
  );
}

export default App;
