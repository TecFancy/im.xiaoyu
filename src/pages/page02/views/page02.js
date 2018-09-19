import React from 'react';
import {view as Header} from '../../../components/header/';

import './style.css';

import bannerImage from './images/banner.png';

const Page02 = () => (
  <div className="page02">
    <Header home={false} title="权威团队"/>
    <img className="page02-bannerImage" src={bannerImage} alt="权威专家" />
    <div className="page02-para">
      <p className="text-justify text-indent">小鱼清感的导师团队，均为资深全职导师，其中包括平均从业4年以上的国家心理咨询师、专业心理侧写师、国家级婚恋咨询师、情感挽回专家、情感维稳师等专业导师，为您的爱情保驾护航。</p>
      <p className="text-justify text-indent">每一段感情，都值得被珍惜；而每一位用户，都会在该早得到最专业、最全面的指导服务。小鱼情感的所有情感导师，均秉承着‘专业、责任、奉献“的核心价值观，将挽回爱情、捍卫幸福是为己任。因为专业，所以卓越，小鱼情感的成功率和口碑，也一直引领业界。而主导师团队开设的‘，全国情感导师培植计划“，多年来也为整个行业输送了 大批优秀的从业人才。 </p>
    </div>
  </div>
);

export default Page02;
