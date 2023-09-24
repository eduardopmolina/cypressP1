# cypressP1
TeatCase
TestCase for Test

TODO: Make some calls more readable using Ailiases.

TODO: Validation on feilds. Use Then to ensure async does not take over.

TODO: Integrate to CI. Eg. Drone, CricleCI, Jenkins etc.

TODO: Make data Data Driven.

TODO: Make pwd secret.

TODO: Ask for Cypress property to be used. This would help in reliability and readability & also for creating function to cut down on typing.

TODO: Integrat TestCase, Test(s), Steps, Expected Results, Actual Results, Description, Pass/Fail.

TODO: If FAIL then also integrate to Defect Mgmt System. eg. Jira.

TODO: Maybe make BD Cucumber like driven.

TODO: Maybe Dockerize.

TODO: Deal with stability of web app.

TODO: Maybe use cy.session.

TODO: Lots more stuff.

Overview This assessment is intended to check your ability to read/interpret a test case and create some automation around it. Please perform the following items given scenario described in the "Test Case" below, then either host it on your GitHub account and give us the reference link or zip all files up and send them through email. 1. Write an automated test based on the test case below (you may use any language/tool you want) 2. Make a recommendation on an API test that you might make for this web page. Test Case Test Description: Validate that an order can be checkout( Do not Place Order for this Demo). Pre-requisites: Create an account in YL.(manual)

Test Steps: 1. Open browser to https://www.youngliving.com/us/en 2. Login (using the credentials you create manual) 3. Add any item into shopping cart (look for Search) 4. Click to view shopping cart 5. Click checkout 6. Click on Continue 7. Click on Continue Without Sponsor 8. Fill out all the fields under Shipping Address section (all the required fields) 9. Click Continue 10. If Verify Address pop up is present Select any(Original or Suggestions). 11. Click on close button for Verify Address pop up if it is present 12. Select a shipping Method (you can select address check box 13. Select and fill out Payment Method (Credit Card) 14. Click on Check Box “By checking this box I agree to the Terms and Conditions found here.” 13. DO NOT SUBMIT ORDER. This test is done.

Expected Result: Verify that you item to the cart was successful Compare in the viewcart page and item price matches the price showed under Order Summary Compare in the Checkout View that item price matches the price showed under Order Summary Verify Shipping Address was Verified Verify your payment was added.
