import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <section style={ {maxWidth: '960px', margin: 'auto'} }>
      <Header title='Furniture Store' />

      <section className='content' style={{padding: '10px'}}>
        <Home />
      </section>

      <footer style={{textAlign: 'center', paddingBottom: '20px', paddingTop: '10px', borderTop: "1px solid lightgray"}}>
        Ecommerce created during Wizeline's Academy React Bootcamp
      </footer>
    </section>
  );
}

export default App;
