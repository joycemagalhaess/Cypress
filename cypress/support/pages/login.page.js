const INPUT_EMAIL = '#email'
const INPUT_SENHA = '#passwd'
const BTN_LOGIN = '#SubmitLogin'

Cypress.Commands.add('realizarLogin', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('usuario'))
    cy.get(INPUT_SENHA).type(Cypress.env('senha'))
    cy.get(BTN_LOGIN).click()
})

Cypress.Commands.add('realizarLoginError', () => {
    cy.get(INPUT_EMAIL).type('treinamento_academia@teste.com')
    cy.get(INPUT_SENHA).type('!QAZ2rfv')
    cy.get(BTN_LOGIN).click()
})
Cypress.Commands.add('errorLogin', () => {
    cy.get('.alert').should('contain','Authentication failed.')
})
