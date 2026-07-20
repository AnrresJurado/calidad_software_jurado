// cypress/e2e/01-auth-rutas-protegidas.cy.ts
import { uniqueEmail, uniqueUsername } from '../support/utils'

describe('Registro', () => {
  it('permite crear una cuenta nueva y redirige al home', () => {
    const username = uniqueUsername()
    const email = uniqueEmail()

    cy.visit('/register')
    cy.get('#username').type(username)
    cy.get('#email').type(email)
    cy.get('#password').type('secret123')
    cy.contains('button', 'Registrarme').click()

    cy.location('pathname').should('eq', '/')
  })
})

describe('Login', () => {
  let username: string
  let password: string

  before(() => {
    username = uniqueUsername()
    password = 'secret123'
    cy.apiRegister(username, uniqueEmail(), password)
  })

  it('permite iniciar sesión con credenciales válidas', () => {
    cy.visit('/login')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.contains('button', 'Ingresar').click()

    cy.location('pathname').should('eq', '/')
  })