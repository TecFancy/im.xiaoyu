import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="section-header">
	<a className="section-header-title" href="#/section-header">
	  <i></i>
	  <span>{this.props.title}</span>
	</a>
	<div className="section-header-nav">
	  {
	    this.props.nav.map((navItem, navIndex) => {
	      return (
		<a key={navIndex} href="#/section-header-nav">
		  <span>{navItem}</span>
		  <i></i>
		</a>
	      );
	    })
	  }
	</div>
      </div>
    );
  }
}

export default Header;
