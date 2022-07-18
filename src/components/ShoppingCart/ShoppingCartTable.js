import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '../../components/Shared/Button.component';
import { removeProduct, selectCartProducts, updateQuantityProduct } from '../../store/shoppingCartSlice';
import { Table, Td, TdCenter, Th } from './ShoppingCart.styles';

function ShoppingCartTable({readonly}) {
  const dispatch = useDispatch();
  let total = 0;
  const products = useSelector(selectCartProducts);
  const productsRows = products.map(product => {
    const subtotal = product.price * product.quantity;
    total += subtotal;

    return (
      <tr key={product.id}>
        <Td><img src={product.image} alt={product.name} width='100'/></Td>
        <Td><Link to={`/products/${product.id}`}>{product.name}</Link></Td>
        <TdCenter>{product.price}</TdCenter>
        <TdCenter>
          {
            readonly
            ? product.quantity
            : <input
            type='number'
            style={{width: '50px'}}
            min='1'
            max={product.stock}
            value={product.quantity}
            onChange={(e) => dispatch(updateQuantityProduct({productId: product.id, quantity: e.target.value}))} />
          }
        </TdCenter>
        <TdCenter>$ {subtotal}</TdCenter>
        {
          readonly
          ? null
          : <TdCenter>
            <Button size='small' onClick={() => removeProductFromCart(product.id)}>x</Button>
          </TdCenter>
        }
      </tr>
    )
  });

  const removeProductFromCart = (productId) => {
    dispatch(removeProduct(productId));
  }

  return (
    <Table>
      <thead>
        <tr>
          <Th></Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>Quantity</Th>
          <Th>Subtotal</Th>
          {readonly ? null : <Th>Remove</Th>}
        </tr>
      </thead>
      <tbody>
        {productsRows}
      </tbody>
      <tfoot>
        <tr>
          <Td colSpan={4}></Td>
          <Td>Total: $ {total}</Td>
        </tr>
      </tfoot>
    </Table>
  );
}

export default ShoppingCartTable
