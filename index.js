
const backgroundColor = '#220000'
const foregroundColor = '#ff3300'
const cursorColor = foregroundColor
const borderColor = 'rgba(255, 0, 0, .25)'

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

exports.decorateConfig = config => {
  console.log('H Y P E R T E R M I N A T O R')

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active {
        font-weight: bold;
        color: ${backgroundColor} !important;
        background-color: ${foregroundColor};
      }
    `
  })
}

