import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

import MemberCard from '../../components/MemberCard'

const bigBro = require('../../assets/thibaudbonnevial.jpg')
const littleBro = require('../../assets/noebonnevial.jpg')
const smith = require('../../assets/smith.jpg')

const teamMembers = [
  {
    nameIntlId: 'team.first.boss',
    metaIntlId: 'team.first.boss.meta',
    descriptionIntlId: 'team.first.boss.description',
    titleIntlId: 'team.first.boss.title',
    img: bigBro
  },
  {
    nameIntlId: 'team.second.boss',
    metaIntlId: 'team.second.boss.meta',
    descriptionIntlId: 'team.second.boss.description',
    titleIntlId: 'team.second.boss.title',
    img: littleBro
  },
  {
    nameIntlId: 'team.employee',
    metaIntlId: 'team.employee.meta',
    descriptionIntlId: 'team.employee.description',
    titleIntlId: 'team.employee.title',
    img: smith
  }
]

const Team = () => (
  <Container className="inner">
    <h2 className="headline">
      <FormattedMessage id="team.title" />
    </h2>
    <Card.Group centered>
      {teamMembers.map(member => (
        <MemberCard
          key={member.nameIntlId}
          name={<FormattedMessage id={member.nameIntlId} />}
          meta={<FormattedMessage id={member.metaIntlId} />}
          description={<FormattedMessage id={member.descriptionIntlId} />}
          content={<FormattedMessage id={member.titleIntlId} />}
          img={member.img}
        />
      ))}
    </Card.Group>
  </Container>
)

export default Team
