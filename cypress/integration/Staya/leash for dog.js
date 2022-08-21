describe('Staya', function () {
   it('leash', function () {
        cy.visit('https://staya.dog/');
       cy.get('[href="/catalog/dogs/lsh"] > .category-link__canvas-wrapper > .category-link__canvas').click();
       cy.get(':nth-child(3) > :nth-child(2) > .product-item__cover > .product_preview_images > :nth-child(2) > .picture-wp > .picture-wp__img').click();
       cy.get('.s-select--caption').click();
       cy.get('.s-select--option_list > :nth-child(1)').click();
       cy.get('.block-payment__button').click();
       cy.contains('Корзина');
       cy.get('.cart-modal__actions > .s-button > .s-button__content').click()
       cy.contains('Оформление заказа');
    })
})

