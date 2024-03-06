const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '24px',
    height: '24px',
    right: '20px',
    top: '19px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    top: '19px',
    right: '20px',
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    backgroundColor: '#E6533C',
    padding: '100px 43px 0',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    padding: '0.8em',
  },
  bmItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '111px',
    height: '38px',
    color: '#EFEDE8',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.3',
    borderStyle: 'solid',
    borderColor: 'rgba(239, 237, 232, 0.2)',
    borderWidth: '1px',
    borderRadius: '12px',
    padding: '10px 27px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

export default styles;
