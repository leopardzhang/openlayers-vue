let baseURL = null;
const prod = 'http://119.3.186.37/MailList';
const dev = 'http://localhost:3000';

baseURL = process.env.NODE_ENV == 'production' ? prod : dev;

export default prod;