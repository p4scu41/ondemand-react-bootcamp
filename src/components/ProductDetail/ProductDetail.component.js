import { useNavigate, useParams } from "react-router-dom";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetch from "../../utils/hooks/useFetch";
import urlTo from "../../utils/urlTo";
import Button from "../Shared/Button.component";
import Loading from "../Shared/Loading.component";
import { Container, DetailsContainer, FooterContainer, InfoContainer } from "./ProductDetail.styles";
import ProductGallery from "./ProductGallery.component";

const ProductDetail = function () {
  const {productId} = useParams();
  const {isLoading, data} = useFetch(urlTo.productId(productId));
  const product = !isLoading && data.results[0];
  const navigate = useNavigate();

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

        <p>{product.data.short_description}</p>

        <ul>
          {product.data.specs.map(spec => <li key={spec.spec_name}>{spec.spec_name}: {spec.spec_value}</li>)}
        </ul>

        <FooterContainer>
          <Button size='small' onClick={() => navigate('/products')}>Back to Products</Button> &nbsp;
          <Button size='small'>Add to Cart</Button>
        </FooterContainer>
      </InfoContainer>
    </Container>
  )
}

export default ProductDetail;
