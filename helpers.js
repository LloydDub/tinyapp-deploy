const emailChecker = (email, users) => {
  for (const user in users) {
    if (users[user].email === email) {
      return user;
    }
  }
  return null;
};

module.exports = { emailChecker }