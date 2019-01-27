import { connect } from 'react-redux'

import { switchCategory } from '../../store/actions'
import HeaderComponent from './Header'

const mapDispatchToProps = dispatch => ({
  switchCategory: category => dispatch(switchCategory(category))
})

const Header = connect(
  () => ({}),
  mapDispatchToProps
)(HeaderComponent)

export default Header
