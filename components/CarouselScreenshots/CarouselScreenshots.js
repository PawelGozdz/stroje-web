import React from 'react';
import Slider from 'react-slick';
import * as _ from 'lodash';
import Image from '../Image';

/**
 * @docs https://react-slick.neostack.com/docs/api#accessibility
 */

const defaultSettings = {
  // className: 'carousel-screenshots',
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToScroll: 1,
};

export default function CarouselScreenshots({ images, settings, aspectRatio = 0.7 }) {
  const options = settings || defaultSettings;

  return (
    <>
      <Slider {...options}>
        {_.map(images, (img) => (
          <Image
            src={img?.url}
            aspectRatio={0.7}
            alt={img?.alternativeText}
            title={img?.caption}
            formats={img?.formats}
            key={img?.id}
            aspectRatio={aspectRatio}
          // onClick={() => openImage(ss.url)}
          />
        ))}
      </Slider>
    </>
  )
}
