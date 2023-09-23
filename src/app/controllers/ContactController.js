const ContanctRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContanctRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;

    const contact = await ContanctRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(400).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro

  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContanctRepository.findById(id);

    if (!contact) {
      return response.status(400).json({ error: 'Contact not found' });
    }

    await ContanctRepository.delete(id);

    // 204: No contact
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
