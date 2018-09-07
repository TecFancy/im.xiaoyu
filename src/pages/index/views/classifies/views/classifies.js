import React from 'react';
import PropTypes from 'prop-types';
import {getClassify} from '../../../actions.js';

import './style.css';

class Classifies extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      classifies: this.context.store.getState().classifies
    };
  }

  onChange() {
    this.context.store.dispatch(getClassify());
  }

  componentDidMount() {
    this.onChange();
  }

  render() {
    const group01 = this.state.classifies[0];
    const group02 = this.state.classifies[1];

    return (
      <div className="classifies">
	<div className="classifies-group">
	  {
	    group01.map((item, index) => {
	      return (
		<a key={index} href={item.href}>
		  <i></i>
		  <span>{item.text}</span>
		</a>
	      );
	    })
	  }
	</div>
	<div className="classifies-group">
	  {
	    group02.map((item, index) => {
	      return (
		<a key={index} href={item.href}>
		  <i></i>
		  <span>{item.text}</span>
		</a>
	      );
	    })
	  }
	</div>
      </div>
    );
  }
}

Classifies.contextTypes = {
  store: PropTypes.object
};

export default Classifies;
