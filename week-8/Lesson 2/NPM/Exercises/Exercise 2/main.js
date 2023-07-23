import { faker } from "@faker-js/faker";

const makeHuman = function (number) {
  for (let i = 0; i < number; i++) {
    const user = faker.helpers.fake(
      `{{person.firstName}}, {{image.avatar}}, {{company.name}}`
    );

    console.log(user);
  }
};

makeHuman(5);
