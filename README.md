## Modern JavaScript Tooling with React

Course > [egghead](https://egghead.io/courses/modern-javascript-tooling-with-react)

### Lessons:

1. git initialize an npm project and git repository
2. webpack install webpack and create a default bundle
    - "node_modules/.bin" has all the programs
    - It's possible to run webpack with the command: "node_modules/.bin/webpack"
3. git add a project and push changes to github with git
4. webpack explicitly define an entry point with a webpack configuration file
5. webpack control the output of webpack with the mode setting
    - By default webpack will build in "production" mode
    - Use "mode" option to toggle between "production" and "development" mode build
    - It's possible to send options to npm scripts, eg: "npm run build -- --mode production"
6. babel transform modern javascript features with babel
    - Use "$(npm bin)" istead of "node_modules", eg: $(npm bin)/babel ./src/greet.js
    - "$(npm bin)/babel ./src/greet.js --presets=@babel/preset-env