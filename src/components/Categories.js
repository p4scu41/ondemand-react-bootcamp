import styled from "styled-components";
import items from "../mocks/en-us/product-categories.json";

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
`;
const Link = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10px;
`;

const Img = styled.img`
  width: 150px;
  border-radius: 10px;
`;

export default function Categories() {
  const categories = items.results;

  return (
    <CategoriesContainer>
      {
        categories.map(({href, data, id}) =>
          <Link href={href} alt={data.alt} key={id}>
            <Img src={data.main_image.url} alt={data.main_image.alt} />
            <span>{data.name}</span>
          </Link>)
      }
    </CategoriesContainer>
  );
}
