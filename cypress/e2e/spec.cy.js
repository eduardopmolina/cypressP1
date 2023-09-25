// 1. Write an automated test based on the test case below (you may use any language/tool you want)

describe('Test Case', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.fixture('myData').then(function (data) {
      globalThis.data = data
    })
  })

  // 2. Login (using the credentials you create manual)
  context("Logon section (preexisting creds) ", () => {
    it('Test', () => {
      cy.contains('Sign In').click()
      cy.get('#loginUsername').type(data.email, { force: true }).should('have.value', data.email)
      cy.get('#continue-btn').click()
      cy.get('#loginPassword').type(data.pwd, { force: true }).should('have.value', data.pwd)
      cy.get('#login-btn').click()
      cy.get('[index="1"] > .modal-dialog > .modal-content > [vo-load-translations=""] > [translate-namespace="my-imports-dialog"] > .newAddressModal > .modal-footer > .right > .button-cta').click()
      cy.get("button[class=button-cta]").click()
      cy.get('#menu-user-name-id').trigger('mouseover', { multiple: true })
    })
    context("Process Steps 3 to 13.", () => {
      it('Test', () => {
        // 3. Add any item into shopping cart (look for Search)
        cy.get("button[class=button-cta]").click()
        cy.get('#Shop-nav-link').click()
        cy.get(':nth-child(4) > .row > ul > :nth-child(1) > a').click()
        // 4. Click to view shopping cart
        cy.get('vo-view-cart-link > .right').click()
        // 5. Click checkout
        cy.get('[ng-show="$ctrl.shouldShowCheckoutButton()"]').click()
        // 6. Click on Continue 
        // 10. If Verify Address pop up is present Select any(Original or Suggestions).
        // 11. Click on close button for Verify Address pop up if it is present
        // 12. Select a shipping Method (you can select address check box 
        // 13. Select and fill out Payment Method (Credit Card)
        cy.get('#FedEx\ International\ Priority\ \$77\.52\ \(2\ -\ 4\ business\ days\) > .ui-select-choices-row-inner').click()
        cy.get('[ui-view=""] > .button-group > .button-cta').click()
        cy.get('[ng-click="$ctrl.addPayment(payment.paymentMethodInfo, payment.currency)"]').click()
        cy.get('.modal-body > :nth-child(2) > [ng-keydown="onKeyDown($event)"] > .ui-select-match > .btn > #selected-text')
        cy.get('#cardHolderName').type("Ed")
        cy.get('#cardNumber').type("12345")
        cy.get('#cvv').type("123")
        cy.get('.col-sm-4 > [ng-keydown="onKeyDown($event)"] > .ui-select-match > .btn > #selected-text').type("Sep")
        cy.get('.col-sm-3 > [ng-keydown="onKeyDown($event)"] > .ui-select-match > .btn > #selected-text').type("2023")
        cy.get('[name="street1"] > .form-group > #billaddress1').type("1 main Street")
        cy.get('#billcity').type("Santiago")
  
        //test
  
      })
    })
    
  })
})


