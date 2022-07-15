import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GalleryContainer } from "./ProductDetail.styles";

const ProductGallery = function ({images}) {
  return (
    <GalleryContainer>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        width={200}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
      >
        {images.map(
          ({image}) => <SwiperSlide key={image.url}><img src={image.url} alt='Product' height={250} /></SwiperSlide>
        )}
      </Swiper>
    </GalleryContainer>
  )
}

export default ProductGallery;
