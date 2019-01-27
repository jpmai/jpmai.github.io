import React from 'react'
import { string } from 'prop-types'

const Contact = ({ name, phone, email }) => (
  <div className="contact">
    <h2 className="title">{name}</h2>
    <h3>{phone}</h3>
    <h3>{email}</h3>
  </div>
)

Contact.propTypes = {
  name: string.isRequired,
  phone: string.isRequired,
  email: string.isRequired
}

export default Contact
