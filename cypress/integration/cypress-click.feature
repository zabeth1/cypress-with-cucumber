Feature: Cypress click

    Scenario: Click and navigate
        Given I'm on the "/" page
        When I click on "Querying"
        Then I should have "querying" in the URL
