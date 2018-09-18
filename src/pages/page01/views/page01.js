import React from 'react';
import {view as Header} from '../../../components/header/';

class Page01 extends React.Component {
  render() {
    return (
      <div>
	<Header home={false} title="小鱼简介" />
      </div>
    );
  }
}

export default Page01;
