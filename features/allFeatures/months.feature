@smoke @regression
Feature: Months inventories quick check

  Scenario Outline: As a user, I can see all shoes correctly in specific  month

    Given I am on the home page of shoe store that is "https://rb-shoe-store.herokuapp.com/"
    Then I see website home page
    When I click <month> month
    Then I see there is <value> shoes

    Examples:
      | month     | value |
      | January   | 10    |
      | March     | 4     |
      | August    | 4     |
      | December  | 0     |
      | All Shoes | 50    |


