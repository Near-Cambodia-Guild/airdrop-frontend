import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { BackTop, Button, Col, Collapse, Form, Input, Row } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import onSubmit from '../utils/submit';
import Spinner from '../components/Spinner';
import ModalHowto from '../components/ModalHowto';
import info from '../assets/info.svg';
import facebook from '../assets/facebook.png';
import telegram from '../assets/telegram.png';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/banner.jpg';
import CreateUsername from '../components/CreateUsername';

const { Panel } = Collapse;

const Home = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);
  const [submitAble, setSubmitAble] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [wallet, setWallet] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
  }

  const onShareClick = async() => {
    setSubmitAble(true);
    if (navigator.share && detectMob()) {
      try {
        await navigator
          .share({
            url: 'https://www.facebook.com/khnearguild/posts/pfbid0279FqHMtXwgKfn9TpKFeMoksMRS2Toe6d6oWsRzkh7Fba5YSV11vMVNJ9ZmNL5GVYl',
            title: 'KHNEAR-AIRDROP',
            text: ''
          })
          .then(() =>
            console.log("Hooray! Your content was shared to tha world")
          );
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      // fallback code
      // console.log(
      //   alert('web share is not supported'),
      //   "Web share is currently not supported on this browser. Please provide a callback"
      // );
      window.FB.ui({
        method: 'share',
        link: 'https://www.facebook.com/khnearguild/posts/pfbid0279FqHMtXwgKfn9TpKFeMoksMRS2Toe6d6oWsRzkh7Fba5YSV11vMVNJ9ZmNL5GVYl',
        href: 'https://www.facebook.com/khnearguild/posts/pfbid0279FqHMtXwgKfn9TpKFeMoksMRS2Toe6d6oWsRzkh7Fba5YSV11vMVNJ9ZmNL5GVYl',
        hashtag: '#KHNEAR',
      }, function(res: any) {})
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit({email, wallet});
    toast.success('Congratulations, Thank you for joining our airdrop program!')
    setEmail('');
    setWallet('');
    setLoading(false);
    navigate('/success');
  }

  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId            : '593326535761123',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v14.0'
      });
    };
    (function (d, s, id) {
      var js: any, fjs: any = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div className='home__container'>
      <div className='spacing' />
      <h1>KHNEAR Airdrop 🚀</h1>
      <img alt='' src={banner} style={{width: '100%', borderRadius: '8px', marginBottom: '16px'}} />
      <p>KHNEAR is a chapter of the NEAR.org, a decentralized autonomous organization (DAO). KHNEAR is built with a mission to support and encourage the use of the NEAR Protocol, as well as educate people about Layer 1 blockchain, with the aim of promoting the creative and technological industries of Cambodia.</p>
      <p>To celebrate our first official grand launch event We want onborading new wallet buy providing an airdrop to new wallet with very simple step.</p>
      <div className='home__bgStep'>
        <h3>3 Step To Get Airdrop</h3>
      </div>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
      >
        <Panel header="Step 1: Join @KHNEAR Community on Telegram" key="1" className="site-collapse-custom-panel">
          <Row justify='center'>
            <button className='button-50'>
              <a style={{color: 'inherit'}} href='https://t.me/khnear' target='_blank' rel="noreferrer">
                <Row gutter={[8,8]} align='middle'>
                  <Col>
                    <img src={telegram} alt='' height={20} />
                  </Col>
                  <Col>
                    <span>Join Community</span>
                  </Col>
                </Row>
              </a>
            </button>
          </Row>
        </Panel>
        <Panel header="Step 2: Share post on Facebook" key="2" className="site-collapse-custom-panel">
          <Row justify='center'>
            <button className='button-50' onClick={onShareClick}>
              <Row gutter={[8,8]} align='middle'>
                <Col>
                  <img src={facebook} alt='' height={20} />
                </Col>
                <Col>
                  <span>Share to Facebook</span>
                </Col>
              </Row>
            </button>
          </Row>
        </Panel>
        <Panel 
          header={
            <Row justify='space-between'>
              <Col><span>Step 3: Submit Your Wallet Address</span></Col>
              <Col><img onClick={()=> setVisible(!visible)} src={info} alt='' width={20} /></Col>
            </Row>
          } 
          key="3" 
          className="site-collapse-custom-panel"
        >
          <div>
            <Form layout='vertical'>
              <Form.Item label='Telegram Username:'>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} size='large' placeholder='@combo23' />
              </Form.Item>
              <Form.Item label='Wallet Address:'>
                <Input value={wallet} onChange={(e) => setWallet(e.target.value)} size='large' placeholder='7faf682b....' />
              </Form.Item>
              <Form.Item>
                { submitAble ?
                  <button onClick={handleSubmit} style={{width: '100%'}} className='button-50'>
                    <Row gutter={[8,8]} justify='center'>
                      <Col>{ loading && <Spinner /> }</Col>
                      <Col><span>Submit</span></Col>
                    </Row>
                  </button>
                  :
                  <Button disabled={true} block size='large'>Submit</Button>
                }
              </Form.Item>
            </Form>
          </div>
        </Panel>
      </Collapse>

      <div style={{margin: '32px 0'}} />

      <div className='home__bgStep'>
        <h3>FAQs</h3>
      </div>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
      >
        <Panel  
          header='How to Create Wallet'
          key="1" 
          className="site-collapse-custom-panel"
        >
          <ModalHowto />
        </Panel>
        <Panel  
          header='How to Reserve Account ID'
          key="2" 
          className="site-collapse-custom-panel"
        >
          <CreateUsername />
        </Panel>
      </Collapse>
      <div style={{margin: '40px 0'}} />
      <BackTop>
        <Button shape='round' size='large'>
          <CaretUpOutlined />
        </Button>
      </BackTop>
    </div>
  )
}

export default Home;