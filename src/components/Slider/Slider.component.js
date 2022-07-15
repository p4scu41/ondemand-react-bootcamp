import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import Loading from "../Shared/Loading.component";

export default function Slider() {
  const { isLoading, data: {results: banners}} = useFeaturedBanners();

  return (
      isLoading
      ? <center><Loading /></center>
      : <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
      >
        {banners && banners.map(
          ({id, data, href}) => <SwiperSlide key={id}>
            <img src={data.main_image.url} alt={data.main_image.alt} height={480}/>
          </SwiperSlide>
        )}
      </Swiper>
  )
}
