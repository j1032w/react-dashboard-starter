


describe('Dashboard demo', () => {
  const shortWaitingTime = 1000;
  const longWaitingTime = 2000;

    before(() => {
      cy.visit('http://localhost:3000/');
      cy.wait(longWaitingTime);
    });



    it('displays default widgets', () => {
      // cy.get('.react-grid-item').should('have.length', 4)
      // cy.wait(shortWaitingTime);
      //
      //
      //
      //close widget
      const secondWidget = cy.get('.react-grid-item').eq(1).find('#closeBtn').click();
      cy.wait(shortWaitingTime);
      const secondWidget = cy.get('.react-grid-item').eq(1).find('#closeBtn').click();
      cy.wait(shortWaitingTime);
      const secondWidget = cy.get('.react-grid-item').eq(1).find('#closeBtn').click();
      cy.get('.react-grid-item').should('have.length', 1)



      // resize
      cy.get('.react-grid-item').resize(200, 200);
      cy.wait(shortWaitingTime);

      // flip
      cy.get('.react-grid-item').eq(0).get('#flipBtn').click();
      cy.wait(shortWaitingTime);





      //reset
      cy.get('#dashboardToolbar').get('#resetBtn').click();
      cy.get('.react-grid-item').should('have.length', 4)

    })


  }
)

