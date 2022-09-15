# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This app provides the user with the ability to post tweets to a Tweet feed without reloading the page. This app was built with Javascript, jQuery, AJAX on the front-end, and with Express and Node on the back-end. The contents of the app were built using HTML and CSS styling.

## Features

- Start by clicking the down arrows under "Write a new tweet" to show/hide the tweet form.
- Then write a tweet in the tweet box and clicking on "Tweet". This will "Submit" the tweet to the back-end via AJAX.
- A successful POST request will then GET the tweet object back from the back-end and update the feed without having to refresh the page.
- Error messages will be displayed if an empty tweet or a tweet longer than 140 characters is being submitted.
- This app uses responsive design and will adjust depending on the display size.
- If you scroll down the list of tweets an up arrow button will appear. Just clik this to return back to the top and continue tweeting!


## Screenshots

### Screenshot showing the main page
!["Screenshot showing the main page"](https://github.com/rndedg/tweeter/blob/master/docs/tweet-main.png?raw=true)
### Screenshot showing the mobile layout
!["Screenshot showing the mobile layout"](https://github.com/rndedg/tweeter/blob/master/docs/tweet-mobile-view.png?raw=true)
### Screenshot showing the error message
!["Screenshot showing the error message"](https://github.com/rndedg/tweeter/blob/master/docs/tweet-error.png?raw=true)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body Parser
- Chance
- MD5
- Timeago