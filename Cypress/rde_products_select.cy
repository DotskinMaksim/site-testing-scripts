describe('Automate collecting product links from the campaign page', () => {
    const campaignUrl = 'https://www.rde.ee/';  // Kampaania URL
    const productsToSelect = 10;  // Määrame valitud toodete arvu
    const productLinks = [];  // Toote lingid, kuhu salvestame valitud tooted
    const wait = 2000;  // Ooteaeg iga toimingu vahel (ms)
    const email = "dotskin@gmail.com";  // Kasutaja e-posti aadress
    const firstName = "Maksim";  // Kasutaja eesnimi
    const lastName = "Dotskin";  // Kasutaja perekonnanimi
    const phone = +37255553943;  // Kasutaja telefoninumber

    beforeEach(() => {
        cy.viewport(1920, 1080);  // Määrame brauseri vaateakna suuruse
    });

    it('Clicks on random product images to collect links', () => {
        cy.visit(campaignUrl);  // Külastame kampaania lehte
        cy.wait(wait);  // Ootame, et leht laeks

        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();  // Aktiveerime küpsiste aktsepteerimise
        cy.wait(wait);  // Ootame küpsiste akna kadumist

        // Lisame 10 toodet ostukorvi
        cy.get('.product-list--grid .product').each(($el, index) => {
            if (index < productsToSelect) {  // Kui toote indeks on väiksem kui toote arv
                cy.wrap($el)
                    .find('a[data-plugin="cartButton"]')  // Otsime ostukorvi nuppu
                    .click({ force: true });  // Klikime ostukorvi nupule, kui see on olemas

                cy.wait(wait);  // Ootame, et järgmine klikk ei takistaks eelmise toimingu sooritamist
            }
        });

        cy.log('Collected Product Links:', productLinks);  // Logime kogutud toote lingid

        // Klikkime ostukorvi ikoonile
        cy.get('a.js-cart-button[data-plugin="popoverTrigger"]')
            .click({ force: true });

        // Klikkime nupule "Vormista tellimus"
        cy.get('a.btn.btn--secondary.btn--full[href="order/ee/"]')
            .click({ force: true });

        // Täidame emaili väljale
        cy.get('input#users_email')
            .type(email);  // Sisestame e-posti aadressi

        // Täidame telefoninumbri väljale
        cy.get('input[data-plugin="mask"]#users_mobile_phone')
            .type(phone);  // Sisestame telefoninumbri

        // Täidame eesnime väljale
        cy.get('input#users_name')
            .type(firstName);  // Sisestame eesnime

        // Täidame perekonnanime väljale
        cy.get('input#users_last_name')
            .type(lastName);  // Sisestame perekonnanime

        // Klikkime viimasele elementile, kui neid on mitu
        cy.get('a.overlay[role="button"]').then(($elements) => {
            // Klikkime viimasele leitud elemendile, kasutades indeksit $elements.length - 1
            cy.wrap($elements.eq($elements.length - 1)).click({ force: true });
        });

        // Klikkime valitud makseviisile
        cy.get('div.nice-select.form-control-select').eq(1)
            .click();  // Avame makseviiside valiku

        // Valime "Swedbank internetipank"
        cy.get('li[data-value="5"].option')
            .click();  // Klikkime Swedbank internetipank makseviisi

        // Esitame tellimuse vormi
        cy.get('#order-form-submit-button')
            .click({ force: true });  // Esitame tellimuse
    });
});
