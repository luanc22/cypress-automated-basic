describe('home page', () => {
  it('app deve estar online', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app')
    cy.get('a');
  })
})