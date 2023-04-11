# Proof of concept for implementing react.js into existing an HTML file or within a Drupal node template.

As of March, 2023, CRA (Create React app), is no longer being supported and the main React website is now located at [https://react.dev/](https://react.dev/). The two recommended ways of using React are now:

1. Add interactivity wherever you need it (a la Vue.js inline template method) [https://react.dev/learn/add-react-to-an-existing-project](https://react.dev/learn/add-react-to-an-existing-project)
2. Go full-stack with a framework [https://react.dev/learn/start-a-new-react-project](https://react.dev/learn/start-a-new-react-project)

This sample project uses the first method as only a part of the page would need decoupling. For example, in the index.html file, you see `<div id="drop-app-root"></div>` and the corresponding JS code for that is in `src/main.jsx`, similar how this used to be done with CRA.

Likewise, one could picture adding the div root id to a Drupal node template, for example `node--benefits.html.twig` just like it is here in `index.html`. With regard to method 2 above, there would be a lot more overhead via the recommended frameworks, Next, Remix, or Gatsby. In the use case here, Drupal would handle the routing so there would be no need to have a fully decoupled framework though it could be possible perhaps to use Next and not have it do the routing.

As a proof of concept for Drupal picking up this application's JS file in a Drupal Library, I have added a custom Vite plugin that takes the build js file and does a rename whenever a build is compiled. `copy-and-rename-plugin` in `vite.config.js`
