import React from 'react';
import {view as Header} from '../../../components/header/';

import bannerImage from './images/banner.png';

import './style.css';

class Page01 extends React.Component {
  render() {
    return (
      <div className="page01">
	<Header home={false} title="小鱼简介" />
	<img className="page01-banner" src={bannerImage} alt="关于我们" title="关于我们" />
      </div>
    );
  }
}

export default Page01;
