import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

import Contact from '../../components/Contact'

const contacts = [
  {
    name: 'Thibaud Bonnevial',
    phone: '06.32.08.60.25',
    email: 'thibaud.bonnevial@gmail.com'
  },
  {
    name: 'Noé Bonnevial',
    phone: '06.78.70.09.29',
    email: 'noe.bonnevial@gmail.com'
  }
]

const Contacts = () => (
  <Container className="contacts inner">
    <h2 className="headline">
      <FormattedMessage id="contact.title" />
    </h2>
    <Grid className="contacts-list" columns={contacts.length} divided>
      {contacts.map(contact => (
        <Contact
          key={contact.email}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </Grid>
  </Container>
)

export default Contacts
