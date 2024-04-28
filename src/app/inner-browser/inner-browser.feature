Feature: Kernia On-Line site
    A window that allows the player to view and process social media posts 

  Background:
    Given a specific day in-game
    And a set of posts made on that day

  Scenario: Player opens the browser
    When a player opens the browser
    Then all posts made on that day should be visible

  Scenario Outline: Player interacts with post
    Given a post that has alignment <state> and magnitude <magnitude>
    And game phase is 2
    And starting state total of 0
    And starting passive total of 8
    And starting liberation total of 2
    When a player clicks <action>
    Then the post should stand out less visually
    And phase 2 state alignment total should be <stateTotal>
    And phase 2 passive alignment total should be <passiveTotal>
    And phase 2 liberation alignment total should be <liberationTotal>

    Examples:
      | alignment  | magnitude | action    | stateTotal | passiveTotal | liberationTotal |
      | state      |         1 | propagate |          1 |            8 |               2 |
      | state      |         1 | censor    |          0 |            8 |               3 |
      | state      |         3 | ignore    |        1.5 |            8 |               2 |
      | liberation |         2 | censor    |          2 |            8 |               2 |
      | liberation |         3 | propagate |          0 |            8 |               5 |
      | liberation |         3 | ignore    |          0 |            8 |             3.5 |
      | passive    |         1 | propagate |          0 |            9 |               2 |
      | passive    |         2 | censor    |          0 |            8 |               2 |
      | passive    |         3 | ignore    |          0 |          1.5 |               2 |

  Scenario Outline: Phase 1 ends
    Given game phase is 1
    And player ends with most points in <alignment>
    Then <event> is triggered

    Examples:
      | alignment  | event |
      | state      | E1S   |
      | passive    | E1P   |
      | liberation | E1L   |

  Scenario: A player's end of phase totals have a tie
    Given the player ends the phase with a tie in both liberation and state alignments
    Then the passive event is triggered for that phase

  Scenario Outline: A player's end of phase totals have a tie
    Given the player ends the phase with a tie in <alignment> and passive
    Then the <event> is triggered for that phase

    Examples:
      | alignment | event      |
      | state     | state      |
      | libration | liberation |
