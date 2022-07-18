import Button from "../Button.component";
import { CardContainer, CardFooter, CardImg, CardTitle } from "./Card.styles";

const Card = ({id, image, title, category, price, stock, addToCartHandler}) => {
  return (
    <CardContainer>
      <CardImg image_url={image}></CardImg>
      <CardTitle>{title}</CardTitle>
      <CardFooter>
        <span>{category}</span>
        <span>$ {price}</span>
        {
          stock === 0
          ? null
          : <Button size='small' onClick={() => addToCartHandler()}>Add to Cart</Button>
        }
      </CardFooter>
    </CardContainer>
  );
}

export { Card, CardContainer, CardImg, CardTitle, CardFooter };
