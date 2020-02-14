const style = () => {
  return ({
    paperInput: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 350,
      borderRadius: 10,
      backgroundColor: '#ffffff3b',
      margin: '0 auto',
      marginTop: 30
    },
    input: {
      marginLeft: 1,
      flex: 1,
    },
    iconButton: {
      '&:hover': {
        cursor: 'pointer'
      }
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
}

export default style;
