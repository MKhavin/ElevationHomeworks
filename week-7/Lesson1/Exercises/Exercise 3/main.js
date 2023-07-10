const usersIDZipCode5 = users.filter(u => u.address.zipcode.slice(0, 1) === "5").map(u => u.id)

console.log(usersIDZipCode5)