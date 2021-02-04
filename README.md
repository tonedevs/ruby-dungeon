# ![title](https://i.imgur.com/BN4JjwK.png)

## Overview

_Your quest has led you here, to the innermost depths of a decrepit and cursed mine tunnel. You seek the payload with which you can fulfill an unresolved promise that set you on this long journey. The crumbling railway tracks stretch forward to a central chamber, where a towering arachnid guards your goal. To defeat the bug, you must first complete the challenges put forth by the ancient guardians who await in the adjacent rooms._

**Ruby Dungeon** is a text-based exploration game with conventional RPG elements that is built to to show off the capabilities of React Router and Ruby on Rails.

### Features

#### Navigation

- The player uses the text-based interface to navigate the various dungeon rooms with React Router.
- If present, accessing a specific Link opens its corresponding lock. This opens up navigation options for less backtracking.

![map](https://i.imgur.com/RI03hzi.png)

#### Item Management

- Four key items must be present in the player's database to trigger a battle in the center room.
- Equipping an item sets its corresponding value from "false" to "true."

#### Final Battle

- Once the player has equipped all four necessary items, they may trigger the boss fight.

#### Game Over

- Trying to bypass or attack the bug without equipping all four items triggers a continue screen.
- The game is intended to be completed in a short amount of time; navigating away or logging out and returning to the game will reset the environment and item database.

#### Winning

- Defeating the bug gives the player one last key item. Using it in the final room triggers beating the game.

### Goals
- Convey the experience of exploration through an entirely text narrative and React Router.
- Effectively work with the capabilities of useState to build a player-game environment.
- Seamless interactions among player, database, and application.
- Retro styling.
- Kinda fun.

### Challenges
- Creatively working within the limitations of the given frameworks while also showing them off.
- Navigation/Router Link organization -- 10 distinct Routes are acessible from multiple components.

_Fully prepared, you go back to face the menacing bug. Once defeated, a ruby catches the torchlight. The rails have been debugged! You place the ruby into the back end of the dungeon. The the path opens before you._

## MVP

### Goals

Taking into consideration the time allotted to reach MVP, **Ruby Dungeon**'s goals are divided into three manageable outcomes:

- _Back-end server (**Ruby on Rails**) and relational database (**PostgreSQL**)._
- _Front-end player traversing with **React Router** and state manipulation with **React**._
- _CSS styling_


### Libraries and Dependencies

|    Library    | Description                                                                       |
| :-----------: | :-------------------------------------------------------------------------------- |
|     React     | _Front-end and DOM manipulation._                                                     |
| React Router  | _Player navigation._ |
| Ruby On Rails | _Back-end server handling._                                      |
|   PostgreSQL   | _Database manipulation._                                      |

### Client (Front End)

#### Wireframes

![desktop-landing](https://i.imgur.com/wkfpOqM.png)

![desktop-wireframe](https://i.imgur.com/BS8lHJK.png)

![inventory-detail](https://i.imgur.com/8m49Tja.png)

![mobile-wireframe](https://i.imgur.com/nMUN3mH.png)

#### Color Palette

![color-palette](https://i.imgur.com/6IhbWtY.png)
