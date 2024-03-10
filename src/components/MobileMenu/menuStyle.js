let styles;

if (mediaQuery) {
  styles = {
    bmCrossButton: {
      top: '26px',
      right: '32px',
      height: '32px',
      width: '32px',
    },
    bmItem: {
      display: 'flex',
    },
  };
} else {
  styles = {
    bmCrossButton: {
      top: '19px',
      right: '20px',
      height: '24px',
      width: '24px',
    },
    bmItem: {
      display: 'flex',
    },
  };
}

export default styles;
