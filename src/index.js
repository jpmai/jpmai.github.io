import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import 'semantic-ui-css/semantic.min.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './containers/App/App'
import * as serviceWorker from './serviceWorker'
import './styles/theme.scss'
import { language, translations } from './translations/i18n'
import reducers from './store/reducers'

// `dotenv` config
require('dotenv').config()

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={translations[language]}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
