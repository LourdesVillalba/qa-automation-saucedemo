describe('Carrito - Sauce Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('Agregar un producto al carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').as('btnBackpack');
        cy.get('@btnBackpack').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]')
            .should('be.visible')
            .and('have.text', 'Remove');
        
        cy.get('.shopping_cart_badge').should('have.text', '1');
    });

    it('Agregar múltiples productos y verificar contador', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('.shopping_cart_badge').should('have.text', '3');
        
        cy.get('[data-test^="remove-"]').should('have.length', 3);
    });

    it('Eliminar un producto desde la página del carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should('have.length', 2);
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('.cart_item').should('have.length', 1);
        cy.get('.shopping_cart_badge').should('have.text', '1');
    });
});