
const backgroundColor = '#220000'
const foregroundColor = '#ff3300'
const cursorColor = foregroundColor

const colors = [
  backgroundColor,
  '#ff3300',
  '#ff6600',
  '#ff6600',
  '#ff0000',
  '#cc0000',
  '#ff0000',
  '#994433',
  '#994433',
  '#ff0000',
  '#ff3300',
  '#ff6600',
  '#ff6600',
  '#ff0000',
  '#ff0000',
  foregroundColor
]

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = cursorColor
      action.config.colors = colors
      console.log('H Y P E R T E R M I N A T O R')
  }
  next(action)
}

