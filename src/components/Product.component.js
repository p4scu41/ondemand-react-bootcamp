import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../store/shoppingCartSlice';
import { Card } from './Shared/Card/Card.component';

export default function Product({product}) {
  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    dispatch(addProduct(product, 1));
  };

  return (
    <Card
      id={product.id}
      image={product.data.mainimage.url}
      title={<Link to={`/products/${product.id}`}>{product.data.name}</Link>}
      category={product.data.category.slug}
      price={product.data.price}
      stock={product.data.stock}
      addToCartHandler={() => addToCartHandler(product)}/>
  );
}
