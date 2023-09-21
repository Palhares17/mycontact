class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send('Meu pau');
  }

  show() {
    // Obter UM registro
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
