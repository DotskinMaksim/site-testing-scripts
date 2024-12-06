# Registration and Login Test with Cypress

This Cypress test automates the process of registering a new user, logging in, adding items to the shopping cart, placing an order, and then logging out. It also checks the navigation through different pages of the application.

## Test Steps

1. **Go to the registration page**:
   - Navigate to `http://localhost:3000/register`.
   - <img width="1275" alt="image" src="https://github.com/user-attachments/assets/3b93d032-bd5a-4003-a2d4-dd93f343e49a">


2. **Register a new user**:
   - Fill in the registration form with a username (`TestUser`), email (`testuser@example.com`), and password (`TestPassword123`).
   - Submit the registration form.

3. **Check that the user is redirected to the login page**:
   - After successful registration, the user should be redirected to the `/login` page.

4. **Login with the newly created user**:
   - Fill in the login form with the registered username and password.
   - Submit the login form.

5. **Check that the user is logged in and redirected to the home page**:
   - After successful login, the user should be redirected to the home page (`http://localhost:3000/`).

6. **Add items to the shopping cart**:
   - Add three products to the shopping cart by clicking the "Add to Cart" button three times.

7. **Go to the shopping cart page**:
   - Navigate to the shopping cart page (`http://localhost:3000/cart`).

8. **Place an order**:
   - Click the "Order" button to place an order.
   - Wait for 2 seconds and then click the "Cancel Payment" button.

9. **Navigate to the order history page**:
   - Go to the order history page (`http://localhost:3000/order-history`).

10. **Log out from the system**:
    - Click the "Log out" button.

11. **Verify that the "Log in" button is visible**:
    - After logging out, verify that the "Log in" button is visible.
    cy.get('a').contains('Logi sisse').should('be.visible').then(() => {
      cy.log('Pärast väljumist kuvatakse edukalt nupp "Logi sisse".');
    });
  });
});
