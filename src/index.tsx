import { render } from 'inferno'
import App from './components/App';

if (process.env.NODE_ENV === 'development') {
  const { configure } = require('mobx')
  configure({ enforceActions: 'observed' })
}

render(
  <App />,
  document.getElementById('app')
)
