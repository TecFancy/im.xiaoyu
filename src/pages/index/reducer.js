import {GET_CLASSIFY} from './actionTypes.js';

const classifies = [
  '二级页面01', '二级页面02', '图标大小', '80 * 80',
  '文章页面01', '文章页面02', '图标大小', '80 * 80'
];

export default (state = classifies, action) => {
  switch(action.type) {
    case GET_CLASSIFY:
      return state;
    default:
      return state;
  }
};
