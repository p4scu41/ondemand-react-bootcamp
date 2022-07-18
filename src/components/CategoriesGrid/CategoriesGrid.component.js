import useFetch from '../../utils/hooks/useFetch';
import urlTo from '../../utils/urlTo';
import Loading from '../Shared/Loading.component';
import { CategoriesContainer, Img, Link, Name } from './CategoriesGrid.styles';

export default function CategoriesGrid() {
  const {isLoading, data: {results: categories}} = useFetch(urlTo.categories());

  return (
    <CategoriesContainer>
      {
        isLoading
        ? <center><Loading /></center>
        : categories && categories.map(({data, id, slugs}) =>
          <Link to={`/products?category=${slugs[0]}`} alt={data.alt} key={id}>
            <Img src={data.main_image.url} alt={data.main_image.alt} />
            <Name>{data.name}</Name>
          </Link>)
      }
    </CategoriesContainer>
  );
}
