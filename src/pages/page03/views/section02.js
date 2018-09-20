import React from 'react';
import SectionTitle from './title.js';

import mentorImage01 from './images/avatar_mentor01.png';
import mentorImage02 from './images/avatar_mentor02.png';
import mentorImage03 from './images/avatar_mentor03.png';
import mentorImage04 from './images/avatar_mentor04.png';
import mentorImage05 from './images/avatar_mentor05.png';

const mentorInfos = [
  {
    mentorImage: mentorImage01,
    mentorName: '皓霖导师',
    des: '长期关系维护专家'
  },
  {
    mentorImage: mentorImage02,
    mentorName: '孑然导师',
    des: '首席挽回专家'
  },
  {
    mentorImage: mentorImage03,
    mentorName: '谧沙导师',
    des: '国家婚姻情感咨询师'
  },
  {
    mentorImage: mentorImage04,
    mentorName: '文心导师',
    des: '狙击挽回实战专家'
  },
  {
    mentorImage: mentorImage05,
    mentorName: '心怡导师',
    des: '国家首批情感挽回专家'
  }
];

const Section02 = () => (
  <div className="page03-section02">
    <SectionTitle title="情感导师" />
    {
      mentorInfos.map((item, index) => {
	return (
	  <div className="page03-section02-content" key={index}>
	    <img src={item.mentorImage} alt={item.mentorName} />
	    <div>
	      <h4>{item.mentorName}</h4>
	      <p>{item.des}</p>
	    </div>
	  </div>
	);
      })
    }
  </div>
);

export default Section02;
