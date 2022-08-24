import { Row } from 'antd'
import React from 'react'
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <Row justify='center' align='middle'>
      <img 
        src={logo} 
        alt='' 
        height={40} 
      />
    </Row>
  )
}

export default Header