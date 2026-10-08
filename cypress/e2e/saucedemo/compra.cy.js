describe('Compra de produtos SauceDemo', () => {
  it('entra e adiciona um produto ao carrinho', () => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory.html');
    cy.contains('[data-test="inventory-item-name"]', 'Sauce Labs Backpack')
      .closest('[data-test="inventory-item"]')
      .find('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    cy.get('[data-test="title"]').should('have.text', 'Products');
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
  });
});