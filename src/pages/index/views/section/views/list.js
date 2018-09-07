import React from 'react';

class ListContainer extends React.Component {
  render() {
    return (
      <div className="section-list">
	<a className="section-list-item" href="#/section-list-item">
	  <div className="section-list-item-text">
	    <h3>article's title</h3>
	    <p>article's description</p>
	  </div>
	  <div className="section-list-item-image">
	    <span className="section-list-item-image-mask"></span>
	    <img src="#" alt="文章配图" />
	  </div>
	</a>
      </div>
    );
  }
}

export default ListContainer;
