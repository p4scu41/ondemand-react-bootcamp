import { ArrayHasIntersec } from '../../utils/helpers';
import useFetch from '../../utils/hooks/useFetch';
import urlTo from '../../utils/urlTo';
import Button from '../Shared/Button.component';
import Loading from '../Shared/Loading.component';
import { CategoriesContainer, Link, Name } from './Categories.styles';

export default function Categories({handleClick, selectedIds, clearFilters}) {
  const {isLoading, data: {results: categories}} = useFetch(urlTo.categories());

  return (
    <CategoriesContainer>
      <h3 style={ {textAlign: 'center'} }>Categories</h3>
      {
        isLoading
        ? <center><Loading /></center>
        : categories && categories.map(({data, id, slugs}) =>
          <Link alt={data.alt} key={id} onClick={(e) => handleClick(e, slugs[0])} selected={ArrayHasIntersec(selectedIds, slugs)}>
            <Name>{data.name}</Name>
          </Link>)
      }
      { selectedIds.length > 0 && <center><Button size='small' onClick={clearFilters}>Clear filters</Button></center>}
    </CategoriesContainer>
  );
}
