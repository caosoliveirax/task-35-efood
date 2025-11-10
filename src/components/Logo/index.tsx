import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const Logo = () => (
  <Link to=".">
    <img src={logo} alt="E-Food" />
  </Link>
)

export default Logo
