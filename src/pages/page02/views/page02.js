import React from 'react';
import {view as Header} from '../../../components/header/';
import Service from './service.js';

import './style.css';

import bannerImage from './images/banner.png';

const Page02 = () => (
  <div className="page02">
    <Header home={false} title="服务范围"/>
    <img className="page02-banner" src={bannerImage} alt="服务范围_权威专家" />
    <Service />
  </div>
);

export default Page02;
