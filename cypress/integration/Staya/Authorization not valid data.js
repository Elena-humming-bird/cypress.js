describe('Staya', function () {
   it('authorization not valid data', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('leinaslobodyanyuk@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('babasik');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})
