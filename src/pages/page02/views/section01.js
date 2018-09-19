import React from 'react';
import SectionTitle from './title.js';
import MentorTheme from './mentorTheme.js';

import mentorImage01 from './images/mentor01.png';
import mentorImage02 from './images/mentor02.png';
import mentorImage03 from './images/mentor03.png';
import mentorImage04 from './images/mentor04.png';
import mentorImage05 from './images/mentor05.png';

const mentorInfos = [
  {
    themeType: 'themeOne',
    mentorImage: mentorImage01,
    alt: '嘉伟导师',
    title: '嘉伟导师',
    des01: '国家首批情感挽回专家',
    des02: '首席主导师',
    para: '每一段真挚的感倩，都值得被祝福；感情中最可伯的不是不爱了，而是爱错了方式，让双方抱憾终生。'
  },
  {
    themeType: 'themeTwo',
    mentorImage: mentorImage02,
    alt: '阿苏导师',
    title: '阿苏导师',
    des01: '首席挽回专家',
    des02: '高级两性心理学导师',
    para: '走在路上，感触太多，累过，笑过，或许正是这份责任和被寄托的希望，才是我们不断前行的动力。'
  },
  {
    themeType: 'themeOne',
    mentorImage: mentorImage02,
    alt: 'HOPE导师',
    title: 'HOPE导师',
    des01: '婚姻恋爱咨询师',
    des02: '家庭关系资深导师',
    para: '唯有我们真正的认识、理解并接纳内在真实的自己，改变才会发生。用对方式，你爱的那个人自然感受得到，自然会回来。'
  },
  {
    themeType: 'themeTwo',
    mentorImage: mentorImage04,
    alt: '子叶导师',
    title: '子叶导师',
    des01: '首席挽回专家',
    des02: '女性心理与行为侧写师',
    para: '不要做无用功，发现问题的本质才是解决问题的唯一方式。'
  },
  {
    themeType: 'themeOne',
    mentorImage: mentorImage05,
    alt: '青恩导师',
    title: '青恩导师',
    des01: '国内第一批清感咨询导师',
    des02: '权威进化心理学专家',
    para: '因为董得，所以理解；因为理解，所以严格。每一段感情，都需要我们以负责的心态去把握。'
  }
];

const Section01 = () => (
  <div className="page02-section01">
    <SectionTitle title="小鱼情感首席导师" />
    {
      mentorInfos.map((item, index) => {
	return (
	  <MentorTheme 
	    key={index}
	    themeType={item.themeType}
	    mentorImage={item.mentorImage}
	    alt={item.alt}
	    title={item.title}
	    des01={item.des01}
	    des02={item.des02}
	    para={item.para}
	  />
	);
      })
    }
  </div>
);

export default Section01;
