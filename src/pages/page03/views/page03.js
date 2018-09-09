import React from 'react';
import {view as Header} from '../../../components/header/';

class Page03 extends React.Component {
  render() {
    return (
      <div>
	<Header home={false} title="二级页面: Page03" />
      </div>
    );
  }
}

export default Page03;
