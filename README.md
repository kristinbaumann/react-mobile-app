react-app-mobile
=================

Prototype simulating native app-like behaviour, written in React.

![Screenshot react app mobile](/react-mobile-app.png)

Implemented behaviour:
* off-canvas menu, open and close by swipe motion: react-sidebar component (https://github.com/balloob/react-sidebar)
* swipeable views with tabs: react-swipeable-views component (https://github.com/oliviertassinari/react-swipeable-views)


## Setup

Based on create-react-app starter kit. You can find the most recent version of the guide for that [here](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md).

For the project to build, **these files must exist with exact filenames**:

* `index.html` is the page template;
* `favicon.ico` is the icon you see in the browser tab;
* `src/index.js` is the JavaScript entry point.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
