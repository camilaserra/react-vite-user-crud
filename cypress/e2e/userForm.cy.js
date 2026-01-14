describe('Cadastro de usuário', () => {
  it('não permite cadastro com CPF inválido', () => {
    cy.visit('/')

    cy.get('input[name="name"]').type('Usuário Teste')
    cy.get('input[name="email"]').type('teste@email.com')
    cy.get('input[name="cpf"]').type('12345678900') // CPF inválido
    cy.get('input[name="phone"]').type('11999999999')

    cy.contains('Cadastrar').click()

    // Continua na mesma página
    cy.url().should('not.include', '/list')

    // Mensagem de erro visível
    cy.contains('CPF inválido').should('be.visible')
  })

  it('cadastra usuário com dados válidos e redireciona para lista', () => {
    cy.visit('/')

    cy.get('input[name="name"]').type('Usuário Válido')
    cy.get('input[name="email"]').type('valido@email.com')
    cy.get('input[name="cpf"]').type('52998224725') // CPF válido
    cy.get('input[name="phone"]').type('11988887777')

    cy.contains('Cadastrar').click()

    // Redirecionamento para a view de lista
    cy.url().should('include', '/list')
  })

 it('não permite cadastro com nome menor que 3 caracteres', () => {
  cy.visit('/')

  cy.get('input[name="name"]').type('Ca')
  cy.get('input[name="email"]').type('teste@email.com')
  cy.get('input[name="cpf"]').type('52998224725')
  cy.get('input[name="phone"]').type('11999999999')

  cy.contains('Cadastrar').click()

  cy.url().should('not.include', '/list')
  cy.contains('Nome deve conter ao menos 3 caracteres').should('be.visible')
})

it('permite cadastro com nome válido', () => {
  cy.visit('/')

  cy.get('input[name="name"]').type('Camila')
  cy.get('input[name="email"]').type('teste@email.com')
  cy.get('input[name="cpf"]').type('52998224725')
  cy.get('input[name="phone"]').type('11999999999')

  cy.contains('Cadastrar').click()

  cy.url().should('include', '/list')
  cy.contains('Nome deve conter ao menos 3 caracteres').should('not.exist')
})
})
