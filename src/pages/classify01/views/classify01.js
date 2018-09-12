import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as ArticleList} from '../../../components/articleList/';
import {view as Footer} from '../../../components/footer/';
import {classifies} from '../../../data/';

class Classify01 extends React.Component {
  constructor() {
    super();

    this.state = {
      articleList: classifies[0].list
    };
  }

  render() {
    return (
      <div className="page">
	<Header home={false} title="婚姻破裂" />
	{
	  this.state.articleList.map((item, index) => {
	    return (
	      <ArticleList 
		key={index}
		articleUrl={`../${item.url}`}
		articleTitle={item.title}
		articleDescription={item.description}
		articleImage={item.image}
	      />
	    );
	  })
	}
	<Footer />
      </div>
    );
  }
}

export default Classify01;
