import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { addProduct } from "../../store/shoppingCartSlice";
import { Container, DetailsContainer, FooterContainer, InfoContainer } from "./ProductDetail.styles";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Shared/Button.component";
import Loading from "../Shared/Loading.component";
import ProductGallery from "./ProductGallery.component";
import urlTo from "../../utils/urlTo";
import useFetch from "../../utils/hooks/useFetch";
import { useState } from 'react';

const ProductDetail = function () {
  const {productId} = useParams();
  const {isLoading, data} = useFetch(urlTo.productId(productId));
  const product = !isLoading && data.results[0];
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantityOptions = Array.from(
    {length: product ? product.data.stock : 0},
    (value, key) => <option key={key+1} value={key+1}>{key+1}</option>
  );

  return (isLoading
    ? <center><Loading /></center>
    : <Container>
      <ProductGallery images={product.data.images} />
      <InfoContainer>
        <h2>{product.data.name}</h2>
        <DetailsContainer>
          <li>$ {product.data.price}</li>
          <li>SKU: {product.data.sku}</li>
          <li>Category: {product.data.category.slug}</li>
          <li>Tags: {product.tags.join(', ')}</li>
        </DetailsContainer>

        <p>
          Quantity:
          {
            product.data.stock === 0
            ? 'Out of Stock'
            : <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              {quantityOptions}
              </select>
          }
        </p>

        <p>{product.data.short_description}</p>

        <ul>
          {product.data.specs.map(spec => <li key={spec.spec_name.replace(" ", "_")}>{spec.spec_name}: {spec.spec_value}</li>)}
        </ul>

        <FooterContainer>
          <Button size='small' onClick={() => navigate('/products')}>Back to Products</Button> &nbsp;
          {
            product.data.stock === 0
            ? null :
            <Button size='small' onClick={() => dispatch(addProduct(product, quantity))}>Add to Cart</Button>
          }
        </FooterContainer>
      </InfoContainer>
    </Container>
  )
}

export default ProductDetail;
