import './App.css';
import Header from './Header';
import Home from './Home';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <section className='container'>
      <Header title='Furniture Store' />

      <section className='content'>
        <Home />
      </section>

      <footer>
        Ecommerce created during Wizeline's Academy React Bootcamp
      </footer>
    </section>
  );
}

export default App;
