const BTN_ACESSA_LOGIN = '.login'
const LOGIN_SUCESS = '.account'
const INPUT_PESQUISA = '#search_query_top'
const BTN_PESQUISA = '#searchbox > .btn'


Cypress.Commands.add('acessarLogin', () => {
    cy.get(BTN_ACESSA_LOGIN).click()
})

Cypress.Commands.add('loginEfetuado', () => {
    cy.get(LOGIN_SUCESS).should('be.visible')
})

Cypress.Commands.add('pesquisaHome', () => {
    cy.get(INPUT_PESQUISA).type('Blouse')
    cy.get(BTN_PESQUISA).click()
})


