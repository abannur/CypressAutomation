Feature: End to End ecommerce validation

    application regression (what for this application is)
    @Regression
    Scenario: Ecommerce product delivery
    Given I open the ecommerce website
    When I add item to cart
    And validate the total price
    Then select the country submit and verify success messages

    @Smoke
    Scenario: Filling the form to shop products
    Given I open the ecommerce website
    When I fill the form details
    |name | gender |
    |Anita | Femele | 
    Then validate the form behavior
    And Select the shop page
