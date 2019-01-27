import React from 'react'
import { Container } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import ImageGallery from 'react-image-gallery'

const agricultural1 = require('../../assets/agricultural1.jpg')
const agricultural2 = require('../../assets/agricultural2.jpg')
const agricultural3 = require('../../assets/agricultural3.jpg')
const agricultural4 = require('../../assets/agricultural4.jpg')
const agricultural5 = require('../../assets/agricultural5.jpg')
const agricultural6 = require('../../assets/agricultural6.jpg')
const agricultural7 = require('../../assets/agricultural7.jpg')
const agricultural8 = require('../../assets/agricultural8.jpg')
const agricultural9 = require('../../assets/agricultural9.jpg')
const agricultural10 = require('../../assets/agricultural10.jpg')
const agricultural11 = require('../../assets/agricultural11.jpg')
const agricultural12 = require('../../assets/agricultural12.jpg')
const agricultural13 = require('../../assets/agricultural13.jpg')
const agricultural14 = require('../../assets/agricultural14.jpg')
const agricultural15 = require('../../assets/agricultural15.jpg')
const agricultural16 = require('../../assets/agricultural16.jpg')
const agricultural17 = require('../../assets/agricultural17.jpg')
const lumbering1 = require('../../assets/lumbering1.jpg')
const lumbering2 = require('../../assets/lumbering2.jpg')
const lumbering3 = require('../../assets/lumbering3.jpg')
const lumbering4 = require('../../assets/lumbering4.jpg')
const lumbering5 = require('../../assets/lumbering5.jpg')
const lumbering6 = require('../../assets/lumbering6.jpg')
const lumbering7 = require('../../assets/lumbering7.jpg')
const lumbering8 = require('../../assets/lumbering8.jpg')
const lumbering9 = require('../../assets/lumbering9.jpg')
const lumbering10 = require('../../assets/lumbering10.jpg')
const lumbering11 = require('../../assets/lumbering11.jpg')
const lumbering12 = require('../../assets/lumbering12.jpg')
const lumbering13 = require('../../assets/lumbering13.jpg')
const lumbering14 = require('../../assets/lumbering14.jpg')
const lumbering15 = require('../../assets/lumbering15.jpg')
const lumbering16 = require('../../assets/lumbering16.jpg')
const lumbering17 = require('../../assets/lumbering17.jpg')
const lumbering18 = require('../../assets/lumbering18.jpg')
const lumbering19 = require('../../assets/lumbering19.jpg')
const lumbering20 = require('../../assets/lumbering20.jpg')
const lumbering21 = require('../../assets/lumbering21.jpg')
const lumbering22 = require('../../assets/lumbering22.jpg')
const lumbering23 = require('../../assets/lumbering23.jpg')
const lumbering24 = require('../../assets/lumbering24.jpg')
const lumbering25 = require('../../assets/lumbering25.jpg')
const lumbering26 = require('../../assets/lumbering26.jpg')
const lumbering27 = require('../../assets/lumbering27.jpg')
const lumbering28 = require('../../assets/lumbering28.jpg')
const lumbering29 = require('../../assets/lumbering29.jpg')
const lumbering30 = require('../../assets/lumbering30.jpg')
const lumbering31 = require('../../assets/lumbering31.jpg')
const lumbering32 = require('../../assets/lumbering32.jpg')

const images = [
  {
    original: agricultural1,
    thumbnail: agricultural1
  },
  {
    original: agricultural2,
    thumbnail: agricultural2
  },
  {
    original: agricultural3,
    thumbnail: agricultural3
  },
  {
    original: agricultural4,
    thumbnail: agricultural4
  },
  {
    original: agricultural5,
    thumbnail: agricultural5
  },
  {
    original: agricultural6,
    thumbnail: agricultural6
  },
  {
    original: agricultural7,
    thumbnail: agricultural7
  },
  {
    original: agricultural8,
    thumbnail: agricultural8
  },
  {
    original: agricultural9,
    thumbnail: agricultural9
  },
  {
    original: agricultural10,
    thumbnail: agricultural10
  },
  {
    original: agricultural11,
    thumbnail: agricultural11
  },
  {
    original: agricultural12,
    thumbnail: agricultural12
  },
  {
    original: agricultural13,
    thumbnail: agricultural13
  },
  {
    original: agricultural14,
    thumbnail: agricultural14
  },
  {
    original: agricultural15,
    thumbnail: agricultural15
  },
  {
    original: agricultural16,
    thumbnail: agricultural16
  },
  {
    original: agricultural17,
    thumbnail: agricultural17
  },
  {
    original: lumbering1,
    thumbnail: lumbering1
  },
  {
    original: lumbering2,
    thumbnail: lumbering2
  },
  {
    original: lumbering3,
    thumbnail: lumbering4
  },
  {
    original: lumbering5,
    thumbnail: lumbering5
  },
  {
    original: lumbering6,
    thumbnail: lumbering6
  },
  {
    original: lumbering7,
    thumbnail: lumbering7
  },
  {
    original: lumbering8,
    thumbnail: lumbering8
  },
  {
    original: lumbering9,
    thumbnail: lumbering9
  },
  {
    original: lumbering10,
    thumbnail: lumbering10
  },
  {
    original: lumbering11,
    thumbnail: lumbering11
  },
  {
    original: lumbering12,
    thumbnail: lumbering12
  },
  {
    original: lumbering13,
    thumbnail: lumbering13
  },
  {
    original: lumbering14,
    thumbnail: lumbering14
  },
  {
    original: lumbering15,
    thumbnail: lumbering15
  },
  {
    original: lumbering16,
    thumbnail: lumbering16
  },
  {
    original: lumbering17,
    thumbnail: lumbering17
  },
  {
    original: lumbering18,
    thumbnail: lumbering18
  },
  {
    original: lumbering19,
    thumbnail: lumbering19
  },
  {
    original: lumbering20,
    thumbnail: lumbering20
  },
  {
    original: lumbering21,
    thumbnail: lumbering21
  },
  {
    original: lumbering22,
    thumbnail: lumbering22
  },
  {
    original: lumbering23,
    thumbnail: lumbering23
  },
  {
    original: lumbering24,
    thumbnail: lumbering24
  },
  {
    original: lumbering25,
    thumbnail: lumbering25
  },
  {
    original: lumbering26,
    thumbnail: lumbering26
  },
  {
    original: lumbering27,
    thumbnail: lumbering27
  },
  {
    original: lumbering28,
    thumbnail: lumbering28
  },
  {
    original: lumbering29,
    thumbnail: lumbering29
  },
  {
    original: lumbering30,
    thumbnail: lumbering30
  },
  {
    original: lumbering31,
    thumbnail: lumbering31
  },
  {
    original: lumbering32,
    thumbnail: lumbering32
  },
]

const Gallery = () => (
  <Container className="gallery inner">
    <h2 className="headline">
      <FormattedMessage id="gallery.title" />
    </h2>
    <div className="gallery-slider">
      <ImageGallery items={images} />
    </div>
  </Container>
)

export default Gallery
