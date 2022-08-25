import { GoogleSpreadsheet } from "google-spreadsheet";

// interface Props {
//   email: string
//   wallet: string
// }

const onSubmit = async({email, wallet}) => {
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, '\n');

  // const spreadsheetId = "1Wwvnf0L0R0PqdFo-uBfPi69n9RhDYX0PtwtOR3whSa8";

  // const client = new window.gapi.auth.JWT(
  //   CLIENT_EMAIL,
  //   PRIVATE_KEY,
  //   'https://www.googleapis.com/auth/spreadsheets'
  // )
  // console.log(window);
  
  // const googleSheet = window.gapi.sheets({version: 'v4', auth: client});

  // const getRows = await googleSheet.spreadsheets.values.get({
  //   auth: client,
  //   spreadsheetId,
  //   range: "Sheet1"
  // })
  // console.log(getRows.data.values);

  // const writeRow = await googleSheet.spreadsheets.values.append({
  //   auth: client,
  //   spreadsheetId: SPREADSHEET_ID,
  //   range: "Sheet1",
  //   valueInputOption: "USER_ENTERED",
  //   resource: {
  //     values: [
  //       [email, wallet]
  //     ]
  //   }
  // })

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
    .catch((err) => {
      console.error('Error: ', err);
    })
}

export default onSubmit;