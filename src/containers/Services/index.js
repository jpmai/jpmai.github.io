import { connect } from 'react-redux'

import ServicesComponent from './Services'

const Services = connect(
  state => ({
    category: state.main.category
  }),
  {}
)(ServicesComponent)

export default Services
