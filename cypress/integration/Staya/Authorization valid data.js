describe('Staya', function () {
   it('authorization valid data', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('leinaslobodyanyuk@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('babasikA1');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
    })
})

