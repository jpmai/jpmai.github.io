import React from 'react'

import logo from '../../assets/logo.svg'

const renderLogo = () => <img className="loading-app logo" src={logo} alt="" />

const Loading = () => (
  <div className="loading">
    {renderLogo()}
    {renderLogo()}
    {renderLogo()}
  </div>
)

export default Loading
