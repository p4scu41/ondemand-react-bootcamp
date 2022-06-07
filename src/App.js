import styled from 'styled-components';
import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

const Section = styled.section`
  max-width: 960px;
  margin: auto;
`;

const Content = styled.section`
  padding: 10px;
`;

const Footer = styled.section`
  text-align: center;
  padding-bottom: 20px;
  padding-top: 10px;
  border-top: 1px solid lightgray;
`;

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <Section>
      <Header title='Furniture Store' />

      <Content>
        <Home />
      </Content>

      <Footer>
        Ecommerce created during Wizeline's Academy React Bootcamp
      </Footer>
    </Section>
  );
}

export default App;
