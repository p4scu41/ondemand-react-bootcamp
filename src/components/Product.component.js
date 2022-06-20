import { Card } from './Shared/Card/Card.component';

export default function Product({product}) {
    return (
        <Card
          image={product.data.mainimage.url}
          title={product.data.name}
          category={product.data.category.slug}
          price={product.data.price} />
    );
}
