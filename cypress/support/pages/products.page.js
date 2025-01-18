const LISTA_PRODUTOS = '.product_list'

Cypress.Commands.add('resultadoProdutos', () => {
    cy.get(LISTA_PRODUTOS).should('contain','Blouse')
})