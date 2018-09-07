import {GET_CLASSIFY} from './actionTypes.js';

const classifies = [
  [
    {
      type: 'page',
      text: '二级页面01',
      href: './page01/'
    },
    {
      type: 'page',
      text: '二级页面02',
      href: './page02/'
    },
    {
      type: 'page',
      text: '图标大小',
      href: './page03/'
    },
    {
      type: 'page',
      text: '80 * 80',
      href: './page04/'
    }
  ],
  [
    {
      type: 'article',
      text: '文章页面01',
      href: './article01/'
    },
    {
      type: 'article',
      text: '文章页面02',
      href: './article02/'
    },
    {
      type: 'article',
      text: '图标大小',
      href: './article03/'
    },
    {
      type: 'article',
      text: '80 * 80',
      href: './article04/'
    }
  ]
];

export default (state = classifies, action) => {
  switch(action.type) {
    case GET_CLASSIFY:
      return state;
    default:
      return state;
  }
};
