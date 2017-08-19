const electron = require('electron')

module.exports = config => props => {
  const isRenderer = process.type === 'renderer'

  const { app, Menu } = isRenderer ? electron.remote : electron

  const state = Object.assign({
    click: () => {}
  }, props, { app })

  const template = config(state)

  if (!Menu) return template

  const menu = Menu.buildFromTemplate(template)

  Menu.setApplicationMenu(menu)

  return menu
}
