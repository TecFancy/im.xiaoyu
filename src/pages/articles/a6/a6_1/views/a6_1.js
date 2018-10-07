import React from 'react';
import PropTypes from 'prop-types';

import {view as Header} from '../../../../../components/header/';
import {view as ArticleBreadCrumb} from '../../../../../components/articleBreadCrumb/';
import {view as ArticleOverflow} from '../../../../../components/articleOverflow/';
import {view as Footer} from '../../../../../components/footer/';
import markdown from '../../../../../utilities/markdown.js';
import markdownFile from './a6_1.md';

import toPc from '../../../utilities/toPc';
toPc();

const result = markdown.render(markdownFile);

class A6_1 extends React.Component {
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
	<ArticleBreadCrumb text="挽回干货" url="../../../classify06/"/>
	<div className={`${hideState ? 'article-content show' : 'article-content'}`}>
	  <div className="markdown-body" dangerouslySetInnerHTML={{__html: result}}></div>
	  <ArticleOverflow />
	</div>
	<Footer />
      </div>
    );
  }
}

A6_1.contextTypes = {
  store: PropTypes.object
};

export default A6_1;
