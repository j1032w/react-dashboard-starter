const shortWaitingTime = 1000;
const longWaitingTime = 2000;

describe('das-ui', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(longWaitingTime);
  });


  afterEach(() => {
    //reset
    cy.get('#dashboardToolbar').get('#resetBtn').click();
    cy.get('.react-grid-item').should('have.length', 4);
  });


  it('should displays default widgets', () => {
    cy.get('.react-grid-item').should('have.length', 4)
    //cy.wait(shortWaitingTime);


    //close widget
    cy.get('.react-grid-item').eq(1).find('#closeBtn').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(shortWaitingTime);
    cy.get('.react-grid-item').eq(1).find('#closeBtn').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(shortWaitingTime);
    cy.get('.react-grid-item').eq(1).find('#closeBtn').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(shortWaitingTime);
    cy.get('.react-grid-item').should('have.length', 1)
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(shortWaitingTime);

    // flip
    cy.get('.react-grid-item').eq(0).get('#flipBtn').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(shortWaitingTime);
    cy.get('.react-grid-item').eq(0).get('#flipBtn').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(shortWaitingTime);


    // resize
    // cy.get('.react-grid-item').resize(100, 100);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    // cy.wait(shortWaitingTime);


  })

});
