import {GET_CLASSIFY} from './actionTypes.js';

const classifies = [
    {
      type: 'page',
      title: '二级页面01',
      href: './page01/',
      nav: [
	{
	  text: '分类一',
	  url: '#/nav'
	},
	{
	  text: '分类二',
	  url: '#/nav'
	},
	{
	  text: '分类三',
	  url: '#/nav'
	},
	{
	  text: '分类四',
	  url: '#/nav'
	}
      ]
    },
    {
      type: 'page',
      title: '二级页面02',
      href: './page02/',
      nav: [
	{
	  text: '分类一',
	  url: '#/nav'
	},
	{
	  text: '分类二',
	  url: '#/nav'
	},
	{
	  text: '分类三',
	  url: '#/nav'
	},
	{
	  text: '分类四',
	  url: '#/nav'
	}
      ]
    },
    {
      type: 'page',
      title: '图标大小',
      href: './page03/',
      nav: [
	{
	  text: '分类一',
	  url: '#/nav'
	},
	{
	  text: '分类二',
	  url: '#/nav'
	},
	{
	  text: '分类三',
	  url: '#/nav'
	},
	{
	  text: '分类四',
	  url: '#/nav'
	}
      ]
    },
    {
      type: 'page',
      title: '80 * 80',
      href: './page04/',
      nav: [
	{
	  text: '分类一',
	  url: '#/nav'
	},
	{
	  text: '分类二',
	  url: '#/nav'
	},
	{
	  text: '分类三',
	  url: '#/nav'
	},
	{
	  text: '分类四',
	  url: '#/nav'
	}
      ]
    },
    {
      type: 'article',
      title: '文章页面01',
      href: './article01/',
      nav: [
	{
	  text: '分类一',
	  url: '#/nav'
	},
	{
	  text: '分类二',
	  url: '#/nav'
	},
	{
	  text: '分类三',
	  url: '#/nav'
	},
	{
	  text: '分类四',
	  url: '#/nav'
	}
      ],
      list: [
	{
	  url: '#/',
	  title: '学会这几招教你分分钟挽回女友，还不赶紧学起来！',
	  description: '挽回女友超简单，会这几招就够咯'
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读'
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180'
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述'
	}
      ]
    },
    {
      type: 'article',
      title: '文章页面02',
      href: './article02/',
      nav: [
	{
	  text: '分类一',
	  url: '#/nav'
	},
	{
	  text: '分类二',
	  url: '#/nav'
	},
	{
	  text: '分类三',
	  url: '#/nav'
	},
	{
	  text: '分类四',
	  url: '#/nav'
	}
      ],
      list: [
	{
	  url: '#/',
	  title: '学会这几招教你分分钟挽回女友，还不赶紧学起来！',
	  description: '挽回女友超简单，会这几招就够咯'
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读'
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180'
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述'
	}
      ]
    },
    {
      type: 'article',
      title: '图标大小',
      href: './article03/',
      nav: [
	{
	  text: '分类一',
	  url: '#/nav'
	},
	{
	  text: '分类二',
	  url: '#/nav'
	},
	{
	  text: '分类三',
	  url: '#/nav'
	},
	{
	  text: '分类四',
	  url: '#/nav'
	}
      ],
      list: [
	{
	  url: '#/',
	  title: '学会这几招教你分分钟挽回女友，还不赶紧学起来！',
	  description: '挽回女友超简单，会这几招就够咯'
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读'
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180'
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述'
	}
      ]
    },
    {
      type: 'article',
      title: '80 * 80',
      href: './article04/',
      nav: [
	{
	  text: '分类一',
	  url: '#/nav'
	},
	{
	  text: '分类二',
	  url: '#/nav'
	},
	{
	  text: '分类三',
	  url: '#/nav'
	},
	{
	  text: '分类四',
	  url: '#/nav'
	}
      ],
      list: [
	{
	  url: '#/',
	  title: '学会这几招教你分分钟挽回女友，还不赶紧学起来！',
	  description: '挽回女友超简单，会这几招就够咯'
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读'
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180'
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述'
	}
      ]
    }
];

export default (state = classifies, action) => {
  switch(action.type) {
    case GET_CLASSIFY:
      return state;
    default:
      return state;
  }
};
