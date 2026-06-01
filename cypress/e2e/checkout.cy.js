describe('Checkout - Sauce Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Completar checkout con datos válidos', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        
        cy.get('[data-test="checkout"]').scrollIntoView().click();
        
        cy.get('[data-test="firstName"]').type('Juan');
        cy.get('[data-test="lastName"]').type('Pérez');
        cy.get('[data-test="postalCode"]').type('5000');
        cy.get('[data-test="continue"]').click();
        
        cy.url().should('include', '/checkout-step-two.html');
        cy.get('[data-test="finish"]').scrollIntoView().click();
        
        cy.url().should('include', '/checkout-complete.html');
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    });

    it('Checkout sin completar campos obligatorios', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        
        cy.get('[data-test="continue"]').click();
        
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Error: First Name is required');
    });

});