import React from 'react';

import './style.css';

class Header extends React.Component {
  render() {
    if (this.props.home) {  // 渲染首页 header
      return (
	<div className="header home-header">
	  <span className="header-logo"></span>
	</div>
      );
    }

    return (  // 渲染非首页 header
      <div className="header">
	<a href="/">
	  <i></i>
	  首页
	</a>
	<div className="header-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Header;
