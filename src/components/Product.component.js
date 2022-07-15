import { Link } from 'react-router-dom';
import { Card } from './Shared/Card/Card.component';

export default function Product({product}) {
  return (
    <Card
      image={product.data.mainimage.url}
      title={<Link to={`/products/${product.id}`}>{product.data.name}</Link>}
      category={product.data.category.slug}
      price={product.data.price} />
  );
}
