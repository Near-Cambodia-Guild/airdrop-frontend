import { Button, Card, Col, Row } from 'antd'
import congrate from '../assets/congrate.gif';
import facebook from '../assets/facebook.png';
import telegram from '../assets/telegram.png';
import github from '../assets/github.png';

const Success = () => {
  return (
    <div className='success__wrapper'>
      <div style={{padding: '16px 0'}} />
      <Row justify='center'>
        <Col span={24}>
          <Row justify='center'>
            <img src={congrate} alt='' width={120} height={120} style={{marginBottom: '24px'}} />
          </Row>
        </Col>
        <Col span={24}>
          <Row justify='center'>
            <p>Congratulations 🎉, Thank you for joining our airdrop program!</p>
          </Row>
        </Col>
      </Row>
      <hr />
      <h2>Keep in touch</h2>
      <Card className='success__card'>
        <Row justify='center'>
          <Col>
            <a href='https://t.me/khnear'>
              <Button block className='success__btn'>
                <img src={telegram} alt='' height={20} width={20} />
                <span>Join our Telegram community</span>
              </Button>
            </a>
            <a href='https://www.facebook.com/khnearguild/'>
              <Button block className='success__btn'>
                <img src={facebook} alt='' height={20} width={20} />
                <span>Follow our Facebook page</span>
              </Button>
            </a>
            <a href='https://github.com/Near-Cambodia-Guild'>
              <Button block className='success__btn'>
                <img src={github} alt='' height={20} width={20} />
                <span>Follow our GitHub</span>
              </Button>  
            </a>
          </Col>
        </Row>
      </Card>
      {/* <Row justify='center'>
        <Col span={12}>
          <Link to='/'>
            <button style={{width: '100%'}} className='button-50'>Back Home</button>
          </Link>
        </Col>
      </Row> */}
    </div>
  )
}

export default Success