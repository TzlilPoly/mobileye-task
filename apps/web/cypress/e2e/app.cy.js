const titles = [
    "status",
    "user",
    "group",
    "submitted date",
    "completed date",
    "cli command",
    "logs",
]

describe('visit main route', () => {
    it('should show all job details upon click on job name', () => {
        cy.visit('http://localhost:5173')
        cy.get('[data-testid="container--4d4d0e3c-69e3-4b9d-9d5e-d3e25a0813ab"]').click()

        titles.forEach(title => cy.get(`[data-testid="${title}"]`).contains(title))

    })
})