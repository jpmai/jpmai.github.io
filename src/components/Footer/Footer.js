import React from 'react'
import { FormattedMessage } from 'react-intl'

import logo from '../../assets/logo.svg'

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <img className="footer-app-logo" src={logo} alt="" />
      <p>
        © <FormattedMessage id="app.title" />
      </p>
    </div>
  </div>
)

export default Footer
