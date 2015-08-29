[Asteroids!][description]

**[Live Demo][live-demo]**

[live-demo]:

# Asteroids

[Live Demo][<link>]

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

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
- [x] Add images for background, asteroids, ship and explosions
- [ ] Output and keep track of score and high scores

## Implementation Timeline

### Phase 1: User Authentication, Profiles (~2 days)
Implementation of user authentication and personal profiles. By the end of this
phase, a user will be able to log in and customize basic information (location,
profile picture, cover picture, schools and workplace) their profiles. I will
deploy to Heroku as soon as this is achieved.

[Details][phase-one]

### Phase 2: Posts, mentions, likes and comments (~2.5 days)
The primary focus of this phase will be posts. User will be able to CRUD posts.
By the end of this phase, users will be able to mention other users, like and
comment on posts.

[Details][phase-two]

### Phase 3: Friend requests (~2 days)
By the end of this phase, users will be able to send/receive friend requests
to/from other users and will be able to accept or deny them.

[Details][phase-three]

### Phase 4: Seed data (~0.5 day)
To be able to demo a efficient search feature I will need a lot of seed data.
The target of this phase will be to add ~1,000 fake users using faker. Seed data
will have profile pictures (celebrity or anime pictures will do). Seed data
for friendships and posts will also be required to demo the search feature in an
appealing way.

[Details][phase-four]

### Phase 5: Search (~1 day)
By the end of this phase a user will be able to search for other user by name,
location, school or workplace. The search results will be ranked by friends,
mutual friends, location and age.
