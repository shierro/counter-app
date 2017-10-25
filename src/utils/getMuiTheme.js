import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  fontDamily: 'Source Sans Pro, sans-serif',
  palette: {
    primary1Color: '#00008f',
    primary2Color: '#00008f',
    accent1Color: '#c91432',
    textColor: '#333333',
    alternateTextColor: '#fff',
    canvasColor: '#fff',
    pickerHeaderColor: '#00008f'
  }
});

muiTheme.textField.errorColor = '#c91432';

export default muiTheme;
