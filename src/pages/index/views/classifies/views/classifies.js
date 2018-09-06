import React from 'react';

import './style.css';

class Classifies extends React.Component {
  render() {
    return (
      <div className="classifies">
	<div className="classifies-group">
	  <a href="./page01/">
	    <i></i>
	    <span>二级页面</span>
	  </a>
	  <a href="#/classify-item">
	    <i></i>
	    <span>二级页面</span>
	  </a>
	  <a href="#/classify-item">
	    <i></i>
	    <span>图标大小</span>
	  </a>
	  <a href="#/classify-item">
	    <i></i>
	    <span>80 * 80</span>
	  </a>
	</div>
	<div className="classifies-group">
	  <a href="#/classify-item">
	    <i></i>
	    <span>文章页面</span>
	  </a>
	  <a href="#/classify-item">
	    <i></i>
	    <span>文章页面</span>
	  </a>
	  <a href="#/classify-item">
	    <i></i>
	    <span>图标大小</span>
	  </a>
	  <a href="#/classify-item">
	    <i></i>
	    <span>80 * 80</span>
	  </a>
	</div>
      </div>
    );
  }
}

export default Classifies;
