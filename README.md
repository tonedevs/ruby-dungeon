# ![title](https://i.imgur.com/BN4JjwK.png)

- [Overview](#overview)
- [Gameplay](#gameplay)
  - [Navigation](#navigation)
  - [Challenges](#challenges)
  - [Item Management](#item-management)
  - [Extra Rooms](#extra-rooms-post-mvp)
  - [Final Battle](#final-battle)
  - [Game Over](#game-over)
  - [Winning](#winning)
- [MVP](#mvp)
  - [Goals](#goals)
  - [CRUD](#crud)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Color Palette](#color-palette)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

## Overview

_Your quest has led you here, to the innermost depths of a decrepit and cursed mine tunnel. You seek the payload with which you can fulfill an unresolved promise that set you on this long journey. The crumbling railway tracks stretch forward to a central chamber, where a towering arachnid guards your goal. To defeat the bug, you must first complete the challenges put forth by the ancient guardians who await in the adjacent rooms._

**Ruby Dungeon** is a text-based exploration game with conventional RPG elements that is built to to show off the capabilities of React Router and Ruby on Rails.

### Features

#### Navigation

- At initialization, player lives (int: 3) and door locks (bool: true) are set in State.
- The player uses the text-based interface to navigate the various dungeon rooms with React Router.
- Accessing a specific Link opens its corresponding lock (true -> false). This opens up navigation options for less backtracking.

![map](https://i.imgur.com/RI03hzi.png)

#### Challenges

- All dungeon rooms are represented by a Route with a unique text body with conditional rendering.
- In rooms 1-6 the player triggers a dev challenge (**MVP**: multiple choice, **Post-MVP**: Ruby algorithm testing with rspec).
- Answering the question correctly adds a specific item to the player's database.

#### Item Management

- Four key items must be present in the player's database to trigger a battle in the center room.
- Two optional consumable items may also be acquired through completing challenges.
- Equipping an item sets its corresponding value from "false" to "true."
- Using a consumable item deletes it from the player's database.

|     Room     |    Item    | Item Attribute | Item Effect | 
| :----------: | :--------: |    :---:       | :---:       | 
|      1       |   Helmet   |    Equippable  |        | 
|      2       |   Hotfix    |    Consumable  |   +1 Life if Lives < 3 | 
|      3       |   Sword    |   Equippable   |          | 
|      4       |   Spellbook |   Equippable  |         | 
|      5       |   Patch     |   Consumable   |   +1 Life if Lives < 3 |
|      6       |   Shield   |   Equippable   |         |

#### Extra Rooms (Post-MVP)

- The room on the far left gives the player an option to write on the wall for other players of the game to see.
- The room on the far right can be used for practice. The player is quizzed without repercussions for wrong answers.

#### Final Battle

- Once the player has set the "equipped" attribute to "true" on all four necessary items, they may trigger the boss fight.
- The player must now answer numerous challenge questions under the pressure of a timer. A wrong answer subtracts one life. (**Post-MVP**)

#### Game Over

- If player lives reach 0, the player returns to the entrance. Inventory, max health, and lock states are not reset.
- The game is intended to be completed in a short amount of time; navigating away or logging out and returning to the game will reset the environment and item database.

#### Winning

- Defeating the bug gives the player one last key item. Using it in the final room triggers beating the game.
- Once a player is in posession of the ruby, it is the only item that is not deleted from their table when starting a new game. With it, all doors are unlocked and the questions on subsequent playthroughs are of a higher difficulty (**Post-MVP**).

### Goals
- Convey the experience of exploration through an entirely text narrative and React Router.
- Effectively work with the capabilities of useState to build a player-game environment.
- Seamless interactions among player, database, and application.
- Retro styling.
- Kinda fun.

### Challenges
- Creatively working within the limitations of the given frameworks while also showing them off.
- Navigation/Router Link organization -- 10 distinct Routes are acessible from multiple components.
- Asking for help.

_Fully prepared, you go back to face the menacing bug. Once defeated, a ruby catches the torchlight. The rails have been debugged! You place the ruby into the back end of the dungeon. The the path opens before you._

## MVP

### Goals

Taking into consideration the time allotted to reach MVP, **Ruby Dungeon**'s goals are divided into three manageable outcomes:

- _Back-end server (**Ruby on Rails**) and relational database (**PostgreSQL**)._
- _Front-end player traversing with **React Router** and state manipulation with **React**._
- _CSS styling_

### CRUD

  - _answering a challenge correctly adds an item to the player's table. (**CREATE**)_
  - _an inventory component. (**READ**)_
  - _player can change boolean "equipped" attribute of some items. (**UPDATE**)_
  - _using a consumable item in the inventory removes it from the database. (**DELETE**)_

### Libraries and Dependencies

|    Library    | Description                                                                       |
| :-----------: | :-------------------------------------------------------------------------------- |
|     React     | _Front-end and DOM manipulation._                                                     |
| React Router  | _Player navigation._ |
| Ruby On Rails | _Back-end server handling._                                      |
|   PostgreSQL   | _Database manipulation._                                      |
|     Axios     | _API requests._                                                                   |

### Client (Front End)

#### Wireframes

![desktop-landing](https://i.imgur.com/wkfpOqM.png)

![desktop-wireframe](https://i.imgur.com/BS8lHJK.png)

![inventory-detail](https://i.imgur.com/8m49Tja.png)

![mobile-wireframe](https://i.imgur.com/nMUN3mH.png)

#### Color Palette

![color-palette](https://i.imgur.com/1bkj4SZ.png)


#### Component Tree

![component-tree](https://i.imgur.com/4vzrOUF.png)

#### Component Hierarchy

```structure

src
|__ screens
     |_ Game.jsx
     |_ Login.jsx
|__ components/
      |_ AuthForm.jsx
      |_ Header.jsx
      |_ Inventory.jsx
      |_ ItemDetail.jsx
      |_ Lives.jsx
      |_ Map.jsx
      |_ Room.jsx
|__ services/
      |_APIconfig.js
|_ utils/
      |_RoomContent.js
      |_Challenges.js
      |_Battle.js

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _Simply, the title of the game._                                  |
|  Auth Form   | functional |   y   |   n   | _Login or registration of players._                               |
|   Inventory  | functional |   y   |   y   | _Displays contents of user's item DB._                           |
| ItemDetail   | functional |   y   |   y   | _Details for selected item and option to equip or use._          |
|    Lives     | functional |   y   |   n   | _Number of remaining lives._              |
|    Map       | functional |   y   |   y   | _Player's "location" on a simple visual map._              |
|    Room      | functional |   y   |   y   | _Displays the corresponding content for room, Route links and interaction buttons._              |
|    Footer      | functional |   n   |   n   | _Links to my GitHub etc._              |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create back-end     |    H     |     1 hrs      |     TBD       |    TBD    |
| User Auth           |    M     |     2 hrs      |       TBD     |    TBD     |
| Build login/register form   |    M      |     3 hrs      |     TBD     |    TBD     |
| React component architecture   |    L      |     1 hrs      |     TBD     |    TBD     |
| useEffect / API config  |    H      |     3 hrs      |     TBD     |    TBD     |
| Build components  |    H      |     6 hrs      |     TBD     |    TBD     |
| CRUD  |    H      |     3 hrs      |     TBD     |    TBD     |
| React Routing   |    H      |     3 hrs      |     TBD     |    TBD     |
| State Logic   |    H      |     3 hrs      |     TBD     |    TBD     |
| Write game content and challenges  |    M      |     3 hrs      |     TBD     |    TBD     |
| Styling  |    H      |     5 hrs      |     TBD     |    TBD     |
| Media queries  |    L      |     2 hrs      |     TBD     |    TBD     |
| TOTAL  |          |     35 hrs      |     TBD     |    TBD     |

<br>

### Server (Back End)

#### ERD Model

![erd-model](https://i.imgur.com/vClZhHg.png)
<br>

---

## Post-MVP

As the game is text-based, all graphic elements are Post-MVP.

In addition:
- Algorithm testing with rspec
- Timed challenges for the battle
- Sound effects
- Extra rooms
- New Game+

---

## Code Showcase

> Coming Soon

## Code Issues & Resolutions

> Coming Soon
