// load index of PC while screen's width over 375px
const toPc = () => {
  const screen = window.screen;

  if (screen.width > 375) {
    window.location.href = 'https://www.xiaoyuqinggan.com/';
  }
};

export default toPc;
