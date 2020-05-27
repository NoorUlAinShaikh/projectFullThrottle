##### All rights reserved

# Engaged!

Access the site here: [Engaged!](https://projectfullthrottle.herokuapp.com/)

A straight-forward coding assignment by Full Throttle Labs to display user time activity on the selected day.

# Disclaimer

```
Mock API is served by json-server and the db is located within the folder structure itself.
If I were given more time I would've made use of fakerJS to populate the db and eliminated the use of momentJS for date and time calculations.
Also, I've made use of express as a scaling point. If in future this application is to be extended, the json-server, which is introduced as a middleware can be replcaed by an actual Database pretty easily.
```

```
Calendar have been kept open deliberately on selecting a date, so that you dont have to open the calendar again incase the selected date doesn't have any data. Hit 'ESC' to close it.
```

```
**Only optimized for Chrome.**
```

# Features

- React router v5 for client side navigation.
- Redux used for state management.
- Clicking on a user will open up a Modal. Clicking anywhere in the background will close it.
- Select a date in the Calendar and it'll display the user activity details in the table besides it.
- Use the Calendar icon to toggle it or hit 'Esc' on the Modal to close the calendar.
- Stacked table in the Modal for smaller screen devices.
- Support for multiple screen sizes. (Resize the window or Open in a mobile device).

# Data

- Egon Spengler: Feb 1 2020, Mar 1 2020, Mar 16 2020
- Kevin Spengler: Feb 10 2020, May 28 2020, Jan 16 2020
- Stephan Salvatore: Feb 1 2020, Mar 1 2020, Mar 26 2020
- Damon Salvatore: April 21 2020, Jan 1 2020, Dec 16 2020, Sept 16 2020
- Stephan Hawking: Feb 19 2020, Mar 12 2020, Mar 13 2020
- Glinda Southgood: Feb 1 2020, Mar 1 2020, Mar 16 2020, May 16 2020

# Road to 404

- Anything other than '/','/users' or '/users/activity' will result in a 404!
- 404 Page is under development, therefore all 404's will be directed to the Landing page

# Tech Stack

- FrontEnd: ReactJS
- BackEnd: ExpressJS
- API: JSON-Server
- CSS: SemanticUI and a wee bit of old school handwritten CSS
- Hosted: Heroku
