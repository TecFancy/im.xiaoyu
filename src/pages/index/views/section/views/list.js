import React from 'react';

import image01 from './images/jpeg.jpeg';

class List extends React.Component {
  render() {
  console.log(this.props);
    return (
      <div className="section-list">
	{
	  this.props.list.map((listItem, listIndex) => {
	    return (
	      <a key={listIndex} className="section-list-item" href="#/section-list-item">
		<div className="section-list-item-text">
		  <h3>{listItem.title}</h3>
		  <p>{listItem.description}</p>
		</div>
		<div className="section-list-item-image">
		  <span className="section-list-item-image-mask"></span>
		  <img src={listItem.description.image} alt="文章配图" />
		</div>
	      </a>
	    );
	  })
	}
      </div>
    );
  }
}

export default List;
