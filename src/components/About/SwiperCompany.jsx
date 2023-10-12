import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperCompany = () => {
  return (
    <>
      <div className="company__swiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          init="false"
          className="swiper"
        >
          <SwiperSlide>
            <div className="company__swiper--logo">
              <img src="/public/images/layers.png" alt="" />
              <img src="/public/images/quotient.png" alt="" />
              <img src="/public/images/sisyphus.png" alt="" />
              <img src="/public/images/hourglass.png" alt="" />
              <img src="/public/images/circooles.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company__swiper--logo">
              <img src="/public/images/layers.png" alt="" />
              <img src="/public/images/quotient.png" alt="" />
              <img src="/public/images/sisyphus.png" alt="" />
              <img src="/public/images/hourglass.png" alt="" />
              <img src="/public/images/circooles.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company__swiper--logo">
              <img src="/public/images/layers.png" alt="" />
              <img src="/public/images/quotient.png" alt="" />
              <img src="/public/images/sisyphus.png" alt="" />
              <img src="/public/images/hourglass.png" alt="" />
              <img src="/public/images/circooles.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="company__swiper--logo">
              <img src="/public/images/layers.png" alt="" />
              <img src="/public/images/quotient.png" alt="" />
              <img src="/public/images/sisyphus.png" alt="" />
              <img src="/public/images/hourglass.png" alt="" />
              <img src="/public/images/circooles.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperCompany;
