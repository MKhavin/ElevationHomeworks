const usersWithNameStartC = users.map(u => u.name).filter(n => n.slice(0, 1) === "C")

console.log(usersWithNameStartC)