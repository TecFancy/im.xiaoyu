import React from 'react';
import PropTypes from 'prop-types';

import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Banner} from './banner/';
import {view as Classifies} from './classifies/';
import {view as Section} from './section/';

import '../../style.css';

class Index extends React.Component {
  render() {
    const {classifies} = this.context.store.getState();

    return (
      <div>
	<Header />
	<Banner />
	<Classifies />
	{
	  classifies.map((classify, index) => {
	    return (
	      <Section
		key={index} 
		sectionType={classify.type}
		sectionTitle={classify.title}
		sectionHref={classify.href}
		sectionNav={classify.nav}
		list={classify.list}
	      />
	    );
	  })
	}
	<Footer />
      </div>
    );
  }
}

Index.contextTypes = {
  store: PropTypes.object
};

export default Index;
