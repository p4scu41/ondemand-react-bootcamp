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
        banners.map(banner =>
          <SliderItem key={banner.id} className='slider_item' style={ {backgroundImage: `url(${banner.data.main_image.url})`} }>
            <SliderTitle href={banner.href} alt={banner.data.main_image.alt}>{banner.data.title}</SliderTitle>
          </SliderItem>)
      }
    </SliderContainer>
  );
}
