dbPassword='mongodb+srv://DB_USERNAME:DB_PASSWORD@<link to your MongoDB cluster>/?retryWrites=true&w=majority>';
dbPassword = dbPassword.replace('DB_USERNAME', process.env.DB_USERNAME || 'defaultUsername');
dbPassword = dbPassword.replace('DB_PASSWORD', process.env.DB_PASSWORD || 'defaultPassword');

module.exports = {
  mongoURI: dbPassword
};