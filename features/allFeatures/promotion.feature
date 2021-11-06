@smoke @regression
Feature: Promotion field quick check

  Scenario Outline: As a user, I can not submit incorrect format promotion

    Given I am on the home page of shoe store that is "https://rb-shoe-store.herokuapp.com/"
    Then I see website home page
    When I enter <code> as a Promotional Code
    When I submit Promotional Code
    Then I see error as Invalid code format

    Examples:
      | code        |
      | abc         |
      | 1233        |
      | adad231     |
      | abc-com     |
      | abc.com#com |
