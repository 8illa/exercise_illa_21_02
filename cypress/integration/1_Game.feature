Feature: Invitation

  I want to create a game and invite user 2

  @focus
  Scenario: Inviting player 2
    Given I open testing page
    Then I see "ItsYourTurn.com" in the title
    And I log in as a user 1
    Then I create a new game of type “Stack4”
    And I invite user 2


