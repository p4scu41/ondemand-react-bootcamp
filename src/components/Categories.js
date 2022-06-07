import items from "../mocks/en-us/product-categories.json";

export default function Categories() {
  const categories = items.results;

  return (
    <div className='categories' style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '10px'}}>
      {
        categories.map(category =>
          <a href={category.href} alt={category.data.alt} key={category.id}
            style={ {textDecoration: 'none', color: 'black', display: 'flex', flexFlow: 'column', alignItems: 'center', padding: '10px'} }>
            <img src={category.data.main_image.url} alt={category.data.main_image.alt} style={ {width: '150px',
  borderRadius: '10px'} }/>
            <span>{category.data.name}</span>
          </a>)
      }
    </div>
  );
}
