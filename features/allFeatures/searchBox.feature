@smoke @regression
Feature: Search Box quick check

  Scenario: As a user, I can search a shoe that store does not have

    Given I am on the home page of shoe store that is "https://rb-shoe-store.herokuapp.com/"
    When I select Acorn brand
    When I click Search button
    Then I see there is no shoe

  Scenario Outline: As a user, I can search a shoe that store have

    Given I am on the home page of shoe store that is "https://rb-shoe-store.herokuapp.com/"
    When I select <brand> brand
    When I click Search button
    Then I see there is <value> shoes
    Examples:
      | brand      | value |
      | Jimmy Choo | 12    |
      | Valentino  | 4     |
      | Miu Miu    | 2     |
      | Lanvin     | 6     |
