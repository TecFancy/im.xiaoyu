import React from 'react';
import PropTypes from 'prop-types';

import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Banner} from './banner/';
import {view as Classifies} from './classifies/';
import {view as Section} from './section/';

import toPc from '../../../utilities/toPc';

import '../../style.css';

// fetch('http://192.168.31.198:8080/people/selectPeople', {
//   headers: {
//     'content-type': 'application/json;charset=utf-8'
//   },
//   method: 'POST',
//   mode: 'cors',
//   credentials: 'include',
//   body: JSON.stringify({pageNumber: 0})
// }).then(response => {
//   if (response.ok) {
//     response.text().then(data => {
//       console.log(JSON.parse(data));
//     });
//   }
// }).catch(err => {
//   console.log(err);
// });

class Index extends React.Component {
  componentWillMount() {
    toPc();
  }

  render() {
    const {classifies} = this.context.store.getState();

    return (
      <div>
	<Header home={true}/>
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
		image={classify.image}
		h3={classify.h3}
		des={classify.des}
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
