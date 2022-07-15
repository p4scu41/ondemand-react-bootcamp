import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  flex: auto;
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export { Container, ProductsContainer, Wrapper, FlexCenter };
