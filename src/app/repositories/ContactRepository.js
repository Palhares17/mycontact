const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Matheus',
    phone: '123123123',
    category_id: v4(),
  },
];

class ContanctRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContanctRepository();
