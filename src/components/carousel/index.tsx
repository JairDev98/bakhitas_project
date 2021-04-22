import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import BannerOne from '../../assets/banner.png';
import BannerTwo from '../../assets/bannerTwo.png';
import BannerTree from '../../assets/bannerTree.png';
import BannerFour from '../../assets/bannerFour.png';

import { Item } from './styles';

const NCarousel: React.FC = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay
      infiniteLoop
      transitionTime={500}
      interval={7000}
    >
      <Item>
        <img src={BannerOne} alt={BannerOne} />
      </Item>
      <Item>
        <img src={BannerTwo} alt={BannerTwo} />
      </Item>
      <Item>
        <img src={BannerTree} alt={BannerTree} />
      </Item>
      <Item>
        <img src={BannerFour} alt={BannerFour} />
      </Item>
    </Carousel>
  );
};

export default NCarousel;
