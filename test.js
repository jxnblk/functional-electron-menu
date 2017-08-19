const test = require('ava')

const createMenu = require('./index')

const config = state => [
  {
    label: 'Test',
    submenu: [
      { role: 'about' },
      {
        label: 'Click Me',
        click: state.click
      },
      { type: 'separator' },
      {
        label: 'Preferences',
        click: state.click,
        event: 'preferences',
        accelerator: 'Cmd+,'
      },
      { role: 'quit' }
    ]
  }
]

test('exports a function', t => {
  t.is(typeof createMenu, 'function')
})

test('returns a function', t => {
  t.is(typeof createMenu(config), 'function')
})

test('creates an electron menu', t => {
  const renderMenu = createMenu(config)
  const menu = renderMenu({ click: n => {} })
  t.is(typeof menu, 'object')
})
