import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Banner} from './banner/';
import {view as Classifies} from './classifies/';

const Index = () => (
  <div>
    <Header />
    <Banner />
    <Classifies />
    <Footer />
  </div>
);

export default Index;
