import React, { Component } from 'react'
import { func, object } from 'prop-types'
import { Button } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

class Home extends Component {
  navigate = path => e => {
    const { history, switchCategory } = this.props
    switchCategory(path)
    history.push(path)
  }

  render() {
    return (
      <div className="container home">
        <div className="home-column left">
          <Button
            basic
            inverted
            color="olive"
            onClick={this.navigate('agricultural')}
          >
            <h1 className="title">
              <FormattedMessage id="home.exploitation.agricole" />
            </h1>
          </Button>
        </div>
        <div className="home-column right">
          <Button
            basic
            inverted
            color="olive"
            onClick={this.navigate('lumbering')}
          >
            <h1 className="title">
              <FormattedMessage id="home.exploitation.forest" />
            </h1>
          </Button>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  history: object.isRequired,
  switchCategory: func.isRequired
}

export default Home
