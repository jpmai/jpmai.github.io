import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGhost,
  faVolleyballBall,
  faGolfBall,
  faTableTennis,
  faQuidditch,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

import routes from './routes'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Add the icons to FontAwesome library
library.add(
  faGhost,
  faVolleyballBall,
  faGolfBall,
  faTableTennis,
  faQuidditch,
  faSpinner
)

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      {routes.map(r => (
        <Route
          key={r.path}
          exact={r.exact}
          path={r.path}
          component={r.component}
        />
      ))}
    </Switch>
    <Footer />
  </div>
)

export default App
