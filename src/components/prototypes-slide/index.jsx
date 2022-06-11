import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectPrototypesSlide({ content }) {
  return (
    <div className="prototypes-slide">
      <Swiper
        navigation={true}
        grabCursor={true}
        slidesPerView={1}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="img-container">
            <span>Before</span>
            <img alt="prototype before" src={content.beforeImg} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <span>After</span>
            <img alt="prototype after" src={content.afterImg} />
          </div>
        </SwiperSlide>
      </Swiper>
      <p>{content.explanation}</p>
    </div>
  );
}

ProjectPrototypesSlide.propTypes = {
  content: PropTypes.shape({
    beforeImg: PropTypes.string.isRequired,
    afterImg: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired
  }).isRequired
};
