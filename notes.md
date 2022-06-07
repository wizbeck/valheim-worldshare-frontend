add an input no button
filter world posts by what is typed in
every key up filter posts



[x] blog post on filter and other similar search methods

[x] finish implementing search feature and commit to git hub if you want.


User story:
Users should be able to:
1. Log in securely (API token authentication - JWT?)
 - every internal feature implemented should have a guard check to verify the user is logged in and auth'd before using, if not they should be blocked to the login/signup screen
 ~> create a login/signup form to switch dynamically
  - implement captcha to verify they are human before signing up?, or send a confirmation link?
  
2. Users can post content showing off their worlds and progress to other users,

3. Users should be able to edit and update their content

3.5. Users can interact with other users' content
  - likes
  - comments (DONE)
    - add 'edited' flag when a user has edited their comment or content

4. Connect to external APIs to add additional content for the users to quickly naviagte to:
  - Twitter API sharing valheim creators' tweets about updates to the game
  - Connect Steam API to share latest announcements/patch notes etc.

4.5 List other resources for users to follow other valheim content:
  - Fandom wiki for encyclopedic info on the game
  - look up the generator website I used to see what my entire world looks like

5. Users should be immersed in this site of all things valheim.
  - styling should be valheim themed
    - use viking theme, viking colors, viking-esque font
