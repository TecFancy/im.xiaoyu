import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as ArticleList} from '../../../components/articleList/';
import {classifies} from '../../../data/';

class Classify04 extends React.Component {
  constructor() {
    super();

    this.state = {
      articleList: classifies[3].list
    };
  }

  render() {
    return (
      <div>
	<Header home={false} title="恋人劈腿" />
	{
	  this.state.articleList.map((item, index) => {
	    return (
	      <ArticleList 
		key={index}
		articleUrl={item.url}
		articleTitle={item.title}
		articleDescription={item.description}
		articleImage={item.image}
	      />
	    );
	  })
	}
      </div>
    );
  }
}

export default Classify04;
