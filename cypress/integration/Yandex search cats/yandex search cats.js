describe('Yandex', function () {
   it('search cats', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('котята');
        cy.get('.search2__button > .button').click();
        cy.contains('Картинки по запросу «котята»');
    })
})

