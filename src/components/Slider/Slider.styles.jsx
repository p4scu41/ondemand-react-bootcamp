import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const SliderItem = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-image: url(${props => props.image_url})
`;

const SliderTitle = styled.div`
  display: block;
  padding: 20px;
  font-size: 25px;
  text-decoration: none;
  color: black;
  text-shadow: 1px 1px lightgrey;
  font-weight: bold;
`;

export { SliderContainer, SliderItem, SliderTitle };
