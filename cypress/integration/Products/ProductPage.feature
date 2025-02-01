Feature: Products

  Scenario Outline: Sort Items in Descending Order
    Given I navigate to the page: "Home"
    When I login as a "<user>" user
    Then I see text "<text>" on the page
    When I click on descending option in filter
    Then items are displaying in descending order

    Examples:
      | user     | text       |
      | Standard | Products   |