import React from 'react'
import { Anchor, Col, Row, Steps } from 'antd'
import step1 from '../assets/howto/step1.png';
import step2 from '../assets/howto/step2.png';
import step3 from '../assets/howto/step3.png';
import step4 from '../assets/howto/step4.png';
import step5 from '../assets/howto/step5.png';
import step6 from '../assets/howto/step6.png';
import step7 from '../assets/howto/step7.png';
import step8 from '../assets/howto/step8.png';
import Image from './Image';

const { Link } = Anchor;

const ModalHowto = (): JSX.Element => {
  const data = [
    { step: '1', img: step1, desc: 'Navigate to wallet.near.org' },
    { step: '2', img: step2, desc: 'Create Your Account' },
    { step: '3', img: step3, desc: 'Choose security method' },
    { step: '4', img: step4, desc: 'Copy your secure passphrase' },
    { step: '5', img: step5, desc: 'Setup secure passphrase' },
    { step: '6', img: step6, desc: 'Verify phrase' },
    { step: '7', img: step7, desc: 'Wallet Balances' },
    { step: '8', img: step8, desc: 'Copy Wallet Address'},
  ];

  return (
    <div className='modal__content'>
      <br />
      <div className='home__bgStep'>
        <h3>How to create wallet</h3>
      </div>
      <Row gutter={[8, 8]} justify='center'>
        {/* <Col>
          <Anchor>
            { data.map((i, key) => 
              <Link href={`#step${i.step}`} title={`Step${i.step}: ${i.desc}`} />
            )}
          </Anchor>
        </Col> */}
        <Col>
          { data.map((i, key) => 
            <div key={`step${i.step}`}>
              <p>{`Step${i.step}: ${i.desc}`}</p>
              <Image image={i.img} />
            </div>
          )} 
        </Col>
      </Row>
    </div>
  )
}

export default ModalHowto