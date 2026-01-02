// lib/googleSheets.js
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

let doc;
const headerIndex = 2;
async function loadSheet() {
  if (doc) return doc;
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID, serviceAccountAuth);

  await doc.loadInfo();
  return doc;
}

export const db = {
  getAll: async (sheetTitle = 'Sheet1') => {
    const doc = await loadSheet();
    const sheet = doc.sheetsByTitle[sheetTitle];
    await sheet.loadHeaderRow(headerIndex)
    const headers = sheet.headerValues;
    const rows = await sheet.getRows();
    return rows.map((row) => {
      const cleanRow = {};
      headers.forEach((header) => {
        const cellValue = row.get(header);
        cleanRow[header] = (cellValue === undefined || cellValue === null) ? "" : cellValue;
      });

      return cleanRow;
    });
  },
  
  getColumn: async (columns = [], sheetTitle = 'Sheet1') => {
    const allRows = await db.getAll(sheetTitle); 
    return allRows.map((row) => {
      const filteredRow = {};
      columns.forEach((col) => {
        if (Object.prototype.hasOwnProperty.call(row, col)) {
          filteredRow[col] = row[col];
        }
      });
      return filteredRow;
    });
  },

  findOne: async (column, value, sheetTitle = 'Sheet1') => {
    const allRows = await db.getAll(sheetTitle);
    return allRows.find((row) => row[column] === value) || null;
  },
  
  query: async (filterFn, sheetTitle = 'Sheet1') => {
    const allRows = await db.getAll(sheetTitle);
    return allRows.filter(filterFn);
  }
};