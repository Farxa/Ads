const faker = require("@ngneat/falso");

function FakeDataGenerator(accountType = "default") {
  this.accountType = accountType;
}

/**
 *  Please do NOT simply use randEmail() in this exercise
 */

FakeDataGenerator.prototype.generateFakeUser = function () {
  let number = Math.floor(Math.random() * 100) + 1;

  let result;
  while (!result || /[ äöüÄÖÜßáéðóšúâÁÃíČøÆëčŠ]/.test(result.email)) {
    const firstname = faker.randFirstName();
    const lastname = faker.randLastName();

    const delimiter = ["_", ".", "-", ""][
      faker.randNumber({ min: 0, max: ["_", ".", "-", ""].length - 1 })
    ];

    const email =
      firstname +
      delimiter +
      lastname +
      faker.randNumber({ min: 0, max: 100 }) +
      "@" +
      faker.randDomainName();

    result = {
      firstname,
      lastname,
      email,
      contactName: `${firstname} ${lastname}`,
    };
  }

  return {
    email: result.email,
    contactName: result.contactName,
    password: faker.randPassword(),
    accountType: this.accountType,
    firstName: result.firstname,
    lastName: result.lastname,
    phoneNumber: faker.randPhoneNumber(),
    brandingStreet: `${faker.randStreetName()} ${number}`,
  };
};

FakeDataGenerator.createIntervalBasedFakeUserGenerator = function (cbFn, time) {
  setInterval(() => {
    cbFn(new FakeDataGenerator().generateFakeUser());
  }, time);
};

module.exports = FakeDataGenerator;
