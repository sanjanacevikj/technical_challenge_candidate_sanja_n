Feature: Products

  Scenario Outline: Add Item to Cart and Verify
    Given I navigate to the page: "Home"
    When I login as a "<user>" user
    Then I see text "<text>" on the page
    When I add a product to cart
    And click to open my cart
    Then correct item is added to cart with matching "<productTitle>"

    Examples:
      | user     | text       |  productTitle          |
      | Standard | Products   | Sauce Labs Bike Light  |