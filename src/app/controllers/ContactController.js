const ContanctRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContanctRepository.findAll();

    response.json(contacts);
  }

  show(request, response) {
    // Obter UM registro
    response.json({ message: 'ok' });
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
