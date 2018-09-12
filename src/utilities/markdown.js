import MarkdownIt from 'markdown-it';
import MarkdownItContainer from 'markdown-it-container';
import MarkdownItAttrs from 'markdown-it-attrs';

import 'github-markdown-css/github-markdown.css';

const markdown = new MarkdownIt({
  typographer: true,
  linkify: true
});

markdown
  .use(MarkdownItContainer, 'avatar-box')  // 文章页导师头像
  .use(MarkdownItAttrs)
  ;

export default markdown;
