import React from 'react'
import { object, string } from 'prop-types'
import { Card, Image } from 'semantic-ui-react'

const MemberCard = ({ name, meta, description, content, img }) => (
  <div className="member-card">
    <Card>
      <Image src={img} alt="" />
      <Card.Content>
        <h2 className="title">{name}</h2>
        <Card.Meta>{meta}</Card.Meta>
        {<Card.Description>{description}</Card.Description>}
      </Card.Content>
      <Card.Content extra>{content}</Card.Content>
    </Card>
  </div>
)

MemberCard.defaultProps = {
  description: ''
}

MemberCard.propTypes = {
  name: object.isRequired,
  meta: object.isRequired,
  description: object,
  content: object.isRequired,
  img: string.isRequired
}

export default MemberCard
