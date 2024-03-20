const faker = require("@ngneat/falso");

function FakeDataGenerator(accountType = "default") {
  this.accountType = accountType;
}

/**
 *  Please do NOT simply use randEmail() in this exercise
 */
FakeDataGenerator.prototype.sanitizeNameForEmail = function (name) {
  return name.replace(/[ äöüÄÖÜßáéðóšúâÁÃíČøÆëčŠ]/g, "");
};

FakeDataGenerator.prototype.generateFakeUser = function () {
  let number = Math.floor(Math.random() * 100) + 1;

  let firstname = faker.randFirstName();
  let lastname = faker.randLastName();

  // Sanitize names to remove invalid characters for email addresses
  firstname = this.sanitizeNameForEmail(firstname);
  lastname = this.sanitizeNameForEmail(lastname);

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

  return {
    email: email,
    contactName: `${firstname} ${lastname}`,
    password: faker.randPassword(),
    accountType: this.accountType,
    firstName: firstname,
    lastName: lastname,
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
