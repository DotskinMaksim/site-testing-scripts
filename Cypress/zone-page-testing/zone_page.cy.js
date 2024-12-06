describe('Google Search Cypress Tests', () => {

  before(() => {
    // Игнорируем ошибки `onLoad is not defined`
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('onLoad is not defined')) {
        return false; // Возвращаем false, чтобы предотвратить сбой теста
      }
      return true; // Пропускаем другие ошибки
    });


    // Переход на целевую страницу
    cy.visit('https://maksimdotskin22.thkit.ee/hirmumaja/');
    cy.reload(); // Перезагрузка страницы для надежности
  });

  it('Accept Cookies if prompted', () => {
    // Попытка найти и нажать кнопку принятия файлов cookie, если она отображается
    cy.get('body').then((body) => {
      if (body.find('#echo1').length > 0) {
        cy.get('#echo1').click();
      }
    });
  });

 // Проверка для неавторизованного пользователя
it('Displays welcome message for non-authenticated users', () => {
  cy.visit('https://maksimdotskin22.thkit.ee/hirmumaja/');
  cy.get('.tervitamine').should('contain.text', 'Tere tulemast hirmude majja!');
});

// Проверка для авторизованного пользователя
it('Displays personalized welcome message for authenticated users', () => {
  cy.setCookie('PHPSESSID', 'valid_session_id'); // Используйте корректный ID сессии
  cy.visit('https://maksimdotskin22.thkit.ee/hirmumaja/');
  cy.get('.tervitamine').should('contain.text', 'Tere tulemast hirmude majja,');
});

  it('Displays additional info section on click', () => {
  cy.visit('https://maksimdotskin22.thkit.ee/hirmumaja/');
  cy.get('a[href="index.php?info"]').click(); // Клик по ссылке "Rohkem info"
  cy.get('.rohkem-info').should('be.visible'); // Проверка, что секция видима
});

  it('Verify Form Submission Error Message', () => {
    // Переход на страницу логина
    cy.visit('https://maksimdotskin22.thkit.ee/hirmumaja/autoriseerimine/logiSisse.php');

    // Нажатие кнопки отправки формы без заполнения полей
    cy.get('#logiSisse').click();

    // Проверка отображения сообщения об ошибке
    cy.get('#vastus').should('be.visible');
  });

});