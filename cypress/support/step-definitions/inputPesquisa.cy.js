Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

When('pesquiso um item na home', () => {
    cy.pesquisaHome()
})

Then('o item pesquisado aparece em tela', () => {
    cy.resultadoProdutos()
})