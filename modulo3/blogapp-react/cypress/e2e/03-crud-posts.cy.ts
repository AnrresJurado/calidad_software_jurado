// cypress/e2e/03-crud-posts.cy.ts
import { uniqueEmail, uniqueName, uniqueUsername } from '../support/utils'

describe('CRUD de Posts', () => {
  let categoryId: string
  let categoryName: string
  let postId: string | undefined

  beforeEach(() => {
    postId = undefined
    categoryName = uniqueName('Categoría de posts')
    cy.apiCreateCategory(categoryName).then((id) => {
      categoryId = id
    })
    cy.intercept('POST', '**/posts').as('createPost')
    cy.loginByApi(uniqueUsername(), uniqueEmail(), 'secret123', '/posts')
  })

  afterEach(() => {
    // Igual que en categorías: sin reset de base, se limpia por API en cada test.
    if (postId) cy.apiDeletePost(postId)
    if (categoryId) cy.apiDeleteCategory(categoryId)
  })