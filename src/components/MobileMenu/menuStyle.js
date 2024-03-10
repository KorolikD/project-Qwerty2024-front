const styles = {
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

const mediaStyles = {
  '@media screen and (min-width: 768px)': {
    bmCrossButton: {
      top: '26px',
      right: '32px',
      height: '32px',
      width: '32px',
    },
  },
};

export const combinedStyles = { ...styles, ...mediaStyles };
