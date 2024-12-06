# Registration and Login Test with Cypress

This Cypress test automates the process of registering a new user, logging in, adding items to the shopping cart, placing an order, and then logging out. It also checks the navigation through different pages of the application.

## Test Steps

### Register
1. **Go to the registration page**:
   - Navigate to `http://localhost:3000/register`.
   ![Registration Page](https://github.com/user-attachments/assets/32b1f227-99d0-445d-be14-fce49371e018)

2. **Register a new user**:
   - Fill in the registration form with a username (`TestUser`), email (`testuser@example.com`), and password (`TestPassword123`).
   - Submit the registration form.
   ![Registration Form](https://github.com/user-attachments/assets/3b93d032-bd5a-4003-a2d4-dd93f343e49a)

### Log in
1. **Check that the user is redirected to the login page**:
   - After successful registration, the user should be redirected to the `/login` page.
   ![Login Page](https://github.com/user-attachments/assets/a228084b-a714-48da-9ff0-1d48abd4039e)

2. **Login with the newly created user**:
   - Fill in the login form with the registered username and password.
   - Submit the login form.
   ![Login Form](https://github.com/user-attachments/assets/98c3b820-a430-477d-8675-0e53591abe58)

3. **Check that the user is logged in and redirected to the home page**:
   - After successful login, the user should be redirected to the home page (`http://localhost:3000/`).
   ![Home Page](https://github.com/user-attachments/assets/bb84619e-cca6-43a1-9100-e02fa7ccdafe)

### Add To Cart
1. **Add items to the shopping cart**:
   - Add three products to the shopping cart by clicking the "Add to Cart" button three times.
   ![Add to Cart](https://github.com/user-attachments/assets/39e79ed7-600d-4078-97a1-74a47d4c99df)

2. **Go to the shopping cart page**:
   - Navigate to the shopping cart page (`http://localhost:3000/cart`).
   ![Shopping Cart](https://github.com/user-attachments/assets/780d5891-cb7c-4ef1-b92b-299c8337f32c)

### Order
1. **Place an order**:
   - Click the "Order" button to place an order.
   - Wait for 2 seconds and then click the "Cancel Payment" button.
   ![Order Placement](https://github.com/user-attachments/assets/21699cc1-cb1d-444d-9813-727c9ddf4d5a)

### Order History
1. **Navigate to the order history page**:
   - Go to the order history page (`http://localhost:3000/order-history`).
   ![Order History](https://github.com/user-attachments/assets/a9a7788f-cf66-47dd-8508-454b85ab63da)

### Log out
1. **Log out from the system**:
    - Click the "Log out" button.
    ![Logout Button](https://github.com/user-attachments/assets/202f379c-b900-46fc-aaa7-ee6037aa9ee1)

2. **Verify that the "Log in" button is visible**:
    - After logging out, verify that the "Log in" button is visible.
    ![Login Button](https://github.com/user-attachments/assets/9e6b6549-341d-4b60-9901-26d59f9aeeed)

## Test Matrix

| **Case**           | **Date**      | **Comment**                                                                                  | **PASS/FAIL** |
|--------------------|---------------|----------------------------------------------------------------------------------------------|---------------|
| Register           | 05.12.2024    | Worked without any issues                                                                   | PASS          |
| Log in             | 05.12.2024    | Worked without any issues                                                                   | PASS          |
| Add To Cart        | 05.12.2024    | Worked without any issues                                                                   | PASS          |
| Order              | 05.12.2024    | Checkout couldn't be done because payment opens in a new window and has only an imitation of itself | FAIL        |
| Order Cancel       | 05.12.2024    | Worked without any issues                                                                   | PASS          |
| Order History      | 05.12.2024    | Worked without any issues                                                                   | PASS          |
| Log out            | 05.12.2024    | Worked without any issues                                                                   | PASS          |
