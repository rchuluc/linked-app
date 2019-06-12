import { StyleSheet, PixelRatio } from 'react-native'

const button = StyleSheet.create({
  primary: {
    backgroundColor: '#F7DC69'
  },

  secondary: {
    backgroundColor: '#7CE6D7'
  },

  alternative: {
    backgroundColor: '#E684C3'
  },

  floating: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: PixelRatio.get() * 12,
    right: PixelRatio.get() * 12,
    zIndex: 10,
    height: PixelRatio.getPixelSizeForLayoutSize(32),
    width: PixelRatio.getPixelSizeForLayoutSize(32),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(16),
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {
      width: PixelRatio.get() * 4,
      height: PixelRatio.get() * 4
    },
    shadowOpacity: 0.34,
    shadowRadius: PixelRatio.get() * 2,

    elevation: 10
  },

  icon: {
    color: '#222222',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12)
  },

  iconSmall: {
    color: '#222222',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7)
  },

  normal: {
    borderRadius: PixelRatio.get() * 3,
    paddingTop: PixelRatio.get() * 5,
    paddingBottom: PixelRatio.get() * 5,
    paddingLeft: PixelRatio.get() * 18,
    paddingRight: PixelRatio.get() * 18,
    alignSelf: 'center'
  },

  link: {
    color: '#222222',
    fontSize: PixelRatio.getFontScale() * 20
  },

  text: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: PixelRatio.getFontScale() * 20
  },

  inlineButtons: {
    position: 'relative',
    bottom: PixelRatio.get() * 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

const input = StyleSheet.create({
  container: {
    borderBottomWidth: PixelRatio.get() * 1,
    width: '80%'
  },

  primary: {
    borderBottomColor: '#EDC30D'
  },

  secondary: {
    borderBottomColor: '#28D2BA'
  },

  alternative: {
    borderBottomColor: '#D52F9A'
  },

  default: {
    borderBottomColor: '#222222'
  },

  placeholder: {
    color: '#A8A8A8',
    marginBottom: PixelRatio.get() * -3,
    fontSize: PixelRatio.getFontScale() * 16
  },

  value: {
    color: '#222222',
    marginBottom: PixelRatio.get() * -3,
    fontSize: PixelRatio.getFontScale() * 16
  },

  label: {
    color: '#222222',
    marginBottom: PixelRatio.get() * -3,
    fontSize: PixelRatio.getFontScale() * 14
  },

  icon: {
    position: 'relative',
    right: PixelRatio.get() * 3,
    color: '#A8A8A8',
    fontSize: PixelRatio.getFontScale() * 18,
    alignSelf: 'center'
  }
})

const text = StyleSheet.create({
  h1: {
    fontSize: PixelRatio.getFontScale() * 40
  },
  h2: {
    fontSize: PixelRatio.getFontScale() * 32
  },
  h3: {
    fontSize: PixelRatio.getFontScale() * 28
  },
  h4: {
    fontSize: PixelRatio.getFontScale() * 24
  },
  h5: {
    fontSize: PixelRatio.getFontScale() * 20
  },
  p: {
    fontSize: PixelRatio.getFontScale() * 16
  },
  small: {
    fontSize: PixelRatio.getFontScale() * 12
  },
  disabled: {
    color: '#DBDBDB'
  },
  bold: {
    fontWeight: 'bold'
  }
})

const card = StyleSheet.create({
  body: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: PixelRatio.get() * 3
    },
    shadowOpacity: 0.23,
    shadowRadius: PixelRatio.get() * 5,

    elevation: 4,
    borderRadius: PixelRatio.get() * 3
  },

  primary: {
    borderLeftWidth: PixelRatio.get() * 5,
    borderColor: '#EDC30D'
  },

  secondary: {
    borderLeftWidth: PixelRatio.get() * 5,
    borderColor: '#28D2BA'
  },

  alternative: {
    borderLeftWidth: PixelRatio.get() * 5,
    borderColor: '#D52F9A'
  }
})

const stepper = StyleSheet.create({
  dot: {
    height: PixelRatio.get() * 6,
    width: PixelRatio.get() * 6,
    borderRadius: PixelRatio.get() * 3,
    backgroundColor: '#C4C4C4'
  },

  container: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  active: {
    backgroundColor: '#EDC30D'
  }
})

const carousel = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    marginTop: PixelRatio.get() * 30,
    height: '50%',
    aspectRatio: 1 / 1
  },
  label: {
    marginTop: PixelRatio.get() * -10,
    marginBottom: PixelRatio.get() * 20,
    textAlign: 'center'
  }
})

const display = StyleSheet.create({
  logo: {
    position: 'absolute',
    top: PixelRatio.get() * 5,
    right: PixelRatio.get() * -60,
    zIndex: -10,
    height: 185,
    aspectRatio: 1 / 1
  },

  imageMedium: {
    margin: 0,
    height: PixelRatio.get() * 60
  },

  imageSmall: {
    margin: 0,
    height: PixelRatio.get() * 30
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  row: {
    flexDirection: 'row'
  },

  fullWidth: {
    width: '95%'
  },

  fullHeight: {
    height: '100%'
  },

  col: {
    flexDirection: 'column'
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  start: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  marginLargeTop: {
    marginTop: PixelRatio.get() * 25
  },
  marginLargeRight: {
    marginRight: PixelRatio.get() * 25
  },
  marginLargeBottom: {
    marginBottom: PixelRatio.get() * 25
  },
  marginLargeLeft: {
    marginLeft: PixelRatio.get() * 25
  },
  marginLargeAll: {
    margin: PixelRatio.get() * 25
  },

  marginMediumTop: {
    marginTop: PixelRatio.get() * 15
  },
  marginMediumRight: {
    marginRight: PixelRatio.get() * 15
  },
  marginMediumBottom: {
    marginBottom: PixelRatio.get() * 15
  },
  marginMediumLeft: {
    marginLeft: PixelRatio.get() * 15
  },
  marginMediumAll: {
    margin: PixelRatio.get() * 15
  },

  marginSmallTop: {
    marginTop: PixelRatio.get() * 5
  },
  marginSmallRight: {
    marginRight: PixelRatio.get() * 5
  },
  marginSmallBottom: {
    marginBottom: PixelRatio.get() * 5
  },
  marginSmallLeft: {
    marginLeft: PixelRatio.get() * 5
  },
  marginSmallAll: {
    margin: PixelRatio.get() * 5
  }
})

export { button, input, text, card, stepper, carousel, display }
