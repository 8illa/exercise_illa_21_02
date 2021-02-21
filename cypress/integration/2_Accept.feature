Feature: Accepting a game

  I want to accept an invitation by a user 1

  @focus
  Scenario: Accepting the game
    Given I open testing page
    Then I see "ItsYourTurn.com" in the title
    And I log in as a user 2
    Then I accept thee game


