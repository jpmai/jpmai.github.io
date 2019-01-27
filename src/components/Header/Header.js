import React, { Component } from 'react'
import { object, func } from 'prop-types'
import { withRouter } from 'react-router'
import { FormattedMessage } from 'react-intl'
import { Menu } from 'semantic-ui-react'

import routes from '../../containers/App/routes'
import logo from '../../assets/logo.svg'

class Header extends Component {
  state = {
    activeItem: ''
  }

  componentDidMount() {
    const { location, switchCategory } = this.props
    const activeItem =
      location.pathname === '/'
        ? 'nav.home'
        : location.pathname.replace('/', 'nav.')

    this.setState({ activeItem })
    switchCategory(location.pathname.replace('/', ''))
  }

  componentWillReceiveProps(nextProps) {
    const route = routes.filter(
      r => r.path === nextProps.history.location.pathname
    )

    if (route.length) {
      this.setState({
        activeItem: route[0].intlId
      })
    }
  }

  navigate = route => e => {
    const { history } = this.props
    history.push(route)
  }

  handleItemClick = route => e => {
    const { history, switchCategory } = this.props
    const category = route.path.replace('/', '')

    this.setState({ activeItem: route.intlId })
    switchCategory(category)

    history.push(route.path)
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="header">
        <div className="header-app">
          <img
            className="header-app-logo"
            src={logo}
            alt="app-logo"
            onClick={this.handleItemClick(routes[0])}
          />
          <div className="header-app-text-box">
            <p className="headline">
              <FormattedMessage id="app.title" />
            </p>
            <h3 className="subtitle">
              <FormattedMessage id="app.subtitle" />
            </h3>
            <div className="header-menu">
              <Menu pointing secondary color="olive">
                <Menu.Menu className="header-menu-item" position="right">
                  {routes.map(
                    route =>
                      route.main && (
                        <div key={`${route.intlId}-div-d`}>
                          <Menu.Item
                            name={route.intlId}
                            content={
                              <p className="nav">
                                <FormattedMessage id={route.intlId} />
                              </p>
                            }
                            active={activeItem === route.intlId}
                            onClick={this.handleItemClick(route)}
                          />
                        </div>
                      )
                  )}
                </Menu.Menu>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  history: object.isRequired,
  location: object.isRequired,
  switchCategory: func.isRequired
}

export default withRouter(Header)
