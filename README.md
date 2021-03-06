## Modern JavaScript Tooling with React

Course > [egghead](https://egghead.io/courses/modern-javascript-tooling-with-react)

### Lessons:

1.  git initialize an npm project and git repository
2.  webpack install webpack and create a default bundle
    - "node_modules/.bin" has all the programs
    - it's possible to run webpack with the command: "node_modules/.bin/webpack"
3.  git add a project and push changes to github with git
4.  webpack explicitly define an entry point with a webpack configuration file
5.  webpack control the output of webpack with the mode setting
    - by default webpack will build in "production" mode
    - use "mode" option to toggle between "production" and "development" mode build
    - it's possible to send options to npm scripts, eg: "npm run build -- --mode production"
6.  babel transform modern javascript features with babel
    - use "$(npm bin)" istead of "node_modules", eg: $(npm bin)/babel ./src/greet.js
    - "\$(npm bin)/babel ./src/greet.js --presets=@babel/preset-env
7.  babel configure webpack to load javascript files through babel with babel loader
8.  react configure babel for react with preset react
9.  webpack create separate webpack configs for development and production with webpack merge
10. webpack update your bundle with each file save with webpack watch mode
11. webpack inject a javascript bundle into html with the htmlwebpackplugin
12. webpack serve a webpack bundle while developing with webpack dev server
    - webpack watch mode & browser reload
13. chrome devtools generate source maps through webpack for a better debugging experience with source map
14. webpack automatically import css in javascript with webpack using style loader and css loader
15. babel support proposed javascript features with babel plugins
16. react hot reload a react app in development with react hot loader
17. npm avoid duplicate commands by calling one npm script from another
18. webpack analyze a production javascript bundle with webpack bundle analyzer
19. webpack externalize dependencies to be loaded via cdn with webpack
20. babel target specific browsers with babel preset env and the babel pollyfill
21. react asynchronously load webpack bundles through code splitting and react suspense
22. jest run a simple test with jest in a react app
23. jest set up tests that render a react component with jest and babel
24. jest set up testing globals in an application with jest
25. configure prettier to automatically format code
    - use command panel and type "format" to use the Prettier commands
    - enable "formatOnSave" in settings to format automatically on save
26. avoid common javascript errors with eslint
27. aria check for accessibility issues in jsx with the jsx a11y eslint plugin
28. git run linting tests and prettier in git hooks with husky
29. react avoid deprecated react apis with react strictmode
30. react create an error boundary for a react app
31. aria check for accessibility issues in the browser with react axe
32. react define prop types for a react class component
33. git create a new project by cloning the boilerplate project
    - use "git clone --depth=1" to get only the last commit
