import styled from "styled-components";

const Card = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  flex: 1 1 250px;
  max-width: 250px;
`;

const CardImg = styled.div`
width: 100%;
height: 200px;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

const CardTitle = styled.div`
  text-align: center;
  font-weight: bold;
  padding: 10px 0;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export default function Product({product}) {
    return (
        <Card>
            <CardImg style={ {backgroundImage: `url(${product.data.mainimage.url})`}}></CardImg>
            <CardTitle>{product.data.name}</CardTitle>
            <CardFooter>
                <span>{product.data.category.slug}</span>
                <span>{product.data.price}</span>
            </CardFooter>
        </Card>
    );
}
