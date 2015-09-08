# Asteroids

[Live][link]

[link]: https://satnam14.github.io/asteroids

![Screenshot](http://res.cloudinary.com/satnam14/image/upload/v1441733890/aster_av5yfp.png)

## Introduction

The player controls a spaceship in an asteroid field which is periodically traversed by flying asteroids. The objective of the game is to shoot and destroy asteroids while not colliding with them. The game becomes harder as the number of asteroids increases. Each level starts with a few large asteroids drifting in various directions on the screen. Objects wrap around screen edges – for instance, an asteroid that drifts off the top edge of the screen reappears at the bottom and continues moving in the same direction.

## Gameplay

 - You can move the ship using the keys W, A, S and D.
 - Press SPACE to fire
 - Once the ship begins moving in a direction, it will continue in that direction
 - You get 100 health points in the beginning, try getting a high score before your health becomes zero

## To Do

- [x] Basic skeleton canvas that renders at 32 FPS
- [x] Utility functions for -
  - [x] Generating a vector with a specific magnitude and random direction
  - [x] Getting the normal of a vector
  - [x] Scaling the length of a vector by a specific amount
  - [x] Finding distance between two points
  - [x] Finding the inverse tangent of the direction of a vector
- [x] The game adds and displays the Asteroids, ship and the bullets
- [x] Bind key handlers on W, A, S, D and SPACE so move ship and fire bullets
- [x] Implement collision mechanics
- [x] Add images for background, asteroids, ship
- [ ] Implement client side game restart
- [ ] Allow user to control ship using arrow keys
- [x] Output and keep track of score and high scores
- [ ] Using Heap, allow users to add record scores
- [ ] Implement explosion effects
- [ ] Show GIFs for asteroids instead of steady JPGs
- [ ] Implement physically correct collisions, with debris
