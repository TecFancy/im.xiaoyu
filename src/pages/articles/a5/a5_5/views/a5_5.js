import React from 'react';
import PropTypes from 'prop-types';

import {view as Header} from '../../../../../components/header/';
import {view as ArticleBreadCrumb} from '../../../../../components/articleBreadCrumb/';
import {view as ArticleOverflow} from '../../../../../components/articleOverflow/';
import {view as Footer} from '../../../../../components/footer/';
import markdown from '../../../../../utilities/markdown.js';
import markdownFile from './a5_5.md';

import toPc from '../../../../../utilities/toPc';
toPc();

const result = markdown.render(markdownFile);

class A5_5 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getOwnState = this.getOwnState.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      articleOverflow: this.context.store.getState().articleOverflow
    };
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  componentDidMount() {
    this.setState({
      unsubscribe: this.context.store.subscribe(this.onChange)
    });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  render() {
    const hideState = this.state.articleOverflow.hide;
    return (
      <div className="article">
	<Header home={true}/>
	<ArticleBreadCrumb text="感情淡化" url="../../../classify05/"/>
	<div className={`${hideState ? 'article-content show' : 'article-content'}`}>
	  <div className="markdown-body" dangerouslySetInnerHTML={{__html: result}}></div>
	  <ArticleOverflow />
	</div>
	<Footer />
      </div>
    );
  }
}

A5_5.contextTypes = {
  store: PropTypes.object
};

export default A5_5;
