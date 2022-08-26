import { Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <Row justify='center' align='middle'>
      <Link to='/'>
        <img 
          src={logo} 
          alt='' 
          height={40} 
        />
      </Link>
    </Row>
  )
}

export default Header