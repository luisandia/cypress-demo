/// <reference types="Cypress" />
describe('Traversing DOM elements in Cypress', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true });
  });

  //Get the child elements
  it('children() to get the children of DOM elements', () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us');
  });

  //Get the closest elements
  it('closest() to validate the closest ancestor DOM element', () => {
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group'); // in assertion of class, no need to include period(.) in class name
  });

  // Get the element based on index (ul>li)
  it('eq() to retrieve a specific element based on index', () => {
    cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk');
  });

  // Get the element using filter (works like children())
  it('filter() to retrieve DOM elements that match a specific selector', () => {
    cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1');
  });
  // Get the number of links in pagination
  it('find() to retrieve DOM elements of a given selector', () => {
    cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7);
  });

  // Get the first result in table data
  it('first() to retrieve the first DOM element within elements ', () => {
    cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy');
  });

  // Get the last result in table data
  it('last() to retrieve the last DOM element within elements', () => {
    cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott');
  });

  // Get the remaining number
  it('nextAll() to get all of the next sibling DOM elements within elements', () => {
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', 3);
  });
  // Get the remaining number until index 3 (id#sugar)
  it('nextUntil() to get all of the next sibling DOM elements within elements until another element', () => {
    cy.get('.traversal-drinks-list').contains('Coffee').nextUntil('#sugar').should('have.length', 3); //index 3
  });

  // Select buttons without a class of disabled
  it('not() to remove DOM element(s) from the set of elements', () => {
    cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled');
  });

  // Get the Parent Tag ex. H1 <span>. H1 is the parent tag that contains "Lorem ipsum"
  it('parent() To get parent DOM element of elements', () => {
    cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet');
  });

  // Get the Parent(s) Tag is shows all the parents tag not just 1 tag ahead.
  it('parents() to get parents DOM element of elements', () => {
    cy.get('.traversal-cite').parents().should('match', 'blockquote');
  });

  //Get the prev elements that contains Espresso
  it('prev() to get the previous sibling DOM element within elements', () => {
    cy.get('#sugar').prev().contains('Espresso');
  });

  //Get all siblings elements within parent element
  it('prevAll() to get all previous sibling DOM elements within elements', () => {
    cy.get('.sales').prevAll().should('have.length', 2);
  });

  //Get all the prev elements until set id
  it('prevUntil() to get all previous sibling DOM elements within elements until other element', () => {
    cy.get('#veggie').prevUntil('#fruits').should('have.length', 5);
  });

  //Get all the siblings of active button
  it('siblings() To get all sibling DOM elements of elements', () => {
    cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3);
  });
});
