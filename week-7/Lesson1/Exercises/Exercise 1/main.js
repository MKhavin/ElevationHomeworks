const usersEmailCompany = users.map((u) => ({
  email: u.email,
  company: u.company.name,
}));

console.log(usersEmailCompany)