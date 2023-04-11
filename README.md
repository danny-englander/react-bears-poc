# Proof of concept for implementing react.js into existing an HTML file or within a Drupal node template.

As of March, 2023, CRA (Create React app), is no longer being supported and the main React website is now located at [https://react.dev/](https://react.dev/). The two recommended ways of using React are now:

## Methods

1. Add interactivity wherever you need it (a la Vue.js inline template method) [https://react.dev/learn/add-react-to-an-existing-project](https://react.dev/learn/add-react-to-an-existing-project)
2. Go full-stack with a framework [https://react.dev/learn/start-a-new-react-project](https://react.dev/learn/start-a-new-react-project)

This sample project uses the first method as only a part of the page would need decoupling. For example, in the index.html file, you see `<div id="drop-app-root"></div>` and the corresponding JS code for that is in `src/main.jsx`, similar how this used to be done with CRA.

## Drupal application

Likewise, one could picture adding the div root id to a Drupal node template, for example `node--benefits.html.twig` just like it is here in `index.html`. With regard to method 2 above, there would be a lot more overhead via the recommended frameworks, Next, Remix, or Gatsby. In the use case here, Drupal would handle the routing so there would be no need to have a fully decoupled framework though it could be possible perhaps to use Next and not have it do the routing.

As a proof of concept for Drupal picking up this application's JS file in a Drupal Library, I have added a custom Vite plugin that takes the randomly named build js file and does a copy and rename whenever a build is compiled. `copy-and-rename-plugin` in `vite.config.js`. Then in the node template, you could add the library.

```twig
{{ attach_library('my_theme/drop_app') }}
```

... and then in the Drupal theme's libraries file:

```yaml
drop_app:
  version: VERSION
  js:
    /my_theme/drop-app/dist/assets/drop-app.min.js: { minified: true }
```

## Redux Toolkit rather than vanilla Redux for consuming and outputting "sliced" API data

By using [Redux Toolkit](https://redux-toolkit.js.org/) instead of Vanilla Redux, it is generally considered easier to implement. Redux Toolkit is a higher-level abstraction and a set of utilities built on top of Redux. It aims to simplify the process of working with Redux by providing a more straightforward approach to managing state and reducing boilerplate code.

Imagine a custom Drupal module that outputs a huge amount of data via a contextual JSON API endpoint where the page design calls for several screens of the app, i.e. a multi-step form without a page reload, especially in cases where you will have a lot of conditional rendering based on form items selected in the earlier parts of the form screens.

## Get started with this project

- Install NVM
- `nvm use`
- `npm i`
- `npm run dev`

See `package.json` for other options such as build, etc.
