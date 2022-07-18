import ButtonLink from '../../components/Shared/ButtonLink.component';
import ShoppingCartTable from '../../components/ShoppingCart/ShoppingCartTable';

function ShoppingCart() {
  return (
    <>
      <ShoppingCartTable />

      <p style={{textAlign: 'right'}}>
        <ButtonLink to="/checkout">Proceed to checkout</ButtonLink>
      </p>
    </>
  );
}

export default ShoppingCart
