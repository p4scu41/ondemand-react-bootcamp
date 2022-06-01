import logo from './logo.png';
import searchIcon from './search.png';
import cartIcon from './shopping-cart.png';

export default function Header({title}) {
    return (
      <header>
        <div className='header_logo'>
          <a href='/' alt={title}><img src={logo} alt={title}/></a>
        </div>

        <div className='header_name'>
          <a href='/' alt={title} style={ {textDecoration: 'none', color: 'black'} }>{title}</a>
        </div>

        <div className='header_search_cart'>
          <div className='header_search'>
            <input type='text' name='search'/>
            <img src={searchIcon} alt='Search'/>
          </div>
          <div className='header_cart'>
            <img src={cartIcon} alt='Shopping Cart'/>
          </div>
        </div>
      </header>
    )
}
