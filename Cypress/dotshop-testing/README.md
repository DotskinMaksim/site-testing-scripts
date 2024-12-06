# Registration and Login Test with Cypress

This Cypress test automates the process of registering a new user, logging in, adding items to the shopping cart, placing an order, and then logging out. It also checks the navigation through different pages of the application.

## Test Steps

1. **Go to the registration page**:
   - Navigate to `http://localhost:3000/register`.
<img width="1277" alt="image" src="https://github.com/user-attachments/assets/32b1f227-99d0-445d-be14-fce49371e018">


2. **Register a new user**:
   - Fill in the registration form with a username (`TestUser`), email (`testuser@example.com`), and password (`TestPassword123`).
   - Submit the registration form.
   -  <img width="1275" alt="image" src="https://github.com/user-attachments/assets/3b93d032-bd5a-4003-a2d4-dd93f343e49a">


3. **Check that the user is redirected to the login page**:
   - After successful registration, the user should be redirected to the `/login` page.
     <img width="1285" alt="image" src="https://github.com/user-attachments/assets/a228084b-a714-48da-9ff0-1d48abd4039e">


4. **Login with the newly created user**:
   - Fill in the login form with the registered username and password.
   - Submit the login form.
   - <img width="1275" alt="image" src="https://github.com/user-attachments/assets/98c3b820-a430-477d-8675-0e53591abe58">


5. **Check that the user is logged in and redirected to the home page**:
   - After successful login, the user should be redirected to the home page (`http://localhost:3000/`).
   - <img width="1281" alt="image" src="https://github.com/user-attachments/assets/bb84619e-cca6-43a1-9100-e02fa7ccdafe">


6. **Add items to the shopping cart**:
   - Add three products to the shopping cart by clicking the "Add to Cart" button three times.
   - <img width="1280" alt="image" src="https://github.com/user-attachments/assets/39e79ed7-600d-4078-97a1-74a47d4c99df">


7. **Go to the shopping cart page**:
   - Navigate to the shopping cart page (`http://localhost:3000/cart`).
   - <img width="1280" alt="image" src="https://github.com/user-attachments/assets/780d5891-cb7c-4ef1-b92b-299c8337f32c">


8. **Place an order**:
   - Click the "Order" button to place an order.
   - Wait for 2 seconds and then click the "Cancel Payment" button.
   - <img width="1280" alt="image" src="https://github.com/user-attachments/assets/21699cc1-cb1d-444d-9813-727c9ddf4d5a">


9. **Navigate to the order history page**:
   - Go to the order history page (`http://localhost:3000/order-history`).
   - <img width="1280" alt="image" src="https://github.com/user-attachments/assets/a9a7788f-cf66-47dd-8508-454b85ab63da">


10. **Log out from the system**:
    - Click the "Log out" button.
    - <img width="1283" alt="image" src="https://github.com/user-attachments/assets/202f379c-b900-46fc-aaa7-ee6037aa9ee1">


11. **Verify that the "Log in" button is visible**:
    - After logging out, verify that the "Log in" button is visible.
   <img width="1287" alt="image" src="https://github.com/user-attachments/assets/9e6b6549-341d-4b60-9901-26d59f9aeeed">

## Test Matrix


| **Case**          | **Date**       | **Comment**                                                                                  | **PASS/FAIL** |
|--------------------|----------------|----------------------------------------------------------------------------------------------|---------------|
| Register           | 05.12.2024    | Worked without any issues                                                                   | PASS          |
| Login              |  05.12.2024    | Worked without any issues                                                                   | PASS          |
| Add to cart        |  05.12.2024    | Worked without any issues                                                                   | PASS          |
| Order           |  05.12.2024    | Checkout couldn't be done because of payment opens in a new window and has only an imitation of itself| FAIL    |
| Order cancel    |  05.12.2024    | Worked without any issues                                                                |  PASS      |
| Order hystory           |  05.12.2024    | Worked without any issues                | PASS          |
| Log out          |  05.12.2024    | Worked without any issues                      | PASS          |
