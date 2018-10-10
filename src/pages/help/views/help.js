import React from 'react';

import {view as Header} from '../../../components/header/';

import toPc from '../../../utilities/toPc';

import '../../style.css';
import './style.css';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.updateMaleState = this.updateMaleState.bind(this);
    this.updateFemaleState = this.updateFemaleState.bind(this);
    this.onInputName = this.onInputName.bind(this);
    this.onInputPhone = this.onInputPhone.bind(this);
    this.onInputWechat = this.onInputWechat.bind(this);
    this.onInputQuestion = this.onInputQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      maleButton: {checked: false},
      femaleButton: {checked: false},
      nameInputValue: '',
      phoneInputValue: '',
      wechatInputValue: '',
      questionInputValue: '',
      data: {
        pname: null,
	psex: null,
	tel: null,
	wechat: null,
	question: null
      }
    };
  }

  updateMaleState() {  // 点击男
    // false -> true
    if (!this.state.maleButton.checked) {  // 男未选中
      this.setState({
	maleButton: {checked: true},
	femaleButton: {checked: false},
	data: {...this.state.data, psex: '男'}
      });
      return;
    }

    // true -> false
    if (this.state.maleButton.checked) {  // 男选中
      this.setState({
        maleButton: {checked: false},
	femaleButton: {checked: true},
	data: {...this.state.data, psex: '女'}
      });
    }
  }

  updateFemaleState() {  // 点击女
    // false -> true
    if (!this.state.femaleButton.checked) {  // 女未选中
      this.setState({
	maleButton: {checked: false},
	femaleButton: {checked: true},
	data: {...this.state.data, psex: '女'}
      });
    }

    // true -> false
    if (this.state.femaleButton.checked) {  // 女选中
      this.setState({
	maleButton: {checked: true},
	femaleButton: {checked: false},
	data: {...this.state.data, psex: '男'}
      });
    }
  }

  onInputName(event) {  // 输入姓名
    this.setState({...this.state, nameInputValue: event.target.value});

    const data = this.state.data;

    if (event.target.value !== '') {
      const updateData = {...data, pname: event.target.value};
      this.setState({data: updateData});
    }

    if (event.target.value === '') {
      const updateData = {...data, pname: null};
      this.setState({data: updateData});
    }
  }

  onInputPhone(event) {  // 收入手机号
    this.setState({...this.state, phoneInputValue: event.target.value});

    const data = this.state.data;

    if (event.target.value !== '') {
      const updateData = {...data, tel: event.target.value};
      this.setState({data: updateData});
    }

    if (event.target.value === '') {
      const updateData = {...data, tel: null};
      this.setState({data: updateData});
    }
  }

  onInputWechat(event) {  // 输入微信号
    this.setState({...this.state, wechatInputValue: event.target.value});

    const data = this.state.data;

    if (event.target.value !== '') {
      const updateData = {...data, wechat: event.target.value};
      this.setState({data: updateData});
    }

    if (event.target.value === '') {
      const updateData = {...data, wechat: null};
      this.setState({data: updateData});
    }
  }

  onInputQuestion(event) {
    this.setState({...this.state, questionInputValue: event.target.value});

    const data = this.state.data;

    if (event.target.value !== '') {
      const updateData = {...data, question: event.target.value};
      this.setState({data: updateData});
    }

    if (event.target.value === '') {
      const updateData = {...data, question: null};
      this.setState({data: updateData});
    }
  }

  onSubmit() {  // 提交
    // 验证用户名
    if (this.state.data.pname === null) {
      alert('用户名为必填项');
      console.log('用户名为必填项');
      return;
    }

    // 验证手机号
    if (this.state.data.tel === null) {
      alert('手机号为必填项');
      console.log('手机号为必填项');
      return;
    }

    // 验证情感问题
    if (this.state.data.question === null) {
      alert('情感问题为必填项');
      console.log('情感问题为必填项');
      return;
    }

    fetch('http://192.168.31.204:8080/people/sendQuestion', {
      headers: {
	'content-type': 'application/json;charset=utf-8'
      },
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(this.state.data)
    }).then(res => {
      if (res.ok) {
	res.text().then(data => {
	  // console.log(JSON.parse(data));  // true - 成功 | false - 失败
	  if (!JSON.parse(data)) alert('预约失败，请稍后重试！');
	  else {
	    console.log(this.state.data);
	    alert('预约成功，我们会尽快与您取得联系，请保持手机畅通。');
	    this.setState({
	      nameInputValue: '',
	      phoneInputValue: '',
	      wechatInputValue: '',
	      questionInputValue: ''
	    });
	  }
	});
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="help-content">
	<h3 className="help-content-title">免费领取情感咨询服务体验</h3>
	<div className="help-content-inputs">
	  <div className="input-name help-content-inputs-item">
	    <span className="input-key">姓名: </span>
	    <input 
	      type="input-text" 
	      placeholder="请输入您的姓名(必填)" 
	      onChange={this.onInputName} 
	      value={this.state.nameInputValue} 
	    />
	  </div>
	  <div className="input-wechat help-content-inputs-item">
	    <span className="input-key">微信号: </span>
	    <input
	      type="input-text"
	      placeholder="请输入微信号(选填)" 
	      onChange={this.onInputWechat}
	      value={this.state.wechatInputValue}
	    />
	  </div>
	  <div className="input-phone help-content-inputs-item">
	    <span className="input-key">手机号: </span>
	    <input 
	      type="input-text" 
	      placeholder="请输入 11 位手机号(必填)" 
	      onChange={this.onInputPhone}
	      value={this.state.phoneInputValue}
	    />
	  </div>
	  <div className="input-sex help-content-inputs-item">
	    <span className="input-key">性别: </span>
	    <div className="input-text">
	      <span className="input-sex-male" onClick={() => {this.updateMaleState();}}>
		<span>男</span>
		<i className={this.state.maleButton.checked ? 'active' : ''}></i>
	      </span>
	      <span className="input-sex-female" onClick={() => {this.updateFemaleState();}}>
		<span>女</span>
		<i className={this.state.femaleButton.checked ? 'active' : ''}></i>
	      </span>
	    </div>
	  </div>
	  <div className="input-question help-content-inputs-item">
	    <span className="input-key">情感问题: </span>
	    <textarea 
	      className="input-text" 
	      rows="5" 
	      placeholder="请描述您遇到的情感问题(必填)"
	      onChange={this.onInputQuestion}
	      value={this.state.questionInputValue}
	    ></textarea>
	  </div>
	</div>
	<div className="help-content-submit">
	  <button type="button" onClick={() => {this.onSubmit();}}>免费预约</button>
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
