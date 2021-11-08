## Why did I build this project

* To experience how professional teams build their projects
* To create a good portfolio project by following the professional workflow
## How did I build this project
* Page was built based on Figma designs: [Screenshot of provided home page design](./src/images/readmeResource/homepage%20figma.png)
* I worked with tasks on ClickUp: [Homepage hero-section task](./src/images/readmeResource/Hero%20section%20task.png)
* Feature branches where created for each task
* I used pull request and code reviewing before merging branches to main: [Example Pull Request](https://github.com/profydev/reddit-timer-albiCoder/pull/3)
## How to navigate this project

* Getting data from API and dealing with them: [Subreddit posts tranformation](https://github.com/albiCoder/reddit-timer-albiCoder/blob/main/src/components/SearchForm.jsx#L284)
* Styled components responsive styles: [Mobile view of header](https://github.com/albiCoder/reddit-timer-albiCoder/blob/main/src/components/Header.jsx#L35)
* Integrations tests with testing library: [Testing links to search page](https://github.com/albiCoder/reddit-timer-albiCoder/blob/main/src/App.test.js#L34)
## Why I build the project this way

* I have not used a state manager like Redux because for our application useState hook is enough. Most of the data resides on `Search page`, it propogates through few components so it can not be categorised as a complex system whose state should be managed with a library as Redux.
* I used styled components instead of the _"evil"_ global css classes. With this library we can eliminate class name bugs, can easily define dynamic styles and export them through the app.

## If I had more time I would change the following

* I would review memoized components after reading this article [React Rendering by Alex Sidorenko](https://alexsidorenko.com/blog/react-render-cheat-sheet/)
* I would add some end-to-end tests with cypress

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
