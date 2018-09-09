import React from 'react';

const ArticleList = ({articleTitle, articleDescription, articleImage}) => (
    <a className="section-list-item" href="#/section-list-item">
      <div className="section-list-item-text">
	<h3>{articleTitle}</h3>
	<p>{articleDescription}</p>
      </div>
      <div className="section-list-item-image">
	<span className="section-list-item-image-mask"></span>
	<img src={articleImage} alt="文章配图" />
      </div>
    </a>
);

class ListContainer extends React.Component {
  render() {
    const {sectionType} = this.props.listState;

    if (sectionType === 'page') {  // 渲染 page 的 section
      return (
	<div className="section-list">
	  <a className="section-list-item" href="#/section-list-item">
	    <div className="section-list-item-text">
	      <h3>page's title</h3>
	      <p>page's description</p>
	    </div>
	    <div className="section-list-item-image">
	      <span className="section-list-item-image-mask"></span>
	      <img src="#" alt="文章配图" />
	    </div>
	  </a>
	</div>
      );
    }

    // 渲染 article 的 section
    return (
      <div className="section-list">
	{
	  this.props.listState.list.map((listItem, listIndex) => {
	    return (
	      <ArticleList 
		key={listIndex}
		articleTitle={listItem.title}
		articleDescription={listItem.description}
		articleImage={listItem.image}
	      />
            );
	  })
	}
      </div>
    );
  }
}

export default ListContainer;
