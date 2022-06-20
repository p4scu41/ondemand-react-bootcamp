import items from '../../mocks/en-us/featured-banners.json';
import { SliderContainer, SliderItem, SliderTitle } from './Slider.styles';

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
