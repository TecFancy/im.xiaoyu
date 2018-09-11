import React from 'react';
import MarkdownIt from 'markdown-it';
import markdownFile from './a1_1.md';

import 'github-markdown-css/github-markdown.css';

class A1_1 extends React.Component {
  constructor() {
    super();

    const md = new MarkdownIt();

    this.state = {
      result: md.render(markdownFile)
    };
  }

  render() {
    return (
      <div>
	<div className="article-content markdown-body" dangerouslySetInnerHTML={{__html: this.state.result}}></div>
      </div>
    );
  }
}

export default A1_1;
