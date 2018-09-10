import {GET_CLASSIFY} from './actionTypes.js';

// 导入文章图片
import {images} from './views/section/';

const classifies = [
    {
      type: 'article',
      title: '婚姻破裂',
      href: './article01/',
      nav: [
	{
	  text: '分类一',
	  url: './classify01/'
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
	  description: '挽回女友超简单，会这几招就够咯',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述',
	  image: images.articleImages.articleImage01
	}
      ]
    },
    {
      type: 'article',
      title: '异地恋情',
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
	  description: '挽回女友超简单，会这几招就够咯',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述',
	  image: images.articleImages.articleImage01
	}
      ]
    },
    {
      type: 'article',
      title: '性格不合',
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
	  description: '挽回女友超简单，会这几招就够咯',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述',
	  image: images.articleImages.articleImage01
	}
      ]
    },
    {
      type: 'article',
      title: '恋人劈腿',
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
	  description: '挽回女友超简单，会这几招就够咯',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述',
	  image: images.articleImages.articleImage01
	}
      ]
    },
    {
      type: 'article',
      title: '感情淡化',
      href: './article05/',
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
	  description: '挽回女友超简单，会这几招就够咯',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述',
	  image: images.articleImages.articleImage01
	}
      ]
    },
    {
      type: 'article',
      title: '挽回干货',
      href: './article06/',
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
	  description: '挽回女友超简单，会这几招就够咯',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述',
	  image: images.articleImages.articleImage01
	}
      ]
    },
    {
      type: 'article',
      title: '矛盾积累',
      href: './article07/',
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
	  description: '挽回女友超简单，会这几招就够咯',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '今天我们来谈论一下伦理问题',
	  description: '针对当今社会愈发频繁发生的伦理现象深度解读',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '设计师注意',
	  description: '右侧的配图大小为 180 * 180',
	  image: images.articleImages.articleImage01
	},
	{
	  url: '#/',
	  title: '右侧的配图大小为 180 * 180',
	  description: '文章简短描述',
	  image: images.articleImages.articleImage01
	}
      ]
    },
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
];

export default (state = classifies, action) => {
  switch(action.type) {
    case GET_CLASSIFY:
      return state;
    default:
      return state;
  }
};
