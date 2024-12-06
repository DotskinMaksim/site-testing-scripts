const appUrl = "http://localhost:3000";

describe('Registratsiooni ja sisselogimise test', () => {
  it('Registreerib uue kasutaja ja logib sisse', () => {
    const username = 'TestUser';
    const email = 'testuser@example.com';
    const password = 'TestPassword123';


    // Pöördumine registreerimislehele
    cy.visit(`${appUrl}/register`);
    cy.log('Minge registreerimislehele');
    
    
    
    //REGISTER
    // Kasutaja registreerimine
    cy.get('input[placeholder="Kasutajanimi"]').type(username);
    cy.get('input[placeholder="E-post"]').type(email);
    cy.get('input[placeholder="Parool"]').type(password);
    cy.get('input[placeholder="Kinnita parool"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.log('Täitke vorm ja saatke oma registreerimisandmed.');

    // Kontrollige, et õnnestus minna sisselogimislehele
    cy.url().should('include', '/login').then(() => {
      cy.log('Sisselogimislehele navigeerimine õnnestus.');
    });

    //LOGIN
    // Sisselogimine süsteemi
    cy.get('input[placeholder="Kasutajanimi"]').type(username);
    cy.get('input[placeholder="Parool"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.log('Täitke vorm ja esitage oma sisselogimisandmed');

    // Kontrollige, et õnnestus sisse logida ja suunati avalehele
    cy.url().should('eq', `${appUrl}/`).then(() => {
      cy.log('Sisselogimine õnnestus, suunati avalehele.');
    });
  //ADD TO CART
    // Esimese toote lisamine ostukorvi
    cy.get('button').contains('Lisa ostukorvi').eq(0).should('be.visible').click();
    cy.log('Esimene toode lisatud ostukorvi.');

    // Teise toote lisamine ostukorvi
    cy.get('button').contains('Lisa ostukorvi').eq(0).should('be.visible').click();
    cy.log('Teine toode lisatud ostukorvi.');

    // Kolmanda toote lisamine ostukorvi
    cy.get('button').contains('Lisa ostukorvi').eq(0).should('be.visible').click();
    cy.log('Kolmas toode lisatud ostukorvi.');
  
    
    //ORDER
    // Külastamine ostukorvi lehele
    cy.visit(`${appUrl}/cart`);
    cy.get('button').contains('Telli').eq(0).should('be.visible').click();
    cy.log('Tellimuse vormistamiseks vajutatakse nuppu "Telli".');
    
    
    //ORDER CANCEL
    // Ootame 2 sekundit enne järgmise toimingu tegemist
    cy.wait(2000);
    cy.get('button').contains('Tühista makse').eq(0).should('be.visible').click();
    cy.log('Makse tühistamiseks vajutati nuppu "Tühista makse".');

    // Ootame veel 2 sekundit
    cy.wait(2000);
  
    //ORDER HISTORY
    // Külastamine tellimuste ajaloo lehele
    cy.visit(`${appUrl}/order-history`);
    cy.url().should('eq', `${appUrl}/order-history`).then(() => {
      cy.log('Tellimuste ajaloo lehele navigeerimine õnnestus.');
    });

    cy.wait(2000);

    // LOG OUT
    cy.get('a').contains('Logi välja').click();
    cy.log('Süsteemist väljalogimiseks vajutati nuppu "Logi välja".');

    // Kontrollige, et pärast väljumist kuvatakse nupp "Logi sisse"
    cy.get('a').contains('Logi sisse').should('be.visible').then(() => {
      cy.log('Pärast väljumist kuvatakse edukalt nupp "Logi sisse".');
    });
  });
});
