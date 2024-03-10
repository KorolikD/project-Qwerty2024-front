import { createGlobalStyle } from 'styled-components';

export const CalendarGlobalStyle = createGlobalStyle`

:where(.css-dev-only-do-not-override-3jrg4y).ant-picker-outlined{
    visibility: hidden;
    width: 1px;
    padding: 0;
}

:where(.css-3jrg4y).ant-picker-outlined{
    visibility: hidden;
    width: 1px;
    padding: 0;
}

/* :where(.css-dev-only-do-not-override-3jrg4y).ant-picker-outlined:hover {
    border-color: #EFEDE8;
} */

/* :where(.css-dev-only-do-not-override-1yfru4t).ant-picker-dropdown .ant-picker-date-panel {
    width: 215px;
} */

:where(.css-dev-only-do-not-override-3jrg4y).ant-picker-dropdown .ant-picker-date-panel {
    width: 215px;
}

/* :where(.css-dev-only-do-not-override-hxotdm).ant-picker-dropdown .ant-picker-panel-container .ant-picker-panel-layout {
    width: 215px;
    justify-content: center;
} */

/* .ant-picker-date-panel {
    width: 215px;
} */


:where(.css-dev-only-do-not-override-3jrg4y).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before{
    border: none;
}

/* :where(.css-dev-only-do-not-override-3jrg4y).ant-picker-dropdown .ant-picker-cell .ant-picker-cell-inner {
    border-radius: 50px;
} */

/* :where(.css-dev-only-do-not-override-hxotdm).ant-picker-dropdown .ant-picker-date-panel .ant-picker-body {
padding: 14px 0px;
} */

/* :where(.css-dev-only-do-not-override-hxotdm).ant-picker-dropdown .ant-picker-header {
    padding: 0;
} */

.ant-picker-footer {
    display: none;
}

.ant-picker-header-super-prev-btn {
    display: none;
}

.ant-picker-header-super-next-btn {
    display: none;
}
`;
export const calendarTheme = {
  components: {
    DatePicker: {
      colorText: '#EFEDE8',
      colorBgContainer: 'transperent',
      colorIcon: '#EFEDE8',
      colorBgElevated: '#EF8964',
      colorPrimary: '#040404',
      colorTextHeading: '#EFEDE8',
      cellHoverBg: 'none',
      colorBorder: '#EFEDE8',
      cellWidth: 20,
      cellHeight: 20,
    },
  },
};
