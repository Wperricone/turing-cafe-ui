describe('Cafe Reservations home page view', () => {
  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/reservations', { fixture: 'reservationsData.json' }
  )
    cy.visit('http://localhost:3000')
});

  it('Should display all reservations', () => {
    cy.get('div.cards-container').children()
      .should('have.length', 2)
  });

});
