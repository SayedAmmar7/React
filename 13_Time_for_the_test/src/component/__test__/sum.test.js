import { sum } from "../sum";
test("check sum of 2 positive number", () => {
  expect(sum(2, 5)).toBe(7);
});

/* 
* install react testing library -> npm install --save-dev @testing-library/react
* install jest -> npm i -D jest
* configure jest ->  npx jest --init
* 
*  √ Would you like to use Typescript for the configuration file? ... no
*  √ Choose the test environment that will be used for testing » jsdom (browser-like)
*  √ Do you want Jest to add coverage reports? ... yes
*  √ Which provider should be used to instrument code for coverage? » babel
*  √ Automatically clear mock calls, instances, contexts and results before every test? ... yes
*
*
* in package.json write => 
* "scripts": {
    "test": "jest"
  },
* in terminal -> npm run test
* this will show some error 
* so , install -> npm i -D jest-environment-jsdom 
* jest searched ->  testMatch: ** /__tests__/** /*.[jt]s?(x), ** /?(*.)+(spec|test).[tj]s?(x) - 0 matches 
* but did not found anything 

* so create a folder with name "__test__"
* In __test__ folder for  example to test a function name sum, create a file name sum.test.js

* In sum.js file => export const sum = (a, b) => a + b;
* In sum.test.js =>   import { sum } from "../sum";
*                       ("check sum of 2 positive number", () => {
*                           expect(sum(2, 5)). toBe(5);
*                                       });


* now in terminal write npm run test -> It shows some syntax error So,
*  configure babel => npm install --save-dev babel-jest @babel/core @babel/preset-env
*  
* Configure Babel to target your current version of Node by creating a "babel.config.js" file in the root of your project:
* 
* and write =>   module.exports = {
*              presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
*                      };
*
*  OR create a .babelec file 
* and write => 
* {
*    "presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]
*  }
* After this in terminal => npm run test
*

* but when you try to test JSX file it will show 
*Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax
* So in .babelrc file write this ->
*   {
*    "presets": [["@babel/preset-env", {"targets": {"node": "current"}}],
*        ["@babel/preset-react",{"runtime": "automobile"}]
*     ]
*        }
*
* then install => npm i -D @babel/preset-react


* give data-testid= "Logo"
* jest recognizes by data-testid
*/
