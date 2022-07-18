import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartTotalProducts } from "../../store/shoppingCartSlice";
import { Badged, CartIcon } from "./ShoppingCart.styles";

export default function ShoppingCartIcon() {
  const totalItems = useSelector(selectCartTotalProducts);

  return (
    <div>
      <Link to='/cart' style={{position: 'relative'}}>
        <CartIcon />
        <Badged>{ totalItems }</Badged>
      </Link>
    </div>
  )
}
