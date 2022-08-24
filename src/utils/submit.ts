import { GoogleSpreadsheet } from "google-spreadsheet";

interface Props {
  email: string
  wallet: string
}

const onSubmit = async({email, wallet}: Props) => {
  const SPREADSHEET_ID: any = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID: any = process.env.REACT_APP_SHEET_ID;
  const CLIENT_EMAIL: any = process.env.REACT_APP_CLIENT_EMAIL;
  const PRIVATE_KEY: any = process.env.REACT_APP_PRIVATE_KEY && process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, '\n');

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  });
  await doc.loadInfo();

  const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow({
      Email: email, 
      Wallet: wallet, 
    })
    .then(()=> {
      
    })
    .catch((err: any) => {
      console.error('Error: ', err);
    })
}

export default onSubmit;