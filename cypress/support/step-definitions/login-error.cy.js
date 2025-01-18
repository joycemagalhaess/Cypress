Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

When('realizo login no portal com a senha errada', () => {
    cy.acessarLogin()
    cy.realizarLoginError()
})

Then('é exibido uma mensagem de error', () => {
    cy.errorLogin()
})