import styled from "styled-components";
import items from '../mocks/en-us/featured-banners.json';

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

export default function Slider() {
  const banners = items.results;

  return (
    <SliderContainer>
      {
        banners.map(({id, data, href}) =>
          <SliderItem key={id} image_url={data.main_image.url} >
            <SliderTitle href={href} alt={data.main_image.alt}>{data.title}</SliderTitle>
          </SliderItem>)
      }
    </SliderContainer>
  );
}
