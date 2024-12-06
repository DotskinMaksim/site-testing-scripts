const appUrl = "http://localhost:3000";

describe('Registration and Login Test', () => {

  it('Register', () => {
    const username = 'TestUser';
    const email = 'testuser@example.com';
    const password = 'TestPassword123';

    // Navigate to the registration page
    cy.visit(`${appUrl}/register`);
    cy.log('Navigate to the registration page.');

    // Register a user
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('input[placeholder="Confirm Password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.log('Fill the form and submit registration details.');

  });
  it('Log in', () => {

    // Verify successful navigation to login page
    cy.url().should('include', '/login').then(() => {
      cy.log('Successfully navigated to the login page.');
    });

    // Login to the system
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.log('Fill the form and submit login details.');

    // Verify successful login and redirection to the home page
    cy.url().should('eq', `${appUrl}/`).then(() => {
      cy.log('Login successful, redirected to the home page.');
    });
  });

  it('Add To Cart', () => {
    // Add the first product to the cart
    cy.get('button').contains('Add to Cart').eq(0).should('be.visible').click();
    cy.log('First product added to the cart.');

    // Add the second product to the cart
    cy.get('button').contains('Add to Cart').eq(1).should('be.visible').click();
    cy.log('Second product added to the cart.');

    // Add the third product to the cart
    cy.get('button').contains('Add to Cart').eq(2).should('be.visible').click();
    cy.log('Third product added to the cart.');
  });

  it('Order', () => {
    // Visit the cart page
    cy.visit(`${appUrl}/cart`);
    cy.get('button').contains('Order').eq(0).should('be.visible').click();
    cy.log('Clicked "Order" button to proceed with the order.');

    // Wait for 2 seconds before the next action
    cy.wait(2000);
  });

  it('Order Cancel', () => {
    // Click on the cancel payment button
    cy.get('button').contains('Cancel Payment').eq(0).should('be.visible').click();
    cy.log('Clicked "Cancel Payment" button to cancel the payment.');

    // Wait for 2 seconds
    cy.wait(2000);
  });

  it('Order history', () => {
    // Navigate to the order history page
    cy.visit(`${appUrl}/order-history`);
    cy.url().should('eq', `${appUrl}/order-history`).then(() => {
      cy.log('Successfully navigated to the order history page.');
    });

    cy.wait(4000); // Wait for 4 seconds to load order history
  });

  it('Logs out', () => {
    // Click on the logout button
    cy.get('a').contains('Log Out').click();
    cy.log('Clicked "Log Out" button to log out of the system.');

    // Verify that the login button appears after logging out
    cy.get('a').contains('Log In').should('be.visible').then(() => {
      cy.log('Successfully logged out, "Log In" button is visible.');
    });
  });
});
