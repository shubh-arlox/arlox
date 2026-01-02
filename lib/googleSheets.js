// lib/googleSheets.js
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import creds from '../secrets.json';

let doc;
const headerIndex = 2;
async function loadSheet() {
  if (doc) return doc;
  const serviceAccountAuth = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  doc = new GoogleSpreadsheet('10YblmbZ4-_UwleQYShg8mP2Ov3uRQCZDHV5AEX7uik8', serviceAccountAuth);

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