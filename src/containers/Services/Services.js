import React from 'react'
import { string } from 'prop-types'
import { Container, Image, Message, Grid } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

import contents from './contents'
import intros from './intros'

const Services = ({ category }) => (
  <Container className="services inner">
    <h2 className="headline">
      <FormattedMessage id="services.title" />
    </h2>
    <h3 className="introduction">
      {intros[category] &&
        intros[category].map((intro, idx) => (
          <p key={idx}>
            <FormattedMessage id={intro.introIntlId} />
          </p>
        ))}
    </h3>
    {contents.filter(content => content.category === category).map(content => (
      <Grid key={content.key} celled="internally" centered>
        <Grid.Row>
          <Grid.Column width="5">
            <Image
              className="label-image"
              size="medium"
              rounded
              src={content.image}
            />
          </Grid.Column>
          <Grid.Column width="10">
            <div className="label-description">
              <h2 className="label-title">
                <FormattedMessage id={content.titleIntlId} />
              </h2>
              <Message>
                {content.messages.map((message, idx) => (
                  <Message.Item key={idx}>
                    <FormattedMessage id={message.messageIntlId} />
                  </Message.Item>
                ))}
              </Message>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ))}
  </Container>
)

Services.propTypes = {
  category: string.isRequired
}

export default Services
