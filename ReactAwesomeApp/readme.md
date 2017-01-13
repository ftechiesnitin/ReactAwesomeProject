1. Install and get started on react native visit
  https://facebook.github.io/react-native/docs/getting-started.html#content

2. Install the react native cli
  `npm install react-native-cli --save`

3. To start a project or setup an app folder run the react-cli command
  `react-native init ReactAwesomeProject`

4. You will see a folder call 'ReactAwesomeProject' with above folder structure.

5. If you have XCODE installed, then you can run `react-native run-ios` to emulate in ios simulator.

6. The best thing about react is you can reload the app in the simulator on the go (as you develop.).

7. Now we need to embed redux into react redux, we need to add the node library
  `npm i --save react-redux --save`
  `npm i --save redux --save`

8. Redux logger to keep track of the realtime logs.
  `npm i --save redux-logger --save`

9. Redux thunk.
  `npm i --save redux-thunk --save`

10. Create a app folder in the root directory of app. This folder will contain all the logic and the structure of the app.
    This folder contains following four folders,

    a. actions
    b. components
    c. containers
    d. lib
    e. reducers
