import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Banner} from './banner/';
import {view as Classifies} from './classifies/';
import {view as Section} from './section/';
import {data as sectionData} from './section/';

import '../../style.css';

console.log(sectionData);

const Index = () => (
  <div>
    <Header />
    <Banner />
    <Classifies />
    <Section type="page"/>
    {
      sectionData.map((data, index) => {
        return (
          <Section 
            key={index}
	    type="article"
            headerData={data.header}
            listData={data.list}
          />
        );
      })
    }
    <Footer />
  </div>
);

export default Index;
