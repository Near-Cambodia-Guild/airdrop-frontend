import { Col, Row } from "antd";
import ReactMarkdown from "react-markdown";
import Image from "./Image";
import step1 from '../assets/reserve/step1.png';
import step2 from '../assets/reserve/step2.png';
import step3 from '../assets/reserve/step3.png';
import step5 from '../assets/reserve/step5.png';
import step6 from '../assets/reserve/step6.png';
import step7 from '../assets/reserve/step7.png';

const CreateUsername = () => {
    const data = [
        { step: '1', img: step1, desc: 'Make sure you have enough balance, click on **Profile** icon, you will see a pop up, then click on **Create New Account** button.' },
        { step: '2', img: step2, desc: 'Enter your Account ID. Every account created on **NEAR Wallet** receives a `near` ending as a part of the address. Please note, this custom name wallet is different from your implicit wallet, you can switch between those wallets!' },
        { step: '3', img: step3, desc: 'Click **Reserve my Account ID**.' },
        { step: '4', img: '', desc: 'Follow the same flow on **Wallet Creation** from **Step3** to **Step 5**' },
        { step: '5', img: step5, desc: 'Then you need to fund this account with an existing account you’ve already created. Check the address in the input box. If everything is correct, click continue. If it’s not, click **Import a Different Account** and follow the instructions.' },
        { step: '6', img: step6, desc: 'Here you have to approve a transaction of `0.1 NEAR`. Click **Approve**.' },
        { step: '7', img: step7, desc: 'You’ve successfully set up a custom address!' },
    ];

    return (
        <div className='modal__content'>
            <Row gutter={[8, 8]} justify='center'>
                <Col>
                { data.map((i, key) => 
                    <div key={`step${i.step}`}>
                        <ReactMarkdown children={`**Step${i.step}:** ${i.desc}`} linkTarget={"_self"} />
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            { i.img && <Image image={i.img} /> }
                        </div>
                    </div>
                )} 
                </Col>
            </Row>
        </div>
    );
}

export default CreateUsername;