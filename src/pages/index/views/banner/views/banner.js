import React from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';
import {view as About} from '../../../../about/';

import 'swiper/dist/css/swiper.min.css';
import './style.css';

import banner01 from './images/banner01.jpeg';
import banner02 from './images/banner02.jpeg';

class Banner extends React.Component {
  componentDidMount() {
    new Swiper(this.refs.swiper, {
      observer: true,
      // autoplay: true,
      // delay: 5000,
      loop: true,
      pagination: {
	el: '.swiper-pagination'
      }
    });
  }
  render() {
    return (
      <div className="swiper-container banner" ref="swiper">
	<div className="swiper-wrapper">
	  <div className="swiper-slide">
	    <a href="./about/">
	      <img src={banner01} alt="轮播图" />
	      <h2>第一张 banner 图的标题 (750 * 300)</h2>
	    </a>
	  </div>
	  <div className="swiper-slide">
	    <a href="./topic/">
	      <img src={banner02} alt="轮播图" />
	      <h2>第二张 banner 图的标题 (750 * 300)</h2>
	    </a>
	  </div>
	</div>
	<div className="swiper-pagination"></div>
      </div>
    );
  }
}

export default Banner;
