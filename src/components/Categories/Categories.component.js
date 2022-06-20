import items from "../../mocks/en-us/product-categories.json";
import { CategoriesContainer, Img, Link, Name } from './Categories.styles';

export default function Categories({show_title, show_image, handleClick, selectedIds}) {
  const categories = items.results;

  return (
    <CategoriesContainer show_title={show_title}>
      {
        show_title && <h3 style={ {textAlign: 'center'} }>Categories</h3>
      }
      {
        categories.map(({data, id}) =>
          <Link alt={data.alt} key={id} onClick={(e) => handleClick ? handleClick(e, id) : null} selected={selectedIds.includes(id)}>
            { show_image && <Img src={data.main_image.url} alt={data.main_image.alt} /> }
            <Name>{data.name}</Name>
          </Link>)
      }
    </CategoriesContainer>
  );
}
