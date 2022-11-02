import state from './state'

globalThis.state = state

require('./layout/builder')
require('./controllers/builder')
require('./figures/index')