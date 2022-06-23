import { CardContainer, CardFooter, CardImg, CardTitle } from "./Card.styles";

const Card = ({image, title, category, price}) => (
    <CardContainer>
        <CardImg image_url={image}></CardImg>
        <CardTitle>{title}</CardTitle>
        <CardFooter>
            <span>{category}</span>
            <span>{price}</span>
        </CardFooter>
    </CardContainer>
);

export { Card, CardContainer, CardImg, CardTitle, CardFooter };