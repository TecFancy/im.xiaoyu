import React from 'react';

import {view as Header} from '../../../components/header/';

import toPc from '../../../utilities/toPc';

import '../../style.css';
import './style.css';

class Content extends React.Component {
  render() {
    return (
      <div className="help-content">
	<h3 className="help-content-title">免费领取情感咨询服务体验</h3>
	<div className="help-content-inputs">
	  <div className="input-name help-content-inputs-item">
	    <span className="input-key">姓名: </span>
	    <input type="input-text" placeholder="请输入您的姓名" />
	  </div>
	  <div className="input-wechat help-content-inputs-item">
	    <span className="input-key">微信号: </span>
	    <input type="input-text" placeholder="请输入微信号" />
	  </div>
	  <div className="input-phone help-content-inputs-item">
	    <span className="input-key">手机号: </span>
	    <input type="input-text" placeholder="请输入 11 位手机号" />
	  </div>
	  <div className="input-sex help-content-inputs-item">
	    <span className="input-key">性别: </span>
	    <div className="input-text">
	      <span className="input-sex-male">
		<span>男</span>
		<i></i>
	      </span>
	      <span className="input-sex-female">
		<span>女</span>
		<i></i>
	      </span>
	    </div>
	  </div>
	  <div className="input-question help-content-inputs-item">
	    <span className="input-key">情感问题: </span>
	    <textarea className="input-text" rows="5" placeholder="请描述您遇到的情感问题"></textarea>
	  </div>
	</div>
	<div className="help-content-submit">
	  <button type="button">免费预约</button>
	</div>
      </div>
    );
  }
}

class Help extends React.Component {
  componentWillMount() {
    toPc();
  }

  render() {
    return (
      <div className="help">
	<Header home={false} title="免费咨询" />
	<Content />
      </div>
    );
  }
}

export default Help;