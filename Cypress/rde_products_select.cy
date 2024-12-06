describe('Automate collecting product links from the campaign page', () => {
    const campaignUrl = 'https://www.rde.ee/';
    const productsToSelect = 2;
    const productLinks = [];
    const SHORT_WAIT = 2000;
    const max = 2;

    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    it('Clicks on random product images to collect links', () => {
        cy.visit(campaignUrl);
        cy.wait(SHORT_WAIT);

        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
        cy.wait(SHORT_WAIT);

        // Добавление 10 продуктов в корзину
        // Добавление 10 продуктов в корзину
        cy.get('.product-list--grid .product').each(($el, index) => {
            if (index < 2) {
                cy.wrap($el)
                    .find('a[data-plugin="cartButton"]')  // Используйте CSS-селектор для поиска ссылки
                    .click({ force: true });

                cy.wait(SHORT_WAIT); // Ждем между кликами, чтобы запросы не блокировались
            }
        });

        cy.log('Collected Product Links:', productLinks);

      cy.get('a.js-cart-button[data-plugin="popoverTrigger"]')
            .click({ force: true });

           cy.get('a.btn.btn--secondary.btn--full[href="order/ee/"]')
            .click({ force: true });

            cy.get('input#users_email')
                .type('test@example.com');  // Введите нужный email
           // Заполнение поля для номера телефона
            cy.get('input[data-plugin="mask"]#users_mobile_phone')
                .type('+37212345678');  // Пример номера телефона

            // Заполнение поля для имени
            cy.get('input#users_name')
                .type('John');  // Пример имени

            // Заполнение поля для фамилии
            cy.get('input#users_last_name')
                .type('Doe');  // Пример фамилии

          cy.get('a.overlay[role="button"]').eq(2)
            .click({ force: true });


                  // Клик по первому элементу .nice-select
            // Клик по элементу с индексом 1 (второй элемент)
            cy.get('div.nice-select.form-control-select').eq(1)
                .click();  // Открыть список

            // Затем выбрать нужный элемент из списка
            cy.get('li[data-value="5"].option')
                .click();  // Клик по элементу "Swedbank internetipank"




            cy.get('#order-form-submit-button')
                .click({ force: true });

    });
});
