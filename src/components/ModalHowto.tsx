import ReactMarkdown from 'react-markdown';
import { Col, Row } from 'antd'
import step1 from '../assets/howto/step1.png';
import step2 from '../assets/howto/step2.png';
import step3 from '../assets/howto/step3.png';
import step4 from '../assets/howto/step4.png';
import step5 from '../assets/howto/step5.png';
import step6 from '../assets/howto/step6.png';
import step7 from '../assets/howto/step7.png';
import step8 from '../assets/howto/step8.png';
import Image from './Image';

const ModalHowto = (): JSX.Element => {
  const data = [
    { step: '1', img: step1, desc: 'Navigate to [NEAR Wallet](https://wallet.near.org), click on **Create Account** button If you don’t have created an account.' },
    { step: '2', img: step2, desc: 'On the home page, click on **Get Started** button to continue the wallet creation.' },
    { step: '3', img: step3, desc: 'Next, choose the **security method**. There are two methods available: secure passphrase and ledger hardware wallet. In our case, select the **Secure Passphrase** option, then click **Secure My Account** to continue.' },
    { step: '4', img: step4, desc: 'This option requires you to save a 12-word secure passphrase, and store it somewhere safe or memorize it. \n\n **NOTE: Your seed phrase is your access to your wallet. Don\'t share it with anyone ever. If you lose it there is no customer support to get it back so make sure you really back up those phrases.**' },
    { step: '5', img: step5, desc: 'After safely saving the seed phrase, click **Continue**.' },
    { step: '6', img: step6, desc: 'To make sure you have secured your seed phrase correctly, you will be prompted to input one of the words at random order. \n\nEnter the corresponding word, then click **Verify & Complete**.' },
    { step: '7', img: step7, desc: 'When you see the below page, it means you have created an account successfully, then click on **Receive** to show your wallet address.' },
    { step: '8', img: step8, desc: 'Account ID section, click on **Copy** to copy the wallet address or account ID.'},
  ];

  return (
    <div className='modal__content'>
      <Row gutter={[8, 8]} justify='center'>
        <Col>
          { data.map((i, key) => 
            <div key={`step${i.step}`} id={`wc-step${i.step}`}>
              <ReactMarkdown children={`**Step${i.step}:** ${i.desc}`} linkTarget={"_blank"} />
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Image image={i.img} />
              </div>
            </div>
          )} 
        </Col>
      </Row>
    </div>
  )
}

export default ModalHowto