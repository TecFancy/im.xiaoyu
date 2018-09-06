import React from 'react';
import Header from './header.js';
import List from './list.js';

import './style.css';

class Section extends React.Component {
  render() {
    return (
      <section>
	<Header 
	  title={this.props.headerData.title}
	  nav={this.props.headerData.nav}
	/>
	<List 
	  list={this.props.listData}
	/>
      </section>
    );
  }
}

export default Section;
