import { Col, Row } from 'antd';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.png';
import telegram from '../assets/telegram.png';
import github from '../assets/github.png';

const Footer = () => {
  return (
    <div className='footer'>
      <Row gutter={[8, 16]} align='middle' justify='space-between' style={{height: '100%'}}>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Row justify='space-between'>
            <Col span={24}>
              <img src={logo} alt='' height={40} />
            </Col>
            <Col span={24}>
              <span>Find us at: <a href='https://khnear.org'>KHNEAR.ORG</a></span>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <span>JOIN US</span>
          <Row gutter={[8, 8]}>
            <Col><a href='https://github.com/Near-Cambodia-Guild'><img src={github} alt='' height={32} /></a></Col>
            <Col><a href='https://t.me/khnear'><img src={telegram} alt='' height={32} /></a></Col>
            <Col><a href='https://www.facebook.com/khnearguild/'><img src={facebook} alt='' height={32} /></a></Col>
          </Row>
        </Col>
      </Row>
      <div style={{paddingTop: '16px'}}/>
      <Row justify='center'>
        <span>Copyright 2022 | Made with ❤️ by KHNEAR.</span>
      </Row>
    </div>
  )
}

export default Footer