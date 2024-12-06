describe('Automate collecting product links from the campaign page', () => {
    const campaignUrl = 'https://www.rde.ee/';
    const productsToSelect = 5;
    const productLinks = [];
    const SHORT_WAIT = 10000;
    const max = 10;

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
            if (index < 10) {
                cy.wrap($el)
                    .find('a[data-plugin="cartButton"]')  // Используйте CSS-селектор для поиска ссылки
                    .click({ force: true });

                cy.wait(SHORT_WAIT); // Ждем между кликами, чтобы запросы не блокировались
            }
        });


        for (let i = 1; i <= productsToSelect; i++) {
            const randomIndex = Math.floor(Math.random() * max) + 1;
            // Изменен селектор на соответствующий структуре HTML

            cy.get(`.product-list--grid:nth-child(${randomIndex}) .item-img-block > img`)
                .click();

            // Получение текущего URL
            cy.url().then(currentUrl => {
                productLinks.push(currentUrl);
            });

            // Возвращаемся на страницу кампании
            cy.visit(campaignUrl);
            cy.wait(SHORT_WAIT);
        }
        cy.log('Collected Product Links:', productLinks);

        // Пройдем по собранным ссылкам и добавим товары в корзину
        cy.wrap(productLinks).each(link => {
            cy.visit(link);
            cy.contains('Aseta korvi').click(); // 'Aseta korvi' — это кнопка добавления в корзину
            cy.wait(SHORT_WAIT);
        });

        // Переходим в корзину
        cy.visit('https://arvutitark.ee/ostukorv');
        cy.wait(10000);

        // Оформление заказа
        cy.contains('Ostan külalisena').click();
        cy.wait(5000);

        cy.scrollTo('bottom');

        cy.get('input[name="billing.firstName"]').type('test');
        cy.get('input[name="billing.lastName"]').type('test');
        cy.get('input[name="billing.phone"]').type('12345678');
        cy.get('input[name="billing.email"]').type('test@gmail.com');

        cy.get('span.check').first().click();

        cy.scrollTo('top');
        cy.contains('Arvutitark esindus').click();

        cy.wait(5000);

        cy.contains('Järveotsa tee 50c, 13520 Tallinn').click();

        cy.wait(2000);

        cy.contains('span', 'Nõustun Arvutitark OÜ e-poe').parent().find('input[type="checkbox"]').check({ force: true });

        cy.scrollTo('bottom');
        cy.contains('Vormistan tellimuse').click();
    });
});
