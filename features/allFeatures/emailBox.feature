@smoke @regression
Feature: Email field quick check

  Scenario Outline: As a user, I can not submit incorrect format email

    Given I am on the home page of shoe store that is "https://rb-shoe-store.herokuapp.com/"
    Then I see website home page
    When I put <email> as email
    When I submit email address
    Then I see error as Invalid email format. Ex. name@example.com

    Examples:
      | email         |
      | abc           |
      | abc.com       |
      | #@#$@com.com  |
      | abc-@mail.com |
      | abc.com#com   |

