import styled from "styled-components";

const CardContainer = styled.div`
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
  background-image: url(${props => props.image_url});
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
