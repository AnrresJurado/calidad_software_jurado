// cypress/e2e/02-crud-categorias.cy.ts
import { uniqueEmail, uniqueName, uniqueUsername } from '../support/utils'

describe('CRUD de Categorías', () => {
  let categoryId: string | undefined

  beforeEach(() => {
    categoryId = undefined
    cy.intercept('POST', '**/categories').as('createCategory')
    cy.loginByApi(uniqueUsername(), uniqueEmail(), 'secret123', '/categorias')
  })

  afterEach(() => {
    // No hay endpoint de reset: se borra por API lo que haya quedado creado.
    if (categoryId) cy.apiDeleteCategory(categoryId)
  })