import React from 'react';
import {view as Footer} from '../../../../../components/footer/';
import markdown from '../../../../../utilities/markdown.js';
import markdownFile from './a1_5.md';

const result = markdown.render(markdownFile);

const A1_5 = () => (
  <div>
    <div className="article-content markdown-body" dangerouslySetInnerHTML={{__html: result}}></div>
    <Footer />
  </div>
);

export default A1_5;
