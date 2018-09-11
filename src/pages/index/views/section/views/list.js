import React from 'react';
import {view as ArticleList} from '../../../../../components/articleList/';

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
	    if (listIndex > 2) return null;
	    return (
	      <ArticleList 
		key={listIndex}
		articleUrl={`./${listItem.url}`}
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
