
# functional-electron-menu

An electron menu creator function for stateful application menus

```sh
npm install functional-electron-menu
```

```js
const createMenu = require('functional-electron-menu')
const appState = require('./appState')

const config = state => [
  {
    label: 'App Name',
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      {
        label: 'Preferences',
        click: state.handleClick,
        accelerator: 'Cmd+,'
      }
    ]
  }
]

const renderMenu = createMenu(config)

// set the electron app's menu based on state
const menu = renderMenu(appState.store)
```

MIT License
