/*eslint-disable */
describe('My First Test', function() {
  it('Visits the home page', function() {
    cy.visit('http://localhost:3000')
  })

  it('Visits Article 2', function() {
    cy.visit('http://localhost:3000')
    cy.get('#article2-link').click()
    cy.url().should('include', '/article2')
  })

  it('Visits Ranking page', function() {
    cy.visit('http://localhost:3000')
    cy.get('#article5-link').click()
    cy.url().should('include', '/article5')
    cy.get('#ranking-link').click()
  })
  
  it('Fills out form and submits', function() {
    cy.visit('http://localhost:3000')
    cy.get('#article5-link').click()
    cy.get('#ranking-link').click()
    cy.url().should('include', '/ranking')
    cy.get('#article-1').type('3')
    cy.get('#article-2').type('1')
    cy.get('#article-3').type('4')
    cy.get('#article-4').type('2')
    cy.get('#article-5').type('5')
    cy.get('#submit-button').click()
  })
})