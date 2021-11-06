@home  @regression
Feature: Home page quick checking


@smoke
  Scenario: As a user, I can see all months that are visible on home page

    Given I am on the home page of shoe store that is "https://rb-shoe-store.herokuapp.com/"
    Then I see website home page
    And I see all months from January to December as options on the top
    And I see “All Shoes” as another option on the top


  Scenario: As a user, I can see search box on home page

    Given I am on the home page of shoe store that is "https://rb-shoe-store.herokuapp.com/"
    Then I see website home page
    Then I see search box is visible 


  Scenario: As a user, I can see email box on home page

    Given I am on the home page of shoe store that is "https://rb-shoe-store.herokuapp.com/"
    Then I see website home page
    Then I see email box is visible 


  Scenario: As a user, I can see promotion box on home page

    Given I am on the home page of shoe store that is "https://rb-shoe-store.herokuapp.com/"
    Then I see website home page
    Then I see promotion box is visible 

@smoke
  Scenario: As a user, I can navigate home page after click home link on the top left

    Given I am on the home page of shoe store that is "https://rb-shoe-store.herokuapp.com/"
    Then I see website home page
    When I click January tab
    And I click Home tab on the left top
    Then I see website home page


